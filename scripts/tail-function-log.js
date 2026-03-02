// Tail OCI logs using OCI_EXECUTION_LOG_ID and OCI_LOG_GROUP_ID env vars.
// Prints only the log lines (no metadata), similar to `tail -f`.
// Set OCI_TAIL_DEBUG=1 for debug output (IDs, query, result counts, errors).

const fs = require('fs');
const path = require('path');
const logging = require('oci-logging');
const loggingsearch = require('oci-loggingsearch');
const common = require('oci-common');

const DEBUG = process.env.OCI_TAIL_DEBUG === '1' || process.env.OCI_TAIL_DEBUG === 'true';
function debug(...args) {
  if (DEBUG) {
    console.error('[oci-tail-debug]', ...args);
  }
}

// Defaults: in-code (injected by npx ocdk write-log-config when writing tail-function-logs.js) or env vars. Placeholders become empty.
let DEFAULT_EXECUTION_LOG_ID = '__EXECUTION_LOG_ID__';
let DEFAULT_LOG_GROUP_ID = '__LOG_GROUP_ID__';
if (DEBUG) {
  debug('in-code defaults: execution_log=', DEFAULT_EXECUTION_LOG_ID === '__EXECUTION_LOG_ID__' ? 'placeholder' : 'set', 'log_group=', DEFAULT_LOG_GROUP_ID === '__LOG_GROUP_ID__' ? 'placeholder' : 'set');
}
if (DEFAULT_EXECUTION_LOG_ID === '__EXECUTION_LOG_ID__') DEFAULT_EXECUTION_LOG_ID = '';
if (DEFAULT_LOG_GROUP_ID === '__LOG_GROUP_ID__') DEFAULT_LOG_GROUP_ID = '';
if (DEBUG) {
  debug('final execution_log:', DEFAULT_EXECUTION_LOG_ID ? `${DEFAULT_EXECUTION_LOG_ID.slice(0, 30)}...` : '(empty)', 'log_group:', DEFAULT_LOG_GROUP_ID ? `${DEFAULT_LOG_GROUP_ID.slice(0, 30)}...` : '(empty)');
}

/**
 * Pull log entries for a given log OCID, optionally scoped by log group ID.
 * This is a minimal version of the previous helper, inlined here so we only
 * need this single script for tailing.
 */
async function pullLogsWithLogAndGroupId({
  logOcid,
  tail = 10,
  logGroupId: logGroupIdFromQuery = null,
  loggingManagementClient,
  logSearchClient
}) {
  const resolvedLogOcid =
    logOcid ||
    process.env.OCI_EXECUTION_LOG_ID ||
    process.env.LOG_OCID ||
    DEFAULT_EXECUTION_LOG_ID;

  const resolvedLogGroupIdFromEnv =
    logGroupIdFromQuery != null && logGroupIdFromQuery !== ''
      ? logGroupIdFromQuery
      : (
          process.env.OCI_LOG_GROUP_ID ||
          process.env.LOG_GROUP_OCID ||
          process.env.LOG_GROUP_ID ||
          DEFAULT_LOG_GROUP_ID ||
          null
        );

  if (!resolvedLogOcid) {
    throw new Error('logOcid is required (either parameter or OCI_EXECUTION_LOG_ID / LOG_OCID env var)');
  }
  if (!loggingManagementClient || !logSearchClient) {
    throw new Error('loggingManagementClient and logSearchClient are required');
  }

  let log = null;
  let logGroupIdToUse = resolvedLogGroupIdFromEnv || null;
  let compartmentId = null;

  if (logGroupIdToUse) {
    try {
      const getLogRequest = {
        logGroupId: logGroupIdToUse,
        logId: resolvedLogOcid
      };
      debug('getLog request:', { logGroupId: logGroupIdToUse.slice(0, 30) + '...', logId: resolvedLogOcid.slice(0, 30) + '...' });
      const logResponse = await loggingManagementClient.getLog(getLogRequest);
      log = logResponse.log;
      if (log) {
        compartmentId = log.compartmentId || null;
        if (log.logGroupId) {
          logGroupIdToUse = log.logGroupId;
        }
        debug('getLog OK; compartmentId:', compartmentId ? compartmentId.slice(0, 25) + '...' : null);
      } else {
        debug('getLog returned no log object');
      }
    } catch (getLogError) {
      debug('getLog error:', getLogError.message || getLogError);
      console.error('Error in getLog call (tail_logs):', getLogError.message || getLogError);
    }
  }

  if (!logGroupIdToUse && log && log.logGroupId) {
    logGroupIdToUse = log.logGroupId;
  }

  if (!logGroupIdToUse) {
    logGroupIdToUse = null;
  }

  const timeStart = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const timeEnd = new Date();

  let searchQuery = '';

  if (compartmentId && logGroupIdToUse && resolvedLogOcid) {
    searchQuery = `search "${compartmentId}/${logGroupIdToUse}/${resolvedLogOcid}" | sort by datetime desc`;
  } else if (compartmentId && logGroupIdToUse) {
    searchQuery = `search "${compartmentId}/${logGroupIdToUse}" | sort by datetime desc`;
  } else if (logGroupIdToUse) {
    searchQuery = `search "${logGroupIdToUse}" | sort by datetime desc`;
  } else if (compartmentId && resolvedLogOcid) {
    searchQuery = `search "${compartmentId}" | where oracle.logid = "${resolvedLogOcid}" | sort by datetime desc`;
  } else if (resolvedLogOcid) {
    searchQuery = `search * | where oracle.logid = "${resolvedLogOcid}" | sort by datetime desc`;
  } else {
    throw new Error('Missing required information: need log OCID at minimum');
  }

  const searchLogsDetails = {
    timeStart,
    timeEnd,
    searchQuery,
    isReturnFieldInfo: false
  };

  const searchLogsRequest = {
    searchLogsDetails,
    limit: tail
  };

  debug('searchLogs query:', searchQuery);
  debug('searchLogs timeStart:', timeStart.toISOString(), 'timeEnd:', timeEnd.toISOString(), 'limit:', tail);
  const searchResponse = await logSearchClient.searchLogs(searchLogsRequest);
  const logEntries = searchResponse.searchResponse?.results || [];
  debug('searchLogs raw result count:', logEntries.length);

  let entriesToProcess = logEntries;
  if (!searchQuery.includes(`/${resolvedLogOcid}"`)) {
    entriesToProcess = logEntries.filter(entry => {
      const entryLogId =
        entry.data?.logContent?.oracle?.logid ||
        entry.logContent?.oracle?.logid ||
        entry.oracle?.logid;
      return entryLogId === resolvedLogOcid;
    });
    debug('after filter by logid: entriesToProcess.length =', entriesToProcess.length);
  }

  // Map each entry to a { id?, timestamp, message } for dedupe and display.
  const lines = entriesToProcess.map(entry => {
    const logData = entry.data?.logContent || entry.logContent || entry;
    const id = logData && logData.id ? String(logData.id).trim() : null;

    // Try to extract a timestamp from common locations in the OCI response.
    let ts =
      entry.time ||
      entry.datetime ||
      entry.data?.datetime ||
      entry.data?.time ||
      logData.time ||
      logData.datetime;

    if (ts instanceof Date) {
      ts = ts.toISOString();
    } else if (typeof ts === 'number') {
      ts = new Date(ts).toISOString();
    } else if (!ts) {
      ts = new Date().toISOString();
    }

    // Extract a human-readable message/content string.
    let message;
    if (logData.data?.message) message = logData.data.message;
    else if (logData.data?.data?.message) message = logData.data.data.message;
    else if (logData.message) message = logData.message;
    else if (typeof logData.data === 'string') message = logData.data;
    else if (entry.data?.message) message = entry.data.message;
    else if (entry.message) message = entry.message;
    else if (entry.content) message = entry.content;
    else message = JSON.stringify(logData, null, 2);

    return { id, timestamp: String(ts), message: String(message).trim() };
  });

  return {
    lines,
    entries: entriesToProcess,
    searchQuery,
    compartmentId,
    logGroupId: logGroupIdToUse
  };
}

async function main() {
  if (DEBUG) {
    debug('Debug mode on (OCI_TAIL_DEBUG=1). Loading config and resolving log IDs...');
  }
  const configurationFilePath =
    process.env.OCI_CONFIG_FILE || '~/.oci/config';
  const profile =
    process.env.OCI_CLI_PROFILE || process.env.OCI_CONFIG_PROFILE || 'DEFAULT';

  const provider = new common.ConfigFileAuthenticationDetailsProvider(
    configurationFilePath,
    profile
  );

  const loggingManagementClient = new logging.LoggingManagementClient({
    authenticationDetailsProvider: provider
  });

  const logSearchClient = new loggingsearch.LogSearchClient({
    authenticationDetailsProvider: provider
  });

  const tail =
    parseInt(process.env.OCI_LOG_TAIL || process.argv[2] || '20', 10) || 20;
  const intervalMs =
    parseInt(process.env.OCI_LOG_INTERVAL_MS || '5000', 10) || 5000;

  const effectiveExecutionLogId =
    process.env.OCI_EXECUTION_LOG_ID ||
    process.env.LOG_OCID ||
    DEFAULT_EXECUTION_LOG_ID;
  const effectiveLogGroupId =
    process.env.OCI_LOG_GROUP_ID ||
    process.env.LOG_GROUP_OCID ||
    process.env.LOG_GROUP_ID ||
    DEFAULT_LOG_GROUP_ID;

  if (!effectiveExecutionLogId) {
    console.error(
      'Missing log OCID. Set OCI_EXECUTION_LOG_ID (or LOG_OCID), or configure a default for this project.'
    );
    process.exit(1);
  }
  if (!effectiveLogGroupId) {
    console.error(
      'Missing log group OCID. Set OCI_LOG_GROUP_ID (or LOG_GROUP_OCID / LOG_GROUP_ID), or run "npx ocdk write-log-config" after deploy to inject IDs into tail-function-logs.js.'
    );
    process.exit(1);
  }

  debug('effectiveExecutionLogId:', effectiveExecutionLogId.slice(0, 40) + '...');
  debug('effectiveLogGroupId:', effectiveLogGroupId.slice(0, 40) + '...');
  debug('tail:', tail, 'intervalMs:', intervalMs);
  debug('auth: config', process.env.OCI_CONFIG_FILE || '~/.oci/config', 'profile:', process.env.OCI_CLI_PROFILE || process.env.OCI_CONFIG_PROFILE || 'DEFAULT');

  // Dedupe by OCI log entry id when present, else by timestamp|message.
  const seenKeys = new Set();
  let pollCount = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    pollCount += 1;
    try {
      const result = await pullLogsWithLogAndGroupId({
        tail,
        loggingManagementClient,
        logSearchClient
      });

      const lines = result.lines || [];
      if (DEBUG && (pollCount === 1 || lines.length > 0)) {
        debug('poll #' + pollCount, 'lines:', lines.length, 'seenKeys.size:', seenKeys.size);
      }

      // Results are newest-first from the search query; print in chronological order.
      for (let i = lines.length - 1; i >= 0; i -= 1) {
        const { id, timestamp, message } = lines[i];
        const key = id && id.length > 0 ? id : `${timestamp}|${message}`;
        if (seenKeys.has(key)) continue;
        seenKeys.add(key);
        console.log(`${timestamp} ${message}`);
      }
    } catch (err) {
      debug('poll #' + pollCount, 'error:', err.message || err);
      console.error('Error while tailing logs:', err.message || err);
    }

    await new Promise(resolve => setTimeout(resolve, intervalMs));
  }
}

if (require.main === module) {
  main().catch(err => {
    console.error('Fatal error in tail_logs:', err);
    process.exit(1);
  });
}

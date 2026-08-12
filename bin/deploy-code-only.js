#!/usr/bin/env node
/**
 * Deploy an OCI Functions Code-only archive with OCI CLI preview.
 *
 * This is deliberately separate from the CDKTF image deploy flow: OCI builds
 * the execution image from the supplied archive, so Docker and OCIR are not
 * involved. A Functions Application must already exist.
 */

const { spawnSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const projectDir = path.resolve(process.env.OCI_CODE_ONLY_SOURCE_DIR || process.cwd());
const cliEnvPath = (process.env.OCI_CLI_PATH || '').trim();
const ociCliPath = cliEnvPath
  ? (cliEnvPath.includes(path.sep) ? path.resolve(cliEnvPath) : cliEnvPath)
  : 'oci';

function fail(message) {
  console.error(`Code-only deploy failed: ${message}`);
  process.exit(1);
}

function runOci(args, options = {}) {
  const result = spawnSync(ociCliPath, args, {
    cwd: options.cwd || projectDir,
    encoding: options.encoding || 'utf8',
    stdio: options.stdio || 'pipe',
    shell: false,
  });
  if (result.error) fail(`could not execute OCI CLI at ${ociCliPath}: ${result.error.message}`);
  if (result.status !== 0) {
    const stderr = (result.stderr || '').trim();
    fail(`OCI CLI command failed (exit ${result.status}): ${stderr || args.join(' ')}`);
  }
  return result.stdout || '';
}

function yamlValue(contents, key) {
  const match = contents.match(new RegExp(`^\\s*${key}\\s*:\\s*(?:["']([^"']*)["']|([^#\\r\\n]*))`, 'm'));
  return (match?.[1] || match?.[2] || '').trim();
}

function integerValue(value, name, fallback) {
  const parsed = Number.parseInt(value || String(fallback), 10);
  if (!Number.isInteger(parsed) || parsed <= 0) fail(`${name} must be a positive integer.`);
  return String(parsed);
}

function runtimeResourceName(runtime) {
  return runtime.name || runtime['runtime-name'] || runtime.runtimeName || runtime['runtimeName'] || '';
}

function listItems(result) {
  if (Array.isArray(result?.data)) return result.data;
  if (Array.isArray(result?.data?.items)) return result.data.items;
  if (Array.isArray(result?.items)) return result.items;
  return [];
}

function pythonRuntimeSortKey(runtimeName) {
  const match = runtimeName.toLowerCase().match(/^python(\d+)/);
  return match ? Number.parseInt(match[1], 10) : -1;
}

function resolvePythonRuntime(runtime) {
  // OCI's preview runtime names omit separators from the Python version:
  // func.yaml's "python3.12" therefore maps to the runtime-list prefix
  // "python312". A plain "python" selects the newest available version.
  const normalizedRuntime = runtime.toLowerCase().replace(/[^a-z0-9]/g, '');
  const namePrefix = normalizedRuntime === 'python' ? 'python' : normalizedRuntime;
  const result = jsonOci(['fn', 'runtime', 'list', '--all', '--name-starts-with', namePrefix]);
  const candidates = listItems(result)
    .map(runtimeResourceName)
    .filter((name) => name.toLowerCase().startsWith(namePrefix));
  if (!candidates.length) {
    fail(`no available code-only runtime matches ${runtime}. Set OCI_CODE_ONLY_RUNTIME_NAME to a runtime returned by "oci fn runtime list --all".`);
  }
  candidates.sort((left, right) => {
    const versionDifference = pythonRuntimeSortKey(right) - pythonRuntimeSortKey(left);
    return versionDifference || right.localeCompare(left);
  });
  const selected = candidates[0];
  console.log(`Selected OCI code-only runtime ${selected} for func.yaml runtime ${runtime}. Set OCI_CODE_ONLY_RUNTIME_NAME to pin a different runtime.`);
  return selected;
}

function readFunctionMetadata() {
  const funcYamlPath = path.join(projectDir, 'func.yaml');
  const yaml = fs.existsSync(funcYamlPath) ? fs.readFileSync(funcYamlPath, 'utf8') : '';
  const functionName = (process.env.OCI_FUNCTION_NAME || yamlValue(yaml, 'name')).trim();
  const appName = (process.env.OCI_FUNCTION_APP_NAME || functionName).trim();
  const configuredRuntime = yamlValue(yaml, 'runtime');
  const runtimeName = (process.env.OCI_CODE_ONLY_RUNTIME_NAME || '').trim()
    || (configuredRuntime.toLowerCase().startsWith('python') ? resolvePythonRuntime(configuredRuntime) : '');
  const configuredHandler = (process.env.OCI_FUNCTION_HANDLER || yamlValue(yaml, 'cmd') || yamlValue(yaml, 'entrypoint')).trim();
  // The managed Node runtime already invokes `node`; its handler is the script
  // path, whereas a conventional func.yaml entrypoint is `node func.js`.
  const handler = runtimeName.toLowerCase().startsWith('node')
    ? configuredHandler.replace(/^node\s+/, '')
    : configuredHandler;
  const memory = integerValue(process.env.OCI_FUNCTION_MEMORY_MB || yamlValue(yaml, 'memory'), 'OCI_FUNCTION_MEMORY_MB', 256);
  const timeout = integerValue(process.env.OCI_FUNCTION_TIMEOUT_SECONDS || yamlValue(yaml, 'timeout'), 'OCI_FUNCTION_TIMEOUT_SECONDS', 30);

  if (!functionName) fail('set OCI_FUNCTION_NAME or add name: to func.yaml.');
  if (!appName) fail('set OCI_FUNCTION_APP_NAME.');
  if (!runtimeName) fail('set OCI_CODE_ONLY_RUNTIME_NAME (for example python312.ol9). Automatic runtime resolution currently supports Python functions with runtime: python in func.yaml.');
  if (!handler) fail('set OCI_FUNCTION_HANDLER or add cmd: to func.yaml.');

  return { functionName, appName, handler, runtimeName, memory, timeout };
}

function codeOnlyArchiveFileName(functionName) {
  const safeName = functionName.replace(/[^A-Za-z0-9._-]/g, '-');
  return `${safeName || 'function'}.zip`;
}

function preparePackageManifest(archiveRoot) {
  const manifestPath = path.join(archiveRoot, 'package.json');
  if (!fs.existsSync(manifestPath)) return;
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    for (const section of ['dependencies', 'devDependencies', 'optionalDependencies']) {
      if (!manifest[section]) continue;
      delete manifest[section]['@mikarinneoracle/oci-cdk-code-only-preview'];
      delete manifest[section]['@mikarinneoracle/oci-cdk'];
      if (Object.keys(manifest[section]).length === 0) delete manifest[section];
    }
    fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  } catch {
    fail('could not read package.json while preparing the code-only archive.');
  }
}

function listJavaJarCandidates() {
  return [projectDir, path.join(projectDir, 'target'), path.join(projectDir, 'build', 'libs')]
    .flatMap((directory) => {
      if (!fs.existsSync(directory)) return [];
      return fs.readdirSync(directory)
        .filter((name) => name.endsWith('.jar') && !name.endsWith('-sources.jar') && !name.endsWith('-javadoc.jar') && !name.endsWith('-plain.jar') && !name.startsWith('original-'))
        .map((name) => path.join(directory, name));
    });
}

function buildJavaProject() {
  let command;
  let args;
  if (fs.existsSync(path.join(projectDir, 'pom.xml'))) {
    command = fs.existsSync(path.join(projectDir, 'mvnw')) ? './mvnw' : 'mvn';
    args = ['-q', '-DskipTests', 'package'];
  } else if (fs.existsSync(path.join(projectDir, 'build.gradle')) || fs.existsSync(path.join(projectDir, 'build.gradle.kts'))) {
    command = fs.existsSync(path.join(projectDir, 'gradlew')) ? './gradlew' : 'gradle';
    args = ['build', '-x', 'test'];
  } else {
    return;
  }
  console.log(`Building Java function with ${command} ${args.join(' ')}...`);
  const result = spawnSync(command, args, { cwd: projectDir, encoding: 'utf8', shell: false });
  if (result.error || result.status !== 0) {
    fail(`Java build failed: ${result.stderr?.trim() || result.stdout?.trim() || result.error?.message || 'unknown error'}`);
  }
}

function resolveJavaJar() {
  const configuredPath = (process.env.OCI_CODE_ONLY_JAR_PATH || process.env.OCI_FUNCTION_JAR_PATH || '').trim();
  if (configuredPath) {
    const jarPath = path.resolve(projectDir, configuredPath);
    if (!fs.existsSync(jarPath) || !fs.statSync(jarPath).isFile() || !jarPath.endsWith('.jar')) {
      fail(`OCI_FUNCTION_JAR_PATH must point to an existing .jar file: ${jarPath}`);
    }
    return jarPath;
  }
  let candidates = listJavaJarCandidates();
  if (!candidates.length) {
    buildJavaProject();
    candidates = listJavaJarCandidates();
  }
  const uniqueCandidates = [...new Set(candidates)];
  if (uniqueCandidates.length === 1) {
    return uniqueCandidates[0];
  }
  const found = uniqueCandidates.length ? ` Found: ${uniqueCandidates.join(', ')}` : '';
  const guidance = ' Run `mvn -DskipTests package` (or `gradle build -x test`) to produce the function JAR, then set OCI_FUNCTION_JAR_PATH (for example target/my-function.jar).';
  fail(`Java code-only deploy requires exactly one JAR.${guidance}${found}`);
}

function createArchive(functionName, runtimeName) {
  if (!fs.existsSync(projectDir) || !fs.statSync(projectDir).isDirectory()) {
    fail(`source directory does not exist: ${projectDir}`);
  }
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ocdk-code-only-'));
  const archiveFileName = codeOnlyArchiveFileName(functionName);
  const archivePath = path.join(projectDir, archiveFileName);
  const isJavaRuntime = runtimeName.toLowerCase().startsWith('java');
  const isNodeRuntime = runtimeName.toLowerCase().startsWith('node');
  if (isJavaRuntime) {
    const jarPath = resolveJavaJar();
    const jarName = path.basename(jarPath);
    fs.copyFileSync(jarPath, path.join(tempDir, jarName));
    fs.rmSync(archivePath, { force: true });
    const zip = spawnSync('zip', ['-q', '-r', archivePath, jarName], { cwd: tempDir, encoding: 'utf8', shell: false });
    if (zip.error || zip.status !== 0) {
      fs.rmSync(tempDir, { recursive: true, force: true });
      fs.rmSync(archivePath, { force: true });
      fail(`could not create Java archive with zip: ${zip.stderr?.trim() || zip.error?.message || 'unknown error'}`);
    }
    return { tempDir, archivePath };
  }
  const archiveRoot = path.join(tempDir, 'function');
  const excludedTopLevel = new Set(['node_modules', '.git', '.tools', '.terraform', 'cdktf.out', '.ocdk', 'tail-function-logs.js', 'package-lock.json']);
  if (!isNodeRuntime) excludedTopLevel.add('package.json');
  fs.cpSync(projectDir, archiveRoot, {
    recursive: true,
    filter: (sourcePath) => {
      const relativePath = path.relative(projectDir, sourcePath);
      if (!relativePath) return true;
      if (relativePath === archiveFileName) return false;
      return !excludedTopLevel.has(relativePath.split(path.sep)[0]);
    },
  });
  if (isNodeRuntime) preparePackageManifest(archiveRoot);
  fs.rmSync(archivePath, { force: true });
  const zip = spawnSync('zip', ['-q', '-r', archivePath, 'function'], { cwd: tempDir, encoding: 'utf8', shell: false });
  if (zip.error || zip.status !== 0) {
    fs.rmSync(tempDir, { recursive: true, force: true });
    fs.rmSync(archivePath, { force: true });
    fail(`could not create source archive with zip: ${zip.stderr?.trim() || zip.error?.message || 'unknown error'}`);
  }
  return { tempDir, archivePath };
}

function jsonOci(args) {
  const output = runOci([...args, '--output', 'json']).trim();
  // Preview CLI can return an empty body for a successful list of no functions.
  if (!output) return { data: [] };
  const objectStart = output.indexOf('{');
  const arrayStart = output.indexOf('[');
  const start = objectStart !== -1 ? objectStart : arrayStart;
  const end = Math.max(output.lastIndexOf('}'), output.lastIndexOf(']'));
  try {
    return JSON.parse(start === -1 || end < start ? output : output.slice(start, end + 1));
  } catch {
    fail(`OCI CLI returned invalid JSON for: ${args.join(' ')}`);
  }
}

function resourceDisplayName(resource) {
  return resource.displayName || resource['display-name'] || '';
}

function findFunctionId(applicationId, functionName) {
  const result = jsonOci(['fn', 'function', 'list', '--application-id', applicationId, '--all']);
  const matches = (result.data || []).filter((fn) => resourceDisplayName(fn) === functionName);
  if (matches.length > 1) fail(`multiple functions are named "${functionName}" in the selected application.`);
  return matches[0]?.id;
}

function verifyPreviewCli() {
  const version = runOci(['--version']).trim();
  const help = runOci(['fn', 'function', 'create', '--help']);
  if (!help.includes('archive-function')) {
    fail(`OCI CLI ${version || 'at ' + ociCliPath} does not support archive-function. Set OCI_CLI_PATH to the OCI CLI preview binary.`);
  }
  console.log(`Using OCI CLI ${version} at ${ociCliPath}`);
}

function main() {
  const unexpectedArgs = process.argv.slice(2).filter((arg) => arg !== '--auto-approve');
  if (unexpectedArgs.length) fail(`unsupported code-only deploy option(s): ${unexpectedArgs.join(', ')}`);
  verifyPreviewCli();
  const metadata = readFunctionMetadata();
  const applicationId = (process.env.OCI_FUNCTION_APP_ID || '').trim();
  if (!applicationId) fail('Terraform output OCI_FUNCTION_APP_ID is missing. Run through "ocdk deploy --code-only".');
  const archive = createArchive(metadata.functionName, metadata.runtimeName);
  try {
    const functionId = findFunctionId(applicationId, metadata.functionName);
    const commonArgs = [
      '--archive-file', archive.archivePath,
      '--functions-runtime-name', metadata.runtimeName,
      '--handler', metadata.handler,
      '--memory-in-mbs', metadata.memory,
      '--timeout-in-seconds', metadata.timeout,
      '--wait-for-state', 'SUCCEEDED',
      '--max-wait-seconds', '600',
      '--wait-interval-seconds', '10',
    ];
    if (functionId) {
      console.log(`Updating code-only function ${metadata.functionName} in ${metadata.appName}...`);
      // OCI Preview CLI may print an unsuccessful waiter notice and the entire
      // function payload even though the archive update was accepted. Keep its
      // output captured so the normal deploy output remains concise.
      runOci(['fn', 'function', 'update', 'archive-function', '--function-id', functionId, '--runtime-config', 'FUNCTION_UPDATE', '--force', ...commonArgs]);
      console.log(`Updated code-only function: ${functionId}`);
    } else {
      console.log(`Creating code-only function ${metadata.functionName} in ${metadata.appName}...`);
      runOci([
        'fn', 'function', 'create', 'archive-function', 'direct-archive', 'fn-update-runtime-config',
        '--application-id', applicationId,
        '--display-name', metadata.functionName,
        ...commonArgs,
      ]);
      console.log('Created code-only function.');
    }
  } finally {
    fs.rmSync(archive.tempDir, { recursive: true, force: true });
  }
}

main();

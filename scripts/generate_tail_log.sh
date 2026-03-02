#!/bin/sh
# Generate tail-function-logs.js in project root (IDs from terraform output). Run from Terraform local-exec.
# Terraform runs with cwd = package root (e.g. .../project/node_modules/.../oci-cdk), not inside cdktf.out/stacks.
# So we must find project root by walking up to a dir named node_modules; its parent is the project root.
PROJ_DIR="${OCDK_PROJECT_DIR:-${PROJ_DIR}}"
if [ -z "$PROJ_DIR" ]; then
  # Walk up from cwd to find a dir named node_modules; its parent is the consumer project root.
  d="$(pwd)"
  while [ "$d" != "/" ]; do
    if [ "$(basename "$d")" = "node_modules" ]; then
      PROJ_DIR="$(dirname "$d")"
      break
    fi
    d="$(dirname "$d")"
  done
  if [ -z "$PROJ_DIR" ]; then
    # Not under node_modules (e.g. developing ocdk repo): use cwd as project root
    PROJ_DIR="$(pwd)"
  fi
fi
if [ -z "$PROJ_DIR" ]; then exit 0; fi
# Run terraform output from the stack dir (state lives there)
STACK_NAME="${OCI_STACK_NAME:-oci-stack}"
case "$(pwd)" in
  */cdktf.out/stacks/*) TF_OUT_DIR="." ;;
  *) [ -d "cdktf.out/stacks/$STACK_NAME" ] && TF_OUT_DIR="cdktf.out/stacks/$STACK_NAME" ;;
esac
if [ -n "$TF_OUT_DIR" ]; then
  LOG_GROUP_ID="$(cd "$TF_OUT_DIR" && terraform output -raw log_group_id 2>/dev/null || echo '')"
  EXEC_LOG_ID="$(cd "$TF_OUT_DIR" && terraform output -raw execution_log_id 2>/dev/null || echo '')"
else
  LOG_GROUP_ID="$(terraform output -raw log_group_id 2>/dev/null || echo '')"
  EXEC_LOG_ID="$(terraform output -raw execution_log_id 2>/dev/null || echo '')"
fi
if [ -z "$LOG_GROUP_ID" ] || [ -z "$EXEC_LOG_ID" ]; then exit 0; fi
# Create tail-function-logs.js if missing (copy from package)
if [ ! -f "$PROJ_DIR/tail-function-logs.js" ] && [ -f "$PROJ_DIR/node_modules/@mikarinneoracle/oci-cdk/scripts/tail-function-log.js" ]; then
  cp "$PROJ_DIR/node_modules/@mikarinneoracle/oci-cdk/scripts/tail-function-log.js" "$PROJ_DIR/tail-function-logs.js"
fi
if [ -f "$PROJ_DIR/tail-function-logs.js" ]; then
  sed "s|__EXECUTION_LOG_ID__|$EXEC_LOG_ID|g;s|__LOG_GROUP_ID__|$LOG_GROUP_ID|g" "$PROJ_DIR/tail-function-logs.js" > "$PROJ_DIR/tail-function-logs.js.tmp" && mv "$PROJ_DIR/tail-function-logs.js.tmp" "$PROJ_DIR/tail-function-logs.js"
fi

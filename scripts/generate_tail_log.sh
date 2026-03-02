#!/bin/sh
# Generate .ocdk-logs.json and tail-function-logs.js in project root. Run from Terraform local-exec.
# Expects OCDK_PROJECT_DIR or PROJ_DIR; if unset, infers project root when cwd is cdktf.out/stacks/<name>.
# Terraform must be in PATH; cwd is the stack dir so terraform output works.
PROJ_DIR="${OCDK_PROJECT_DIR:-${PROJ_DIR}}"
if [ -z "$PROJ_DIR" ]; then
  case "$(pwd)" in
    */cdktf.out/stacks/*) PROJ_DIR="$(cd ../.. && pwd)" ;;
    *) [ -d "cdktf.out/stacks" ] && PROJ_DIR="$(pwd)" ;;
  esac
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
printf '{"log_group_id":"%s","execution_log_id":"%s"}\n' "$LOG_GROUP_ID" "$EXEC_LOG_ID" > "$PROJ_DIR/.ocdk-logs.json"
# Create tail-function-logs.js if missing (copy from package)
if [ ! -f "$PROJ_DIR/tail-function-logs.js" ] && [ -f "$PROJ_DIR/node_modules/@mikarinneoracle/oci-cdk/scripts/tail-function-log.js" ]; then
  cp "$PROJ_DIR/node_modules/@mikarinneoracle/oci-cdk/scripts/tail-function-log.js" "$PROJ_DIR/tail-function-logs.js"
fi
if [ -f "$PROJ_DIR/tail-function-logs.js" ]; then
  sed "s|__EXECUTION_LOG_ID__|$EXEC_LOG_ID|g;s|__LOG_GROUP_ID__|$LOG_GROUP_ID|g" "$PROJ_DIR/tail-function-logs.js" > "$PROJ_DIR/tail-function-logs.js.tmp" && mv "$PROJ_DIR/tail-function-logs.js.tmp" "$PROJ_DIR/tail-function-logs.js"
fi

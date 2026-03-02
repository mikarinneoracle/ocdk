# Plan: Fix tail log files not generated in project root

## Problem

After deploy, `.ocdk-logs.json` and `tail-function-logs.js` are not created in the **consumer project root** (e.g. `/home/opc/python-ocdk`). The WriteOutputsToProject local-exec runs and the script executes, but either it exits early or writes to the wrong directory.

## Root cause

When the user runs **`npx ocdk deploy`** from the project (e.g. `/home/opc/python-ocdk`):

1. **ocdk** runs `npm run deploy` with **cwd = package directory**:  
   `.../python-ocdk/node_modules/@mikarinneoracle/oci-cdk`
2. **Terraform** runs from that package directory, so the **stack dir** is:  
   `.../python-ocdk/node_modules/@mikarinneoracle/oci-cdk/cdktf.out/stacks/oci-stack`
3. The script infers **PROJ_DIR** with:  
   `*/cdktf.out/stacks/*) PROJ_DIR="$(cd ../.. && pwd)"`  
   So **PROJ_DIR** = `.../node_modules/@mikarinneoracle/oci-cdk` (package root), **not** the project root.
4. The script then writes to `$PROJ_DIR/.ocdk-logs.json` → files end up under **node_modules**, not in `/home/opc/python-ocdk`.

So the bug is: **from inside node_modules, `../..` is the package root, not the project root.** We need to infer “project root” as the directory that **contains** the `node_modules` we’re in.

## Fix (recommended)

**In `scripts/generate_tail_log.sh`**, when inferring PROJ_DIR and we’re in `*/cdktf.out/stacks/*`:

1. **Walk up** from current directory.
2. **If we hit a directory named `node_modules`**, set  
   `PROJ_DIR="$(dirname "$d")"`  
   (parent of `node_modules` = project root).
3. **If we never hit `node_modules`** (e.g. developing ocdk itself), keep current fallback:  
   `PROJ_DIR="$(cd ../.. && pwd)"`  
   (package/repo root).

So:

- From `.../project/node_modules/.../oci-cdk/cdktf.out/stacks/oci-stack` → project root = `.../project`.
- From `.../ocdk/cdktf.out/stacks/oci-stack` (no node_modules in path) → PROJ_DIR = `.../ocdk` (../..).

## Steps to implement

1. **Edit `scripts/generate_tail_log.sh`**  
   Replace the block that sets PROJ_DIR when `*/cdktf.out/stacks/*` with:
   - Set `PROJ_DIR=""`.
   - Walk up from `$(pwd)`; for each `d`, if `basename "$d"` is `node_modules`, set `PROJ_DIR=$(dirname "$d")` and break.
   - If after the loop PROJ_DIR is still empty, fallback to `PROJ_DIR="$(cd ../.. && pwd)"`.

2. **Keep the rest**  
   - Terraform output from stack dir (unchanged).  
   - Write to `$PROJ_DIR/.ocdk-logs.json` and create/update `tail-function-logs.js` in `$PROJ_DIR` (unchanged).

3. **Optional: log for debugging**  
   - If `PROJ_DIR` is set, you can `echo "PROJ_DIR=$PROJ_DIR" >&2` so in CI/logs you see where the script thinks the project root is.

4. **Test**  
   - From a consumer project: `npx ocdk deploy` (or apply), then check that `.ocdk-logs.json` and `tail-function-logs.js` appear in the **project root**, not under `node_modules`.

## Why PROJ_DIR from env often doesn’t help on apply

- **At synth time** we can set `PROJ_DIR` in the provisioner env to `config.dockerContextPath` (resolved path). That path is the **machine that ran synth** (e.g. laptop).  
- **Apply** often runs elsewhere (CI, another host). That path may not exist or be wrong, so the script must not rely on it when run on a different host.  
- **OCI_PROJECT_DIR** is set by `ocdk` when you run `npx ocdk deploy` from the project; it’s not set if someone runs `terraform apply` directly. So inference in the script is still needed.

## Summary

| What | Change |
|------|--------|
| **Cause** | From `.../node_modules/.../cdktf.out/stacks/oci-stack`, `../..` points to the **package** root, not the **project** root. |
| **Fix** | In the script, when in `*/cdktf.out/stacks/*`, walk up until we find a directory named `node_modules`, then use its parent as PROJ_DIR; else keep `../..` as fallback. |
| **Files** | Only `scripts/generate_tail_log.sh`. |
| **Test** | Deploy from a consumer project and confirm `.ocdk-logs.json` and `tail-function-logs.js` in project root. |

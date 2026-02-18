# Terraform State Backend Configuration

OCDK supports three options for storing Terraform state:

## 1. Local State (Default)

State is stored in the local filesystem in `cdktf.out/` directory.

**Configuration:**
```bash
export OCI_STATE_BACKEND_TYPE="local"
# or simply don't set OCI_STATE_BACKEND_TYPE
```

**Pros:**
- Simple, no setup required
- Fast for single-user development

**Cons:**
- Not suitable for team collaboration
- State can be lost if machine fails
- No state locking

## 2. OCI Native Backend (Recommended)

State is stored in OCI Object Storage using Terraform's native OCI backend.

**Configuration:**
```bash
export OCI_STATE_BACKEND_TYPE="oci"
export OCI_STATE_BUCKET="tf-state"
export OCI_STATE_KEY="testimonials-stack/terraform.tfstate"
```

**Prerequisites:**
1. Create an OCI Object Storage bucket (e.g., `tf-state`)
2. Ensure your OCI user has the following IAM permissions on the bucket:
   - `OBJECT_READ`
   - `OBJECT_CREATE`
   - `OBJECT_DELETE`
   - `OBJECT_INSPECT`

**Pros:**
- Native OCI integration
- State locking support
- Secure and reliable
- Works seamlessly with OCI authentication

**Cons:**
- Requires bucket setup
- Requires IAM permissions configuration

**Example IAM Policy:**
```hcl
Allow group developers to manage objects in compartment CompartmentName where target.bucket.name='tf-state'
```

## 3. HTTP Backend

State is stored in OCI Object Storage via REST API (HTTP backend).

**Configuration:**
```bash
export OCI_STATE_BACKEND_TYPE="http"
export OCI_STATE_HTTP_ADDRESS="https://objectstorage.eu-amsterdam-1.oraclecloud.com/p/q-9i-3q__W7.....MYpacQ/n/frsxwtjslf35/b/tf-state/o/"
export OCI_STATE_HTTP_UPDATE_METHOD="PUT"
```

**Optional (for state locking):**
```bash
export OCI_STATE_HTTP_LOCK_ADDRESS="https://objectstorage.eu-amsterdam-1.oraclecloud.com/p/.../n/.../b/tf-state/lock"
export OCI_STATE_HTTP_UNLOCK_ADDRESS="https://objectstorage.eu-amsterdam-1.oraclecloud.com/p/.../n/.../b/tf-state/unlock"
```

**How to get the Object Storage URL:**
1. Navigate to OCI Console → Object Storage → Buckets
2. Select your bucket
3. Click "Edit Visibility" → Copy the "Object Storage URL"
4. Append `/o/` for the state file path

**Pros:**
- Works with any HTTP-compatible storage
- Can use pre-signed URLs
- Flexible configuration

**Cons:**
- Requires manual URL construction
- Less integrated than native OCI backend

## Migration Between Backends

To migrate from local to remote state:

1. **Backup current state:**
   ```bash
   cp cdktf.out/terraform.tfstate terraform.tfstate.backup
   ```

2. **Configure new backend** (set environment variables)

3. **Re-initialize backend:**
   ```bash
   cdktf deploy
   # Terraform will prompt: "Do you want to copy existing state to the new backend?"
   # Answer: yes
   ```

## Verification

After configuring a remote backend, verify it's working:

```bash
# Check state location
cdktf list

# Try a plan/diff
npm run diff
```

If successful, you should see state operations working without errors.

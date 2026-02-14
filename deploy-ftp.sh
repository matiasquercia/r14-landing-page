#!/bin/bash
# Deploy to FTP server - uploads dist/ contents to public_html
# Uses curl for FTP uploads

set -e

# Load environment variables
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

# Validate required variables
if [ -z "$FTP_HOST" ] || [ -z "$FTP_USER" ] || [ -z "$FTP_PASS" ]; then
  echo "Error: FTP credentials not configured. Create a .env file with FTP_HOST, FTP_USER, FTP_PASS"
  exit 1
fi

FTP_PORT="${FTP_PORT:-21}"
FTP_REMOTE_DIR="${FTP_REMOTE_DIR:-/public_html}"
DIST_DIR="dist"

if [ ! -d "$DIST_DIR" ]; then
  echo "Error: dist/ directory not found. Run 'npm run build' first."
  exit 1
fi

echo "========================================="
echo "  FTP Deploy - Real de Catorce"
echo "========================================="
echo "Host: $FTP_HOST:$FTP_PORT"
echo "User: $FTP_USER"
echo "Remote dir: $FTP_REMOTE_DIR"
echo "========================================="

# Function to upload a file via curl FTP
upload_file() {
  local local_file="$1"
  local remote_path="$2"

  echo "  Uploading: $remote_path"
  curl -s --ftp-create-dirs \
    -T "$local_file" \
    "ftp://${FTP_HOST}:${FTP_PORT}${remote_path}" \
    --user "${FTP_USER}:${FTP_PASS}" \
    --connect-timeout 30 \
    --max-time 300
}

# Function to create remote directory
create_remote_dir() {
  local remote_dir="$1"
  # Use curl to create directory by uploading an empty request
  curl -s --ftp-create-dirs \
    "ftp://${FTP_HOST}:${FTP_PORT}${remote_dir}/" \
    --user "${FTP_USER}:${FTP_PASS}" \
    --connect-timeout 30 \
    -Q "MKD ${remote_dir}" 2>/dev/null || true
}

echo ""
echo "Creating remote directories..."
create_remote_dir "${FTP_REMOTE_DIR}"
create_remote_dir "${FTP_REMOTE_DIR}/assets"

echo ""
echo "Uploading files to ${FTP_REMOTE_DIR}..."

# Upload all files from dist/
FAIL_COUNT=0
SUCCESS_COUNT=0

for file in $(find "$DIST_DIR" -type f); do
  # Calculate relative path and remote destination
  relative_path="${file#$DIST_DIR/}"
  remote_file="${FTP_REMOTE_DIR}/${relative_path}"

  if upload_file "$file" "$remote_file"; then
    SUCCESS_COUNT=$((SUCCESS_COUNT + 1))
  else
    echo "  FAILED: $remote_file"
    FAIL_COUNT=$((FAIL_COUNT + 1))
  fi
done

echo ""
echo "========================================="
echo "  Deploy Complete!"
echo "  Files uploaded: $SUCCESS_COUNT"
if [ $FAIL_COUNT -gt 0 ]; then
  echo "  Files failed: $FAIL_COUNT"
fi
echo "========================================="

if [ $FAIL_COUNT -gt 0 ]; then
  exit 1
fi

#!/bin/bash
# FTP Deploy Script for R14 Landing Page
# Uploads the contents of dist/ to the FTP server
# Usage: ./deploy-ftp.sh

set -e

# Load environment variables
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
else
  echo "Error: .env file not found. Copy .env.example to .env and fill in your credentials."
  exit 1
fi

# Validate required variables
if [ -z "$FTP_HOST" ] || [ -z "$FTP_USER" ] || [ -z "$FTP_PASS" ]; then
  echo "Error: FTP_HOST, FTP_USER, and FTP_PASS must be set in .env"
  exit 1
fi

FTP_PORT="${FTP_PORT:-21}"
FTP_REMOTE_DIR="${FTP_REMOTE_DIR:-/}"
DIST_DIR="dist"

if [ ! -d "$DIST_DIR" ]; then
  echo "Error: $DIST_DIR directory not found. Run 'npm run build' first."
  exit 1
fi

echo "========================================="
echo "  FTP Deploy - R14 Landing Page"
echo "========================================="
echo "Host: $FTP_HOST:$FTP_PORT"
echo "User: $FTP_USER"
echo "Remote dir: $FTP_REMOTE_DIR"
echo "Local dir: $DIST_DIR/"
echo "========================================="

# Function to upload a single file via curl FTP
upload_file() {
  local local_file="$1"
  local remote_path="$2"

  curl --ftp-create-dirs \
       --user "$FTP_USER:$FTP_PASS" \
       --upload-file "$local_file" \
       "ftp://$FTP_HOST:$FTP_PORT${remote_path}" \
       --connect-timeout 30 \
       --max-time 120 \
       --retry 3 \
       --retry-delay 5 \
       -s -S

  if [ $? -eq 0 ]; then
    echo "  OK: $remote_path"
  else
    echo "  FAIL: $remote_path"
    return 1
  fi
}

# Count total files
TOTAL_FILES=$(find "$DIST_DIR" -type f | wc -l)
CURRENT=0
FAILED=0

echo ""
echo "Uploading $TOTAL_FILES files..."
echo ""

# Upload all files from dist/
while IFS= read -r file; do
  CURRENT=$((CURRENT + 1))

  # Get relative path from dist/
  relative_path="${file#$DIST_DIR/}"

  # Build remote path
  remote_path="${FTP_REMOTE_DIR%/}/${relative_path}"

  echo "[$CURRENT/$TOTAL_FILES] Uploading: $relative_path"

  if ! upload_file "$file" "$remote_path"; then
    FAILED=$((FAILED + 1))
  fi

done < <(find "$DIST_DIR" -type f | sort)

echo ""
echo "========================================="
echo "  Deploy Complete"
echo "  Total: $TOTAL_FILES | Failed: $FAILED"
echo "========================================="

if [ $FAILED -gt 0 ]; then
  echo "Warning: $FAILED file(s) failed to upload."
  exit 1
fi

echo "Site deployed successfully!"

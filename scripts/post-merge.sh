#!/usr/bin/env bash
set -euo pipefail

# Post-merge setup for Nether101.nl portfolio.
# - Installs JS deps from the (possibly updated) pnpm-lock.yaml.
# - Idempotent and non-interactive (stdin is closed by the platform).

if command -v pnpm >/dev/null 2>&1; then
  pnpm install --prefer-frozen-lockfile
fi

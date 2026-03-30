#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

pushd "$repo_root/ziggy" >/dev/null
zig build
popd >/dev/null

"$repo_root/ziggy/zig-out/bin/ziggy" --clean

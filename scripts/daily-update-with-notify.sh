#!/usr/bin/env bash
# Wrapper: 运行每日更新 + 通知 OpenClaw
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_FILE="$SCRIPT_DIR/logs/daily-update-$(date +%Y-%m-%d).log"

# 运行主脚本
"$SCRIPT_DIR/daily-update.sh"

# 从日志中提取结果，通知 OpenClaw
if grep -q '"total_new": 0' "$LOG_FILE" 2>/dev/null || ! grep -q '"total_new"' "$LOG_FILE" 2>/dev/null; then
  # 没有新文章或没找到摘要，静默
  exit 0
fi

# 有新文章，发通知
openclaw system event --text "AI 前沿精读每日更新完成，请查看日志: $LOG_FILE" --mode now 2>/dev/null || true

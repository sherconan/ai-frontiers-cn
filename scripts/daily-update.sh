#!/usr/bin/env bash
# AI 前沿精读 — 每日自动更新脚本
# 用 Claude Code 检查各大 AI 实验室博客新文章，翻译并提交
set -euo pipefail

PROJECT_DIR="$HOME/ai-frontiers-cn"
LOG_DIR="$PROJECT_DIR/scripts/logs"
LOG_FILE="$LOG_DIR/daily-update-$(date +%Y-%m-%d).log"
LOCK_FILE="/tmp/ai-frontiers-update.lock"

mkdir -p "$LOG_DIR"

# 防止并发执行
if [ -f "$LOCK_FILE" ]; then
  pid=$(cat "$LOCK_FILE" 2>/dev/null)
  if kill -0 "$pid" 2>/dev/null; then
    echo "[$(date)] Another instance (PID $pid) is running, exiting." >> "$LOG_FILE"
    exit 0
  fi
  rm -f "$LOCK_FILE"
fi
echo $$ > "$LOCK_FILE"
trap 'rm -f "$LOCK_FILE"' EXIT

log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

log "=== AI 前沿精读 每日更新开始 ==="

cd "$PROJECT_DIR"

# 确保在 main 分支且最新
git checkout main 2>/dev/null || true
git pull --rebase origin main 2>/dev/null || true

# 获取已有文章列表（用于去重）
EXISTING_ARTICLES=$(find docs -name "*.md" -not -name "index.md" -not -name "reports.md" | sort)
log "现有文章数: $(echo "$EXISTING_ARTICLES" | wc -l | tr -d ' ')"

# 用 Claude Code 执行全流程
log "启动 Claude Code 进行新文章检测与翻译..."

PROMPT='你是 AI 前沿精读项目的自动更新 agent。

## 任务
检查以下 AI 实验室的官方博客，找出过去 7 天内发布的新文章，翻译成中文并写入项目。

## 要检查的实验室博客
1. Anthropic: https://www.anthropic.com/research + https://www.anthropic.com/news + https://www.anthropic.com/engineering
2. OpenAI: https://openai.com/index/ (research & announcements)
3. DeepMind: https://deepmind.google/discover/blog/
4. Meta AI: https://ai.meta.com/blog/
5. DeepSeek: https://api-docs.deepseek.com/news + GitHub releases
6. Kimi/月之暗面: https://kimi.moonshot.cn/ 相关新闻
7. Qwen/通义: https://qwenlm.github.io/blog/ + GitHub releases
8. xAI: https://x.ai/blog
9. Mistral: https://mistral.ai/news/

## 去重规则
先读取 docs/ 下所有现有 .md 文件名，确保不重复翻译已有文章。
用 `ls docs/*/` 查看每个实验室目录下的文件列表。

## 文章格式要求
每篇文章必须包含：
1. YAML frontmatter 不需要，直接用 markdown
2. 标题（中文翻译 + 英文原标题）
3. 元信息表格：日期、原文链接、作者、难度、阅读时间
4. 一句话摘要
5. 核心要点（5-10条，带 emoji）
6. 完整中文翻译（通顺自然，非机翻风格）
7. 🟢 入门解读（用日常类比解释）
8. 🔴 技术深度（详细技术分析）
9. 至少 1 个 Mermaid 架构图（如果适用）

## 文件命名
- 用英文 kebab-case，如 `building-effective-agents.md`
- 放到对应实验室目录下，如 `docs/anthropic/xxx.md`

## 索引更新
每个实验室目录有 `index.md`，新文章要加入索引列表。
格式参考现有 index.md 的写法。

## 导航更新
如果某个实验室的文章数量变了，更新 `docs/.vitepress/config.ts` 中导航栏的数字。

## 提交规则
- 每发现一篇新文章就写入文件
- 全部写完后，一次性 git add + commit + push
- commit message 格式: `feat: add N new articles (YYYY-MM-DD auto-update)`
- 如果没有新文章，不要做任何 commit

## 输出
最后输出一个 JSON 摘要：
```json
{
  "date": "YYYY-MM-DD",
  "new_articles": [{"lab": "xxx", "title": "xxx", "file": "xxx.md"}],
  "total_new": N
}
```

开始工作吧。先检查现有文章，再搜索新文章，最后翻译提交。'

# 运行 Claude Code（超时 30 分钟）
# macOS 没有 GNU timeout，用 shell 后台进程 + kill 实现
TIMEOUT_SECONDS=1800
claude --permission-mode bypassPermissions --print "$PROMPT" >> "$LOG_FILE" 2>&1 &
CLAUDE_PID=$!

# 后台启动看门狗，超时后杀死 claude 进程
(
  sleep "$TIMEOUT_SECONDS"
  if kill -0 "$CLAUDE_PID" 2>/dev/null; then
    kill "$CLAUDE_PID" 2>/dev/null
    sleep 2
    kill -9 "$CLAUDE_PID" 2>/dev/null
  fi
) &
WATCHDOG_PID=$!

# 等待 claude 完成
if wait "$CLAUDE_PID" 2>/dev/null; then
  log "Claude Code 执行成功"
else
  EXIT_CODE=$?
  if [ "$EXIT_CODE" -eq 137 ] || [ "$EXIT_CODE" -eq 143 ]; then
    log "Claude Code 执行超时 (killed after ${TIMEOUT_SECONDS}s)"
  else
    log "Claude Code 执行结束 (exit code: $EXIT_CODE)"
  fi
fi

# 清理看门狗
kill "$WATCHDOG_PID" 2>/dev/null || true
wait "$WATCHDOG_PID" 2>/dev/null || true

# 清理旧日志（保留 30 天）
find "$LOG_DIR" -name "daily-update-*.log" -mtime +30 -delete 2>/dev/null || true

log "=== AI 前沿精读 每日更新完成 ==="

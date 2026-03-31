#!/usr/bin/env bash
# AI 前沿精读 — 多源文章发现脚本
# 从 Karpathy RSS + we-mp-rss 公众号 + Bocha 搜索 发现新的 AI 文章
# 输出 JSON 格式的候选文章列表，供 daily-update.sh 使用
set -euo pipefail

# Source environment for API keys and tool paths
export PATH="/Users/sherconan/.local/bin:/opt/homebrew/bin:/Users/sherconan/.npm-global/bin:$PATH"
# Extract BOCHA_API_KEY from zshrc if not already set
if [ -z "${BOCHA_API_KEY:-}" ]; then
  BOCHA_API_KEY=$(grep 'export BOCHA_API_KEY' ~/.zshrc 2>/dev/null | head -1 | sed 's/.*=//' | tr -d '"' | tr -d "'") || true
  export BOCHA_API_KEY
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
OUTPUT_DIR="${1:-/tmp/ai-frontiers-candidates}"
HOURS="${2:-24}"

mkdir -p "$OUTPUT_DIR"

echo "[$(date)] 开始多源文章发现 (过去 ${HOURS}h)" >&2

# ===== Source 1: Karpathy RSS (93 feeds) =====
echo "[$(date)] 源1: Karpathy RSS 抓取..." >&2
KARPATHY_SKILL="/Users/sherconan/.openclaw/workspace/skills/karpathy-curated-rss-brief"
if [ -f "$KARPATHY_SKILL/scripts/fetch_feeds.py" ]; then
  uv run --script "$KARPATHY_SKILL/scripts/fetch_feeds.py" --hours "$HOURS" > "$OUTPUT_DIR/karpathy-rss.json" 2>/dev/null || echo "[]" > "$OUTPUT_DIR/karpathy-rss.json"
  COUNT=$(python3 -c "import json; print(len(json.load(open('$OUTPUT_DIR/karpathy-rss.json'))))" 2>/dev/null || echo 0)
  echo "[$(date)] Karpathy RSS: ${COUNT} 篇" >&2
else
  echo "[$(date)] Karpathy RSS skill 未安装" >&2
  echo "[]" > "$OUTPUT_DIR/karpathy-rss.json"
fi

# ===== Source 2: we-mp-rss 公众号 AI 文章 =====
echo "[$(date)] 源2: 公众号 AI 文章查询..." >&2
DB_PATH="/Users/sherconan/.openclaw/workspace/projects/we-mp-rss/data/db.db"
if [ -f "$DB_PATH" ]; then
  SINCE_TS=$(python3 -c "import time; print(int(time.time() - ${HOURS} * 3600))")
  sqlite3 "$DB_PATH" "
    SELECT json_group_array(json_object(
      'title', a.title,
      'url', a.url,
      'source', f.mp_name,
      'published', datetime(a.publish_time, 'unixepoch', 'localtime'),
      'description', SUBSTR(COALESCE(a.description, ''), 1, 200)
    ))
    FROM articles a
    JOIN feeds f ON a.mp_id = f.id
    WHERE a.publish_time > $SINCE_TS
    AND f.mp_name IN ('量子位','机器之心','新智元','AI前线','AI科技评论','智源社区','PaperWeekly','InfoQ','36氪','Datawhale')
    ORDER BY a.publish_time DESC
    LIMIT 50
  " > "$OUTPUT_DIR/wechat-mp.json" 2>/dev/null || echo "[]" > "$OUTPUT_DIR/wechat-mp.json"
  COUNT=$(python3 -c "import json; print(len(json.load(open('$OUTPUT_DIR/wechat-mp.json'))))" 2>/dev/null || echo 0)
  echo "[$(date)] 公众号: ${COUNT} 篇" >&2
else
  echo "[$(date)] we-mp-rss 数据库不存在" >&2
  echo "[]" > "$OUTPUT_DIR/wechat-mp.json"
fi

# ===== Source 3: Bocha 搜索 =====
echo "[$(date)] 源3: Bocha AI 行业搜索..." >&2
BOCHA_SKILL="/Users/sherconan/.agents/skills/bocha-web-search-yikailucas"
if [ -f "$BOCHA_SKILL/scripts/bocha.sh" ]; then
  bash "$BOCHA_SKILL/scripts/bocha.sh" web \
    --query "AI大模型 Anthropic OpenAI DeepMind DeepSeek 最新发布 论文 2026" \
    --count 10 --freshness oneWeek \
    > "$OUTPUT_DIR/bocha-search.json" 2>/dev/null || echo '{"data":{"webPages":{"value":[]}}}' > "$OUTPUT_DIR/bocha-search.json"
  COUNT=$(python3 -c "import json; d=json.load(open('$OUTPUT_DIR/bocha-search.json')); print(len(d.get('data',{}).get('webPages',{}).get('value',[])))" 2>/dev/null || echo 0)
  echo "[$(date)] Bocha: ${COUNT} 条" >&2
else
  echo "[$(date)] Bocha skill 未安装" >&2
  echo '{"data":{"webPages":{"value":[]}}}' > "$OUTPUT_DIR/bocha-search.json"
fi

echo "[$(date)] 文章发现完成，结果保存在: $OUTPUT_DIR" >&2
echo "$OUTPUT_DIR"

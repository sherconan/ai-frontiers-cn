---
title: "每日精选 · AI 前沿心得"
description: "每天从 Anthropic / OpenAI / DeepMind 等实验室的最新博客中挑 1 篇做深度心得：300 字速览 + 核心洞察 + 一句话推荐。"
layout: doc
---

# 每日精选

> 每天 06:00 自动从新发的博客里挑 1 篇做心得。不灌水——无新文章则跳过。
> 心得格式固定：**300 字速览 + 🔑 核心洞察 + 一句话推荐**。

## 最新

- **2026-04-16** · [GPT-5 System Card：统一路由 + 安全补全 + 生物安全](./2026-04-16-gpt-5-system-card.md) · _OpenAI_
- **2026-04-15** · [给 Agent 写工具：从手写到评估驱动迭代](./2026-04-15-writing-tools-for-agents.md) · _Anthropic_
- **2026-04-14** · [上下文工程：从提示工程到注意力预算管理](./2026-04-14-context-engineering.md) · _Anthropic_
- **2026-04-13** · [Claude Sonnet 4.6：规模化落地旗舰的再平衡](./2026-04-13-claude-sonnet-4-6.md) · _Anthropic_
- **2026-04-12** · [Claude Opus 4.6：旗舰回到「技术天花板」](./2026-04-12-claude-opus-4-6.md) · _Anthropic_

## 自动化

- 触发：每天 06:00（Claude Desktop routine）
- 逻辑：diff `docs/{anthropic,openai,deepmind,...}` 里当天新增文章 → 选 1 篇 → 生成心得 → 存本页 + Discord 推送
- 手动跑：在 Claude Code 里说 "跑一下 AI 前沿每日精选"

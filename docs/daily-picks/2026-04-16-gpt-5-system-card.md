---
title: "每日精选 · 2026-04-16 · GPT-5 System Card：统一路由 + 安全补全 + 生物安全"
description: "GPT-5 不是一个模型，是一个统一路由器；安全训练从「拒绝」进化到「安全补全」；首次系统公布 CBRN 生物安全评估方法。"
date: 2026-04-16
pick_source: "GPT-5 System Card — GPT-5 系统安全卡"
pick_path: "/openai/gpt-5-system-card"
company: "OpenAI"
layout: doc
---

# 每日精选 · 2026-04-16

> **GPT-5 System Card：统一路由 + 安全补全 + 生物安全**
> 来源：**OpenAI** · [GPT-5 System Card — GPT-5 系统安全卡](../openai/gpt-5-system-card)
> **一句话：** GPT-5 不是一个模型，是一个统一路由器；安全训练从「拒绝」进化到「安全补全」；首次系统公布 CBRN 生物安全评估方法。

## 速览

OpenAI 发布 **GPT-5 System Card**——这是外界看 GPT-5 真实能力 / 风险的最权威文档。三件事：

1. **统一架构**——GPT-5 不再是单一模型，而是一个 **路由器**，根据请求在多个子模型（推理 / 通用 / 快速）间分配。这是 OpenAI 对「推理模型 vs 通用模型」二元化的最终答卷。
2. **Safe-Completions（安全补全）**——安全训练范式从「**拒绝生成**」进化到「**在不提供有害信息的前提下完成任务**」。模型更有用，同时更安全。
3. **生物安全评估**——首次把 CBRN（化学 / 生物 / 放射 / 核）威胁评估的方法和结果写清楚，做了内 / 外部红队、领域专家对比。

## 🔑 核心洞察

- **路由架构** 是 GPT-5 最大的底层变化——以后谈「GPT-5 能力」必须先问 **「是哪个子模型回答的」**，benchmark 数字的含义被改写。
- **Safe-Completions vs Constitutional Classifiers**——OpenAI 和 Anthropic 在同一道题上走了不同路：Anthropic 在训练期做分类器，OpenAI 在推理期做完成策略。
- **生物安全部分** 是这份 system card 最值得读的——它是第一个把 CBRN 评估公开到这种颗粒度的前沿模型文档。

## 一句话推荐

做安全 / 对齐 / 红队的必读；做产品的也该搞清楚「你调的 GPT-5 到底是哪一个」。

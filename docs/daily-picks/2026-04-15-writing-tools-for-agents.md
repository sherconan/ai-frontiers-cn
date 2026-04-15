---
title: "每日精选 · 2026-04-15 · 给 Agent 写工具：从手写到评估驱动迭代"
description: "Anthropic 工程团队正式提出「评估驱动 + 智能体协同迭代」的工具设计方法论，回答了 MCP 时代「什么是好工具」。"
date: 2026-04-15
pick_source: "Writing Effective Tools for Agents — With Agents"
pick_path: "/anthropic/writing-tools-for-agents"
company: "Anthropic"
layout: doc
---

# 每日精选 · 2026-04-15

> **给 Agent 写工具：从手写到评估驱动迭代**
> 来源：**Anthropic** · [Writing Effective Tools for Agents — With Agents](../anthropic/writing-tools-for-agents)
> **一句话：** Anthropic 工程团队正式提出「评估驱动 + 智能体协同迭代」的工具设计方法论，回答了 MCP 时代「什么是好工具」。

## 速览

这是 Anthropic 工程团队写给「想给 agent 造工具」的完整方法论，三段结构：

1. **什么是工具**——工具是 **智能体的行动原语**，不是函数签名；判断它好不好不看 schema 漂不漂亮，看 agent 能不能用。
2. **如何编写工具**——从 schema 设计、命名、错误处理到 MCP 接入方式，给了具体的例子和反例。
3. **编写高效工具的三原则**——让 agent **看得懂、选得对、错得回来**（自解释 + 正交 + 可恢复）。

文章反复强调 **评估驱动**：工具好不好不看代码，看 agent 在 eval 上的端到端成功率。并且建议让 **Claude 自己来帮 Claude 迭代工具定义**——一个元 loop。

## 🔑 核心洞察

- 「工具」的第一性原理被重新定义为 **智能体行动原语**——这会重塑 MCP 生态里「好工具」的审美。
- **评估驱动迭代** 是工具从 demo 到生产的唯一路径，也完美对上了本项目的 autoresearch 质量评分体系。
- **「让 Agent 帮 Agent 写工具」** 是一个被官方背书的生产范式，意味着工具生态会加速自我演化。

## 一句话推荐

做 MCP server / tool provider / agent 平台的必读。

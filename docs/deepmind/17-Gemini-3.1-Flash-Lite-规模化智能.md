---
title: "Gemini 3.1 Flash-Lite: Built for Intelligence at Scale | Gemini 3.1 Flash-Lite：为规模化智能而生"
description: "Google DeepMind 发布 Gemini 3.1 Flash-Lite，Gemini 3 系列中最具成本效益的模型——指令遵循成功率比前代提升 20%，推理速度快 60%，首个 token 响应速度达 Gemini 2.5 Flash 的 2.5 倍，输出速度超 360 tokens/秒，专为高吞吐量、低延迟的翻译、分类和实时任务场景优化。"
head:
  - - meta
    - property: og:title
      content: "Gemini 3.1 Flash-Lite: Built for Intelligence at Scale | Gemini 3.1 Flash-Lite：为规模化智能而生"
  - - meta
    - property: og:description
      content: "Google DeepMind 发布 Gemini 3.1 Flash-Lite，Gemini 3 系列中最具成本效益的模型——指令遵循成功率比前代提升 20%，推理速度快 60%，首个 token 响应速度达 Gemini 2.5 Flash 的 2.5 倍，输出速度超 360 tokens/秒，专为高吞吐量、低延迟的翻译、分类和实时任务场景优化。"
  - - meta
    - property: og:type
      content: article
---

# Gemini 3.1 Flash-Lite: Built for Intelligence at Scale | Gemini 3.1 Flash-Lite：为规模化智能而生

> **原标题：** Gemini 3.1 Flash Lite: Our most cost-effective AI model yet
> **作者：** Gemini Team, Google DeepMind
> **发布日期：** 2026年3月3日
> **原文链接：** https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-lite

---

## 一句话摘要

Google DeepMind 发布 Gemini 3.1 Flash-Lite，Gemini 3 系列中最具成本效益的模型——指令遵循成功率比前代提升 20%，推理速度快 60%，首个 token 响应速度达 Gemini 2.5 Flash 的 2.5 倍，输出速度超 360 tokens/秒，专为高吞吐量、低延迟的翻译、分类和实时任务场景优化。

---

## 核心内容

### 产品定位

Gemini 3.1 Flash-Lite 是 Gemini 3 模型家族的新成员，定位为成本效率最优的推理模型。它继承了 Gemini 3 系列的原生多模态和推理能力，但针对**高并发、低延迟、大规模部署**场景进行了极致优化。

### 核心性能指标

**速度表现：**
- 首个 token 响应（TTFT）：比 Gemini 2.5 Flash 快 **2.5 倍**
- 输出速度：超过 **360 tokens/秒**
- 推理延迟：比前代降低 **60%**

**质量表现：**
- 指令遵循成功率：比前代提升 **20%**
- 保持 Gemini 3 系列的原生多模态能力
- 支持文本和图像输入

### 目标场景

Gemini 3.1 Flash-Lite 针对以下高频应用场景优化：

1. **翻译与本地化**：高速多语言翻译，支持实时字幕和文档本地化
2. **内容分类**：大规模文本和图像分类任务
3. **信息提取**：从结构化和非结构化文档中快速提取关键信息
4. **实时交互**：聊天机器人、客服系统等需要即时响应的场景

### 与 Gemini 3 家族的关系

| 模型 | 定位 | 优势场景 |
|------|------|---------|
| Gemini 3 Pro | 旗舰推理 | 复杂推理、科学研究 |
| Gemini 3 Flash | 平衡性能 | 通用任务、编程 |
| Gemini 3.1 Flash-Lite | 极致效率 | 高吞吐、低延迟、大规模部署 |

### 可用性

Gemini 3.1 Flash-Lite 通过 Google AI Studio 和 Vertex AI API 向开发者开放，支持标准的 Gemini API 接口。

---

## 技术要点

1. **TTFT 优化的工程意义**：首个 token 响应时间 2.5 倍提升对实时应用至关重要。这意味着用户感知的"等待时间"大幅缩短，直接影响产品体验和用户留存。

2. **360+ tokens/秒的吞吐量**：这一数字意味着生成一篇 1000 字的中文文章仅需约 2 秒。对于批处理场景（如文档翻译、数据标注），这代表数量级的效率提升。

3. **Flash-Lite 的架构优化推测**：虽然 Google 未公开具体架构细节，但从性能特征推断，Flash-Lite 可能采用了更激进的知识蒸馏、量化和推测解码（Speculative Decoding）技术组合。

4. **原生多模态的保留**：与许多"轻量化"模型不同，Flash-Lite 保留了多模态能力而非仅支持文本。这使其在需要图像理解的分类和提取任务中保持竞争力。

5. **成本效益的行业竞争**：Flash-Lite 的发布直接对标 OpenAI 的 GPT-5.4 nano 和 Anthropic 的 Claude Haiku 4.5，争夺高吞吐量 API 调用市场。

---

## 深度解读

### "最后一公里"模型的战略价值

Flash-Lite 代表了 AI 行业一个重要趋势：**前沿实验室不仅竞争最强模型，也竞争最高效的模型**。在实际商业部署中，绝大多数 API 调用不需要最强的推理能力，而是需要快速、准确、便宜的基础响应。Flash-Lite 正是为这个"最后一公里"场景而生。

### 速度即竞争力

在 AI 产品化时代，模型速度与模型智能同等重要。360+ tokens/秒的输出速度使得 Flash-Lite 能支持实时对话、流式生成等延迟敏感型场景，这些场景往往是用户量最大、商业价值最高的。

### 模型矩阵的完善

Gemini 3.1 Flash-Lite 的发布标志着 Google 完成了从旗舰（Pro）到平衡（Flash）再到效率（Flash-Lite）的完整模型矩阵。这种分层策略确保 Google 在各个价格段和性能段都有竞争力，与 OpenAI 的 GPT-5.4/mini/nano 和 Anthropic 的 Opus/Sonnet/Haiku 形成全面对标。

---

## 原文链接

- 发布公告：[https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-lite](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-lite)
- 发布日期：2026 年 3 月 3 日
- 研究机构：Google DeepMind

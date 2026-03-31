---
title: "Introducing Mistral 3 | Mistral 3：开源 MoE 前沿模型回归"
description: "Mistral AI 发布 Mistral 3 模型家族——包含 Mistral Large 3（675B 总参数 / 41B 激活的 MoE 架构）和 Ministral 3 系列（3B/8B/14B 稠密模型），全部支持多模态图像理解，小模型采用 Apache 2.0 开源，Large 3 在 3000 块 H200 GPU 上从零训练，是 Mixtral 系列以来 Mistral 首次回归"
head:
  - - meta
    - property: og:title
      content: "Introducing Mistral 3 | Mistral 3：开源 MoE 前沿模型回归"
  - - meta
    - property: og:description
      content: "Mistral AI 发布 Mistral 3 模型家族——包含 Mistral Large 3（675B 总参数 / 41B 激活的 MoE 架构）和 Ministral 3 系列（3B/8B/14B 稠密模型），全部支持多模态图像理解，小模型采用 Apache 2.0 开源，Large 3 在 3000 块 H200 GPU 上从零训练，是 Mixtral 系列以来 Mistral 首次回归"
  - - meta
    - property: og:type
      content: article
---

# Introducing Mistral 3 | Mistral 3：开源 MoE 前沿模型回归

> **原标题：** Introducing Mistral 3
> **作者：** Mistral AI
> **发布日期：** 2026年3月
> **原文链接：** https://mistral.ai/news/mistral-3

---

## 一句话摘要

Mistral AI 发布 Mistral 3 模型家族——包含 Mistral Large 3（675B 总参数 / 41B 激活的 MoE 架构）和 Ministral 3 系列（3B/8B/14B 稠密模型），全部支持多模态图像理解，小模型采用 Apache 2.0 开源，Large 3 在 3000 块 H200 GPU 上从零训练，是 Mixtral 系列以来 Mistral 首次回归 MoE 架构。

---

## 核心内容

### Mistral Large 3：旗舰 MoE 模型

Mistral Large 3 是 Mistral AI 迄今最强大的模型，也是自初代 Mixtral 以来首次回归混合专家（MoE）架构：

- **总参数量：** 675B
- **激活参数量：** 41B
- **架构：** 稀疏混合专家（Sparse MoE）
- **训练硬件：** 3000 块 NVIDIA H200 GPU
- **训练方式：** 从零预训练（from scratch）

Mistral Large 3 在 Mistral AI 的许可证下发布，被称为"世界上最优秀的开放权重许可模型之一"。

### Ministral 3 系列：边缘与本地部署

为了满足边缘计算和本地部署需求，Mistral 同时发布了三款稠密（dense）小模型：

| 模型 | 参数量 | 许可证 | 特点 |
|------|-------|--------|------|
| Ministral 3 3B | 3B | Apache 2.0 | 移动端、IoT 设备 |
| Ministral 3 8B | 8B | Apache 2.0 | 个人电脑、轻量服务器 |
| Ministral 3 14B | 14B | Apache 2.0 | 工作站、中等规模部署 |

每款模型均提供三个变体：
- **Base**：基座模型，用于自定义微调
- **Instruct**：指令遵循优化版
- **Reasoning**：推理增强版

**所有模型均具备图像理解能力**，这是 Ministral 系列的首次。

### 训练与优化

全系列模型均在 NVIDIA Hopper GPU（H200）上训练，充分利用其高带宽 HBM3e 显存。Mistral 强调这是从零预训练而非在现有模型基础上微调，意味着模型的知识截止时间和能力分布完全由 Mistral 自主控制。

### 生态系统支持

Mistral 3 系列在发布时即可通过以下平台使用：
- Mistral AI Studio
- Amazon Bedrock
- Azure Foundry
- Hugging Face
- Modal、IBM WatsonX、OpenRouter、Fireworks
- Together AI、Unsloth AI
- 即将支持：NVIDIA NIM、AWS SageMaker

### NVIDIA 合作

Mistral AI 同时宣布作为创始成员加入 NVIDIA Nemotron Coalition——一个旨在推动开放前沿基础模型发展的全球联盟。

---

## 技术要点

1. **MoE 回归的战略意义**：Mistral 在 Mixtral 之后沉寂已久的 MoE 路线重新回归。675B 总参数 / 41B 激活参数的设计意味着推理成本仅约为同等质量稠密模型的 6%，这在 API 定价竞争中具有重大优势。

2. **41B 激活参数的"甜区"**：41B 的激活参数量恰好落在一个有趣的区间——足够强大以处理前沿任务，又足够高效以在单节点（8×H200）上运行。这可能是 Mistral 精心选择的部署友好规模。

3. **多模态的全面下放**：从 3B 到 675B，全系列模型都支持图像理解。这反映了行业趋势——多模态不再是大模型的专利，而是所有规模模型的标配。

4. **Apache 2.0 的商业智慧**：小模型开源可以培养生态系统和社区，同时将付费流量引向 Large 3。这是 Meta（Llama）首创、现被广泛采用的"开源漏斗"策略。

5. **从零训练 vs. 持续预训练**：Mistral 强调从零训练（而非在 Llama 等模型基础上持续预训练），这确保了数据混合和训练策略的完全自主性，也避免了潜在的许可证纠纷。

---

## 深度解读

### 欧洲 AI 的旗帜

Mistral 3 的发布巩固了 Mistral AI 作为欧洲最重要 AI 实验室的地位。在 AI 竞争主要由美国和中国主导的格局下，Mistral 代表了欧洲的技术自主权——这在欧盟 AI 法案实施的背景下具有特殊的地缘政治意义。

### MoE 的复兴

从 DeepSeek 的 V3 到 Qwen3 到 Mistral Large 3，MoE 架构正经历全面复兴。与稠密模型相比，MoE 在训练和推理效率上都有显著优势，尤其在推理成本日益成为关键竞争指标的当下。675B/41B 的比例（约 16:1）表明 Mistral 在专家利用率和模型质量之间找到了平衡。

### 小模型生态的争夺

3B/8B/14B 三档加上 Apache 2.0 许可证，Mistral 直接进入了 Llama、Gemma、Qwen 的开源小模型竞争。每个尺寸都提供 Base/Instruct/Reasoning 三个变体，为开发者提供了极大的灵活性。这一策略能否从 Meta 和 Google 手中抢夺开源社区的注意力，值得关注。

---

## 原文链接

- 发布公告：[https://mistral.ai/news/mistral-3](https://mistral.ai/news/mistral-3)
- 发布日期：2026 年 3 月
- 研究机构：Mistral AI

---
title: "SAM Audio: Segment Anything in Audio | SAM Audio：多模态音频分离的统一模型"
description: "Meta 发布 SAM Audio，首个统一的多模态音频分离模型——通过文本、视觉和时间段三种提示方式，从复杂音频混合中分离任意声音。基于流匹配扩散 Transformer 架构，实时因子 RTF 约 0.7（快于实时），参数规模 500M-3B，并推出 SAM Audio Judge 和 SAM Audio-Bench 两项全新评估工具。"
head:
  - - meta
    - property: og:title
      content: "SAM Audio: Segment Anything in Audio | SAM Audio：多模态音频分离的统一模型"
  - - meta
    - property: og:description
      content: "Meta 发布 SAM Audio，首个统一的多模态音频分离模型——通过文本、视觉和时间段三种提示方式，从复杂音频混合中分离任意声音。基于流匹配扩散 Transformer 架构，实时因子 RTF 约 0.7（快于实时），参数规模 500M-3B，并推出 SAM Audio Judge 和 SAM Audio-Bench 两项全新评估工具。"
  - - meta
    - property: og:type
      content: article
---

# SAM Audio: Segment Anything in Audio | SAM Audio：多模态音频分离的统一模型

> **原标题：** Introducing SAM Audio: The First Unified Multimodal Model for Audio Separation
> **作者：** Meta FAIR
> **发布日期：** 2026年3月
> **原文链接：** https://ai.meta.com/blog/sam-audio/

---

## 一句话摘要

Meta 发布 SAM Audio，首个统一的多模态音频分离模型——通过文本、视觉和时间段三种提示方式，从复杂音频混合中分离任意声音。基于流匹配扩散 Transformer 架构，实时因子 RTF 约 0.7（快于实时），参数规模 500M-3B，并推出 SAM Audio Judge 和 SAM Audio-Bench 两项全新评估工具。

---

## 核心内容

### 研究动机：音频领域的"Segment Anything"

Meta 的 Segment Anything Model（SAM）在图像和视频分割领域取得了革命性成功。SAM Audio 将同样的理念延伸到音频领域：**给定任意提示，从复杂音频中分离出目标声音**。

传统音频分离方法通常只支持单一提示方式（如仅文本或仅音频参考），且局限于特定领域（如仅语音或仅音乐）。SAM Audio 打破了这些限制，成为首个跨域、多模态的统一音频分离模型。

### 三种提示方式

**1. 文本提示（Text Prompting）**
用户通过自然语言描述目标声音，如"狗叫声"、"钢琴独奏"、"背景中的雨声"。模型理解语义描述并分离对应音频。

**2. 视觉提示（Visual Prompting）**
在视频场景中，用户点击画面中的发声物体（如说话的人、演奏的乐器），模型自动分离该物体产生的声音。这需要视觉-音频对齐能力。

**3. 时间段提示（Span Prompting）**
这是 SAM Audio 的**行业首创**。用户标记音频时间线上的一个片段，模型将该片段中的目标声音在整个音频中分离出来。例如，标记 0:05-0:08 中的某种乐器声，模型会在整首曲子中分离出该乐器。

### 技术架构

**核心框架：流匹配扩散 Transformer（Flow-Matching Diffusion Transformer）**

SAM Audio 采用生成式建模方法：将音频混合和多模态提示编码为共享表征空间，通过扩散过程生成目标音频和残余音频两个输出轨道。

**感知编码器 - 视听版（Perception Encoder Audiovisual, PE-AV）**

PE-AV 是 SAM Audio 的技术引擎，构建在 Meta 开源的 Perception Encoder 模型基础上。它通过时序对齐机制将视频帧特征与音频表征融合，实现**"看到什么，听到什么"**的跨模态匹配。

**模型规模：** 500M 至 3B 参数，覆盖从边缘部署到云端高精度的不同需求。

### 性能表现

- **实时因子（RTF）：** 约 0.7，意味着处理 1 秒音频仅需 0.7 秒，**快于实时**
- **跨域能力：** 在语音、音乐和通用音效三个领域均展现优异性能
- **统一模型优势：** 单一模型在所有音频域和所有提示方式上都达到 SOTA 或接近 SOTA

### 全新评估工具

**SAM Audio Judge：** 一个无需参考音频的评估框架，从 9 个感知维度（包括召回率、精确度和忠实度）评估音频分离质量。解决了传统评估依赖干净参考音频的局限。

**SAM Audio-Bench：** 首个"野外"（in-the-wild）音频分离基准，涵盖语音、音乐和音效三个领域的多模态提示测试集。

### 应用与合作

Meta 强调 SAM Audio 的无障碍应用潜力：
- 与 **Starkey**（美国最大助听器制造商）合作，探索听力辅助应用
- 与 **2gether-International**（残障创始人加速器）合作，推动无障碍技术创新

### 已知局限

- 音频本身不能作为提示（不支持"找到与这段音频相似的声音"）
- 不支持无提示的完全分离（必须指定目标）
- 高度相似的声源分离仍然困难

---

## 技术要点

1. **流匹配扩散的选择**：相比自回归模型，扩散模型在音频生成中能保持更好的时频连续性。流匹配（Flow Matching）相比标准扩散采样更快，支撑了 RTF < 1 的实时性能。

2. **三模态统一表征**：将文本、视觉和时间段三种异质提示映射到统一的条件表征空间是关键技术挑战。PE-AV 的时序对齐机制是实现视觉-音频对应的核心。

3. **生成式 vs. 判别式方法**：SAM Audio 选择生成式（扩散）而非判别式（掩码估计）方法进行音频分离，牺牲了一些计算效率但获得了更好的泛化能力和音频质量。

4. **无参考评估的突破**：SAM Audio Judge 解决了音频分离评估的核心难题——现实场景中通常不存在"干净"的参考音频。9 维感知评估框架为该领域提供了更实用的评估标准。

5. **从 SAM 到 SAM Audio 的范式迁移**：Meta 证明了"给任意提示，分割任意内容"的范式可以从视觉（像素级分割）成功迁移到音频（时频域分离），暗示这一范式可能进一步扩展到其他模态。

---

## 深度解读

### "Segment Anything"范式的跨模态验证

SAM Audio 最重要的贡献可能不是模型本身，而是对"Segment Anything"范式通用性的验证。从图像（SAM）到视频（SAM 2）到音频（SAM Audio），Meta 证明了"提示驱动的开放式分离"是一个跨模态的通用框架。下一步可能是触觉、3D 场景甚至化学分子的"Segment Anything"。

### 多模态 AI 的基础设施价值

SAM Audio 不仅是一个最终产品，更是多模态 AI 系统的基础组件。想象一个 AI 助手观看会议视频并自动分离每个参会者的语音——这需要视觉理解（识别人脸）、音频分离（隔离声音）和语言处理（转录内容）的无缝协作。SAM Audio 为这类场景提供了关键的音频处理能力。

### 无障碍技术的 AI 赋能

与 Starkey 的合作暗示了 AI 音频分离在助听设备中的革命性潜力。传统助听器只能放大所有声音，而 SAM Audio 级别的技术可以实现**选择性放大**——只放大用户想听的声音，极大改善嘈杂环境中的听力体验。

---

## 原文链接

- 博客文章：[https://ai.meta.com/blog/sam-audio/](https://ai.meta.com/blog/sam-audio/)
- 研究论文：[https://ai.meta.com/research/publications/sam-audio-segment-anything-in-audio/](https://ai.meta.com/research/publications/sam-audio-segment-anything-in-audio/)
- 发布日期：2026 年 3 月
- 研究机构：Meta FAIR

---
title: "NVIDIA GTC 2026: Vera Rubin and the Next Era of AI | GTC 2026：Vera Rubin 与 AI 新纪元"
description: "NVIDIA GTC 2026 发布四大核心产品：Vera Rubin GPU 架构（GPU-HBM 直接堆叠，AI 算力密度 3-4 倍于 Blackwell）、NemoClaw 企业微调平台、DLSS 5 神经渲染、Neotron 3 Super 边缘推理芯片，同时收购 Groq 后首次推出 Groq 3 LPU 推理加速器。Jensen Huang 预计 Blackwell+Vera Rub"
head:
  - - meta
    - property: og:title
      content: "NVIDIA GTC 2026: Vera Rubin and the Next Era of AI | GTC 2026：Vera Rubin 与 AI 新纪元"
  - - meta
    - property: og:description
      content: "NVIDIA GTC 2026 发布四大核心产品：Vera Rubin GPU 架构（GPU-HBM 直接堆叠，AI 算力密度 3-4 倍于 Blackwell）、NemoClaw 企业微调平台、DLSS 5 神经渲染、Neotron 3 Super 边缘推理芯片，同时收购 Groq 后首次推出 Groq 3 LPU 推理加速器。Jensen Huang 预计 Blackwell+Vera Rub"
  - - meta
    - property: og:type
      content: article
---

# NVIDIA GTC 2026: Vera Rubin and the Next Era of AI | GTC 2026：Vera Rubin 与 AI 新纪元

> **原标题：** NVIDIA GTC 2026: Live Updates on What's Next in AI
> **作者：** NVIDIA
> **发布日期：** 2026年3月16日
> **原文链接：** https://blogs.nvidia.com/blog/gtc-2026-news/

---

## 一句话摘要

NVIDIA GTC 2026 发布四大核心产品：Vera Rubin GPU 架构（GPU-HBM 直接堆叠，AI 算力密度 3-4 倍于 Blackwell）、NemoClaw 企业微调平台、DLSS 5 神经渲染、Neotron 3 Super 边缘推理芯片，同时收购 Groq 后首次推出 Groq 3 LPU 推理加速器。Jensen Huang 预计 Blackwell+Vera Rubin 订单将达 1 万亿美元。

---

## 核心内容

### 大会主题：智能体 AI 时代

GTC 2026 的核心主题是**智能体 AI（Agentic AI）**——从"问答式聊天机器人"到"任务导向型 AI 智能体"的范式转变。Jensen Huang 在主题演讲中指出，AI 的未来不是更好的对话，而是更强的行动。

### Vera Rubin GPU 架构

Vera Rubin 是继 Blackwell 之后的下一代 GPU 架构，核心创新是**GPU-HBM 组合封装（CG-HBM）**：

- **CG-HBM 技术**：将高带宽存储器（HBM）直接堆叠在 GPU 芯片上，而非通过中间基板连接
- **性能提升**：AI 计算密度比 Blackwell 提高 **3-4 倍**
- **能效改进**：每 FLOP 功耗显著降低
- **内存带宽**：通过直接堆叠大幅提升带宽、降低延迟

Vera Rubin 平台现已扩展到七款芯片，包括新增的 Groq 3 LPU。

### NemoClaw 企业平台

NemoClaw 是基于 NeMo 框架构建的企业级微调和模型定制工具，专门为 OpenClaw 生态系统提供"企业就绪"的解决方案。它帮助企业在自有基础设施上高效训练和部署定制 AI 模型。

### DLSS 5 神经渲染

DLSS 5 引入**神经着色（Neural Shading）**技术，在实时渲染管线中用神经网络替代传统光栅化和光线追踪的部分计算。这标志着 AI 从"后处理增强"深入到"渲染核心"的范式转变。

### Neotron 3 Super 边缘 AI 芯片

专为边缘部署设计的推理芯片，支持本地 AI 模型运行。定位于不适合云端推理的场景：工厂产线、自动驾驶车辆、实体零售等。

### Groq 3 LPU

NVIDIA 在 2025 年 12 月以约 200 亿美元收购 Groq 后，首次推出整合产品——Groq 3 语言处理单元（LPU）。作为 Vera Rubin 平台的低延迟推理加速器，专为大语言模型推理优化，预计在第三季度出货。

### 物理 AI 与机器人

**NVIDIA Isaac Lab-Arena：** 开源的大规模机器人策略评估和基准测试框架，连接 Libero 和 Robocasa 等行业基准。

**Cosmos 世界模型 & Alpamayo 模型：** 用于自动驾驶开发的物理 AI 模型，现已在 GitHub 和 Foundry 上开放。

**IGX Thor：** 工业级实时物理 AI 边缘平台，支持建筑、制造、物流、医疗和太空探索等应用，现已正式商用。

### 生命科学

**BioNeMo 平台**更新：GPU 加速的基因组学工具、框架和 AI 模型套件，加速治疗发现。多家医疗和生命科学公司正使用 BioNeMo 处理数据和开发模型。

手术机器人领域：CMR Surgical、Johnson & Johnson MedTech 等公司成为首批采用 NVIDIA 物理 AI 工具的医疗设备合作伙伴。

### 商业前景

Jensen Huang 表示，预计 Blackwell 和 Vera Rubin 在 2027 年前的订单总额将达到 **1 万亿美元**。这一数字反映了全球 AI 基础设施投资的规模——从超大规模云服务商到企业数据中心，对 AI 算力的需求仍在指数级增长。

---

## 技术要点

1. **CG-HBM 的突破性意义**：传统 GPU 架构中，GPU die 与 HBM 通过硅中介层（silicon interposer）连接，带宽受限。CG-HBM 直接堆叠消除了这一瓶颈，3-4 倍的算力密度提升主要来自内存带宽的释放。

2. **Groq LPU 的定位**：Groq 的确定性计算架构（无缓存层级、编译时调度）在延迟敏感的推理场景中具有独特优势。将其整合为 Vera Rubin 平台的推理加速器，是 NVIDIA 在"训练用 GPU + 推理用 LPU"方向的首次尝试。

3. **从 DLSS 到神经渲染**：DLSS 5 的神经着色标志着 AI 从图形后处理（DLSS 1-4）进入渲染核心。这可能从根本上改变游戏和专业可视化的渲染管线架构。

4. **物理 AI 的系统性布局**：NVIDIA 正在构建从芯片（IGX Thor）到模型（Cosmos）到框架（Isaac Lab-Arena）的完整物理 AI 技术栈，目标是将 AI 从数字世界扩展到物理世界。

5. **1 万亿美元订单的信号意义**：这一数字不仅反映 NVIDIA 的商业前景，更是整个 AI 行业投资规模的风向标。它表明大规模 AI 基础设施建设周期仍处于上升期。

---

## 深度解读

### 算力军备竞赛的加速

Vera Rubin 的 3-4 倍算力密度提升意味着，两年后同等功耗和面积的数据中心将具备 3-4 倍的 AI 训练和推理能力。这将进一步降低 AI 的边际成本，加速模型能力的提升。

### GPU+LPU 双轨推理架构

收购 Groq 后的首款整合产品暗示 NVIDIA 正在构想一种新的推理架构：GPU 处理复杂的、需要灵活计算的任务，LPU 处理标准化的、延迟敏感的推理工作负载。这种分工可能成为下一代 AI 数据中心的标准配置。

### 从芯片公司到 AI 基础设施公司

GTC 2026 的发布矩阵——芯片（Vera Rubin）、软件平台（NemoClaw）、开发框架（Isaac Lab-Arena）、预训练模型（Cosmos）——清楚地展示了 NVIDIA 的战略转型：从"卖 GPU"到"卖完整的 AI 基础设施解决方案"。

---

## 原文链接

- GTC 2026 新闻汇总：[https://blogs.nvidia.com/blog/gtc-2026-news/](https://blogs.nvidia.com/blog/gtc-2026-news/)
- 发布日期：2026 年 3 月 16 日
- 研究机构：NVIDIA

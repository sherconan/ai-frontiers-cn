---
title: "Leanstral: Open-Source Foundation for Trustworthy Vibe-Coding"
description: "Mistral AI 发布首个专为 Lean 4 设计的开源代码证明智能体 Leanstral——拥有 1200 亿总参数但仅 60 亿活跃参数，能以 Claude Sonnet 十五分之一的成本实现更高的定理证明性能（pass@2 得分 26.3 vs Sonnet 的 23.7），为 AI 生成的代码提供数学级别的正确性保证。"
head:
  - - meta
    - property: og:title
      content: "Leanstral: Open-Source Foundation for Trustworthy Vibe-Coding"
  - - meta
    - property: og:description
      content: "Mistral AI 发布首个专为 Lean 4 设计的开源代码证明智能体 Leanstral——拥有 1200 亿总参数但仅 60 亿活跃参数，能以 Claude Sonnet 十五分之一的成本实现更高的定理证明性能（pass@2 得分 26.3 vs Sonnet 的 23.7），为 AI 生成的代码提供数学级别的正确性保证。"
  - - meta
    - property: og:type
      content: article
---

# Leanstral: Open-Source Foundation for Trustworthy Vibe-Coding

**原标题:** Leanstral: Open-Source foundation for trustworthy vibe-coding
**中文标题:** Leanstral：开源形式化证明智能体，让 AI 编程真正可信
**作者:** Mistral AI | **发布日期:** 2026年3月16日
**原文链接:** [https://mistral.ai/news/leanstral](https://mistral.ai/news/leanstral)

---

## 一句话摘要

Mistral AI 发布首个专为 Lean 4 设计的开源代码证明智能体 Leanstral——拥有 1200 亿总参数但仅 60 亿活跃参数，能以 Claude Sonnet 十五分之一的成本实现更高的定理证明性能（pass@2 得分 26.3 vs Sonnet 的 23.7），为 AI 生成的代码提供数学级别的正确性保证。

---

## 🟢 通俗解读

### AI 写的代码，你敢用吗？

当前 AI 编程助手（Copilot、Cursor、Claude Code）面临一个根本问题：**AI 写的代码可能有 bug，而且你很难发现**。代码通过了测试不代表它是正确的——测试可能覆盖不全。

Leanstral 的解决方案是：**用数学来证明代码是对的**。

### 什么是"形式化证明"？

普通的代码测试就像抽样检查——你测了 100 种情况都通过了，但第 101 种可能就出错。形式化证明则不同——它用数学方法证明代码在**所有可能的情况下**都是正确的。零概率出错。

Lean 4 是目前最先进的定理证明工具，能表达从复杂数学对象到 Rust 代码安全属性的各种规格说明。

### Leanstral 的优势

- **性能超越 Claude**：在定理证明基准测试中，Leanstral 得分 26.3，比 Claude Sonnet 高 2.6 分
- **成本仅为 1/15**：完成同样的测试，Leanstral 花 $36，Claude 花 $549
- **完全开源**：Apache 2.0 许可证，可自由部署
- **即插即用**：已集成到 Mistral Vibe CLI，零配置即可使用

### 这意味着什么？

想象一下：AI 帮你写一段处理银行交易的代码，然后 Leanstral 自动证明这段代码不会出现金额计算错误、不会丢失交易记录、不会产生竞态条件。这就是"可信 AI 编程"的未来。

---

## 🔴 技术深入

### 模型架构

- **总参数**：1200 亿（120B）
- **活跃参数**：60 亿（6B）/token
- **架构类型**：稀疏混合专家（Sparse MoE）
- **许可证**：Apache 2.0
- **模型标识**：Leanstral-2603

稀疏 MoE 架构使得模型在保持大容量的同时实现高效推理——每个 token 只激活 6B 参数，大幅降低了推理成本。

### 基准测试性能

| 指标 | Leanstral | Claude Sonnet | 差距 |
|------|-----------|--------------|------|
| pass@2 | 26.3 | 23.7 | +2.6 |
| pass@16 | 31.9 | 23.9 | +8.0 |
| 运行成本 | $36 | $549 | 15x 便宜 |

注意 pass@16 的差距更大（+8.0），说明 Leanstral 在多次采样时的方差更小、更稳定。

### Lean 4 的技术价值

Lean 4 不仅仅是一个定理证明器，它是一个**类型论编程语言**：
- 能表达依赖类型（Dependent Types），实现代码与规格说明的统一
- 支持归纳类型和模式匹配，适合形式化软件属性
- 有活跃的数学形式化社区（Mathlib 库）
- 能验证从纯数学到系统软件的广泛规格说明

### 部署方式

Leanstral 提供三种使用方式：

1. **Mistral Vibe 集成**：零配置，直接在 Vibe CLI 中使用
2. **免费 API**：`labs-leanstral-2603` 端点
3. **自托管**：下载开源权重，在自己的基础设施上运行

### 对"Vibe Coding"范式的影响

"Vibe Coding"——用自然语言描述需求，AI 自动生成代码——面临的最大批评就是代码质量不可控。Leanstral 的出现为 Vibe Coding 提供了一个"安全网"：

```
用户描述需求 → AI 生成代码 → Leanstral 证明正确性
     ↑                              ↓
     └──── 如果证明失败，重新生成 ←──┘
```

这个循环使得 Vibe Coding 从"快速但不可靠"变为"快速且可证明正确"。

---

## 延伸思考

1. **形式化证明的覆盖率**：Lean 4 能覆盖所有类型的软件属性吗？实际工程中，很多需求难以形式化表达，Leanstral 的实际应用边界在哪里？
2. **证明与测试的关系**：形式化证明是否会完全取代测试？还是说两者会长期共存，各自覆盖不同层面的正确性保证？
3. **开源策略**：Mistral 选择完全开源 Leanstral，这对其商业模式意味着什么？是否在用免费工具构建开发者生态，再通过平台服务变现？
4. **AI 安全的新维度**：如果 AI 生成的代码可以被形式化证明，这对 AI 安全研究（如防止 AI 编写恶意代码）有何启示？

---

```mermaid
graph TD
    A[Leanstral<br/>120B 总参 / 6B 活跃] --> B[核心能力]
    A --> C[部署方式]
    A --> D[性能]

    B --> B1[Lean 4 定理证明]
    B --> B2[代码正确性验证]
    B --> B3[形式化规格说明]

    C --> C1[Mistral Vibe<br/>零配置集成]
    C --> C2[免费 API<br/>labs-leanstral-2603]
    C --> C3[开源自托管<br/>Apache 2.0]

    D --> D1[pass@2: 26.3<br/>超越 Sonnet]
    D --> D2[成本 $36<br/>vs Sonnet $549]
    D --> D3[pass@16: 31.9<br/>稳定性更佳]

    B2 --> E[Vibe Coding<br/>安全网]
    E --> E1[生成代码 → 证明正确性<br/>→ 失败则重新生成]
```

*本文为 Mistral AI 官方博客文章的深度中文解读。*

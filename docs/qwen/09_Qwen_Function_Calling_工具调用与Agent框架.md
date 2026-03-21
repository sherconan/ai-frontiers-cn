# 🔧 Qwen Function Calling: Tool Use & Agent Framework

> 📊 难度：⭐⭐ | ⏱️ 阅读：12分钟 | 📅 2025-2026年 | 🏷️ 函数调用, Agent框架, MCP, 通义千问

**原标题:** Function Calling - Qwen Documentation / Qwen-Agent Framework
**中文标题:** Qwen 函数调用与工具使用：从协议设计到 Agent 框架的完整指南

## 📝 一句话摘要

Qwen 团队构建了以 Hermes 风格工具调用协议为核心、Qwen-Agent 框架为实现的完整 Agent 生态，支持并行、多步骤和多轮工具调用，通过 MCP 协议扩展外部工具接入，并为 Qwen3 系列模型提供了"思考"与"非思考"双模式的工具使用能力。

---

## 🏗️ 工具调用架构

```mermaid
graph TB
    subgraph 用户请求
        U[👤 用户: "北京和上海天气如何?"]
    end

    subgraph Qwen3模型
        D[🧠 模型决策<br/>Think / No-Think 模式]

        subgraph 工具调用能力
            P[⚡ 并行调用<br/>同时查两个城市]
            MS[🔗 多步骤调用<br/>查航班→查天气→建议]
            MT[🔄 多轮调用<br/>跨对话持续使用]
        end
    end

    subgraph 工具生态
        H[📋 Hermes格式<br/>tool_call标签]
        MCP[🔌 MCP协议<br/>标准化工具接入]
        VA[🚀 vLLM集成<br/>自动解析工具调用]
    end

    subgraph Qwen-Agent框架
        QA[🤖 内置模板 + 解析器]
        TN[💭 Think/No-Think模式]
        OAI[🔗 OpenAI兼容API]
    end

    U --> D
    D --> P
    D --> MS
    D --> MT
    P --> H
    H --> MCP
    QA --> H
    QA --> TN
    QA --> OAI

    style D fill:#4CAF50,color:white
    style MCP fill:#2196F3,color:white
    style QA fill:#FF9800,color:white
```

---

## 📖 核心内容

### 🔍 函数调用的基本概念

函数调用是连接大语言模型与外部系统的标准化协议：工具定义 → 模型决策 → 参数生成 → 结果反馈 → 持续交互。

### 📋 Qwen 的工具调用协议

Qwen3 系列推荐使用 **Hermes 风格**模板，通过 `<tool_call>` 和 `</tool_call>` 标签分隔工具调用指令和普通文本。

### 🎯 核心能力维度

**并行工具调用**：单次生成中同时调用多个不相互依赖的工具。

**多步骤工具调用**：规划复杂的工具使用链路，每一步输出作为下一步输入上下文。

**多轮工具调用**：在多轮对话中根据历史和工具调用结果决定是否需要新的调用。

### 🤖 Qwen-Agent 框架

官方推荐的 Agent 开发框架，内置工具调用模板和解析器，支持 Think/No-Think 双模式和 MCP 协议。

### ⚡ vLLM 集成

通过 `--enable-auto-tool-choice` 和 `--tool-call-parser hermes` 标志，vLLM 自动解析模型输出中的工具调用指令。

### ⚠️ 重要注意事项

官方文档明确指出："模型的生成并不保证总是遵循协议"。生产环境中需要实现健壮的错误处理。

---

## 🔑 技术要点

1. **Hermes 风格协议**：通过结构化标记实现文本与工具调用的清晰分离
2. **三维工具调用能力**：并行、多步骤、多轮——覆盖全部场景
3. **Think/No-Think 双模式**：推理模型在工具调用时可选择是否展示思维链
4. **MCP 协议原生支持**：标准化接入工具生态
5. **生产环境警示**：官方透明地说明模型输出不保证协议一致性

---

## 🧠 深度解读

### 🟢 通俗版

函数调用就像给AI配了一套"工具箱"。以前AI只能用嘴巴说，现在它可以打电话查天气、上网搜信息、运行代码——然后把结果告诉你。

Qwen的做法是：定义了一套标准的"工具使用说明书"（Hermes格式），还提供了一个"工具管理员"（Qwen-Agent框架）帮你管理这些工具。而且AI可以同时用多个工具（并行调用），或者分步完成复杂任务（多步骤调用）。

### 🔴 深入版

Qwen 的函数调用生态反映了一个关键趋势：**工具使用正在从模型的"附加功能"变成"核心能力"**。

**协议选择的哲学**：选择 Hermes 风格而非自定义格式，体现了"拥抱社区标准"的策略。

**Qwen-Agent 的定位**：专注于为 Qwen 模型提供最优的工具调用体验，确保调用模板与模型训练时的格式完全一致。

**从 Qwen2.5 到 Qwen3 的演进**：工具调用能力经历了从基础支持到多模态工具调用再到 Agent 评估基准的快速迭代。

**坦诚的文档风格**：直接说明"模型不保证遵循协议"，帮助开发者建立正确的预期。

---

## 💡 延伸思考

1. **工具调用的可靠性上限在哪里？** 是否需要在模型架构层面（如 constrained decoding）来保证格式正确性？
2. **MCP 会成为 AI 工具集成的 HTTP 吗？** 能否真正成为跨模型、跨平台的通用标准？
3. **Agent 评估的困境**：如何评估 Agent 在真实场景中的鲁棒性和效率？

---

## 🔗 原文链接
- Qwen 函数调用文档: https://qwen.readthedocs.io/en/latest/framework/function_call.html
- Qwen-Agent GitHub: https://github.com/QwenLM/Qwen-Agent
- Alibaba Cloud 函数调用指南: https://www.alibabacloud.com/help/en/model-studio/qwen-function-calling

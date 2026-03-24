# Qwen Function Calling: Tool Use & Agent Framework

**原标题:** Function Calling - Qwen Documentation / Qwen-Agent Framework
**中文标题:** Qwen 函数调用与工具使用：从协议设计到 Agent 框架的完整指南

## 一句话摘要

Qwen 团队构建了以 Hermes 风格工具调用协议为核心、Qwen-Agent 框架为实现的完整 Agent 生态，支持并行、多步骤和多轮工具调用，通过 MCP 协议扩展外部工具接入，并为 Qwen3 系列模型提供了"思考"与"非思考"双模式的工具使用能力。

---

## 核心内容

### 函数调用的基本概念

函数调用（Function Calling）是连接大语言模型与外部系统的标准化协议。其基本流程为：

1. **工具定义**：应用通过 JSON Schema 格式向模型描述可用函数的名称、功能和参数
2. **模型决策**：模型根据用户请求判断是否需要调用工具，以及调用哪个工具
3. **参数生成**：模型生成符合 Schema 定义的函数调用参数
4. **结果反馈**：外部系统执行函数并将结果返回给模型
5. **持续交互**：模型基于工具返回结果继续推理和回复

### Qwen 的工具调用协议

Qwen3 系列推荐使用 **Hermes 风格**的工具调用模板。这是一种结构化的 prompt 格式，通过特定的标记（如 `<tool_call>` 和 `</tool_call>`）来分隔工具调用指令和普通文本。

工具定义的标准格式：
```json
{
  "type": "function",
  "function": {
    "name": "get_weather",
    "description": "获取指定城市的天气信息",
    "parameters": {
      "type": "object",
      "properties": {
        "city": {"type": "string", "description": "城市名称"}
      },
      "required": ["city"]
    }
  }
}
```

### 核心能力维度

**并行工具调用（Parallel Tool Calls）**
模型可以在单次生成中同时调用多个不相互依赖的工具。例如，用户询问"北京和上海的天气"，模型会同时生成两个独立的 `get_weather` 调用，而非顺序执行。

**多步骤工具调用（Multi-Step Tool Calls）**
模型能够规划复杂的工具使用链路。例如，先搜索航班信息，再查询目的地天气，最后综合两个结果给出旅行建议。每一步的输出都会作为下一步的输入上下文。

**多轮工具调用（Multi-Turn Tool Calls）**
在多轮对话中，模型能够根据对话历史和之前的工具调用结果，决定是否需要进行新的工具调用。这实现了持续的 Agent 行为。

### Qwen-Agent 框架

Qwen-Agent 是官方推荐的 Agent 开发框架，为 Qwen3 及以上版本提供了规范化的函数调用实现：

**安装**：
```bash
pip install -U qwen-agent
```

**核心优势**：
- 内置工具调用模板和解析器，大幅降低编码复杂度
- 自动处理 Hermes 格式的序列化和反序列化
- 支持 `think` 和 `no_think` 两种模式——开启 think 模式时，模型会在工具调用前展示推理过程
- 与 OpenAI 兼容的 API 接口

**MCP 协议支持**：
2025 年 5 月，Qwen 新增了 MCP（Model Context Protocol）Cookbook，使开发者可以通过标准化协议接入外部工具生态。这意味着任何遵循 MCP 规范的工具服务器都可以直接与 Qwen 模型交互。

### vLLM 集成

对于自部署场景，Qwen 提供了与 vLLM（版本 ≥ 0.8.5）的深度集成：

启动命令：
```bash
vllm serve Qwen/Qwen3-8B \
  --enable-auto-tool-choice \
  --tool-call-parser hermes
```

通过 `--enable-auto-tool-choice` 和 `--tool-call-parser hermes` 标志，vLLM 会自动解析模型输出中的工具调用指令，并通过 OpenAI 兼容 API 返回结构化的 tool_calls 字段。

### 重要注意事项

官方文档明确指出："模型的生成并不保证总是遵循协议"。这意味着在生产环境中，开发者必须：
- 实现健壮的错误处理，应对格式异常的模型输出
- 对工具调用参数进行类型验证
- 设置合理的重试机制

### 时间线与演进

- **2025年3月**：支持 `reasoning_content` 字段，调整默认 Function Call 模板（适用于 Qwen2.5 系列和 QwQ-32B）
- **2025年5月**：新增 Qwen3 Tool-call Demo 和 MCP Cookbook
- **2025年7月**：新增 Qwen3-Coder Tool-call Demo，支持 vLLM 原生 API 工具调用
- **2025年9月**：新增 Qwen3-VL Tool-call Demo，支持图像搜索等视觉工具
- **2026年1月**：开源 DeepPlanning Agent 评估基准，新增 Qwen-Agent 文档

---

## 技术要点

1. **Hermes 风格协议**：Qwen3 推荐的工具调用标准，通过结构化标记实现文本与工具调用的清晰分离，比自由格式的 JSON 输出更可靠
2. **三维工具调用能力**：并行、多步骤、多轮——覆盖了从简单查询到复杂 Agent 工作流的全部场景
3. **Think/No-Think 双模式**：推理模型（如 QwQ）在工具调用时可以选择是否展示思维链，平衡透明度和效率
4. **MCP 协议原生支持**：通过 Model Context Protocol 实现工具生态的标准化接入，避免每个工具都需要定制集成
5. **生产环境警示**：官方明确模型输出不保证协议一致性，要求开发者实现防御性编程——这种透明度在业界罕见

---

## 深度解读

Qwen 的函数调用生态反映了一个关键趋势：**工具使用正在从模型的"附加功能"变成"核心能力"**。

**协议选择的哲学**：Qwen3 选择 Hermes 风格而非自定义格式，体现了"拥抱社区标准"的策略。Hermes 格式由 NousResearch 等社区力量推动，已被多个开源模型采用，选择它意味着更好的工具生态兼容性。

**Qwen-Agent 的定位**：它不试图成为一个全面的 Agent 框架（如 LangChain 或 CrewAI），而是专注于为 Qwen 模型提供最优的工具调用体验。这种"模型原生框架"的策略确保了调用模板和解析逻辑与模型训练时的格式完全一致，减少了格式不匹配导致的失败率。

**从 Qwen2.5 到 Qwen3 的演进**：时间线显示，工具调用能力经历了从基础支持（2025年3月）到多模态工具调用（2025年9月）再到 Agent 评估基准（2026年1月）的快速迭代。每 2-3 个月一次重大更新的节奏，说明团队将工具使用视为差异化竞争的关键维度。

**坦诚的文档风格**：直接在官方文档中说明"模型不保证遵循协议"，这种透明度比许多竞品"只展示成功案例"的风格更有价值。它帮助开发者建立正确的预期，避免在生产环境中踩坑。

---

## 延伸思考

1. **工具调用的可靠性上限在哪里？** 即使是最强的模型，也无法 100% 遵循结构化输出协议。是否需要在模型架构层面（如 constrained decoding）来保证格式正确性，而非仅依赖微调？
2. **MCP 会成为 AI 工具集成的 HTTP 吗？** Model Context Protocol 正在获得越来越多模型和工具的支持，但它能否真正成为跨模型、跨平台的通用标准，还取决于 OpenAI 和 Anthropic 等头部玩家的态度
3. **Agent 评估的困境**：DeepPlanning 基准的开源表明，如何评估 Agent 的工具使用能力仍是开放问题。传统的准确率指标无法捕捉 Agent 在真实场景中的鲁棒性和效率

---

**原文链接:**
- Qwen 函数调用文档: https://qwen.readthedocs.io/en/latest/framework/function_call.html
- Qwen-Agent GitHub: https://github.com/QwenLM/Qwen-Agent
- Qwen-Agent PyPI: https://pypi.org/project/qwen-agent/
- Alibaba Cloud 函数调用指南: https://www.alibabacloud.com/help/en/model-studio/qwen-function-calling

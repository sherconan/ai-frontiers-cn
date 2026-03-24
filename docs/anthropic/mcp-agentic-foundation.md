# MCP 捐赠与智能体 AI 基金会成立：开放标准的里程碑

> **原标题：** Donating the Model Context Protocol and Establishing the Agentic AI Foundation
> **发布日期：** 2025年12月9日
> **原文链接：** https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation

---

## 一句话摘要

Anthropic 将其开创的模型上下文协议（MCP）捐赠给 Linux 基金会旗下新成立的"智能体 AI 基金会"（AAIF），联合 Block、OpenAI、Google、Microsoft、AWS 等巨头共建 AI 智能体开放标准生态。

---

## 完整核心内容翻译

### 总览

Anthropic 宣布将模型上下文协议（Model Context Protocol，MCP）捐赠给智能体 AI 基金会（Agentic AI Foundation，AAIF），该基金会是 Linux 基金会旗下的一个定向基金。AAIF 由 Anthropic、Block 和 OpenAI 联合创立，并获得 Google、Microsoft、AWS、Cloudflare 和 Bloomberg 的支持。

### MCP 采纳数据

MCP 推出一年以来，已实现显著的生态增长：

- **公共服务器：** 超过 **10,000** 个活跃 MCP 服务器部署在各类用例中
- **平台采纳：** 已集成到 ChatGPT、Cursor、Gemini、Microsoft Copilot 和 Visual Studio Code 中
- **基础设施支持：** 通过 AWS、Cloudflare、Google Cloud 和 Microsoft Azure 提供企业级部署选项

### 产品进展

Claude 目前内置了一个包含超过 **75个** MCP 驱动连接器的目录。Anthropic 近期推出了工具搜索（Tool Search）和程序化工具调用（Programmatic Tool Calling）功能，以优化生产规模的部署。11月25日发布的规范更新引入了异步操作、无状态特性、服务器身份验证和官方扩展。Python 和 TypeScript 的 SDK 实现了每月 **9700万次** 下载。

### 治理结构

Linux 基金会——被描述为"Linux 内核、Kubernetes、Node.js 和 PyTorch 等关键项目的管理者"——将负责监管 MCP，以及另外两个创始项目：Block 的 goose 和 OpenAI 的 AGENTS.md。MCP 的治理模式保持不变，优先考虑社区意见和透明决策。

### 战略使命

AAIF 的目标是确保智能体 AI 的开发保持"透明、协作，并符合公共利益——通过战略投资、社区建设和开放标准的共同开发"。

---

## 技术要点

1. **MCP 生态爆发增长：** 一年内达到 10,000+ 公共服务器、集成五大主流平台、SDK 月下载量达 9700万次，已成为事实标准
2. **协议技术演进：** 最新规范引入异步操作、无状态特性、服务器身份验证和官方扩展，从同步协议向生产级分布式架构演进
3. **竞争对手共建：** OpenAI（AGENTS.md）和 Block（goose）作为联合创始方加入，Google、Microsoft 等提供支持，标志着行业在智能体互操作性上达成共识
4. **Linux 基金会托管：** 参照 Kubernetes、PyTorch 等成功案例，将开源协议置于中立的行业基金会管理下，保障长期治理的中立性和可持续性
5. **工具搜索与程序化调用：** 新功能使 AI 智能体能够动态发现和调用工具，是实现真正自主智能体的关键基础设施

---

## 深度解读

MCP 捐赠给 Linux 基金会是 2025 年 AI 基础设施领域最重要的事件之一。它标志着 AI 智能体的互操作性从"各家自建"走向了"行业标准"的新阶段。

**从企业协议到行业标准的蜕变。** MCP 诞生于 Anthropic 内部，最初是为了让 Claude 能够更好地与外部工具和数据源交互。但仅仅一年时间，它就发展成了一个被 ChatGPT、Gemini、Copilot 等竞争产品共同采用的事实标准。Anthropic 选择在这个时间点将其捐赠给中立基金会，既是一种慷慨的开源行为，也是一个精明的战略选择——由 Anthropic 单独控制的标准，竞争对手可能随时会另起炉灶；但由 Linux 基金会托管的中立标准，对所有参与者都更有吸引力。

**"竞争对手联盟"的深层逻辑。** Anthropic 和 OpenAI 在模型层面是激烈的竞争对手，但它们在智能体基础设施层面选择了合作。这反映了一个行业共识：AI 智能体的价值不仅取决于模型能力，更取决于它们能够连接和操作的工具生态。一个碎片化的工具连接标准对所有人都是损失——工具开发者不愿为每个 AI 平台维护不同的集成，AI 平台也不愿被锁定在有限的工具生态中。

**9700万月下载量的含金量。** SDK 的下载量是衡量开发者生态活跃度的硬指标。每月 9700 万次的下载量（Python + TypeScript）意味着 MCP 已经深入渗透到开发者的工作流中。这种级别的采纳率创造了一种网络效应——越多工具支持 MCP，AI 平台就越有动力采用它；越多 AI 平台支持 MCP，工具开发者就越有动力实现它。

**异步操作和无状态特性的技术意义。** 11月的规范更新引入了异步操作和无状态特性，这是从"玩具协议"向"生产级基础设施"演进的关键一步。异步操作允许 AI 智能体同时调用多个工具而不必等待每个工具的响应；无状态特性则使得 MCP 服务器可以像微服务一样水平扩展，为企业级部署扫清了障碍。

---

## 延伸思考

1. **标准之争的下一阶段：** MCP 目前的主导地位是否不可撼动？如果 Meta（Llama 生态）或其他大型 AI 公司推出竞争标准，行业是否会再次碎片化？
2. **AGENTS.md 与 MCP 的互补关系：** OpenAI 的 AGENTS.md 与 MCP 在定位上有何差异？两者是互补还是竞争？基金会将如何协调可能的标准冲突？
3. **安全隐患：** 10,000+ 公共 MCP 服务器意味着巨大的攻击面。恶意 MCP 服务器是否可能成为新的安全威胁向量？协议层面如何保障安全？
4. **商业模式的影响：** 当所有 AI 平台都通过相同协议访问工具时，竞争差异化将转向何处？模型能力、用户体验、还是垂直行业深度？
5. **对开发者生态的影响：** MCP 是否会像 HTTP 之于 Web 一样，成为 AI 智能体时代的基础协议？如果是，围绕它将诞生怎样的生态系统和商业机会？

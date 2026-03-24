# New Tools for Building Agents

## 原标题
New tools for building agents

## 中文标题
构建AI智能体的新工具：Responses API、Agents SDK与全新开发范式

## 一句话摘要
2025年3月11日，OpenAI发布了面向AI智能体开发的全套工具，包括Responses API、内置的Web搜索/文件搜索/计算机操作工具，以及开源的Agents SDK，标志着AI应用从"对话"向"行动"的范式转变。

---

## 核心内容

### 发布背景

2025年3月11日，OpenAI发布了首批帮助开发者和企业构建实用、可靠智能体（Agent）的基础构建模块。OpenAI将智能体定义为"能够代表用户独立完成任务的系统"——这一定义将AI的角色从被动的问答工具提升为主动的任务执行者。

### Responses API：新一代API基础设施

Responses API是OpenAI为智能体开发打造的全新API原语，它融合了Chat Completions API的简洁性与Assistants API的工具使用能力。

基于Assistants API测试版的开发者反馈，OpenAI在Responses API中进行了多项关键改进，并正在努力实现Assistants API与Responses API之间的完整功能对等，包括支持类Assistant和Thread对象，以及代码解释器工具。

Responses API不单独收费——token和工具使用按标准费率计费，大幅降低了智能体开发的准入门槛。

### 三大内置工具

**Web搜索（Web Search）**：在早期测试中，开发者已利用Web搜索构建了购物助手、研究智能体和旅行预订智能体等需要实时网络信息的应用。模型可以直接搜索互联网获取最新信息，无需开发者自行集成搜索引擎API。

**文件搜索（File Search）**：Responses API内置的文件搜索工具能够快速扫描企业数据库中的文件以检索信息。这使得智能体能够基于企业内部知识库进行精准回答，而无需将所有文档放入上下文窗口。

**计算机操作（Computer Use）**：开发者可以通过Responses API调用OpenAI的计算机使用代理（CUA）模型——该模型即是Operator背后的驱动力。模型能够生成鼠标和键盘操作指令，使开发者可以自动化诸如数据录入和应用工作流等计算机操作任务。

### Agents SDK：开源智能体编排框架

OpenAI发布了全新的开源Agents SDK，支持Python和TypeScript，提供了以下核心能力：

- **工具使用（Tool Use）**：标准化的工具调用接口
- **任务交接（Handoffs）**：智能体之间的协作与任务传递
- **护栏（Guardrails）**：内置的安全约束机制
- **追踪（Tracing）**：完整的可观测性和调试能力

值得注意的是，Agents SDK是提供商无关的（provider-agnostic），提供了使用非OpenAI模型的文档化路径，体现了开放的生态理念。

### AgentKit：企业级智能体平台

2025年10月，OpenAI进一步发布了AgentKit，一套面向企业的完整智能体工具集：

- **Agent Builder**：用于创建和版本管理多智能体工作流的可视化画布
- **Connector Registry**：供管理员集中管理数据和工具在OpenAI产品间连接方式的中枢
- **ChatKit**：用于嵌入可定制的基于聊天的智能体体验的工具包

### Assistants API的落幕

OpenAI宣布计划正式弃用Assistants API，目标停用日期为2026年中期。2025年8月26日，使用Assistants API的开发者收到了弃用通知，API将于2026年8月26日正式移除。OpenAI将提供清晰的迁移指南，确保开发者可以保留所有数据并迁移应用。

---

## 技术要点

1. **Responses API统一架构**：将Chat Completions的简洁性与Assistants API的工具能力合二为一，消除了开发者在两个API之间的选择困难
2. **计算机操作能力开放**：CUA模型（Operator的底层技术）首次通过API向开发者开放，使"AI操控计算机"从产品功能变为开发者可调用的基础能力
3. **开源且提供商无关**：Agents SDK的开源和多供应商支持策略，表明OpenAI在智能体生态中选择了"平台化"而非"封闭化"路线
4. **集成可观测性**：内置的追踪和检查工具让智能体工作流的调试从"黑箱摸索"变为"透明追踪"
5. **从Assistants到Responses的范式迁移**：标志着OpenAI对"有状态长对话"（Assistants）向"无状态工具调用"（Responses）的架构理念转变

---

## 深度解读

这次发布是OpenAI从"模型提供商"向"智能体平台"战略转型的关键一步。

**API哲学的根本转变**：Assistants API的设计理念是"在服务器端维护对话状态"，这虽然简化了开发但限制了灵活性。Responses API回归了"无状态调用+内置工具"的设计哲学，将状态管理的主导权交还给开发者，同时通过内置工具降低了常见智能体能力的集成成本。这一转变反映了OpenAI对智能体应用需求的深入理解——开发者需要的不是一个替他们管理状态的平台，而是一组强大的、可组合的能力原语。

**计算机操作的战略意义**：CUA能力的API开放可能是本次发布中最被低估的变化。当AI不仅能"说"还能"做"——实际操控计算机界面执行任务时，RPA（机器人流程自动化）等传统自动化领域将面临根本性的颠覆。基于视觉理解和操作生成的智能体，将比基于规则的RPA机器人更灵活、更易适应界面变化。

**开源策略的考量**：Agents SDK选择开源且支持非OpenAI模型，看似"利他"，实则是精明的平台策略。当Agents SDK成为智能体编排的事实标准时，OpenAI的模型和工具将自然获得最多的开发者关注和最优的集成体验，即便开发者可以使用其他模型。

**智能体生态的竞争格局**：这套工具的发布直接对标了LangChain、CrewAI等第三方智能体框架。OpenAI作为模型提供商推出官方编排SDK，既是"降维打击"也是必然——只有最了解模型能力边界的团队，才能设计出最优的编排框架。

---

## 延伸思考

1. Responses API的工具调用模式是否会催生一个"AI原生"的SaaS生态，每个SaaS服务都提供标准化的Agent工具接口？
2. 计算机操作能力的普及将如何改变企业IT自动化的投资方向？传统RPA厂商应如何应对？
3. Agents SDK的开源策略能否真正建立起像Kubernetes那样的行业标准，还是会在竞争中被分叉和碎片化？
4. 当智能体可以自主搜索网络、操作文件和控制计算机时，如何构建有效的权限管理和审计机制以确保安全？

---

## 原文链接
https://openai.com/index/new-tools-for-building-agents/

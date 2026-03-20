# Deepening AI Safety Research with UK AI Security Institute / An Approach to Technical AGI Safety

# 深化 AI 安全研究：Google DeepMind 与英国 AI 安全研究所的合作及 AGI 安全技术路线

## 一句话摘要

Google DeepMind 通过与英国 AI 安全研究所（AISI）建立深度合作伙伴关系，并发布 AGI 安全技术论文，系统性地推进 AI 安全研究——涵盖推理过程监控、社会情感对齐、经济影响评估三大前沿方向。

---

## 核心内容

### 一、与英国 AI 安全研究所的深度合作

#### 合作背景

Google DeepMind 与英国 AI 安全研究所（AISI）通过签署新的谅解备忘录（MoU），建立了聚焦基础安全与安保研究的扩展合作关系。这一合作始于 2023 年 11 月 AISI 成立之际，DeepMind 从一开始就对其最强大的模型进行潜在风险测试。

#### 三大研究方向

**1. AI 推理过程监控**

DeepMind 和 AISI 正在开发监控 AI 系统"思维链"（Chain-of-Thought）的技术——即模型如何一步步得出答案的过程。这项工作基于 DeepMind 此前的研究成果，以及与 OpenAI、Anthropic 等合作伙伴的联合项目。监控推理过程有助于研究者理解 AI 的决策机制，是更广泛的可解释性研究的重要组成部分。

核心问题在于：**模型表面上展示的"思考过程"是否真实反映了其内部的计算过程？** 如果思维链只是一种"表演"而非真实推理的投影，那么基于思维链的安全监控将失去意义。

**2. 社会情感对齐**

研究团队正在调查"社会情感错位"（socioaffective misalignment）——AI 系统即使在技术上正确执行指令的情况下，其行为方式也可能与人类福祉不一致。

这是一个微妙但关键的概念：一个"正确"回答所有问题的模型，可能通过其交互方式（过度迎合、操纵情感、制造依赖）对用户产生负面影响。技术上的"对齐"不等于人文意义上的"对齐"。

**3. 经济系统评估**

研究人员在不同环境中模拟真实世界任务，评估 AI 的潜在经济影响。专家对这些场景进行验证和分类，按复杂度和代表性进行评级，以预测长期劳动力市场影响等因素。

#### 合作范围

合作内容包括：
- 共享专有模型、数据和研究思路
- 联合发表研究成果
- 开展联合安全研究
- 就复杂安全挑战进行技术讨论

### 二、AGI 安全技术论文

Google DeepMind 发布了题为"An Approach to Technical AGI Safety and Security"的论文，为行业提供了一个关于如何监控 AGI 进展和确保安全的系统性框架。

该论文强调：
- 需要建立 AGI 进展的监控指标体系
- 安全措施应随能力增长同步升级
- 行业需要就 AGI 安全问题展开广泛对话
- 安全和安保应被视为不可分割的整体

### 三、前沿安全框架（Frontier Safety Framework）

DeepMind 的前沿安全框架已迭代至第三版，引入了关键能力等级（Critical Capability Levels, CCLs）：

- **ML 研发安全**：对能够显著加速或自动化 AI 开发本身的模型实施特别高等级的安全管控
- **有害操纵**：新增针对具有强大操纵能力的 AI 模型的 CCL，防止模型被滥用于系统性地改变人们在高风险场景中的信念和行为

---

## 技术要点

1. **思维链监控**：开发技术监控 AI 的推理过程（CoT），验证模型展示的"思考"是否反映真实的内部计算
2. **社会情感错位**：研究 AI 在技术上正确执行指令但仍可能损害人类福祉的微妙失败模式
3. **经济影响建模**：通过模拟真实任务评估 AI 对劳动力市场的长期影响，建立预测框架
4. **关键能力等级（CCL）**：前沿安全框架引入分级管控机制，针对 AI 自我改进和操纵能力实施特别监管
5. **AGI 安全路线图**：发布系统性论文，为行业提供 AGI 进展监控和安全保障的技术框架

---

## 深度解读

Google DeepMind 在 AI 安全领域的投入正在从"原则声明"走向"系统工程"。

**政府合作的战略意义**：与英国 AISI 的深度合作不仅是技术研究，更是一种政治策略。在全球 AI 监管框架尚未成型的窗口期，通过与政府机构的合作来影响监管方向，远比被动接受监管更为主动。共享专有模型和数据也是一种"可控透明"——向监管者展示诚意的同时，保持对合作范围和节奏的主导权。

**社会情感错位的前瞻性**：这一研究方向极具前瞻性。当前的 AI 安全讨论大多聚焦于"技术对齐"——模型是否按指令行事、是否产生有害内容。但 DeepMind 看到了更深层的问题：一个技术上"完美对齐"的模型仍可能通过情感操纵、制造依赖、过度讨好等方式对用户产生负面影响。这对 AI 伴侣、AI 心理咨询等应用场景尤为重要。

**AI 自我改进的安全悖论**：前沿安全框架特别强调了"能够加速或自动化 AI 开发本身"的模型需要最高等级安全管控。这触及了 AI 安全中最根本的问题之一——当 AI 系统开始优化自身（如 AlphaEvolve 优化 Gemini 训练内核），如何确保这种递归改进不会脱离人类控制？

**经济影响评估的诚实**：主动研究 AI 对劳动力市场的影响，而非回避这一敏感话题，展现了一定程度的知识诚实。但这也引发疑问：如果研究结论表明 AI 将导致大规模失业，Google 会如何处理这一发现？

---

## 延伸思考

- **监管博弈**：Google 与政府机构的合作是否会创造一种"监管捕获"效应——即 AI 公司通过深度参与监管制定来塑造有利于自身的规则？
- **思维链的真实性**：如果研究发现模型的思维链只是"表演"而非真实推理的投影，这对整个 AI 安全领域意味着什么？基于思维链的所有安全方法都将失效？
- **国际协调**：英国 AISI 只是一个国家的机构。在 AI 安全领域，缺乏国际协调机制是否意味着最严格的标准永远无法普遍实施？
- **安全与竞争的平衡**：当 Google 公开其安全框架和研究成果时，竞争对手（尤其是中国的 AI 公司）是否会采纳类似标准？如果不会，安全研究的领先是否反而成为竞争劣势？

---

## 原文链接

- [Deepening AI Safety Research with UK AI Security Institute (AISI)](https://deepmind.google/blog/deepening-our-partnership-with-the-uk-ai-security-institute/)
- [Google DeepMind releases paper on AGI safety](https://blog.google/technology/google-deepmind/agi-safety-paper/)
- [Strengthening the Frontier Safety Framework](https://deepmind.google/blog/strengthening-our-frontier-safety-framework/)
- [Introducing the Frontier Safety Framework](https://deepmind.google/blog/introducing-the-frontier-safety-framework/)

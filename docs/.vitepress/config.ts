import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI 前沿精读',
  description: '全球顶尖 AI 实验室博客的中文翻译与深度解读 — 覆盖 Anthropic、OpenAI、Google DeepMind、Meta、DeepSeek 等 15+ AI 实验室，200+ 篇深度文章',
  lang: 'zh-CN',
  base: '/ai-frontiers-cn/',
  lastUpdated: true,
  cleanUrls: true,

  // Sitemap generation
  sitemap: {
    hostname: 'https://sherconan.github.io/ai-frontiers-cn/',
  },

  head: [
    // Basic meta
    ['meta', { name: 'author', content: 'AI 前沿精读' }],
    ['meta', { name: 'keywords', content: 'AI, 人工智能, Anthropic, OpenAI, DeepMind, Meta AI, DeepSeek, Qwen, Kimi, Claude, GPT, Gemini, 大语言模型, LLM, 翻译, 解读, AI安全, 对齐, Agent, 智能体' }],
    ['meta', { name: 'robots', content: 'index, follow' }],

    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: 'AI 前沿精读' }],
    ['meta', { property: 'og:title', content: 'AI 前沿精读 — 全球顶尖 AI 实验室博客中文解读' }],
    ['meta', { property: 'og:description', content: '覆盖 Anthropic、OpenAI、Google DeepMind、DeepSeek 等 15+ 实验室，200+ 篇深度翻译与解读文章' }],
    ['meta', { property: 'og:url', content: 'https://sherconan.github.io/ai-frontiers-cn/' }],

    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'AI 前沿精读' }],
    ['meta', { name: 'twitter:description', content: '全球顶尖 AI 实验室博客的中文翻译与深度解读' }],

    // Favicon
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🧠</text></svg>' }],

    // JSON-LD structured data
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'AI 前沿精读',
      'alternateName': 'AI Frontiers CN',
      'url': 'https://sherconan.github.io/ai-frontiers-cn/',
      'description': '全球顶尖 AI 实验室博客的中文翻译与深度解读',
      'inLanguage': 'zh-CN',
      'publisher': {
        '@type': 'Organization',
        'name': 'AI 前沿精读',
        'url': 'https://sherconan.github.io/ai-frontiers-cn/'
      },
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://sherconan.github.io/ai-frontiers-cn/?search={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    })],

    // Preconnect for fonts
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
  ],

  themeConfig: {
    logo: '🧠',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '海外实验室',
        items: [
          { text: '🧠 Anthropic (62)', link: '/anthropic/' },
          { text: '🤖 OpenAI (28)', link: '/openai/' },
          { text: '🔬 DeepMind (27)', link: '/deepmind/' },
          { text: '🦙 Meta AI (7)', link: '/meta-ai/' },
          { text: '⚡ xAI / Grok (2)', link: '/xai/' },
          { text: '🇪🇺 Mistral AI (4)', link: '/mistral/' },
          { text: '💚 NVIDIA (4)', link: '/nvidia/' },
          { text: '🤗 Hugging Face (2)', link: '/huggingface/' },
          { text: '🪟 Microsoft (1)', link: '/microsoft/' },
        ],
      },
      {
        text: '中国 AI',
        items: [
          { text: '🦊 DeepSeek (11)', link: '/deepseek/' },
          { text: '🌙 Kimi / 月之暗面 (8)', link: '/kimi/' },
          { text: '☁️ Qwen / 通义 (10)', link: '/qwen/' },
          { text: '🇨🇳 MiniMax / 智谱 / 百川 (3)', link: '/chinese-ai/' },
        ],
      },
      {
        text: '按主题',
        items: [
          { text: '🤖 Agent 构建', link: '/topics/agent' },
          { text: '🔒 安全与对齐', link: '/topics/safety' },
          { text: '🧪 推理能力', link: '/topics/reasoning' },
          { text: '🏗️ 工程实践', link: '/topics/engineering' },
          { text: '🚀 模型发布与架构', link: '/topics/models' },
          { text: '🕰️ 时间线', link: '/timeline/' },
        ],
      },
      {
        text: '研究者 & 论文',
        items: [
          { text: '📜 基础论文精读 (6)', link: '/researchers/#基础论文精读' },
          { text: '🎓 Karpathy (7)', link: '/researchers/#andrej-karpathy' },
          { text: '📝 Lilian Weng (6)', link: '/researchers/#lilian-weng-翁荔' },
          { text: '🛡️ Simon Willison (2)', link: '/researchers/#simon-willison' },
          { text: '🏗️ Chip Huyen (2)', link: '/researchers/#chip-huyen' },
          { text: '📊 更多研究者...', link: '/researchers/' },
        ],
      },
    ],

    sidebar: {
      '/anthropic/': [
        {
          text: 'Anthropic (58 篇)',
          collapsed: false,
          items: [
            { text: '📋 概览', link: '/anthropic/' },
          ],
        },
        {
          text: 'Agent 与工程实践',
          collapsed: false,
          items: [
            { text: 'Building Effective Agents', link: '/anthropic/building-effective-agents' },
            { text: 'Context Engineering', link: '/anthropic/context-engineering' },
            { text: 'Effective Harnesses', link: '/anthropic/effective-harnesses' },
            { text: 'Think Tool', link: '/anthropic/think-tool' },
            { text: 'Multi-Agent Research System', link: '/anthropic/multi-agent-research-system' },
            { text: 'Writing Tools for Agents', link: '/anthropic/writing-tools-for-agents' },
            { text: 'MCP 智能体基金会', link: '/anthropic/mcp-agentic-foundation' },
            { text: 'Contextual Retrieval', link: '/anthropic/contextual-retrieval' },
            { text: 'MCP 代码执行', link: '/anthropic/code-execution-mcp' },
            { text: '高级工具使用', link: '/anthropic/advanced-tool-use' },
            { text: '衡量 Agent 自主性', link: '/anthropic/measuring-agent-autonomy' },
            { text: '长时间运行任务', link: '/anthropic/long-running-tasks' },
          ],
        },
        {
          text: 'Claude Code',
          collapsed: false,
          items: [
            { text: 'Claude Code Best Practices', link: '/anthropic/claude-code-best-practices' },
            { text: 'Claude Code Sandboxing', link: '/anthropic/claude-code-sandboxing' },
            { text: 'Claude Code Auto Mode', link: '/anthropic/claude-code-auto-mode' },
            { text: 'Claude Code Channels', link: '/anthropic/claude-code-channels' },
          ],
        },
        {
          text: '安全与对齐',
          collapsed: false,
          items: [
            { text: 'Constitutional Classifiers', link: '/anthropic/constitutional-classifiers' },
            { text: 'Next-Gen Constitutional Classifiers', link: '/anthropic/next-gen-constitutional-classifiers' },
            { text: 'Alignment Faking', link: '/anthropic/alignment-faking' },
            { text: 'Agentic Misalignment', link: '/anthropic/agentic-misalignment' },
            { text: 'Emergent Misalignment', link: '/anthropic/emergent-misalignment' },
            { text: 'Reasoning Models 思维忠实度', link: '/anthropic/reasoning-models-dont-say-think' },
            { text: 'SHADE-Arena', link: '/anthropic/shade-arena' },
            { text: 'Prompt Injection 防御', link: '/anthropic/prompt-injection-defenses' },
            { text: '蒸馏攻击检测', link: '/anthropic/distillation-attacks' },
            { text: '少量样本毒化', link: '/anthropic/small-samples-poison' },
            { text: '无监督引出安全性', link: '/anthropic/unsupervised-elicitation-safety' },
            { text: '负责任扩展 v3', link: '/anthropic/responsible-scaling-v3' },
            { text: 'AuditBench', link: '/anthropic/auditbench' },
            { text: '自动对齐智能体 A3', link: '/anthropic/automated-alignment-agent' },
            { text: '抗AI评估设计', link: '/anthropic/ai-resistant-evals' },
            { text: '去赋权模式', link: '/anthropic/disempowerment-patterns' },
          ],
        },
        {
          text: '可解释性与模型研究',
          collapsed: false,
          items: [
            { text: 'Eval Awareness & BrowseComp', link: '/anthropic/eval-awareness-browsecomp' },
            { text: 'Introspection', link: '/anthropic/introspection' },
            { text: 'Model Welfare', link: '/anthropic/model-welfare' },
            { text: '电路追踪', link: '/anthropic/circuit-tracing' },
            { text: 'Persona Vectors', link: '/anthropic/persona-vectors' },
            { text: 'Persona Selection Model', link: '/anthropic/persona-selection-model' },
            { text: 'Vibe Physics', link: '/anthropic/vibe-physics' },
            { text: '野外的价值观', link: '/anthropic/values-wild' },
            { text: '基础设施噪声', link: '/anthropic/infrastructure-noise' },
            { text: '揭秘评估方法', link: '/anthropic/demystifying-evals' },
          ],
        },
        {
          text: '模型与产品',
          collapsed: false,
          items: [
            { text: 'Claude Opus 4.6', link: '/anthropic/claude-opus-4-6' },
            { text: 'Claude Sonnet 4.6', link: '/anthropic/claude-sonnet-4-6' },
            { text: 'Claude 新宪法', link: '/anthropic/claude-new-constitution' },
            { text: 'Claude 思考空间', link: '/anthropic/claude-space-to-think' },
            { text: 'Claude Cowork 桌面控制', link: '/anthropic/claude-cowork-computer-use' },
            { text: 'Project Fetch', link: '/anthropic/project-fetch' },
            { text: 'Project Vend', link: '/anthropic/project-vend' },
            { text: '机密推理', link: '/anthropic/confidential-inference' },
            { text: '终止极端对话', link: '/anthropic/end-subset-conversations' },
          ],
        },
        {
          text: '社会影响研究',
          collapsed: true,
          items: [
            { text: '81,000 人对 AI 的期望', link: '/anthropic/81k-people-want-from-ai' },
            { text: 'AI 如何改变工作', link: '/anthropic/ai-transforming-work' },
            { text: '软件开发经济指数', link: '/anthropic/impact-software-development' },
            { text: 'AI 辅助与编程技能', link: '/anthropic/ai-assistance-coding-skills' },
            { text: 'AI 生产力估算', link: '/anthropic/estimating-productivity-gains' },
            { text: '支持、建议与陪伴', link: '/anthropic/claude-support-companionship' },
            { text: 'Mozilla Firefox 安全', link: '/anthropic/mozilla-firefox-security' },
          ],
        },
      ],
      '/openai/': [
        {
          text: 'OpenAI (24 篇)',
          collapsed: false,
          items: [
            { text: '📋 概览', link: '/openai/' },
          ],
        },
        {
          text: '模型发布',
          collapsed: false,
          items: [
            { text: 'GPT-5.4 三变体架构', link: '/openai/gpt-5-4' },
            { text: 'GPT-5.4 mini & nano', link: '/openai/gpt-5-4-mini-nano' },
            { text: 'GPT-5.2 发布', link: '/openai/introducing-gpt-5-2' },
            { text: 'GPT-5 System Card', link: '/openai/gpt-5-system-card' },
            { text: 'o3 & o4-mini', link: '/openai/introducing-o3-and-o4-mini' },
            { text: 'Sora 2', link: '/openai/sora-2' },
            { text: 'Structured Outputs', link: '/openai/introducing-structured-outputs' },
            { text: 'Function Calling 更新', link: '/openai/function-calling-and-api-updates' },
          ],
        },
        {
          text: 'Agent 与工具',
          collapsed: false,
          items: [
            { text: 'Codex 发布', link: '/openai/introducing-codex' },
            { text: 'Agent 构建新工具', link: '/openai/new-tools-for-building-agents' },
            { text: 'Agentic AI 治理', link: '/openai/practices-for-governing-agentic-ai' },
            { text: '收购 Astral', link: '/openai/openai-acquires-astral' },
          ],
        },
        {
          text: '安全与对齐',
          collapsed: false,
          items: [
            { text: 'CoT 可监控性', link: '/openai/cot-monitorability' },
            { text: 'CoT 可控性', link: '/openai/reasoning-cot-controllability' },
            { text: 'Instruction Hierarchy', link: '/openai/instruction-hierarchy' },
            { text: 'Preparedness Framework v2', link: '/openai/preparedness-framework-v2' },
            { text: 'Model Spec', link: '/openai/introducing-the-model-spec' },
            { text: 'Weak-to-Strong 泛化', link: '/openai/weak-to-strong-generalization' },
            { text: 'OpenAI-Anthropic 联合评估', link: '/openai/openai-anthropic-safety-evaluation' },
            { text: 'SWE-bench Verified', link: '/openai/swe-bench-verified' },
          ],
        },
        {
          text: '科学研究',
          collapsed: true,
          items: [
            { text: 'GPT-5 蛋白质合成', link: '/openai/gpt5-protein-synthesis' },
            { text: 'GPT-5.2 理论物理突破', link: '/openai/gpt5-theoretical-physics' },
            { text: 'Planning for AGI', link: '/openai/planning-for-agi-and-beyond' },
          ],
        },
      ],
      '/deepmind/': [
        {
          text: 'Google DeepMind (25 篇)',
          collapsed: false,
          items: [
            { text: '📋 概览', link: '/deepmind/' },
          ],
        },
        {
          text: 'Gemini 系列',
          collapsed: false,
          items: [
            { text: 'Gemini 2.0 智能体时代', link: '/deepmind/01-Gemini2.0-智能体时代的新AI模型' },
            { text: 'Gemini 2.5 Pro 思考模型', link: '/deepmind/03-Gemini-2.5-Pro-思考模型' },
            { text: 'Gemini 2.5 计算机使用', link: '/deepmind/06-Gemini-2.5-计算机使用模型' },
            { text: 'Gemini 3 Flash', link: '/deepmind/14-Gemini-3-Flash-为速度而生的前沿智能' },
            { text: 'Gemini 3.1 Flash-Lite 规模化', link: '/deepmind/17-Gemini-3.1-Flash-Lite-规模化智能' },
            { text: 'Gemma 3 开源模型', link: '/deepmind/03-Gemma3-单GPU运行的最强开源模型' },
            { text: 'Gemma Scope 2', link: '/deepmind/11-Gemma-Scope-2-AI安全可解释性工具' },
          ],
        },
        {
          text: 'Alpha 系列',
          collapsed: false,
          items: [
            { text: 'AlphaFold 3 分子结构', link: '/deepmind/07-AlphaFold3-预测生命全部分子结构' },
            { text: 'AlphaFold 五年影响', link: '/deepmind/02-AlphaFold-五年影响力' },
            { text: 'AlphaProof & AlphaGeometry 2', link: '/deepmind/02-AlphaProof与AlphaGeometry2-AI攻克数学奥赛' },
            { text: 'AlphaEvolve 算法进化', link: '/deepmind/10-AlphaEvolve-Gemini驱动的算法进化智能体' },
            { text: 'AlphaGo 十年', link: '/deepmind/16-AlphaGo-十年-通往AGI之路' },
          ],
        },
        {
          text: '推理与科学',
          collapsed: false,
          items: [
            { text: 'Deep Think IMO 金牌', link: '/deepmind/01-Gemini-Deep-Think-IMO金牌' },
            { text: 'Deep Think 达到 IMO 金牌水平', link: '/deepmind/05-Gemini-Deep-Think达到IMO金牌水平' },
            { text: 'Deep Think 科学发现', link: '/deepmind/05-Gemini-Deep-Think-科学发现加速器' },
            { text: 'Deep Think 加速科研', link: '/deepmind/06-Gemini-Deep-Think加速科学发现' },
            { text: 'GenCast 天气预报', link: '/deepmind/08-GenCast-AI天气预报新范式' },
            { text: 'Project Astra', link: '/deepmind/09-Project-Astra-通往通用AI助手之路' },
          ],
        },
        {
          text: '安全与治理',
          collapsed: true,
          items: [
            { text: '前沿安全框架', link: '/deepmind/04-前沿安全框架-应对高级AI风险' },
            { text: '安全框架升级', link: '/deepmind/04-前沿安全框架升级' },
            { text: 'AGI安全与UK-AISI合作', link: '/deepmind/12-DeepMind-AGI安全与UK-AISI合作' },
            { text: '衡量AGI进展', link: '/deepmind/15-衡量AGI进展-认知框架' },
            { text: 'Agents 白皮书', link: '/deepmind/13-Google-Agents-智能体白皮书' },
            { text: 'Gemini 机器人合作', link: '/deepmind/16-DeepMind-Agile-Robots-Gemini机器人合作' },
            { text: 'Gemini 驱动 Apple Siri', link: '/deepmind/17-Gemini驱动Apple-Siri重构' },
          ],
        },
      ],
      '/deepseek/': [
        {
          text: 'DeepSeek (10 篇)',
          collapsed: false,
          items: [
            { text: '📋 概览', link: '/deepseek/' },
            { text: 'DeepSeek-V3 技术报告', link: '/deepseek/01-DeepSeek-V3技术报告解读' },
            { text: 'DeepSeek-R1 推理模型', link: '/deepseek/02-DeepSeek-R1推理模型解读' },
            { text: 'DeepSeek-V3.1 混合推理', link: '/deepseek/04-DeepSeek-V3.1混合推理模型解读' },
            { text: 'DeepSeek V4 Lite', link: '/deepseek/deepseek-v4-lite' },
            { text: 'Janus-Pro 多模态', link: '/deepseek/03-Janus-Pro多模态模型解读' },
            { text: 'Coder-V2 代码智能', link: '/deepseek/DeepSeek-Coder-V2_代码智能的开源突破' },
            { text: 'Math-V2 数学推理', link: '/deepseek/DeepSeekMath-V2_自验证数学推理' },
            { text: 'mHC 流形约束超连接', link: '/deepseek/05-mHC流形约束超连接解读' },
            { text: 'mHC 架构创新', link: '/deepseek/DeepSeek_mHC_流形约束超连接架构' },
          ],
        },
      ],
      '/kimi/': [
        {
          text: 'Kimi / 月之暗面 (8 篇)',
          collapsed: false,
          items: [
            { text: '📋 概览', link: '/kimi/' },
            { text: 'K1.5 强化学习扩展', link: '/kimi/01_Kimi_K1.5_强化学习扩展' },
            { text: 'K2 开放智能体智能', link: '/kimi/02_Kimi_K2_开放智能体智能' },
            { text: 'K2.5 多模态集群智能', link: '/kimi/05_Kimi_K2.5_原生多模态集群智能' },
            { text: 'K2.5 API 平台', link: '/kimi/07_Kimi_K2.5_API平台与开发者集成' },
            { text: 'MoBA 注意力机制', link: '/kimi/03_MoBA_混合块注意力机制' },
            { text: 'Researcher 端到端RL', link: '/kimi/04_Kimi_Researcher_端到端智能体RL' },
            { text: 'Code CLI 编程助手', link: '/kimi/06_Kimi_Code_CLI_开发者AI编程助手' },
            { text: '蒸馏攻击事件', link: '/kimi/08_Anthropic_揭露蒸馏攻击_Moonshot' },
          ],
        },
      ],
      '/qwen/': [
        {
          text: 'Qwen / 通义千问 (10 篇)',
          collapsed: false,
          items: [
            { text: '📋 概览', link: '/qwen/' },
            { text: 'Qwen 3.5 Small 高效多模态', link: '/qwen/10_Qwen3.5_Small_高效多模态小模型' },
            { text: 'Qwen3 混合思考', link: '/qwen/01_Qwen3_Think_Deeper_Act_Faster' },
            { text: 'QwQ-32B 强化学习', link: '/qwen/02_QwQ-32B_Reinforcement_Learning' },
            { text: 'Qwen2.5 基座模型', link: '/qwen/03_Qwen2.5_Foundation_Models' },
            { text: 'Qwen2.5-Omni 多模态', link: '/qwen/04_Qwen2.5-Omni_Multimodal' },
            { text: 'Qwen2.5-VL 视觉语言', link: '/qwen/07_Qwen2.5-VL_视觉语言模型' },
            { text: 'Qwen3-Coder 编程', link: '/qwen/05_Qwen3-Coder_Agentic_Coding' },
            { text: 'Qwen3-TTS 语音', link: '/qwen/08_Qwen3-TTS_语音合成与声音克隆' },
            { text: 'GSPO 强化学习', link: '/qwen/06_GSPO_Scalable_Reinforcement_Learning' },
            { text: 'Function Calling 工具调用', link: '/qwen/09_Qwen_Function_Calling_工具调用与Agent框架' },
          ],
        },
      ],
      '/meta-ai/': [
        {
          text: 'Meta AI (6 篇)',
          collapsed: false,
          items: [
            { text: '📋 概览', link: '/meta-ai/' },
            { text: 'SAM Audio 多模态音频分离', link: '/meta-ai/sam-audio-multimodal-separation' },
            { text: 'Llama 4 多模态', link: '/meta-ai/llama-4-multimodal-intelligence' },
            { text: 'Llama 3.1 405B', link: '/meta-ai/llama-3-1-405b-frontier-open-source' },
            { text: 'LlamaCon 2025', link: '/meta-ai/llamacon-2025' },
            { text: 'Llama Guard & CyberSecEval', link: '/meta-ai/llama-guard-cyberseceval-ai-safety' },
            { text: 'FAIR 具身 AI', link: '/meta-ai/fair-robotics-open-source' },
          ],
        },
      ],
      '/xai/': [
        {
          text: 'xAI / Grok (2 篇)',
          collapsed: false,
          items: [
            { text: '📋 概览', link: '/xai/' },
            { text: 'Grok 3 推理智能体', link: '/xai/grok-3-reasoning-agents' },
            { text: 'Grok Business & Enterprise', link: '/xai/grok-business-enterprise' },
          ],
        },
      ],
      '/mistral/': [
        {
          text: 'Mistral AI (4 篇)',
          collapsed: false,
          items: [
            { text: '📋 概览', link: '/mistral/' },
            { text: 'Mistral 3 模型家族', link: '/mistral/mistral-3-frontier-open-model' },
            { text: 'Forge 企业定制平台', link: '/mistral/forge-enterprise-model-platform' },
            { text: 'Le Chat AI 助手', link: '/mistral/le-chat-ai-assistant-platform' },
            { text: 'Mistral Large 2', link: '/mistral/mistral-large-2-frontier-open-model' },
          ],
        },
      ],
      '/chinese-ai/': [
        {
          text: '其他中国 AI (3 篇)',
          collapsed: false,
          items: [
            { text: '📋 概览', link: '/chinese-ai/' },
            { text: 'MiniMax M2.5', link: '/chinese-ai/MiniMax-M2.5_以二十分之一成本匹敌前沿模型' },
            { text: '智谱 GLM-4.5', link: '/chinese-ai/智谱AI_GLM-4.5_智能体原生基座模型' },
            { text: '百川 Baichuan-M3', link: '/chinese-ai/百川智能_Baichuan-M3_医疗AI的开源突破' },
          ],
        },
      ],
      '/nvidia/': [
        {
          text: 'NVIDIA (3 篇)',
          collapsed: false,
          items: [
            { text: '📋 概览', link: '/nvidia/' },
            { text: 'GTC 2026: Vera Rubin', link: '/nvidia/02-GTC-2026-Vera-Rubin-AI新纪元' },
            { text: 'TensorRT-LLM 推理优化', link: '/nvidia/01-TensorRT-LLM-大模型推理优化利器' },
            { text: 'Nemotron 3 Super', link: '/nvidia/nemotron-3-super' },
          ],
        },
      ],
      '/huggingface/': [
        {
          text: 'Hugging Face (2 篇)',
          collapsed: false,
          items: [
            { text: '📋 概览', link: '/huggingface/' },
            { text: 'Open LLM Leaderboard v2', link: '/huggingface/01-Open-LLM-Leaderboard-v2-开源大模型排行榜升级' },
            { text: '医疗大模型评测', link: '/huggingface/02-Open-Medical-LLM-Leaderboard-医疗大模型评测' },
          ],
        },
      ],
      '/microsoft/': [
        {
          text: 'Microsoft (1 篇)',
          collapsed: false,
          items: [
            { text: '📋 概览', link: '/microsoft/' },
            { text: 'Phi-4 小模型大智慧', link: '/microsoft/01-Phi-4-小模型大智慧' },
          ],
        },
      ],
      '/researchers/': [
        {
          text: '独立研究者 & 论文',
          collapsed: false,
          items: [
            { text: '📋 概览', link: '/researchers/' },
          ],
        },
        {
          text: '基础论文精读 (6)',
          collapsed: false,
          items: [
            { text: 'Transformer / Attention', link: '/researchers/foundational/01-attention-is-all-you-need-transformer' },
            { text: 'Scaling Laws', link: '/researchers/foundational/02-scaling-laws-neural-language-models' },
            { text: 'Chain-of-Thought', link: '/researchers/foundational/03-chain-of-thought-prompting' },
            { text: 'RLHF / InstructGPT', link: '/researchers/foundational/04-rlhf-instructgpt' },
            { text: 'Mixture of Experts', link: '/researchers/foundational/05-mixture-of-experts' },
            { text: 'RAG', link: '/researchers/foundational/06-rag-retrieval-augmented-generation' },
          ],
        },
        {
          text: 'Andrej Karpathy (7)',
          collapsed: true,
          items: [
            { text: 'Software 2.0', link: '/researchers/karpathy/01-software-2.0-软件2.0' },
            { text: 'RNN 的有效性', link: '/researchers/karpathy/02-rnn-effectiveness-RNN的不合理有效性' },
            { text: '训练神经网络的秘诀', link: '/researchers/karpathy/03-recipe-training-neural-networks-训练神经网络的秘诀' },
            { text: '理解反向传播', link: '/researchers/karpathy/04-yes-understand-backprop-你应该理解反向传播' },
            { text: '深度神经网络 33 年', link: '/researchers/karpathy/05-deep-neural-nets-33-years-深度神经网络33年' },
            { text: '微型 GPT', link: '/researchers/karpathy/06-microgpt-微型GPT' },
            { text: '2025 LLM 年度回顾', link: '/researchers/karpathy/07-2025-llm-year-in-review-2025年LLM年度回顾' },
          ],
        },
        {
          text: 'Lilian Weng (6)',
          collapsed: true,
          items: [
            { text: 'LLM 自主智能体', link: '/researchers/lilianweng/01-LLM驱动的自主智能体' },
            { text: '提示工程指南', link: '/researchers/lilianweng/02-提示工程指南' },
            { text: 'Transformer 家族 2.0', link: '/researchers/lilianweng/03-Transformer家族2.0版' },
            { text: '可控神经文本生成', link: '/researchers/lilianweng/04-可控神经文本生成' },
            { text: 'LLM 外在幻觉', link: '/researchers/lilianweng/05-大语言模型的外在幻觉' },
            { text: '奖励黑客', link: '/researchers/lilianweng/06-强化学习中的奖励黑客' },
          ],
        },
        {
          text: '更多研究者',
          collapsed: true,
          items: [
            { text: 'Simon Willison: AI 代理致命三要素', link: '/researchers/simonwillison/AI代理的致命三要素' },
            { text: 'Simon Willison: CaMeL 防御', link: '/researchers/simonwillison/CaMeL提示注入防御新方向' },
            { text: 'Chip Huyen: 生成式 AI 平台', link: '/researchers/chiphuyen/构建生成式AI平台' },
            { text: 'Chip Huyen: AI 代理指南', link: '/researchers/chiphuyen/AI代理全面指南' },
            { text: 'Jay Alammar: 图解 Transformer', link: '/researchers/jayalammar/图解Transformer' },
            { text: 'Sebastian Raschka: 预训练新范式', link: '/researchers/sebastianraschka/LLM预训练与后训练新范式' },
          ],
        },
      ],
      '/topics/': [
        {
          text: '按主题浏览',
          items: [
            { text: '📋 主题总览', link: '/topics/' },
            { text: '🤖 Agent 构建', link: '/topics/agent' },
            { text: '🔒 安全与对齐', link: '/topics/safety' },
            { text: '🧪 推理能力', link: '/topics/reasoning' },
            { text: '🏗️ 工程实践', link: '/topics/engineering' },
            { text: '🚀 模型发布与架构', link: '/topics/models' },
          ],
        },
      ],
      '/timeline/': [
        {
          text: '时间线',
          items: [
            { text: '🕰️ 技术演进时间线', link: '/timeline/' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sherconan/ai-frontiers-cn' },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文章',
            buttonAriaLabel: '搜索文章',
          },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '返回',
            noResultsText: '无法找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    footer: {
      message: '全球顶尖 AI 实验室博客的中文翻译与深度解读 · 200+ 篇文章 · 15+ 实验室',
      copyright: '© 2025-2026 AI 前沿精读',
    },

    outline: {
      level: [2, 3],
      label: '目录',
    },

    lastUpdated: {
      text: '最后更新',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '外观',
  },
})

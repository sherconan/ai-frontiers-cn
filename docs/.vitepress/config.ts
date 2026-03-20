import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI 前沿精读',
  description: '全球顶尖 AI 实验室博客的中文翻译与深度解读',
  lang: 'zh-CN',
  base: '/ai-frontiers-cn/',

  head: [
    ['meta', { name: 'author', content: 'AI 前沿精读' }],
    ['meta', { name: 'keywords', content: 'AI, 人工智能, Anthropic, OpenAI, DeepMind, 翻译, 解读, Claude, GPT, Gemini, DeepSeek, Qwen' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🧠</text></svg>' }],
  ],

  themeConfig: {
    logo: '🧠',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '海外实验室',
        items: [
          { text: '🧠 Anthropic (50)', link: '/anthropic/' },
          { text: '🤖 OpenAI (15)', link: '/openai/' },
          { text: '🔬 DeepMind (18)', link: '/deepmind/' },
          { text: '🦙 Meta AI (5)', link: '/meta-ai/' },
          { text: '⚡ xAI / Grok (2)', link: '/xai/' },
          { text: '🇪🇺 Mistral AI (2)', link: '/mistral/' },
        ],
      },
      {
        text: '中国 AI',
        items: [
          { text: '🦊 DeepSeek (8)', link: '/deepseek/' },
          { text: '🌙 Kimi / 月之暗面 (8)', link: '/kimi/' },
          { text: '☁️ Qwen / 通义 (9)', link: '/qwen/' },
          { text: '🇨🇳 MiniMax·智谱·百川 (3)', link: '/chinese-ai/' },
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
          text: 'Anthropic',
          items: [
            { text: '概览', link: '/anthropic/' },
            { text: 'Building Effective Agents', link: '/anthropic/building-effective-agents' },
            { text: 'Context Engineering', link: '/anthropic/context-engineering' },
            { text: 'Effective Harnesses', link: '/anthropic/effective-harnesses' },
            { text: 'Think Tool', link: '/anthropic/think-tool' },
            { text: 'Multi-Agent Research System', link: '/anthropic/multi-agent-research-system' },
            { text: 'Constitutional Classifiers', link: '/anthropic/constitutional-classifiers' },
            { text: 'Alignment Faking', link: '/anthropic/alignment-faking' },
            { text: 'Agentic Misalignment', link: '/anthropic/agentic-misalignment' },
            { text: 'Emergent Misalignment', link: '/anthropic/emergent-misalignment' },
            { text: 'Reasoning Models Don\'t Say What They Think', link: '/anthropic/reasoning-models-dont-say-think' },
            { text: 'Eval Awareness & BrowseComp', link: '/anthropic/eval-awareness-browsecomp' },
            { text: 'Introspection', link: '/anthropic/introspection' },
            { text: 'Model Welfare', link: '/anthropic/model-welfare' },
            { text: 'SHADE-Arena', link: '/anthropic/shade-arena' },
          ],
        },
      ],
      '/openai/': [
        {
          text: 'OpenAI',
          items: [
            { text: '概览', link: '/openai/' },
          ],
        },
      ],
      '/deepmind/': [
        {
          text: 'Google DeepMind',
          items: [
            { text: '概览', link: '/deepmind/' },
          ],
        },
      ],
      '/kimi/': [
        {
          text: 'Kimi',
          items: [
            { text: '概览', link: '/kimi/' },
          ],
        },
      ],
      '/qwen/': [
        {
          text: 'Qwen',
          items: [
            { text: '概览', link: '/qwen/' },
          ],
        },
      ],
      '/deepseek/': [
        {
          text: 'DeepSeek',
          items: [
            { text: '概览', link: '/deepseek/' },
          ],
        },
      ],
      '/researchers/': [
        {
          text: '独立研究者',
          items: [
            { text: '概览', link: '/researchers/' },
          ],
        },
      ],
      '/meta-ai/': [
        {
          text: 'Meta AI',
          items: [
            { text: '概览', link: '/meta-ai/' },
          ],
        },
      ],
      '/xai/': [
        {
          text: 'xAI (Grok)',
          items: [
            { text: '概览', link: '/xai/' },
          ],
        },
      ],
      '/mistral/': [
        {
          text: 'Mistral AI',
          items: [
            { text: '概览', link: '/mistral/' },
          ],
        },
      ],
      '/chinese-ai/': [
        {
          text: '其他中国 AI',
          items: [
            { text: '概览', link: '/chinese-ai/' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sherconan/ai-frontiers-cn' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: '全球顶尖 AI 实验室博客的中文翻译与深度解读',
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

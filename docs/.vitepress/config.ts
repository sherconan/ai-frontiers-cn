import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI 前沿精读',
  description: '全球顶尖 AI 实验室博客的中文翻译与深度解读',
  lang: 'zh-CN',
  base: '/ai-frontiers-cn/',

  head: [
    ['meta', { name: 'author', content: 'AI 前沿精读' }],
    ['meta', { name: 'keywords', content: 'AI, 人工智能, Anthropic, OpenAI, DeepMind, 翻译, 解读' }],
  ],

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '文章分类',
        items: [
          { text: 'Anthropic', link: '/anthropic/' },
          { text: 'OpenAI', link: '/openai/' },
          { text: 'Google DeepMind', link: '/deepmind/' },
          { text: 'Kimi', link: '/kimi/' },
          { text: 'Qwen', link: '/qwen/' },
          { text: 'DeepSeek', link: '/deepseek/' },
          { text: '独立研究者', link: '/researchers/' },
          { text: '其他中国 AI', link: '/chinese-ai/' },
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

<div align="center">

# AI 前沿精读

**全球顶尖 AI 实验室博客的中文翻译与深度解读**

[![Live Site](https://img.shields.io/badge/🌐_在线阅读-sherconan.github.io/ai--frontiers--cn-7c6cf0?style=for-the-badge)](https://sherconan.github.io/ai-frontiers-cn/)
[![Articles](https://img.shields.io/badge/文章数-180+-f06292?style=for-the-badge)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## 为什么做这个项目？

AI 领域的前沿研究大多以英文博客形式发布，分散在各公司官网。本项目将这些内容系统性地翻译为中文，并提供**双层解读体系**：

- **入门解读**：用通俗语言解释核心概念，适合所有人
- **技术深度解读**：保留论文级细节，适合从业者

## 覆盖范围

| 来源 | 篇数 | 代表文章 |
|------|------|----------|
| **Anthropic** | 50+ | 对齐伪装、Agent 构建模式、电路追踪、Claude Code |
| **Google DeepMind** | 18+ | Gemini 2.5、AlphaFold 3、AlphaEvolve |
| **OpenAI** | 15+ | GPT-5.2、o3/o4 推理模型、Codex Agent |
| **Meta AI** | 15+ | Llama 4、MovieGen、SIMA |
| **DeepSeek** | 10+ | DeepSeek-R1、V3、Prover |
| **Hugging Face** | 8+ | SmolLM、Open LLM Leaderboard |
| **Kimi (Moonshot)** | 5+ | Kimi K2.5、长上下文 |
| **xAI** | 5+ | Grok-3、CoT |
| **Microsoft** | 5+ | Phi-4、Florence |
| **Nvidia** | 3+ | Cosmos、Llama Nemotron |
| **Mistral** | 3+ | Mistral Large、Agents |
| **Qwen** | 3+ | Qwen2.5、QwQ |
| 独立研究者 | 5+ | Karpathy、Lilian Weng |

## 特色功能

- **时间线视图** — 按时间顺序追踪 AI 发展脉络
- **公司分类** — 按实验室浏览，了解各家研究方向
- **Mermaid 图表** — 复杂架构和流程的可视化
- **全文搜索** — VitePress 内置搜索，快速定位内容

## 本地运行

```bash
git clone https://github.com/sherconan/ai-frontiers-cn.git
cd ai-frontiers-cn
npm install
npm run docs:dev
```

访问 `http://localhost:5173` 即可浏览。

## 技术栈

- **VitePress** — 静态站点生成
- **Mermaid** — 图表渲染
- **GitHub Pages** — 部署托管
- **GitHub Actions** — 自动构建部署

## 参与贡献

欢迎提交 PR 添加新的翻译或修正现有内容。请确保：
1. 翻译准确，保留原文术语
2. 包含入门和技术两层解读
3. 注明原文出处和日期

## License

MIT

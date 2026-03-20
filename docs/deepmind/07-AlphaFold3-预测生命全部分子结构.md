# AlphaFold 3: Predicting the Structure and Interactions of All of Life's Molecules

# AlphaFold 3：预测生命全部分子的结构与相互作用

## 一句话摘要

Google DeepMind 与 Isomorphic Labs 联合推出 AlphaFold 3，首次实现对蛋白质、DNA、RNA、配体等所有生命分子的结构及其相互作用的高精度预测，开启"数字生物学"新纪元。

---

## 核心内容

### 背景与意义

2024年5月，Google DeepMind 与 Isomorphic Labs 联合发布了 AlphaFold 3（AF3），这是蛋白质结构预测领域的又一里程碑式突破。相关论文发表于《Nature》杂志。如果说 AlphaFold 2 解决了"蛋白质折叠问题"，那么 AlphaFold 3 则将 AI 结构预测的疆域扩展到了生命科学的几乎所有分子类型。

### 核心突破

AlphaFold 3 不再局限于蛋白质——它能够预测蛋白质、DNA、RNA、配体（小分子药物）以及翻译后修饰等几乎所有生命分子的三维结构。更关键的是，AF3 能够生成完整分子复合物的联合三维结构，让研究者以全局视角观察药物分子如何与靶蛋白结合、蛋白质如何与遗传物质相互作用。

### 技术架构

AlphaFold 3 引入了全新的扩散模型（diffusion model）架构。与 AlphaFold 2 的迭代细化不同，AF3 从随机噪声出发，通过学习到的去噪过程逐步"雕刻"出精确的分子结构。这一架构选择使得模型能够更自然地处理多种分子类型的联合预测问题。

在配体对接（ligand docking）方面，AF3 的表现超越了当前最优的对接方法，而且无需预先提供参考蛋白质结构或配体口袋的位置信息——这在药物发现领域具有革命性意义。模型能够对蛋白质数据库（PDB）中几乎所有分子生成预测，且经常达到原子级精度。

### AlphaFold Server

伴随 AF3 发布的还有 AlphaFold Server——全球最精确的蛋白质交互预测工具，作为免费平台供全球科学家进行非商业研究。截至发布后数月，该服务器已帮助全球数千名研究人员完成超过 800 万次分子折叠预测。

### 开源与开放

2024年11月，Google DeepMind 正式发布了 AlphaFold 3 的模型代码和权重，供学术界使用，进一步推动了开放科学的发展。

---

## 技术要点

1. **全分子覆盖**：从蛋白质扩展到 DNA、RNA、配体、翻译后修饰等所有生命分子类型
2. **扩散模型架构**：采用类似图像生成的扩散去噪方法，从随机噪声迭代生成精确分子结构
3. **联合结构预测**：能够生成完整分子复合物的三维结构，而非孤立的单分子预测
4. **零信息对接**：配体对接无需参考结构或口袋位置，超越传统对接方法
5. **原子级精度**：对 PDB 数据库中几乎所有分子实现接近实验精度的预测

---

## 深度解读

AlphaFold 3 的发布标志着 AI 驱动的结构生物学进入了一个全新阶段。从技术角度看，扩散模型的引入是一个大胆而精妙的选择。传统的蛋白质结构预测依赖于序列比对和物理约束的迭代细化，而扩散模型将问题重新定义为"从噪声中生成结构"的生成式任务，这与当前图像、视频生成领域的前沿方法一脉相承。

更深远的影响在于"数字生物学"范式的确立。当我们能够在计算机上以原子精度模拟生命分子之间的相互作用时，药物发现的范式将从"湿实验室驱动"转向"计算驱动"。传统药物研发需要数年时间和数十亿美元投入来确定一个候选分子，而 AF3 有望将这一过程大幅压缩。

Isomorphic Labs 的参与揭示了 Google 在生物制药商业化方面的战略布局——基础科学（DeepMind）与产业应用（Isomorphic Labs）的深度协同，正在构建从算法到药物的完整价值链。

---

## 延伸思考

- **药物发现加速**：AF3 能否真正替代或大幅减少药物研发中的湿实验工作？从预测到实际药物之间还有多大的鸿沟？
- **生成式 AI 与科学**：扩散模型在自然科学中的应用是否代表了一种通用范式？天气预测（GenCast）、材料设计等领域是否会出现类似的突破？
- **开源的战略考量**：Google 选择开源 AF3 背后的动机是什么？是否意在构建生态系统，让更多研究者在其架构上进行二次开发？
- **伦理与生物安全**：当 AI 能够以原子精度预测任意分子复合物的结构时，如何防止潜在的生物安全风险？

---

## 原文链接

- [Google DeepMind and Isomorphic Labs introduce AlphaFold 3](https://blog.google/technology/ai/google-deepmind-isomorphic-alphafold-3-ai-model/)
- [A glimpse of the next generation of AlphaFold](https://deepmind.google/discover/blog/a-glimpse-of-the-next-generation-of-alphafold/)
- [How we built AlphaFold 3](https://blog.google/technology/ai/how-we-built-alphafold-3/)

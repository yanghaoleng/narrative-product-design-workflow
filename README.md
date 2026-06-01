# Narrative Product Design Workflow

一套把“叙事化表达”系统性融入产品设计的工作流，目标是让产品在第一眼更有辨识度，在长期使用里更有人文关怀。

## 交付物

- `docs/methodology.md`：叙事化产品设计方法论。
- `docs/workflow.md`：从产品 brief 到叙事设定、文案、界面细节的执行流程。
- `skills/narrative-product-design/SKILL.md`：可直接给 AI/Codex 使用的 Skill。
- `skills/narrative-product-design/templates/`：叙事 brief、叙事圣经、表达地图模板。
- `demos/`：三组 before/after 示例，用来验证 Skill 的效果。
- `index.html` + `src/`：GSAP 滚动发布页。
- `public/downloads/narrative-product-design-skill.zip`：发布页提供下载的 Skill 包。
- `packages/narrative-product-design-skill/`：可发布到 npm 的 `npx` 安装包。

## 本地运行

```bash
npm install
npm run render:assets
npm run package:skill
npm run pack:npm-skill
npm run dev
```

## 命令行安装包

无需打开 GitHub，也可以直接用发布页上的 tarball URL 安装：

```bash
npx --yes https://narrative-product-design-workflow.vercel.app/downloads/narrative-product-design-skill-0.1.0.tgz
```

包名 `narrative-product-design-skill` 也已预留为项目内 npm 包目录。若之后发布到 npm registry，用户可以运行更短的命令：

```bash
npx narrative-product-design-skill
```

当前机器尚未登录 npm。登录后可执行：

```bash
cd packages/narrative-product-design-skill
npm publish --access public
```

发布前检查：

```bash
npm run build
npm run verify
```

## 核心想法

叙事化不是把一整套世界观塞给用户，也不是把每个按钮都写成段子。它更像一套“产品表达操作系统”：先确定用户在这个产品里扮演什么角色，再定义产品承诺的情绪、角色、隐喻、关键场景和长期仪式，最后把这些选择落到命名、空状态、错误状态、激励、动效和品牌语气里。

## 参考来源

- Duolingo Design, [Marketing Elements](https://design.duolingo.com/marketing/elements)
- Duolingo Blog, [Building Character](https://blog.duolingo.com/building-character/)
- Duolingo Blog, [Character voices](https://blog.duolingo.com/character-voices/)
- Nintendo, [The Legend of Zelda: Breath of the Wild](https://www.zelda.com/breath-of-the-wild/)
- Twitter, [External Brand Guidelines PDF](https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/downloads/twitter-external-brand-guidelines-01272021.pdf)
- Dribbble, [Rebound example](https://dribbble.com/shots/582680-Rebound-Me)
- Self-Determination Theory, [Basic psychological needs](https://selfdeterminationtheory.org/basic-psychological-needs/)
- GSAP, [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

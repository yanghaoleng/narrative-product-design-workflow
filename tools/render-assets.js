import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const outputDir = path.resolve("public/assets");

const baseStyle = `
  * { box-sizing: border-box; }
  body {
    margin: 0;
    background: #f7f5ee;
    font-family: "SF Pro Display", "PingFang SC", system-ui, sans-serif;
    color: #141413;
  }
  .frame {
    width: 1440px;
    height: 980px;
    position: relative;
    overflow: hidden;
    background: #f7f5ee;
  }
  .grid {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(20,20,19,.08) 1px, transparent 1px),
      linear-gradient(rgba(20,20,19,.08) 1px, transparent 1px);
    background-size: 64px 64px;
  }
  .chip {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0 18px;
    border-radius: 999px;
    background: #b8ff2f;
    font-weight: 900;
  }
`;

const assets = [
  {
    file: "hero-story-map.png",
    html: `
      <style>${baseStyle}</style>
      <div class="frame">
        <div class="grid"></div>
        <div style="position:absolute;left:80px;top:72px" class="chip">叙事骨架</div>
        <div style="position:absolute;left:76px;top:150px;width:620px;font-size:112px;line-height:1.02;font-weight:950;letter-spacing:0">第一眼。第一百天。</div>
        <div style="position:absolute;left:84px;bottom:96px;width:520px;font-size:34px;line-height:1.35;color:#4a4741">把角色、语气、关键时刻和产品细节连成一张能执行的故事地图。</div>
        <div style="position:absolute;right:90px;top:88px;width:560px;height:770px;border:2px solid #141413;border-radius:8px;background:#fff;box-shadow:24px 28px 0 #141413">
          <div style="height:72px;border-bottom:2px solid #141413;display:flex;align-items:center;padding:0 26px;gap:12px">
            <span style="width:16px;height:16px;border-radius:50%;background:#ff6645"></span>
            <span style="width:16px;height:16px;border-radius:50%;background:#b8ff2f"></span>
            <span style="width:16px;height:16px;border-radius:50%;background:#2f6cff"></span>
          </div>
          <div style="position:absolute;left:64px;top:142px;width:2px;height:542px;background:#141413"></div>
          ${["诊断产品真相","生成叙事方向","选定叙事设定","建立表达地图","改写关键文案","叙事化检查"].map((text, i) => `
            <div style="position:absolute;left:${42 + (i % 2) * 110}px;top:${126 + i * 92}px;width:${360 - (i % 2) * 42}px;border:2px solid #141413;border-radius:8px;background:${i === 2 ? "#b8ff2f" : "#f7f5ee"};padding:22px 24px;font-size:28px;font-weight:900">
              <span style="display:block;font-size:15px;margin-bottom:6px;color:#ff6645">0${i + 1}</span>${text}
            </div>
          `).join("")}
        </div>
      </div>
    `,
  },
  {
    file: "case-wall.png",
    html: `
      <style>${baseStyle}</style>
      <div class="frame" style="background:#141413;color:#fff">
        <div class="grid" style="opacity:.24"></div>
        <div style="position:absolute;left:74px;top:64px" class="chip">案例线索</div>
        <div style="position:absolute;left:72px;top:150px;width:860px;font-size:86px;line-height:1.04;font-weight:950">好案例，最后要变成设计语法。</div>
        ${[
          ["多邻国","角色进入每天的使用","#b8ff2f"],
          ["塞尔达","世界观支撑每个系统","#2f6cff"],
          ["Twitter","命名自带传播隐喻","#ff6645"],
          ["Dribbble","社区动作有运动手感","#ffffff"]
        ].map((item, i) => `
          <div style="position:absolute;left:${88 + (i % 2) * 620}px;top:${390 + Math.floor(i / 2) * 250}px;width:520px;height:190px;border:1px solid rgba(255,255,255,.38);border-radius:8px;background:rgba(255,255,255,.08);padding:28px">
            <div style="width:64px;height:64px;border-radius:8px;background:${item[2]};margin-bottom:20px"></div>
            <div style="font-size:42px;font-weight:950">${item[0]}</div>
            <div style="font-size:24px;color:rgba(255,255,255,.68);margin-top:6px">${item[1]}</div>
          </div>
        `).join("")}
      </div>
    `,
  },
  {
    file: "method-spine.png",
    html: `
      <style>${baseStyle}</style>
      <div class="frame">
        <div class="grid"></div>
        <div style="position:absolute;left:72px;top:70px" class="chip">工作流</div>
        <div style="position:absolute;left:72px;top:145px;width:900px;font-size:86px;line-height:1.04;font-weight:950">从一句说明，到产品细节。</div>
        <div style="position:absolute;left:150px;top:390px;right:150px;height:10px;background:#141413"></div>
        ${["诊断","发散","打分","设定","地图","应用","检查"].map((text, i) => `
          <div style="position:absolute;left:${104 + i * 178}px;top:${316 + (i % 2) * 184}px;width:150px;height:150px;border:3px solid #141413;border-radius:50%;background:${i === 3 ? "#b8ff2f" : "#fff"};display:grid;place-items:center;text-align:center;font-size:27px;font-weight:950;box-shadow:10px 12px 0 #141413">
            ${text}
          </div>
        `).join("")}
        <div style="position:absolute;left:140px;bottom:84px;width:1120px;border-top:2px solid #141413;padding-top:24px;font-size:32px;line-height:1.35;color:#4a4741">选中的叙事方向，要落到命名、微文案、里程碑、通知、空状态、错误状态和动效规则里。</div>
      </div>
    `,
  },
  {
    file: "skill-console.png",
    html: `
      <style>${baseStyle}</style>
      <div class="frame" style="background:#171716;color:#f7f5ee">
        <div style="position:absolute;inset:80px;border:1px solid rgba(255,255,255,.24);border-radius:8px;background:#0f0f0e;box-shadow:0 34px 90px rgba(0,0,0,.45);overflow:hidden">
          <div style="height:74px;border-bottom:1px solid rgba(255,255,255,.18);display:flex;align-items:center;padding:0 28px;gap:12px">
            <span style="width:16px;height:16px;border-radius:50%;background:#ff6645"></span>
            <span style="width:16px;height:16px;border-radius:50%;background:#b8ff2f"></span>
            <span style="width:16px;height:16px;border-radius:50%;background:#2f6cff"></span>
            <span style="margin-left:18px;font-size:22px;color:rgba(255,255,255,.56)">叙事化产品设计技能包</span>
          </div>
          <div style="padding:44px 48px;font-family:'SF Mono', Menlo, monospace;font-size:31px;line-height:1.75">
            <div><span style="color:#b8ff2f">$</span> 诊断产品真相</div>
            <div style="color:#8f8f86">用户从零散想法，走向能持续的行动节奏</div>
            <br />
            <div><span style="color:#b8ff2f">$</span> 生成 5 个叙事方向</div>
            <div style="color:#ff6645">已选择：小花园</div>
            <br />
            <div><span style="color:#b8ff2f">$</span> 写入 docs/narrative</div>
            <div style="color:#8f8f86">00-brief-diagnosis.md</div>
            <div style="color:#8f8f86">01-narrative-territories.md</div>
            <div style="color:#8f8f86">02-selected-narrative-bible.md</div>
            <div style="color:#8f8f86">03-expression-map.md</div>
            <br />
            <div><span style="color:#b8ff2f">$</span> 应用文案地图</div>
            <div style="color:#2f6cff">空状态、错误、成功、里程碑、提醒</div>
          </div>
        </div>
      </div>
    `,
  },
];

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 980 }, deviceScaleFactor: 1 });

for (const asset of assets) {
  await page.setContent(asset.html, { waitUntil: "networkidle" });
  await page.locator(".frame").screenshot({ path: path.join(outputDir, asset.file) });
}

await browser.close();
console.log(`Rendered ${assets.length} assets to ${outputDir}`);

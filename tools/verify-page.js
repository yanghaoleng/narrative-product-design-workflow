import { chromium } from "playwright";
import { spawn } from "node:child_process";

const port = 4177;
const server = spawn("npx", ["vite", "preview", "--host", "0.0.0.0", "--port", String(port)], {
  stdio: ["ignore", "pipe", "pipe"],
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

try {
  await wait(2500);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  await page.addInitScript(() => {
    localStorage.setItem("narrative-product-design-language", "zh");
  });
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto(`http://127.0.0.1:${port}`, { waitUntil: "networkidle" });
  const title = await page.locator("h1").innerText();
  const downloadVisible = await page.locator('a[download]').first().isVisible();
  const heroBox = await page.locator(".hero-visual img").boundingBox();
  if (!title.includes("故事")) throw new Error("Hero title did not render as expected.");
  if (!title.includes("长出自己的故事")) throw new Error("Updated hero copy did not render as expected.");
  await page.locator('[data-lang="en"]').click();
  const englishHero = await page.locator("h1").innerText();
  if (!englishHero.includes("story")) throw new Error("Language switch did not update the hero.");
  await page.screenshot({ path: "public/assets/verification-desktop.png", fullPage: true });

  const mobile = await browser.newPage({ viewport: { width: 390, height: 900 }, isMobile: true });
  await mobile.addInitScript(() => {
    localStorage.setItem("narrative-product-design-language", "zh");
  });
  await mobile.goto(`http://127.0.0.1:${port}`, { waitUntil: "networkidle" });
  await mobile.screenshot({ path: "public/assets/verification-mobile.png", fullPage: true });
  await browser.close();

  if (!downloadVisible) throw new Error("Download link is not visible.");
  if (!heroBox || heroBox.width < 300 || heroBox.height < 200) {
    throw new Error("Hero image rendered too small or missing.");
  }
  if (errors.length) throw new Error(`Console errors: ${errors.join("; ")}`);

  console.log("Verification passed: desktop/mobile render, hero image, download link, and console checks.");
} finally {
  server.kill("SIGTERM");
}

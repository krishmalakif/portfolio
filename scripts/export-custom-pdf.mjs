import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promises as fs } from "node:fs";
import { spawn } from "node:child_process";
import { PDFDocument } from "pdf-lib";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const outDir = path.resolve(rootDir, "submission");
const slidesDir = path.join(outDir, "slides");
const pdfPath = path.join(outDir, "portfolio.pdf");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function checkServer(url) {
  try {
    const response = await fetch(url);
    return response.ok;
  } catch {
    return false;
  }
}

async function waitForServer(url, timeout = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (await checkServer(url)) return true;
    await sleep(500);
  }
  return false;
}

function startServer() {
  return spawn("npm", ["run", "dev"], {
    cwd: rootDir,
    stdio: "inherit",
    shell: true,
  });
}

async function generatePDF() {
  let serverProcess;

  try {
    const url = "http://localhost:5173/?export=1";
    
    if (!(await checkServer(url))) {
      console.log("Starting server...");
      serverProcess = startServer();
      await sleep(3000);
    }

    if (!(await waitForServer(url, 45000))) {
      throw new Error("Server not responding. Run 'npm run dev' first.");
    }

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({
      viewport: { width: 1600, height: 2200 },
      deviceScaleFactor: 2,
    });

    await page.goto(url, { waitUntil: "networkidle" });
    await page.addStyleTag({
      content: `*, *::before, *::after { animation: none !important; transition: none !important; }`,
    });
    await page.waitForTimeout(1000);

    const sections = [
      { id: "home", name: "Home" },
      { id: "about", name: "About" },
      { id: "skills", name: "Skills" },
      { id: "projects", name: "Projects" },
      { id: "contact", name: "Contact" },
    ];

    await fs.mkdir(slidesDir, { recursive: true });
    const images = [];

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const element = page.locator(`#${section.id}`);
      await element.first().scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);

      const filename = `${String(i + 1).padStart(2, "0")}-${section.id}.png`;
      const filepath = path.join(slidesDir, filename);
      await element.first().screenshot({ path: filepath });
      images.push(filename);
      console.log(`Captured ${section.name}`);
    }

    await page.close();
    await browser.close();

    console.log("Creating PDF...");
    const pdf = await PDFDocument.create();

    for (const img of images) {
      const imgPath = path.join(slidesDir, img);
      const buffer = await fs.readFile(imgPath);
      const meta = await sharp(imgPath).metadata();
      
      const pdfPage = pdf.addPage([meta.width, meta.height]);
      const image = await pdf.embedPng(buffer);
      pdfPage.drawImage(image, {
        x: 0,
        y: 0,
        width: meta.width,
        height: meta.height,
      });
    }

    await fs.writeFile(pdfPath, await pdf.save());
    console.log(`\nPDF created: ${pdfPath}`);
    
  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  } finally {
    if (serverProcess) {
      serverProcess.kill("SIGTERM");
      await sleep(300);
      if (!serverProcess.killed) serverProcess.kill("SIGKILL");
    }
  }
}

generatePDF();

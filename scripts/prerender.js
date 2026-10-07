import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer-core';
import express from 'express';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  '/',
  '/about',
  '/events',
  '/contact',
  '/blog',
  '/refund-policy',
  '/delivery-policy',
  '/terms-conditions'
];

async function prerender() {
  const app = express();
  app.use(express.static(distDir));
  app.use((req, res) => res.sendFile(path.join(distDir, 'index.html')));

  const server = http.createServer(app);
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  console.log(`Local server listening on port ${port}`);

  let browser;
  try {
    browser = await puppeteer.launch({
      executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
      headless: 'new'
    });
  } catch (err) {
    console.error("Failed to launch Edge browser:", err);
    server.close();
    process.exit(1);
  }
  
  const page = await browser.newPage();

  for (const route of routes) {
    console.log(`Prerendering route: ${route}`);
    
    await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle0' });
    
    // Wait for the app root to be populated
    await page.waitForFunction(() => {
      const root = document.getElementById('root');
      return root && root.innerHTML.trim().length > 0;
    });

    const html = await page.content();
    
    let outputPath = path.join(distDir, route);
    if (route !== '/') {
      fs.mkdirSync(outputPath, { recursive: true });
      outputPath = path.join(outputPath, 'index.html');
    } else {
      outputPath = path.join(distDir, 'index.html');
    }
    
    fs.writeFileSync(outputPath, html);
    console.log(`Saved ${outputPath}`);
  }
  
  await browser.close();
  server.close();
}

prerender().catch(console.error);

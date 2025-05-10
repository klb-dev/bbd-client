import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const distPath = path.resolve('dist');
const indexHtmlPath = path.join(distPath, 'index.html');
const assetsPath = path.join(distPath, 'assets');

const cssFile = fs.readdirSync(assetsPath).find(f => f.endsWith('.css'));
if (!cssFile) {
  console.error('No CSS file found in dist/assets');
  process.exit(1);
}

console.log(`Found CSS file: ${cssFile}`);

// Before running critical, patch the href if needed
let html = fs.readFileSync(indexHtmlPath, 'utf-8');
html = html.replace(/href="\/bbd-client\/assets\/(.*?)\.css"/g, 'href="assets/$1.css"');
fs.writeFileSync(indexHtmlPath, html);

const command = `npx critical ${indexHtmlPath} \
  --inline \
  --base dist \
  --width 1300 \
  --height 900 \
  --css dist/assets/${cssFile} \
  --extract`;




console.log('Running Critical...');
try {
  execSync(command, { stdio: 'inherit' });
  console.log('Critical CSS inlined successfully.');
} catch (err) {
  console.error('Failed to inline critical CSS:', err);
  process.exit(1);
}
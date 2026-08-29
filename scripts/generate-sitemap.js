import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const problemsFilePath = path.join(
  rootDir,
  'src/problem-engine/data/problems.ts'
);
const problemsContent = fs.readFileSync(problemsFilePath, 'utf-8');

const slugRegex = /slug:\s*'([^']+)'/g;
let match;
const slugs = [];
while ((match = slugRegex.exec(problemsContent)) !== null) {
  slugs.push(match[1]);
}

const baseUrl = 'https://runjs.rigial.com';
const lastMod = new Date().toISOString().split('T')[0] + 'T00:00:00+00:00';

const coreRoutes = [
  { path: '', changefreq: 'weekly', priority: '1.0' },
  { path: '/js', changefreq: 'weekly', priority: '0.9' },
  { path: '/ts', changefreq: 'weekly', priority: '0.9' },
  { path: '/react', changefreq: 'weekly', priority: '0.9' },
  { path: '/problems', changefreq: 'daily', priority: '0.9' },
  { path: '/interview', changefreq: 'weekly', priority: '0.8' },
  { path: '/about', changefreq: 'monthly', priority: '0.7' },
  { path: '/dashboard', changefreq: 'monthly', priority: '0.6' },
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

for (const route of coreRoutes) {
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}${route.path ? route.path : '/'}</loc>\n`;
  xml += `    <lastmod>${lastMod}</lastmod>\n`;
  xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
  xml += `    <priority>${route.priority}</priority>\n`;
  xml += '  </url>\n';
}

for (const slug of slugs) {
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}/problems/${slug}</loc>\n`;
  xml += `    <lastmod>${lastMod}</lastmod>\n`;
  xml += `    <changefreq>monthly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += '  </url>\n';
}

xml += '</urlset>\n';

const publicSitemapPath = path.join(rootDir, 'public/sitemap.xml');
fs.writeFileSync(publicSitemapPath, xml, 'utf-8');

console.log(
  `Generated sitemap.xml at ${publicSitemapPath} with ${coreRoutes.length + slugs.length} URLs.`
);

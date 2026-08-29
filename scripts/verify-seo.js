import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

let totalTests = 0;
let passedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✓ ${message}`);
    passedTests++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('\n--- 1. Validating index.html Global Metadata ---');
const indexHtmlPath = path.join(rootDir, 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

assert(indexHtml.includes('<html lang="en">'), 'Contains <html lang="en">');
assert(indexHtml.includes('<meta charset="utf-8" />') || indexHtml.includes('charset="utf-8"'), 'Contains utf-8 charset');
assert(indexHtml.includes('<meta name="viewport"'), 'Contains viewport meta tag');
assert(indexHtml.includes('<link rel="canonical" href="https://runjs.in/" />'), 'Contains canonical URL');
assert(indexHtml.includes('<title>RunJS - In-Browser JavaScript, TypeScript & React Playground</title>'), 'Contains descriptive default title');
assert(indexHtml.includes('<meta name="robots" content="index, follow">'), 'Contains robots index, follow');
assert(indexHtml.includes('<meta name="theme-color" content="#f59e0b"'), 'Contains light theme color');
assert(indexHtml.includes('<meta name="theme-color" content="#09090b"'), 'Contains dark theme color');
assert(indexHtml.includes('<meta property="og:title"'), 'Contains og:title');
assert(indexHtml.includes('<meta property="og:description"'), 'Contains og:description');
assert(indexHtml.includes('<meta property="og:image" content="https://runjs.in/og-image.png"'), 'Contains absolute og:image');
assert(indexHtml.includes('<meta property="og:url" content="https://runjs.in/" />'), 'Contains og:url');
assert(indexHtml.includes('<meta name="twitter:card" content="summary_large_image" />'), 'Contains twitter:card');
assert(indexHtml.includes('<meta name="twitter:creator" content="@mrkishorekumar" />'), 'Contains twitter:creator');
assert(indexHtml.includes('<meta name="twitter:image" content="https://runjs.in/og-image.png" />'), 'Contains twitter:image');

// JSON-LD validation in index.html
const jsonLdMatch = indexHtml.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
assert(Boolean(jsonLdMatch), 'Contains static JSON-LD script');
if (jsonLdMatch) {
  try {
    const parsed = JSON.parse(jsonLdMatch[1]);
    assert(parsed['@context'] === 'https://schema.org', 'JSON-LD context is https://schema.org');
    assert(Array.isArray(parsed['@graph']), 'JSON-LD has @graph array');
    const webApp = parsed['@graph'].find(item => item['@type'] === 'WebApplication');
    const webSite = parsed['@graph'].find(item => item['@type'] === 'WebSite');
    assert(Boolean(webApp), 'JSON-LD includes WebApplication schema');
    assert(Boolean(webSite), 'JSON-LD includes WebSite schema');
  } catch (e) {
    assert(false, `JSON-LD in index.html is invalid JSON: ${e.message}`);
  }
}

console.log('\n--- 2. Validating public/robots.txt ---');
const robotsPath = path.join(rootDir, 'public/robots.txt');
const robotsTxt = fs.readFileSync(robotsPath, 'utf-8');
assert(robotsTxt.includes('User-agent: *'), 'Specifies User-agent: *');
assert(robotsTxt.includes('Allow: /'), 'Allows public root');
assert(robotsTxt.includes('Disallow: /bin'), 'Disallows /bin');
assert(robotsTxt.includes('Disallow: /404'), 'Disallows /404');
assert(robotsTxt.includes('Disallow: /dashboard'), 'Disallows /dashboard');
assert(robotsTxt.includes('Sitemap: https://runjs.in/sitemap.xml'), 'References production sitemap.xml');
assert(robotsTxt.includes('Host: https://runjs.in'), 'References Host header');

console.log('\n--- 3. Validating public/sitemap.xml ---');
const sitemapPath = path.join(rootDir, 'public/sitemap.xml');
const sitemapXml = fs.readFileSync(sitemapPath, 'utf-8');
assert(sitemapXml.startsWith('<?xml version="1.0" encoding="UTF-8"?>'), 'Valid XML header');
assert(sitemapXml.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'), 'Valid sitemap namespace');
assert(sitemapXml.includes('<loc>https://runjs.in/</loc>'), 'Includes homepage');
assert(sitemapXml.includes('<loc>https://runjs.in/problems</loc>'), 'Includes /problems');
assert(sitemapXml.includes('<loc>https://runjs.in/js</loc>'), 'Includes /js');
assert(sitemapXml.includes('<loc>https://runjs.in/ts</loc>'), 'Includes /ts');
assert(sitemapXml.includes('<loc>https://runjs.in/react</loc>'), 'Includes /react');
assert(sitemapXml.includes('<loc>https://runjs.in/interview</loc>'), 'Includes /interview');
assert(sitemapXml.includes('<loc>https://runjs.in/about</loc>'), 'Includes /about');
assert(sitemapXml.includes('<loc>https://runjs.in/problems/two-sum</loc>'), 'Includes /problems/two-sum');
assert(!sitemapXml.includes('/dashboard'), 'Excludes private /dashboard');
assert(!sitemapXml.includes('/bin'), 'Excludes private /bin');
assert(!sitemapXml.includes('/404'), 'Excludes /404');

console.log('\n--- 4. Validating Social Assets ---');
const ogImagePath = path.join(rootDir, 'public/og-image.png');
assert(fs.existsSync(ogImagePath), 'public/og-image.png exists');
const ogStat = fs.statSync(ogImagePath);
assert(ogStat.size > 1000, `og-image.png has valid file size (${ogStat.size} bytes)`);

console.log(`\n========================================`);
console.log(`SEO Verification Summary: ${passedTests}/${totalTests} Tests Passed`);
console.log(`========================================\n`);

if (passedTests !== totalTests) {
  process.exit(1);
}

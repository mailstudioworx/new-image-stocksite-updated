#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { generateSitemap } = require('../src/utils/sitemap');

const publicDir = path.join(process.cwd(), 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const sitemapPath = path.join(publicDir, 'sitemap.xml');
const sitemap = generateSitemap();

fs.writeFileSync(sitemapPath, sitemap);
console.log(`✓ Sitemap generated at ${sitemapPath}`);

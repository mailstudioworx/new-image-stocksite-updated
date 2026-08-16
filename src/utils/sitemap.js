export function generateSitemap() {
  const baseUrl = 'https://www.africanphotosandvideos.com.ng';
  const imageCategories = [
    'transportation', 'market', 'lifestyle', 'aerial', 'technology',
    'food', 'nature', 'backgrounds', 'festivals', 'business',
    'religion', 'travel', 'creative'
  ];
  const videoCategories = [
    'lifestyle', 'transportation', 'market', 'aerial',
    'festival', 'nature', 'travel', 'landmark'
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

  // Home page
  xml += `  <url>\n    <loc>${baseUrl}/</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;

  // Images index
  xml += `  <url>\n    <loc>${baseUrl}/images</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;

  // Image category pages
  imageCategories.forEach(category => {
    xml += `  <url>\n    <loc>${baseUrl}/images/${category}</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  });

  // Videos index
  xml += `  <url>\n    <loc>${baseUrl}/videos</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;

  // Video category pages
  videoCategories.forEach(category => {
    xml += `  <url>\n    <loc>${baseUrl}/videos/${category}</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  });

  // Blog index
  xml += `  <url>\n    <loc>${baseUrl}/blog</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;

  // About and Contact
  xml += `  <url>\n    <loc>${baseUrl}/about</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;

  xml += `  <url>\n    <loc>${baseUrl}/contact</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;

  xml += '</urlset>';

  return xml;
}

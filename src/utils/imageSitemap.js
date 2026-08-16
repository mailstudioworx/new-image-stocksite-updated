export function generateImageSitemap(images) {
  const baseUrl = 'https://www.africanphotosandvideos.com.ng';

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

  images.forEach(image => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${image.url}</loc>\n`;
    xml += '    <image:image>\n';
    xml += `      <image:loc>${image.thumb}</image:loc>\n`;
    xml += `      <image:title>${escapeXml(image.title)}</image:title>\n`;
    xml += '    </image:image>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case '\'':
        return '&apos;';
      case '"':
        return '&quot;';
    }
  });
}

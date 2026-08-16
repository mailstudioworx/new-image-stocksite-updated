export function getMetaTags(title, description, image = null, type = 'website', url = null) {
  return {
    title,
    description,
    image: image || 'https://www.africanphotosandvideos.com.ng/og-image.jpg',
    type,
    url: url || 'https://www.africanphotosandvideos.com.ng'
  };
}

export function generateStructuredData(type, data) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type
  };

  return { ...baseSchema, ...data };
}

export function generateBreadcrumb(items) {
  const breadcrumbList = items.map((item, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': item.name,
    'item': `https://www.africanphotosandvideos.com.ng${item.url}`
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbList
  };
}

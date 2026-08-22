export function getMetaTags(
  title,
  description,
  image = null,
  type = 'website',
  url = null
) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.africanphotosandvideos.com.ng';

  return {
    title: title || 'African Photos and Videos',
    description:
      description ||
      'Premium African stock photography and videography for creative, editorial and commercial projects.',
    image: image || `${siteUrl}/og-image.jpg`,
    type,
    url: url || siteUrl
  };
}

export function generateStructuredData(type, data = {}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.africanphotosandvideos.com.ng';

  const typeMap = {
    Blog: 'Blog',
    BlogPosting: 'BlogPosting',
    Article: 'Article',
    Website: 'WebSite',
    Organization: 'Organization'
  };

  return {
    '@context': 'https://schema.org',
    '@type': typeMap[type] || type || 'Thing',
    ...data,
    url: data.url || siteUrl
  };
}

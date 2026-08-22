import Head from 'next/head';
// Update import path if your seo utilities live elsewhere
import { getMetaTags, generateStructuredData } from '../utils/seo';

export default function SEO({
  title,
  description,
  image = null,
  url = null,
  structuredData = null
}) {
  const meta = getMetaTags(title, description, image, 'website', url);

  // If structuredData is not provided, build a simple Blog schema as fallback.
  const ld = structuredData || generateStructuredData('Blog', {
    name: meta.title,
    description: meta.description,
    url: meta.url.endsWith('/blog') ? meta.url : `${meta.url}/blog`
  });

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {/* Inject JSON-LD as raw text (UNESCAPED) */}
      <script
        type="application/ld+json"
        // JSON.stringify produces valid JSON (with literal double quotes)
        // dangerouslySetInnerHTML prevents React/Next from HTML-escaping it
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </Head>
  );
}
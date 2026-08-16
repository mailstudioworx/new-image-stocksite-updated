import Head from 'next/head';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeaturedGallery from '@/components/FeaturedGallery';

export default function Home() {
  const pageTitle = 'African Photos and Videos | Premium Stock Photography & Videography';
  const pageDescription = 'Discover stunning African photography and videography. Browse our curated galleries and license images and videos from Getty Images, Shutterstock, Adobe Stock, and Pond5.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.africanphotosandvideos.com.ng" />
        <meta property="og:image" content="https://www.africanphotosandvideos.com.ng/og-image.jpg" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://www.africanphotosandvideos.com.ng/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            'name': 'African Photos and Videos',
            'url': 'https://www.africanphotosandvideos.com.ng',
            'description': pageDescription,
            'potentialAction': {
              '@type': 'SearchAction',
              'target': {
                '@type': 'EntryPoint',
                'urlTemplate': 'https://www.africanphotosandvideos.com.ng/search?q={search_term_string}'
              },
              'query-input': 'required name=search_term_string'
            }
          })}
        </script>
      </Head>
      <Layout>
        <Hero />
        <FeaturedGallery />
      </Layout>
    </>
  );
}

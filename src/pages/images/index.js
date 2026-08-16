import Head from 'next/head';
import Layout from '@/components/Layout';
import GalleryIndex from '@/components/GalleryIndex';
import { imageCategories } from '@/data/categories';

export default function ImagesHome() {
  const pageTitle = 'Stock Photography | African Photos and Videos';
  const pageDescription = 'Browse our extensive collection of African stock photography. Explore Transportation, Market, Lifestyle, Aerial, Technology, Food, Nature, and more. License from Getty Images, Shutterstock, Adobe Stock, and Pond5.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.africanphotosandvideos.com.ng/images" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Stock Photography',
            'description': pageDescription,
            'url': 'https://www.africanphotosandvideos.com.ng/images'
          })}
        </script>
      </Head>
      <Layout>
        <GalleryIndex categories={imageCategories} type="images" />
      </Layout>
    </>
  );
}

import Head from 'next/head';
import Layout from '@/components/Layout';
import GalleryIndex from '@/components/GalleryIndex';
import { videoCategories } from '@/data/categories';

export default function VideosHome() {
  const pageTitle = 'Stock Videos | African Photos and Videos';
  const pageDescription = 'Browse our collection of African stock videos. Explore Lifestyle, Transportation, Market, Aerial, Festival, Nature, Travel, and Landmark footage. License from Getty Images, Shutterstock, Adobe Stock, and Pond5.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.africanphotosandvideos.com.ng/videos" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': 'Stock Videos',
            'description': pageDescription,
            'url': 'https://www.africanphotosandvideos.com.ng/videos'
          })}
        </script>
      </Head>
      <Layout>
        <GalleryIndex categories={videoCategories} type="videos" />
      </Layout>
    </>
  );
}

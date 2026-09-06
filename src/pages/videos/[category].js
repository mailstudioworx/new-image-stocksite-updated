import Head from 'next/head';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import CategoryGallery from '@/components/CategoryGallery';
import { videoCategories, getVideoCategory } from '@/data/categories';

export default function VideoCategory({ category, videos }) {
  const pageTitle = `${category.title} Stock Videos | African Photos and Videos`;
  const pageDescription = `Browse our collection of ${category.title.toLowerCase()} stock videos. High-quality footage available on Getty Images, Shutterstock, Adobe Stock, and Pond5.`;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Videos', url: '/videos' },
    { name: category.title, url: `/videos/${category.slug}` }
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.africanphotosandvideos.com.ng/videos/${category.slug}`} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: category.title,
              description: pageDescription,
              url: `https://www.africanphotosandvideos.com.ng/videos/${category.slug}`,
              breadcrumb: {
                '@type': 'BreadcrumbList',
                'itemListElement': breadcrumbs.map((item, index) => ({
                  '@type': 'ListItem',
                  'position': index + 1,
                  'name': item.name,
                  'item': `https://www.africanphotosandvideos.com.ng${item.url}`
                }))
              }
            })
          }}
        />
      </Head>
      <Layout>
        <Breadcrumb items={breadcrumbs} />
        <CategoryGallery category={category} videos={videos} isVideo />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const category = getVideoCategory(params.category);

  if (!category) {
    return { notFound: true };
  }

  // ============================================================
  // VIDEO GALLERY DATA
  // 8 categories × 12 video cards = 96 video cards
  //
  // Replace:
  // thumb: 'insert image link'
  //
  // with your actual thumbnail URL.
  //
  // Replace:
  // url: '#'
  //
  // with the actual Getty Images, Shutterstock,
  // Adobe Stock or Pond5 video URL when ready.
  // ============================================================

  const categoryVideos = {

    // ==========================================================
    // LIFESTYLE
    // ==========================================================

    lifestyle: [
      {
        id: 'lifestyle-1',
        title: 'Lifestyle 1',
        thumb: 'https://media.gettyimages.com/id/1425841841/video/lagos-island-street.jpg?s=640x640&k=20&c=cDwtwla0cPLMGePBivM1leej2aC-f8nKEAAM1CpQ7OE=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5'],
        platformLinks: {#}

import Head from 'next/head';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import CategoryGallery from '@/components/CategoryGallery';
import { imageCategories, getImageCategory } from '@/data/categories';

export default function ImageCategory({ category, images }) {
  const pageTitle = `${category.title} Stock Photos | African Photos and Videos`;
  const pageDescription = `Browse our collection of ${category.title.toLowerCase()} stock photography. High-quality images available on Getty Images, Shutterstock, Adobe Stock, and Pond5.`;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Images', url: '/images' },
    { name: category.title, url: `/images/${category.slug}` }
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.africanphotosandvideos.com.ng/images/${category.slug}`} />
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
              url: `https://www.africanphotosandvideos.com.ng/images/${category.slug}`,
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: breadcrumbs.map((item, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  name: item.name,
                  item: `https://www.africanphotosandvideos.com.ng${item.url}`
                }))
              }
            })
          }}
        />
      </Head>
      <Layout>
        <Breadcrumb items={breadcrumbs} />
        <CategoryGallery category={category} images={images} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const category = getImageCategory(params.category);

  if (!category) {
    return { notFound: true };
  }

  // ============================================================
  // IMAGE CARDS
  // Replace "insert image link" with your actual image URL.
  // Each category contains 12 image cards.
  // ============================================================

  const categoryImages = {

    transportation: [
      {
        id: 'transportation-1',
        title: 'Transportation 1',
        thumb: 'https://media.gettyimages.com/id/1510586755/photo/road-side-park-for-bike-riders.jpg?s=612x612&w=0&k=20&c=ewuW1R1FyVu7mqKYsrtY8YmehrMumyFf4OmJFbnaI9o=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5'],
        platformLinks: {
          getty: 'https://www.gettyimages.ie/search/stack/821034622?family=creative&assettype=image',
          shutterstock: 'https://www.shutterstock.com/g/pencilsmoka?q=transportation',

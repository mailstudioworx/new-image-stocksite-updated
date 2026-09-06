import Head from 'next/head';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import CategoryGallery from '@/components/CategoryGallery';
import { imageCategories, getImageCategory } from '@/data/categories';
import { platformLinks } from '@/data/platformLinks';

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
          suppressHydrationWarning
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

  // Import category-specific images from data module
  const imageData = await import('@/data/images').then(m => m[params.category] || []);

  return {
    props: {
      category,
      images: imageData
    },
    revalidate: 3600
  };
}

export async function getStaticPaths() {
  const paths = imageCategories.map((category) => ({
    params: {
      category: category.slug
    }
  }));

  return {
    paths,
    fallback: false
  };
}

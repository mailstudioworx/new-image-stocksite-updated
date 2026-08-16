import Head from 'next/head';
import Layout from '@/components/Layout';
import BlogList from '@/components/BlogList';
import { getAllBlogPosts } from '@/utils/blog';

export default function Blog({ posts }) {
  const pageTitle = 'Blog | African Photos and Videos';
  const pageDescription = 'Read our latest articles on African photography, stock media, visual content creation, and industry insights.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.africanphotosandvideos.com.ng/blog" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            'name': 'African Photos and Videos Blog',
            'description': pageDescription,
            'url': 'https://www.africanphotosandvideos.com.ng/blog'
          })}
        </script>
      </Head>
      <Layout>
        <BlogList posts={posts} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllBlogPosts();
  return {
    props: { posts },
    revalidate: 3600
  };
}

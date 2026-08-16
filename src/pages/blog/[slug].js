import Head from 'next/head';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import BlogPost from '@/components/BlogPost';
import { getBlogPost, getAllBlogSlugs } from '@/utils/blog';

export default function Post({ post }) {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` }
  ];

  return (
    <>
      <Head>
        <title>{post.title} | African Photos and Videos</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.africanphotosandvideos.com.ng/blog/${post.slug}`} />
        <meta property="og:image" content={post.image} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <link rel="canonical" href={`https://www.africanphotosandvideos.com.ng/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            'headline': post.title,
            'description': post.excerpt,
            'image': post.image,
            'datePublished': post.date,
            'author': {
              '@type': 'Person',
              'name': post.author
            },
            'breadcrumb': {
              '@type': 'BreadcrumbList',
              'itemListElement': breadcrumbs.map((item, index) => ({
                '@type': 'ListItem',
                'position': index + 1,
                'name': item.name,
                'item': `https://www.africanphotosandvideos.com.ng${item.url}`
              }))
            }
          })}
        </script>
      </Head>
      <Layout>
        <Breadcrumb items={breadcrumbs} />
        <BlogPost post={post} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
    revalidate: 3600
  };
}

export async function getStaticPaths() {
  const slugs = getAllBlogSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: false
  };
}

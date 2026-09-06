import Head from 'next/head';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import BlogPost from '@/components/BlogPost';
import { getBlogPost, getAllBlogSlugs } from '@/utils/blog';

export default function Post({ post }) {
  const siteUrl = 'https://www.africanphotosandvideos.com.ng';
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image
      ? post.image.startsWith('http')
        ? post.image
        : `${siteUrl}${post.image.startsWith('/') ? '' : '/'}${post.image}`
      : `${siteUrl}/og-image.jpg`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'African Photos and Videos'
    },
    publisher: {
      '@type': 'Organization',
      name: 'African Photos and Videos',
      url: siteUrl
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${siteUrl}${item.url}`
      }))
    }
  };

  return (
    <>
      <Head>
        <title>{post.title} | African Photos and Videos</title>

        <meta
          name="description"
          content={post.excerpt}
        />

        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:image" content={structuredData.image} />

        <meta
          property="article:published_time"
          content={post.date}
        />

        <meta
          property="article:author"
          content={post.author}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta
          name="twitter:description"
          content={post.excerpt}
        />
        <meta
          name="twitter:image"
          content={structuredData.image}
        />

        <link
          rel="canonical"
          href={postUrl}
        />

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
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
    return {
      notFound: true
    };
  }

  return {
    props: {
      post
    },
    revalidate: 3600
  };
}

export async function getStaticPaths() {
  const slugs = getAllBlogSlugs();

  const paths = slugs.map((slug) => ({
    params: {
      slug
    }
  }));

  return {
    paths,
    fallback: false
  };
}

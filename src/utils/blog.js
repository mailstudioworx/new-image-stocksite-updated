import React from 'react';
import SEO from '../components/SEO';
import { generateStructuredData } from '../utils/seo';
import { getAllBlogPosts } from '../utils/blog'; // adjust path as needed

export default function BlogPage({ posts = [] }) {
  const structuredData = generateStructuredData('Blog', {
    name: 'African Photos and Videos Blog',
    description: 'Read our latest articles on African photography, stock media, visual content creation, and industry insights.',
    url: 'https://www.africanphotosandvideos.com.ng/blog'
  });

  return (
    <>
      <SEO
        title="Blog | African Photos and Videos"
        description="Read our latest articles on African photography, stock media, visual content creation, and industry insights."
        url="https://www.africanphotosandvideos.com.ng/blog"
        structuredData={structuredData}
      />
      <main>
        {/* your existing blog list rendering */}
      </main>
    </>
  );
}

// If you use getStaticProps / getServerSideProps keep them — this example is minimal.
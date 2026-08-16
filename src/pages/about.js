import Head from 'next/head';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import About from '@/components/About';

export default function AboutPage() {
  const pageTitle = 'About | African Photos and Videos';
  const pageDescription = 'Learn about our journey in African photography and videography, and discover our mission to showcase the continent\'s visual richness.';

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' }
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.africanphotosandvideos.com.ng/about" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            'name': 'About',
            'description': pageDescription,
            'url': 'https://www.africanphotosandvideos.com.ng/about'
          })}
        </script>
      </Head>
      <Layout>
        <Breadcrumb items={breadcrumbs} />
        <About />
      </Layout>
    </>
  );
}

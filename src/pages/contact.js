import Head from 'next/head';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import Contact from '@/components/Contact';

export default function ContactPage() {
  const pageTitle = 'Contact | African Photos and Videos';
  const pageDescription = 'Get in touch with African Photos and Videos. We\'d love to hear from you!';

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' }
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.africanphotosandvideos.com.ng/contact" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            'name': 'Contact',
            'description': pageDescription,
            'url': 'https://www.africanphotosandvideos.com.ng/contact'
          })}
        </script>
      </Head>
      <Layout>
        <Breadcrumb items={breadcrumbs} />
        <Contact />
      </Layout>
    </>
  );
}

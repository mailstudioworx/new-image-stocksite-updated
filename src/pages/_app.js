import '@/styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const canonical = `https://www.africanphotosandvideos.com.ng${router.asPath}`;

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="African Photos and Videos - Premium stock photography and videography portfolio discovery platform. Browse and license stunning African imagery from Getty Images, Shutterstock, Adobe Stock, and Pond5." />
        <meta name="keywords" content="African photography, stock photos, stock videos, Getty Images, Shutterstock, Adobe Stock, Pond5, African imagery, visual content" />
        <meta name="author" content="African Photos and Videos" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonical} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:site_name" content="African Photos and Videos" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

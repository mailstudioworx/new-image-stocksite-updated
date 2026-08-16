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
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': category.title,
            'description': pageDescription,
            'url': `https://www.africanphotosandvideos.com.ng/images/${category.slug}`,
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
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-2',
        title: 'Transportation 2',
        thumb: 'https://media.gettyimages.com/id/919803222/photo/neighbourhood-watch.jpg?s=612x612&w=0&k=20&c=Zxg3B4FEJbFL-j87Mi2CkvnTp-RQ9kvjBGY5lgCirfw=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-3',
        title: 'Transportation 3',
        thumb: 'https://images.pond5.com/front-view-truck-photo-249174762_iconl_nowm.jpeg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-4',
        title: 'Transportation 4',
        thumb: 'https://media.gettyimages.com/id/642210292/photo/lastma-lagos-state-traffic-management-authority.jpg?s=612x612&w=0&k=20&c=MlLiYPyoXkEeLFc4GTnRZ9QQQkUAFW6stiHMCsY7mQo=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-5',
        title: 'Transportation 5',
        thumb: 'https://images.pond5.com/vintage-buildings-developed-areas-shot-photo-249174743_iconl_nowm.jpeg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-6',
        title: 'Transportation 6',
        thumb: 'https://media.gettyimages.com/id/2279208495/photo/beautiful-umbrella-aerial-view-of-an-open-market.jpg?s=612x612&w=0&k=20&c=TZKBvz4m-35iAwm17oYRAB0cI1b9W9Zge6s4H8Iq_8o=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-7',
        title: 'Transportation 7',
        thumb: 'https://media.gettyimages.com/id/2278961406/photo/abandoned-riot-police-vehicle.jpg?s=612x612&w=0&k=20&c=TAYg6A2lJqmrEpeiH6QpvqZ59lfNv1WyxBtUKwTmZ5E=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-8',
        title: 'Transportation 8',
        thumb: 'https://media.gettyimages.com/id/642239046/photo/car-park-in-lagos-nigeria.jpg?s=612x612&w=0&k=20&c=PzgdFqQbyal4TZFbgTR75FvKlAfLvF88z-xsFEDxchA=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-9',
        title: 'Transportation 9',
        thumb: 'https://media.gettyimages.com/id/928999148/photo/lagos-commercial-city.jpg?s=612x612&w=0&k=20&c=w7ZWgEuFqto2jIIXr-bHr31cVw48mfns4eB91R79dGs=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-10',
        title: 'Transportation 10',
        thumb: 'https://media.gettyimages.com/id/928996870/photo/sea-port-in-marina-lagos-nigeria.jpg?s=612x612&w=0&k=20&c=DbJhETIhPqoZKrVf-ygwR2a1yS3FN6YKe5Xqn0KaV24=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-11',
        title: 'Transportation 11',
        thumb: 'https://media.gettyimages.com/id/2179499679/photo/aerial-perspective-of-growth-and-development.jpg?s=612x612&w=0&k=20&c=TYSlLZd9sEDIpQhSq_-9jWpvC2ShTGjkuf_sOYlEims=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-12',
        title: 'Transportation 12',
        thumb: 'https://images.pond5.com/street-view-parts-ikorodu-road-photo-249174801_iconl_nowm.jpeg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    market: [
      {
        id: 'market-1',
        title: 'Market 1',
        thumb: 'https://media.gettyimages.com/id/1648327629/photo/19-august-2023-lagos-nigeria-display-of-fish-inside-a-tray-in-ajina-market-ikorodu-lagos.jpg?s=612x612&w=0&k=20&c=hPFl9HFmNVZYmMafgcMyeLPIm2d-vUt5G2MiPRDPbnM=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-2',
        title: 'Market 2',
        thumb: 'https://media.gettyimages.com/id/2159863680/photo/small-fashion-business-owner-at-work.jpg?s=612x612&w=0&k=20&c=lo87vajzG_j0d_NSsZ96UywVEJYKZHmVEadVyu_RvmI=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-3',
        title: 'Market 3',
        thumb: 'https://media.gettyimages.com/id/2234146423/photo/aerial-view-of-lagos-island.jpg?s=612x612&w=0&k=20&c=Y-HtCG41khassM_gXKGpRkUUq-bHsozPB7PTIsIpVMQ=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-4',
        title: 'Market 4',
        thumb: 'https://media.gettyimages.com/id/2260786450/photo/aerial-view-of-an-open-market.jpg?s=612x612&w=0&k=20&c=WU2MPBNKBSItbcaOwp9QbQWhmHjSX4v1va4SxaEo-E4=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-5',
        title: 'Market 5',
        thumb: 'https://media.gettyimages.com/id/2159864029/photo/fashion-designer-draping-cloth-on-a-mannequin.jpg?s=612x612&w=0&k=20&c=zLrdStSHUSF53Utxm6-prv9FY2EquIVGKvBVVERir5w=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-6',
        title: 'Market 6',
        thumb: 'https://media.gettyimages.com/id/642235780/photo/oshodi-market.jpg?s=612x612&w=0&k=20&c=6b_uFGb-Z2pughkG1hjiOQ6YdYqmXcZTkbta_8dbIrA=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-7',
        title: 'Market 7',
        thumb: 'https://media.gettyimages.com/id/928800312/photo/balogun-market-in-lagos.jpg?s=612x612&w=0&k=20&c=WQA0DAXLyCNLCKIQ7jEXpqAUCJ8pgOIgCq7BLRvGB-o=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-8',
        title: 'Market 8',
        thumb: 'https://media.gettyimages.com/id/2162792763/photo/20-july-2024-lagos-island-lagos-nigeria-busy-market-area-in-lagos-island-showing-different.jpg?s=612x612&w=0&k=20&c=XvAb0h3lmnBAz3qhBy87aAnvEH4Avp9anmXpQVPiuOg=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-9',
        title: 'Market 9',
        thumb: 'https://media.gettyimages.com/id/2149573073/photo/lady-carrying-shopping-paper-bags.jpg?s=612x612&w=0&k=20&c=9Ctv5AVFDmkX2SMXJM-33_rtGbvA9w42eKMbDHxe25M=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-10',
        title: 'Market 10',
        thumb: 'https://media.gettyimages.com/id/1648322779/photo/traditional-herbs-and-calabash-seller-in-ajina-market-ikorodu-lagos-nigeria.jpg?s=612x612&w=0&k=20&c=iGdOcyXAKhgNZOUsmvjrVdTrd8Getdex7YWEBzXvYR8=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-11',
        title: 'Market 11',
        thumb: 'https://media.gettyimages.com/id/2149573150/photo/lady-carrying-shopping-paper-bags.jpg?s=612x612&w=0&k=20&c=XHgQhTfpnwoN0mz2BeWiRYQphHUXXKfNgGk0eaSXSrA=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-12',
        title: 'Market 12',
        thumb: 'https://media.gettyimages.com/id/2178986557/photo/modern-bus-terminal-and-parking-system.jpg?s=612x612&w=0&k=20&c=CH-zF9Fd5yGMaYay8fyF8RNDU9vg-WBgVyNwiu2b6EQ=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    lifestyle: [
      {
        id: 'lifestyle-1',
        title: 'Lifestyle 1',
        thumb: 'https://media.gettyimages.com/id/1960087037/photo/young-fashion-designer-at-work.jpg?s=612x612&w=0&k=20&c=y6k08V-4UCiKfW7glmlCfl0r1KGdQIhTtAu6I-EXEOg=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-2',
        title: 'Lifestyle 2',
        thumb: 'https://media.gettyimages.com/id/1942129095/photo/back-to-school-preparation.jpg?s=612x612&w=0&k=20&c=HwjBKUa_wHuFGpfA6xW0lXRfodFpBA9PsDUVdhYDmmM=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-3',
        title: 'Lifestyle 3',
        thumb: 'https://media.gettyimages.com/id/1452932063/photo/friendly-looking-lady-on-white-medical-outfit.jpg?s=612x612&w=0&k=20&c=BHQwtnYSMMyJQFZC4DaFbD-nelilT1MloZAjkzqkI1k=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-4',
        title: 'Lifestyle 4',
        thumb: 'https://media.gettyimages.com/id/1452928057/photo/happy-lady-on-bright-outfit-and-afro-hair.jpg?s=612x612&w=0&k=20&c=xFbIlsXTpET6ERziJM43SPp3hcHQdXy6bH-c7q_bXmU=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-5',
        title: 'Lifestyle 5',
        thumb: 'https://media.gettyimages.com/id/2141870057/photo/young-man-using-technology-device.jpg?s=612x612&w=0&k=20&c=UpQKYzeNQ7AcFdI5e4XL4_BJMAAln4cq5hS-Y975BDM=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-6',
        title: 'Lifestyle 6',
        thumb: 'https://media.gettyimages.com/id/2278673873/photo/kids-in-the-park.jpg?s=612x612&w=0&k=20&c=oUrimNUiD2mJ73pUWhuaYf4cfA1HNm6SJg7PxqfZ4mE=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-7',
        title: 'Lifestyle 7',
        thumb: 'https://media.gettyimages.com/id/2278673841/photo/kid-in-the-park.jpg?s=612x612&w=0&k=20&c=orj1fTShnDOQ4WHkaFx_hhVVQP_3wZQHxqd_10CLFZY=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-8',
        title: 'Lifestyle 8',
        thumb: 'https://media.gettyimages.com/id/2205374011/photo/millennial-and-gen-z-using-mobile-phone.jpg?s=612x612&w=0&k=20&c=M_3oF1AoML1BhyxHXeiMbX6Ku6Ux0Ti9RmbuzGtu8Lk=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-9',
        title: 'Lifestyle 9',
        thumb: 'https://media.gettyimages.com/id/2278673980/photo/kid-in-the-park.jpg?s=612x612&w=0&k=20&c=MxZyDHT0mdNAX9ZNawflzA3O7thOceWuILkdSqsGpPY=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-10',
        title: 'Lifestyle 10',
        thumb: 'https://media.gettyimages.com/id/919803198/photo/unicycle.jpg?s=612x612&w=0&k=20&c=DrZonX1C0Tw-F0x2f-HoMcvu4gieUcgJYZbGpInRyHI=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-11',
        title: 'Lifestyle 11',
        thumb: 'https://media.gettyimages.com/id/2142823708/photo/young-man-working-from-the-comfort-of-his-home.jpg?s=612x612&w=0&k=20&c=nqKzqESDLqMxXvQ7P1kFwZgaj88AdblsTBKbHT_zO3Y=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-12',
        title: 'Lifestyle 12',
        thumb: 'https://media.gettyimages.com/id/2204211877/photo/music-professional-playing-guitar.jpg?s=612x612&w=0&k=20&c=Sca7gn0qjaSUTZLwwF5iwFfSb_MPKC6pcYzbArPJ1zY=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    aerial: [
      {
        id: 'aerial-1',
        title: 'Aerial 1',
        thumb: 'https://media.gettyimages.com/id/2253043989/photo/aerial-view-of-lagos-island.jpg?s=612x612&w=0&k=20&c=sKqUaROA-Ov9u9HvNpT_-BQiAN-hQrTarUvVV05CNuk=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-2',
        title: 'Aerial 2',
        thumb: 'https://media.gettyimages.com/id/2234146423/photo/aerial-view-of-lagos-island.jpg?s=612x612&w=0&k=20&c=Y-HtCG41khassM_gXKGpRkUUq-bHsozPB7PTIsIpVMQ=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-3',
        title: 'Aerial 3',
        thumb: 'https://media.gettyimages.com/id/2252327251/photo/lekki-link-bridge-in-lagos-nigeria.jpg?s=612x612&w=0&k=20&c=d1kD3zZbZLLlu0lhats_KIYec533l6JJCL_FTWxgLIA=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-4',
        title: 'Aerial 4',
        thumb: 'https://media.gettyimages.com/id/2253043958/photo/aerial-view-of-lagos-island.jpg?s=612x612&w=0&k=20&c=sh15_GWhbIczpJvtK0kZOLj7GRvYwK592NP3qs1RcLs=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-5',
        title: 'Aerial 5',
        thumb: 'https://media.gettyimages.com/id/2253043994/photo/aerial-view-of-lagos-island.jpg?s=612x612&w=0&k=20&c=AaWELikcpfAw5oVyFjXDwuaYVugV5ZwuAhN4ytQWW4s=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-6',
        title: 'Aerial 6',
        thumb: 'https://media.gettyimages.com/id/2179500579/photo/aerial-perspective-of-growth-and-development.jpg?s=612x612&w=0&k=20&c=UT3kPky6OH0Ql9otB-FY7-4w41_bS8Rx1yUDr-mqkj4=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-7',
        title: 'Aerial 7',
        thumb: 'https://media.gettyimages.com/id/2234154168/photo/aerial-view-of-lagos-island.jpg?s=612x612&w=0&k=20&c=2epMRnLKvSwFBXSfR71nUG1YemBbR-_DdD7zO6Ey6Jw=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-8',
        title: 'Aerial 8',
        thumb: 'https://media.gettyimages.com/id/2283463837/photo/beautiful-architectural-structure-with-lush-green-environment.jpg?s=612x612&w=0&k=20&c=sJSIo0CHHKd07nz0hoaIXZrVngUfggmhwn50IFb8C3c=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-9',
        title: 'Aerial 9',
        thumb: 'https://media.gettyimages.com/id/2236311741/photo/skylines-of-lagos-city.jpg?s=612x612&w=0&k=20&c=cWSSakg35M-nwpV0tFiobTn7cEKiHYIHtYplCinIZqU=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-10',
        title: 'Aerial 10',
        thumb: 'https://media.gettyimages.com/id/2234302492/photo/coexisting-with-green-environment.jpg?s=612x612&w=0&k=20&c=u2QI03N3Js7vQ5QZZ4W9JYWmUlOUdblXHgsx32gs_yY=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-11',
        title: 'Aerial 11',
        thumb: 'https://media.gettyimages.com/id/2234149449/photo/aerial-view-of-lagos-island.jpg?s=612x612&w=0&k=20&c=lWi8LdIYI8HKFcVVCZrpXo0UdDhvZpOFT_Pim5uXfsU=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-12',
        title: 'Aerial 12',
        thumb: 'https://media.gettyimages.com/id/928996870/photo/sea-port-in-marina-lagos-nigeria.jpg?s=612x612&w=0&k=20&c=DbJhETIhPqoZKrVf-ygwR2a1yS3FN6YKe5Xqn0KaV24=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    technology: [
      {
        id: 'technology-1',
        title: 'Technology 1',
        thumb: 'https://media.gettyimages.com/id/2257895087/photo/phone-sticking-out-from-a-sweater.jpg?s=612x612&w=0&k=20&c=rIbPIUkK-pE83td6eRbOAs1zmf60VqSYMCnqScx0DiM=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'technology-2',
        title: 'Technology 2',
        thumb: 'https://media.gettyimages.com/id/2142823708/photo/young-man-working-from-the-comfort-of-his-home.jpg?s=612x612&w=0&k=20&c=nqKzqESDLqMxXvQ7P1kFwZgaj88AdblsTBKbHT_zO3Y=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'technology-3',
        title: 'Technology 3',
        thumb: 'https://media.gettyimages.com/id/2205374011/photo/millennial-and-gen-z-using-mobile-phone.jpg?s=612x612&w=0&k=20&c=M_3oF1AoML1BhyxHXeiMbX6Ku6Ux0Ti9RmbuzGtu8Lk=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'technology-4',
        title: 'Technology 4',
        thumb: 'https://media.gettyimages.com/id/2206382289/photo/blonde-hair-lady-on-a-phone-call.jpg?s=612x612&w=0&k=20&c=9N6HxXoUi-uxvFbSctiP5bRjn3C6TLE6zQXYRNJOSeg=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'technology-5',
        title: 'Technology 5',
        thumb: 'https://media.gettyimages.com/id/2173755779/photo/woman-taking-down-notes.jpg?s=612x612&w=0&k=20&c=JkZ10KRDkom2NeIZmtpQMCD5K_kJs_Qx5PIHaPBE3ZE=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'technology-6',
        title: 'Technology 6',
        thumb: 'https://media.gettyimages.com/id/1453679329/photo/happy-young-lady-holding-a-smart-phone.jpg?s=612x612&w=0&k=20&c=hYgvYHTHZpsrgSDLlu2MwCxQu04GsZH9CZ9mijc6BmU=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'technology-7',
        title: 'Technology 7',
        thumb: 'https://media.gettyimages.com/id/2205371637/photo/millennial-and-gen-z-using-mobile-phone.jpg?s=612x612&w=0&k=20&c=l-6y-1KjMKuJQaCmFZlM-7eVRIb-iqgF2VAaMt35dgg=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'technology-8',
        title: 'Technology 8',
        thumb: 'https://media.gettyimages.com/id/1453678177/photo/happy-lady-holding-a-mobile-phone.jpg?s=612x612&w=0&k=20&c=g4N5LewNw10oTGX2BxdhYL-wLFlCQrABNF-6SUExWms=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'technology-9',
        title: 'Technology 9',
        thumb: 'https://media.gettyimages.com/id/2204609638/photo/outdoor-radio-broadband-connection.jpg?s=612x612&w=0&k=20&c=qn4VmFf2mzTg-l9P6Mq3YnkKkj1XwbWSq2tE1ZZFDm8=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'technology-10',
        title: 'Technology 10',
        thumb: 'https://media.gettyimages.com/id/2204710518/photo/satelite-dish-for-cable-tv.jpg?s=612x612&w=0&k=20&c=aDnBdQEj3vIi7GUS1aZImn41S1a_JtaUuuCCF5aRhoo=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'technology-11',
        title: 'Technology 11',
        thumb: 'https://media.gettyimages.com/id/2205373819/photo/millennial-and-gen-z-using-mobile-phone.jpg?s=612x612&w=0&k=20&c=blNN7wJAFQWhPbS95nTk24fHA27nDCOUgg_-xAjuVhs=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'technology-12',
        title: 'Technology 12',
        thumb: 'https://media.gettyimages.com/id/2165602476/photo/electric-meters-for-homes.jpg?s=612x612&w=0&k=20&c=4Qn0LIT8VrdAZAiUhMn4tVHIktSGQphF5pOlQPM28Co=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    food: [
      {
        id: 'food-1',
        title: 'Food 1',
        thumb: 'https://media.gettyimages.com/id/2152288407/photo/the-concept-of-choice.jpg?s=612x612&w=0&k=20&c=EES6s39A6j-Y7oWv51-ry2YcvWAVdMjXkxxsd11_ZBY=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'food-2',
        title: 'Food 2',
        thumb: 'https://media.gettyimages.com/id/2082878686/photo/plastic-filled-with-fresh-tomatoes.jpg?s=612x612&w=0&k=20&c=VJitz4tszOvXo5ZPRhGhP-z8nE5_XX8t3PhWi6oaCaQ=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'food-3',
        title: 'Food 3',
        thumb: 'https://media.gettyimages.com/id/2067506980/photo/juice-in-plastic-on-isolated-background.jpg?s=612x612&w=0&k=20&c=9WLRt69SawKK1fENnldF-aTZJE1Y9fn3_XjYj49aIcY=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'food-4',
        title: 'Food 4',
        thumb: 'https://media.gettyimages.com/id/2158897384/photo/blue-adhesive-note-for-compliance-campaign.jpg?s=612x612&w=0&k=20&c=cATNOO_kxaRdTgYPu8sW2w8p5SvwkwvMT2-qEOpIDQg=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'food-5',
        title: 'Food 5',
        thumb: 'https://media.gettyimages.com/id/2162310055/photo/dished-rice-and-soup-in-a-restaurant.jpg?s=612x612&w=0&k=20&c=blqU_oZX4Ea8nsKO1IyWhFkIWC1nJ1M3AtoUnDOshew=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'food-6',
        title: 'Food 6',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2355624499/display_1500/stock-photo-display-of-popular-nigerian-green-fruit-called-garden-egg-along-side-grounded-groundnut-inside-a-2355624499.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'food-7',
        title: 'Food 7',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2314539789/display_1500/stock-photo-little-girl-scooping-strawberry-ice-cream-from-a-white-container-2314539789.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'food-8',
        title: 'Food 8',
        thumb: 'https://media.gettyimages.com/id/2152288408/photo/the-concept-of-choice.jpg?s=612x612&w=0&k=20&c=J5W_n4lD7b4sZpRbUGA5vsJkRoPIhMaswUpDQw3ecOs=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'food-9',
        title: 'Food 9',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/1189165963/display_1500/stock-photo--september-lagos-nigeria-a-woman-selling-food-condiments-at-a-local-market-1189165963.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'food-10',
        title: 'Food 10',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/787144030/display_1500/stock-photo-itaogbolu-akure-nigeria-december-products-sold-by-a-local-shop-on-the-street-of-787144030.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'food-11',
        title: 'Food 11',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/1437848336/display_1500/stock-photo--june-lagos-nigeria-local-fruit-called-pear-often-found-in-nigeria-it-s-mostly-eaten-1437848336.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'food-12',
        title: 'Food 12',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/787144036/display_1500/stock-photo-itaogbolu-akure-nigeria-december-products-sold-by-a-local-shop-on-the-street-of-787144036.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    nature: [
      {
        id: 'nature-1',
        title: 'Nature 1',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2337215385/display_1500/stock-photo-a-green-tree-in-a-sunny-day-2337215385.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-2',
        title: 'Nature 2',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/463068424/display_1500/stock-photo-akure-ondo-state-nigeria-october-man-stands-for-a-portrait-akure-in-ondo-state-463068424.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-3',
        title: 'Nature 3',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/1842920554/display_1500/stock-photo-double-exposure-of-human-and-nature-1842920554.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-4',
        title: 'Nature 4',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/1221494596/display_1500/stock-photo--lagos-nigeria-th-october-epe-resort-an-holiday-getaway-location-in-the-scenically-1221494596.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-5',
        title: 'Nature 5',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/1221494599/display_1500/stock-photo--lagos-nigeria-th-october-epe-resort-an-holiday-getaway-location-in-the-scenically-1221494599.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-6',
        title: 'Nature 6',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/1844306962/display_1500/stock-photo-multiple-exposure-of-human-hand-and-leaf-1844306962.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-7',
        title: 'Nature 7',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/459279199/display_1500/stock-photo-akure-459279199.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-8',
        title: 'Nature 8',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/463068415/display_1500/stock-photo-akure-ondo-state-october-a-rock-along-iju-itaogbolu-road-in-akure-ondo-state-on-463068415.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-9',
        title: 'Nature 9',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/1327257158/display_1500/stock-photo--march-lagos-nigeria-golden-cloud-formation-at-early-morning-hours-in-a-street-at-the-ketu-1327257158.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-10',
        title: 'Nature 10',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/1234422796/display_1500/stock-photo-beautiful-sun-set-1234422796.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-11',
        title: 'Nature 11',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2105906828/display_1500/stock-photo-silhouette-tree-branches-in-the-sky-2105906828.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-12',
        title: 'Nature 12',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/1842916666/display_1500/stock-photo-snail-on-a-wet-soil-1842916666.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    backgrounds: [
      {
        id: 'backgrounds-1',
        title: 'Backgrounds 1',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2368138467/display_1500/stock-photo-british-pound-money-bills-of-united-kingdom-2368138467.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'backgrounds-2',
        title: 'Backgrounds 2',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/1151074622/display_1500/stock-photo-light-streaks-at-night-1151074622.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'backgrounds-3',
        title: 'Backgrounds 3',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/1143546323/display_1500/stock-photo-hollow-metallic-material-1143546323.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'backgrounds-4',
        title: 'Backgrounds 4',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/1135062500/display_1500/stock-photo-water-drop-on-surface-1135062500.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'backgrounds-5',
        title: 'Backgrounds 5',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2802373751/display_1500/stock-photo-surface-texture-shot-out-door-2802373751.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'backgrounds-6',
        title: 'Backgrounds 6',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/530540638/display_1500/stock-photo-blurred-colour-530540638.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'backgrounds-7',
        title: 'Backgrounds 7',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/1142526086/display_1500/stock-photo-water-drop-texture-1142526086.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'backgrounds-8',
        title: 'Backgrounds 8',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/1142517908/display_1500/stock-photo-water-drop-texture-1142517908.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'backgrounds-9',
        title: 'Backgrounds 9',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2355610943/display_1500/stock-photo--august-lagos-nigeria-door-design-of-osugbo-shrine-in-ikorodu-road-lagos-nigeria-2355610943.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'backgrounds-10',
        title: 'Backgrounds 10',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2355610943/display_1500/stock-photo--august-lagos-nigeria-door-design-of-osugbo-shrine-in-ikorodu-road-lagos-nigeria-2355610943.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'backgrounds-11',
        title: 'Backgrounds 11',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/1142517662/display_1500/stock-photo-water-drop-texture-1142517662.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'backgrounds-12',
        title: 'Backgrounds 12',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2802373795/display_1500/stock-photo-surface-texture-shot-out-door-2802373795.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    festivals: [
      {
        id: 'festivals-1',
        title: 'Festivals 1',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festivals-2',
        title: 'Festivals 2',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festivals-3',
        title: 'Festivals 3',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festivals-4',
        title: 'Festivals 4',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festivals-5',
        title: 'Festivals 5',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festivals-6',
        title: 'Festivals 6',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festivals-7',
        title: 'Festivals 7',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festivals-8',
        title: 'Festivals 8',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festivals-9',
        title: 'Festivals 9',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festivals-10',
        title: 'Festivals 10',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festivals-11',
        title: 'Festivals 11',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festivals-12',
        title: 'Festivals 12',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    business: [
      {
        id: 'business-1',
        title: 'Business 1',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2308947879/display_1500/stock-photo-business-woman-using-a-phone-at-the-backseat-of-a-car-2308947879.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'business-2',
        title: 'Business 2',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2269908945/display_1500/stock-photo-a-professional-tailor-in-her-work-environment-2269908945.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'business-3',
        title: 'Business 3',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2270018369/display_1500/stock-photo-a-young-fashion-stylist-holding-her-phone-2270018369.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'business-4',
        title: 'Business 4',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2269223603/display_1500/stock-photo--february-ogun-state-nigeria-a-professional-tailor-operating-an-electric-sewing-machine-2269223603.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'business-5',
        title: 'Business 5',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2308944245/display_1500/stock-photo-lady-wearing-african-styled-wear-in-an-office-environment-2308944245.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'business-6',
        title: 'Business 6',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2339159111/display_1500/stock-photo-a-man-having-a-phone-conversation-2339159111.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'business-7',
        title: 'Business 7',
        thumb: 'https://media.gettyimages.com/id/1976143629/photo/interacting-with-technology.jpg?s=612x612&w=0&k=20&c=g-RK_8_UXjFF9JyNFH08HkpRdBP653xEnITqV3MgYHs=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'business-8',
        title: 'Business 8',
        thumb: 'https://media.gettyimages.com/id/1453678457/photo/young-lady-holding-a-mobile-phone.jpg?s=612x612&w=0&k=20&c=oYxvQslNVjk2dRJ_dcQKzhhdjzp6PjyJNmFKIzf5qkg=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'business-9',
        title: 'Business 9',
        thumb: 'https://media.gettyimages.com/id/2159863903/photo/self-portrait-of-a-business-owner.jpg?s=612x612&w=0&k=20&c=oe8h8CO7GATyw7_yPK4IJR9S5kmU73j7_jPs10_1zDM=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'business-10',
        title: 'Business 10',
        thumb: 'https://media.gettyimages.com/id/2166848829/photo/magnified-miniature-chess-pieces.jpg?s=612x612&w=0&k=20&c=wGKyJMUD9W2MrgoYsqCdrI3jbdl-frDaY5ucQ_ZBwbY=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'business-11',
        title: 'Business 11',
        thumb: 'https://media.gettyimages.com/id/2166846334/photo/magnified-miniature-chess-pieces.jpg?s=612x612&w=0&k=20&c=NF9VUdko0LZFPAE_HSIYeyS5qIgGOHTytB3SEElIzRs=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'business-12',
        title: 'Business 12',
        thumb: 'https://media.gettyimages.com/id/2149572951/photo/lady-carrying-shopping-paper-bags.jpg?s=612x612&w=0&k=20&c=jxOkx1PyJshq3uS6Iadhrnaysl6RBJwzBYe-HoZ87zs=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    religion: [
      {
        id: 'religion-1',
        title: 'Religion 1',
        thumb: 'https://media.gettyimages.com/id/2173586240/photo/man-reading-a-bible-verse-from-a-mobile-app.jpg?s=612x612&w=0&k=20&c=M9t6Fm4HWEdlZbYnUsFyIdsAxIEOpYMNfi2sj-o03hE=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'religion-2',
        title: 'Religion 2',
        thumb: 'https://media.gettyimages.com/id/926617250/photo/celebration-of-life.jpg?s=612x612&w=0&k=20&c=3tZewdDyXkSdhcVaj2S1tWHOD_mE0Rn-ODK8m0_pGQY=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'religion-3',
        title: 'Religion 3',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/525486409/display_1500/stock-photo-man-praying-in-church-525486409.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'religion-4',
        title: 'Religion 4',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2319521907/display_1500/stock-photo--june-akute-ogun-state-praise-and-worship-session-at-the-father-s-house-church-during-2319521907.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'religion-5',
        title: 'Religion 5',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2319779819/display_1500/stock-photo--june-akute-ogun-state-worship-and-prayer-session-at-the-father-s-house-church-during-2319779819.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'religion-6',
        title: 'Religion 6',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2319779833/display_1500/stock-photo--june-akute-ogun-state-worship-and-prayer-session-at-the-father-s-house-church-during-2319779833.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'religion-7',
        title: 'Religion 7',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2319779771/display_1500/stock-photo--june-akute-ogun-state-worship-and-prayer-session-at-the-father-s-house-church-during-2319779771.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'religion-8',
        title: 'Religion 8',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2319779709/display_1500/stock-photo--june-akute-ogun-state-worship-and-prayer-session-at-the-father-s-house-church-during-2319779709.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'religion-9',
        title: 'Religion 9',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2319779691/display_1500/stock-photo--june-akute-ogun-state-worship-and-prayer-session-at-the-father-s-house-church-during-2319779691.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'religion-10',
        title: 'Religion 10',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2319556121/display_1500/stock-photo--june-akute-ogun-state-praise-and-worship-session-at-the-father-s-house-church-during-the-2319556121.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'religion-11',
        title: 'Religion 11',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2319590067/display_1500/stock-photo--june-akute-ogun-state-praise-and-worship-session-at-the-father-s-house-church-during-the-2319590067.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'religion-12',
        title: 'Religion 12',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2319609803/display_1500/stock-photo--june-akute-ogun-state-praise-and-worship-session-at-the-father-s-house-church-during-2319609803.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    travel: [
      {
        id: 'travel-1',
        title: 'Travel 1',
        thumb: 'https://media.gettyimages.com/id/2252327592/photo/lekki-ubran-area-in-lagos-nigeria.jpg?s=612x612&w=0&k=20&c=T8d_D5l3vuC4_lthyGVmtlYEUnCP25lfBeQgLiG-npc=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-2',
        title: 'Travel 2',
        thumb: 'https://media.gettyimages.com/id/2234302576/photo/coexisting-with-green-environment.jpg?s=612x612&w=0&k=20&c=_qgFbUjRv2hNhDqRgZjDTB95jMYOFtI-nNgMpZ6Iiys=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-3',
        title: 'Travel 3',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2391319553/display_1500/stock-photo--november-lagos-nigeria-mode-of-transportation-in-berger-area-of-lagos-nigeria-2391319553.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-4',
        title: 'Travel 4',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2441830177/display_1500/stock-photo--march-lagos-nigeria-lagos-train-transportation-system-captured-in-marina-train-station-2441830177.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-5',
        title: 'Travel 5',
        thumb: 'https://images.pond5.com/inner-view-cult-building-photo-249174046_iconl.jpeg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-6',
        title: 'Travel 6',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/2205815153/display_1500/stock-photo--september-ojodu-lagos-popular-motorcycle-riders-called-okada-in-lagos-nigeria-2205815153.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-7',
        title: 'Travel 7',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/1432582250/display_1500/stock-photo-busy-road-traffic-lagos-nigeria-may-road-traffic-in-marina-lagos-nigeria-1432582250.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-8',
        title: 'Travel 8',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/581490148/display_1500/stock-photo-lagos-nigeria-september-motorcycle-rider-also-known-as-okada-rides-through-581490148.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-9',
        title: 'Travel 9',
        thumb: 'https://www.shutterstock.com/shutterstock/photos/581466310/display_1500/stock-photo-lagos-nigeria-september-commercial-bus-known-as-danfo-in-lagos-nigeria-581466310.jpg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-10',
        title: 'Travel 10',
        thumb: 'https://media.gettyimages.com/id/2180908974/photo/aerial-perspective-of-growth-and-development.jpg?s=612x612&w=0&k=20&c=UQnmIFz0-jffctvM7qFL6YX8MT_KMhKb0lWaDWx-slk=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-11',
        title: 'Travel 11',
        thumb: 'https://images.pond5.com/front-view-cult-building-members-photo-249174094_iconl.jpeg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-12',
        title: 'Travel 12',
        thumb: 'https://images.pond5.com/images-world-photography-day-photowalk-photo-249174629_iconl.jpeg',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    creative: [
      {
        id: 'creative-1',
        title: 'Creative 1',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'creative-2',
        title: 'Creative 2',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'creative-3',
        title: 'Creative 3',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'creative-4',
        title: 'Creative 4',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'creative-5',
        title: 'Creative 5',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'creative-6',
        title: 'Creative 6',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'creative-7',
        title: 'Creative 7',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'creative-8',
        title: 'Creative 8',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'creative-9',
        title: 'Creative 9',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'creative-10',
        title: 'Creative 10',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'creative-11',
        title: 'Creative 11',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'creative-12',
        title: 'Creative 12',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ]
  };

  // Get the 12 images belonging to the current category
  const images = categoryImages[category.slug] || [];

  return {
    props: { category, images },
    revalidate: 3600
  };
}

export async function getStaticPaths() {
  const paths = imageCategories.map((category) => ({
    params: { category: category.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

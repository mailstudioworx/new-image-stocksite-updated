import Head from 'next/head';
import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import CategoryGallery from '@/components/CategoryGallery';
import { videoCategories, getVideoCategory } from '@/data/categories';

export default function VideoCategory({ category, videos }) {
  const pageTitle = `${category.title} Stock Videos | African Photos and Videos`;
  const pageDescription = `Browse our collection of ${category.title.toLowerCase()} stock videos. High-quality footage available on Getty Images, Shutterstock, Adobe Stock, and Pond5.`;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Videos', url: '/videos' },
    { name: category.title, url: `/videos/${category.slug}` }
  ];

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.africanphotosandvideos.com.ng/videos/${category.slug}`} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            'name': category.title,
            'description': pageDescription,
            'url': `https://www.africanphotosandvideos.com.ng/videos/${category.slug}`,
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
        <CategoryGallery category={category} videos={videos} isVideo />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const category = getVideoCategory(params.category);

  if (!category) {
    return { notFound: true };
  }

  // ============================================================
  // VIDEO GALLERY DATA
  // 8 categories × 12 video cards = 96 video cards
  //
  // Replace:
  // thumb: 'insert image link'
  //
  // with your actual thumbnail URL.
  //
  // Replace:
  // url: '#'
  //
  // with the actual Getty Images, Shutterstock,
  // Adobe Stock or Pond5 video URL when ready.
  // ============================================================

  const categoryVideos = {

    // ==========================================================
    // LIFESTYLE
    // ==========================================================

    lifestyle: [
      {
        id: 'lifestyle-1',
        title: 'Lifestyle 1',
        thumb: 'https://media.gettyimages.com/id/1425841841/video/lagos-island-street.jpg?s=640x640&k=20&c=cDwtwla0cPLMGePBivM1leej2aC-f8nKEAAM1CpQ7OE=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-2',
        title: 'Lifestyle 2',
        thumb: 'https://media.gettyimages.com/id/1425846874/video/lagos-island-street.jpg?s=640x640&k=20&c=noOsKnr-gqtjhRLSXmdQ0r7ENnFIHMvtsOGL5I9nSy0=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-3',
        title: 'Lifestyle 3',
        thumb: 'https://media.gettyimages.com/id/1708868246/video/19-august-2023-lagos-nigera-hausa-man-having-breakfast-at-morning-among-a-group-of-people-in.jpg?s=640x640&k=20&c=Fftx66od3tniq0ewNSgaVOH6WJ28KJCtKxH3XcJei5M=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-4',
        title: 'Lifestyle 4',
        thumb: 'https://media.gettyimages.com/id/1361609771/video/palm-oil-extraction-from-a-local-processing-business-in-iju-itaogbolu-akure-north-of-ondo.jpg?s=640x640&k=20&c=W0t80v_vNB-i7ToQE4aDFzKw7MCUx22i6uKGy9ALQV4=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-5',
        title: 'Lifestyle 5',
        thumb: 'https://media.gettyimages.com/id/1387621932/video/market-place-in-nigeria.jpg?s=640x640&k=20&c=qCDGrJfI-rhteEDuAb2vdeaoCl_gQNvi1v9bJnke9c4=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-6',
        title: 'Lifestyle 6',
        thumb: 'https://media.gettyimages.com/id/2222371847/video/annual-colourful-ancient-festival.jpg?s=640x640&k=20&c=Kg_20LluQN1pSKGPwHKlsI1dVbrC3wCZxSBYppB7YEk=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-7',
        title: 'lifestyle 7',
        thumb: 'https://media.gettyimages.com/id/2289570762/video/slow-mo-cinematic-moments-of-a-young-lady-jumping-and-dancing-on-a-beach.jpg?s=640x640&k=20&c=MxxabW5VbtOS_TKBYr_Qhu-dc2m7Q8kBhBLUrWm6DJE=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-8',
        title: 'Lifestyle 8',
        thumb: 'https://media.gettyimages.com/id/1648056273/video/people-using-an-atm-outdoor.jpg?s=640x640&k=20&c=vpF-1DBAAwtZnKaZwH6DDiV2lPpURpz6iAU87AeXdZA=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-9',
        title: 'lifestyle 9',
        thumb: 'https://media.gettyimages.com/id/2265582440/video/fishermen-on-a-canoe.jpg?s=640x640&k=20&c=OWDy8GsqOum4xw3V_MujkH0clstVMkbpkzqb66MSyJ8=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-10',
        title: 'lifestyle 10',
        thumb: 'https://media.gettyimages.com/id/2178959334/video/people-at-a-refuel-station.jpg?s=640x640&k=20&c=4W4a5HP85-CfPPUkX6lGVp9BKnhcy5eJk9ZEealTazM=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-11',
        title: 'lifestyle 11',
        thumb: 'https://media.gettyimages.com/id/2204759872/video/electrical-meters-for-reading-power-consumption.jpg?s=640x640&k=20&c=FiEugy07v9uAgJYLfC8UYVvocdkrv78-pdhPSNMpk8s=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'lifestyle-12',
        title: 'lifestyle 12',
        thumb: 'https://media.gettyimages.com/id/2253744886/video/creative-traditional-festival-called-eyo-in-lagos-nigeria.jpg?s=640x640&k=20&c=KRUY4X9FTpqROFxOFOEXn_pUkw5MuhGf8ofy5rxiPhs=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    // ==========================================================
    // TRANSPORTATION
    // ==========================================================

    transportation: [
      {
        id: 'transportation-1',
        title: 'Transportation 1',
        thumb: 'https://media.gettyimages.com/id/1881051114/video/23-december-2023-lagos-nigeria-pedestrians-moving-in-and-out-of-a-market-area-beside-the-road.jpg?s=640x640&k=20&c=qc0-UFzhsGwCQYru4OXkJjatJwfd4u8rPecCIvNBXUk=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-2',
        title: 'Transportation 2',
        thumb: 'https://media.gettyimages.com/id/2283180378/video/train-track-and-train-station.mp4?s=mp4-640x640-gi&k=20&c=PlrhPrGiGckrap3fr-MFyc_-GxWTR0p931cOr9s_jww=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-3',
        title: 'Transportation 3',
        thumb: 'https://media.gettyimages.com/id/2174484931/video/city-life-in-ogun-state-nigeria.jpg?s=640x640&k=20&c=JePdvCqugXlWkyHtKWqO5PNL61I58HuyvDivbuYt978=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-4',
        title: 'Transportation 4',
        thumb: 'https://media.gettyimages.com/id/1648191861/video/lagos-road-people-and-vehicular-movements.jpg?s=640x640&k=20&c=t6i_vfL2MjfVBI2yU3dF_VZjgYmdeOYrTzxxC7X5aQw=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-5',
        title: 'Transportation 5',
        thumb: 'https://media.gettyimages.com/id/1582303019/video/ile-epo-road-located-close-to-ile-epo-market-in-agege-lagos-nigeria.jpg?s=640x640&k=20&c=YHF-Zgt9PzyUsP0drBQYzoCvVnfz9A5Vm4sY7QE4SSk=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-6',
        title: 'Transportation 6',
        thumb: 'https://media.gettyimages.com/id/2180907574/video/aerial-perspective-of-growth-and-development.jpg?s=640x640&k=20&c=Ng82YSWnwxXsUU8SlCVjrsKgAu8oAJXc89a6RQYte3U=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-7',
        title: 'Transportation 7',
        thumb: 'https://media.gettyimages.com/id/2178265851/video/aerial-view-of-ekiti.jpg?s=640x640&k=20&c=aXJcT0bVfSI8M1A3GG29jf2KKvVZIFzZryFIUiicjoI=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-8',
        title: 'Transportation 8',
        thumb: 'https://media.gettyimages.com/id/2162913079/video/urban-life-in-lagos.jpg?s=640x640&k=20&c=p5rNZmcBX889Yp3vGPyoYDyvnC4xKMBIiHMlTlRAJJ4=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-9',
        title: 'Transportation 9',
        thumb: 'https://media.gettyimages.com/id/1648104736/video/lagos-people-and-vehicular-movements.jpg?s=640x640&k=20&c=nlMzo0A4EluTBmMX5Y27BMTuRIedBMfrlhIMOoq2HsA=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-10',
        title: 'Transportation 10',
        thumb: 'https://media.gettyimages.com/id/1582262127/video/agege-area-in-lagos-nigeria.jpg?s=640x640&k=20&c=hgEtROSW90PWkftSvAfgpjGJylAG_luCAyEIRHoRjjY=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-11',
        title: 'Transportation 11',
        thumb: 'https://media.gettyimages.com/id/2165446410/video/crowd-at-a-fuel-station.jpg?s=640x640&k=20&c=i7FnUfaDb5a_iNTUpk9fLhLZsuzDZegNMRNTGlD8OuI=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'transportation-12',
        title: 'Transportation 12',
        thumb: 'https://media.gettyimages.com/id/1881047005/video/23-december-2023-lagos-nigeria-pedestrians-moving-in-and-out-of-a-market-area-beside-the-road.jpg?s=640x640&k=20&c=qs7mymbIhnS6Dp1WrZzonVXR--S_BiXC3Xa8ITuilxI=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    // ==========================================================
    // MARKET
    // ==========================================================

    market: [
      {
        id: 'market-1',
        title: 'Market 1',
        thumb: 'https://media.gettyimages.com/id/2189325716/video/christmas-shopping-rush-in-lagos.jpg?s=640x640&k=20&c=sxYuuUIyLT4xfSWfO2Wyvq8cS5sl3ThMQppu35RJr5o=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-2',
        title: 'Market 2',
        thumb: 'https://media.gettyimages.com/id/2188890182/video/open-market-environment-in-lagos.jpg?s=640x640&k=20&c=GA9CHjmJftXHIrNHiK41Q9JH6ZOoitjFX0KMH36fd-c=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-3',
        title: 'Market 3',
        thumb: 'https://media.gettyimages.com/id/1582297922/video/ile-epo-road-located-close-to-ile-epo-market-in-agege-lagos-nigeria.jpg?s=640x640&k=20&c=F4IMeumO5Vz_xH2fXgTtjWyVonsDfMEr2STqwAllefE=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-4',
        title: 'Market 4',
        thumb: 'https://media.gettyimages.com/id/1648305956/video/aerial-view-of-alagbole-market-in-ogun.jpg?s=640x640&k=20&c=TCVEwGtvkjzJeFTGQpZJf_xwdTtegojuqCthogAqwJ8=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-5',
        title: 'Market 5',
        thumb: 'https://media.gettyimages.com/id/1648305956/video/aerial-view-of-alagbole-market-in-ogun.jpg?s=640x640&k=20&c=TCVEwGtvkjzJeFTGQpZJf_xwdTtegojuqCthogAqwJ8=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-6',
        title: 'Market 6',
        thumb: 'https://media.gettyimages.com/id/1881044443/video/23-december-2023-lagos-nigeria-pedestrians-moving-inside-a-market.jpg?s=640x640&k=20&c=qC9ET4Q7QgXqpvIziaKv2ZHz084Z8ZV4Bc75MANHyAU=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-7',
        title: 'Market 7',
        thumb: 'https://media.gettyimages.com/id/1881040354/video/23-december-2023-lagos-nigeria-item-display-market-traders-and-customer-in-abuelegba-lagos.jpg?s=640x640&k=20&c=iKGO1df597GLPnmIaPnKRgcCaQqGBRdVtgmnP3yhbsI=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-8',
        title: 'Market 8',
        thumb: 'https://media.gettyimages.com/id/1387597381/video/market-place.jpg?s=640x640&k=20&c=QkE89MS6Oat9SkUy5OU4X1Vi7Mpt_Oed8j7zQKyuYmQ=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-9',
        title: 'Market 9',
        thumb: 'https://media.gettyimages.com/id/1387592929/video/market-place.jpg?s=640x640&k=20&c=FzZkFT0VRoYuouWnJcfTrxilkAVrGACUklK_RklS4Js=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-10',
        title: 'Market 10',
        thumb: 'https://media.gettyimages.com/id/1387605497/video/market-place.jpg?s=640x640&k=20&c=icFUsIob7O0bK4lVzS0TI161J2u0V9uLNahAjC7wBs4=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-11',
        title: 'Market 11',
        thumb: 'https://media.gettyimages.com/id/1387592929/video/market-place.jpg?s=640x640&k=20&c=FzZkFT0VRoYuouWnJcfTrxilkAVrGACUklK_RklS4Js=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'market-12',
        title: 'Market 12',
        thumb: 'https://media.gettyimages.com/id/2258532269/video/footage-of-a-market-scene.jpg?s=640x640&k=20&c=o0aCheCQ2HJdZw9NI_nXHNdmbOt1Gk-d0ObnRSV1IvU=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    // ==========================================================
    // AERIAL
    // ==========================================================

    aerial: [
      {
        id: 'aerial-1',
        title: 'Aerial 1',
        thumb: 'https://media.gettyimages.com/id/2283224746/video/aerial-view-of-an-artistic-building.jpg?s=640x640&k=20&c=iDpBh90ScsbIuhdtXTR3oHI-eAQvvjeP530H_KjosX8=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-2',
        title: 'Aerial 2',
        thumb: 'https://media.gettyimages.com/id/2288337835/video/young-man-using-a-drone-controller-paired-to-a-mobile-phone.jpg?s=640x640&k=20&c=E3jps4rWy3lTN-VRrZfZ72LFZrQHzSowL2vZqCxDSDU=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-3',
        title: 'Aerial 3',
        thumb: 'https://media.gettyimages.com/id/2279211373/video/beautiful-umbrella-aerial-view-of-an-open-market.jpg?s=640x640&k=20&c=T_f-PKUTFaP0T92szN1UmxE7JB_jW75h6V_ZupaFzxo=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-4',
        title: 'Aerial 4',
        thumb: 'https://media.gettyimages.com/id/2234565786/video/aerial-view-of-lagos-island.jpg?s=640x640&k=20&c=n1QGC-qy-hMvfaHBUrqluXSjNu79wbN6eniDwAAMr0s=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-5',
        title: 'Aerial 5',
        thumb: 'https://media.gettyimages.com/id/2261081173/video/aerial-view-of-urban-environment.jpg?s=640x640&k=20&c=3mWojhuOTa8z7oWYIbl8EXM0jQiyawMt-TpDoCAAE94=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-6',
        title: 'Aerial 6',
        thumb: 'https://media.gettyimages.com/id/2221664857/video/annual-colourful-ancient-festival.jpg?s=640x640&k=20&c=NXVrPEFQZQy9qaxzgVnMecePTvC1xx9jHVyqPVwtni4=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-7',
        title: 'Aerial 7',
        thumb: 'https://media.gettyimages.com/id/2283181699/video/train-track-and-train-station.jpg?s=640x640&k=20&c=19yTgL3gqkNoBbMv09IKzyba1V9OJ80-Obp40mkT9Ng=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-8',
        title: 'Aerial 8',
        thumb: 'https://media.gettyimages.com/id/2279213283/video/road-transportation-and-urban-life-in-nigeria.jpg?s=640x640&k=20&c=uMgBhby2gFXnUa2juRzIR6BNuLr40cwBK9e0fyOcSaI=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-9',
        title: 'Aerial 9',
        thumb: 'https://media.gettyimages.com/id/2279214715/video/train-transportation-in-nigeria.jpg?s=640x640&k=20&c=ZbDiMNs30Tf2TR0fpR3-5PoCH35WGnQw_Eyn6c1kEAE=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-10',
        title: 'Aerial 10',
        thumb: 'https://media.gettyimages.com/id/2279214818/video/urban-life-in-nigeria.jpg?s=640x640&k=20&c=QKNNAiT3wJCTq1SWccm3i9JPH6L4O7qB9KhNrKIdykI=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-11',
        title: 'Aerial 11',
        thumb: 'https://media.gettyimages.com/id/2276615532/video/aerial-view-of-ojodu-area.jpg?s=640x640&k=20&c=HNb2cvoRXz68paduZ5DR-1Av5-wDIfZ6bSQVzuGi1-A=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'aerial-12',
        title: 'Aerial 12',
        thumb: 'https://media.gettyimages.com/id/2272567183/video/aerial-view-of-ojodu-area.jpg?s=640x640&k=20&c=U_y50pzDEbUgpCAxMt9wHS9RmI4rKXZRf8B17Hd_-Aw=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    // ==========================================================
    // FESTIVAL
    // ==========================================================

    festival: [
      {
        id: 'festival-1',
        title: 'Festival 1',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-2',
        title: 'Festival 2',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-3',
        title: 'Festival 3',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-4',
        title: 'Festival 4',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-5',
        title: 'Festival 5',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-6',
        title: 'Festival 6',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-7',
        title: 'Festival 7',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-8',
        title: 'Festival 8',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-9',
        title: 'Festival 9',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-10',
        title: 'Festival 10',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-11',
        title: 'Festival 11',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'festival-12',
        title: 'Festival 12',
        thumb: 'insert image link',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    // ==========================================================
    // NATURE
    // ==========================================================

    nature: [
      {
        id: 'nature-1',
        title: 'Nature 1',
        thumb: 'https://media.gettyimages.com/id/2253861048/video/aerial-view-of-a-beach-in-lagos-nigeria.jpg?s=640x640&k=20&c=eMYonU08chWOgTfB5MIchA1HbfCg4vMlkCZP4YfBidw=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-2',
        title: 'Nature 2',
        thumb: 'https://media.gettyimages.com/id/2253855996/video/aerial-view-of-a-beach-in-lagos-nigeria.jpg?s=640x640&k=20&c=34tIydZGm9uUesqmenxNtHeq13O7Vv3TSPHmHMgUnNI=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-3',
        title: 'Nature 3',
        thumb: 'https://media.gettyimages.com/id/2253861590/video/aerial-view-of-a-beach-in-lagos-nigeria.jpg?s=640x640&k=20&c=tNXvd0BbbU2vMn4jGE2AiiMIyPjarZTOp63EwPYeZvI=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-4',
        title: 'Nature 4',
        thumb: 'https://media.gettyimages.com/id/2253945239/video/aerial-view-of-a-beach-in-lagos-nigeria.jpg?s=640x640&k=20&c=PdmYAQlK4zEqNgVykvjBTpWb8Ozpe1a0FFgut9OnETQ=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-5',
        title: 'Nature 5',
        thumb: 'https://media.gettyimages.com/id/2182239112/video/waterfall-in-ekiti-nigeria.jpg?s=640x640&k=20&c=SxgrVhQ1dqc0TZm20w6aMitomrZTXD5E71g3k4gAKL4=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-6',
        title: 'Nature 6',
        thumb: 'https://media.gettyimages.com/id/2253120150/video/aerial-view-of-lagos-island.jpg?s=640x640&k=20&c=RumHaKbL-20UlSDvgrEK8PHcxGgQRzdF9k7yoo7nmEA=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-7',
        title: 'Nature 7',
        thumb: 'https://media.gettyimages.com/id/2237664906/video/aerial-view-of-lush-vegetation.jpg?s=640x640&k=20&c=Ae0gQBBvdQ5MtvTycfLPSBF0QlrfqXQLRRzvZ4a2gVg=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-8',
        title: 'Nature 8',
        thumb: 'https://media.gettyimages.com/id/2221508680/video/landscape-of-skylines-of-lagos-city.jpg?s=640x640&k=20&c=Lv8E_lWkD5cgV66Z51sIrT75PjwW7xQSfQKswacgC7s=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-9',
        title: 'Nature 9',
        thumb: 'https://media.gettyimages.com/id/2189329953/video/bats-habitat-in-lagos.jpg?s=640x640&k=20&c=rntHK1pjoW_r7p_PDhHtDYKZ9TT4K5jJG8jNX5CyjVI=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-10',
        title: 'Nature 10',
        thumb: 'https://media.gettyimages.com/id/2180714157/video/aerial-perspective-of-growth-and-development.jpg?s=640x640&k=20&c=U-zWaSprWMuRPOyiaP7BDt1MzOs2t7vhJ_Kj5cSVoic=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-11',
        title: 'Nature 11',
        thumb: 'https://media.gettyimages.com/id/2182592985/video/outdoor-park-area-in-ekiti.jpg?s=640x640&k=20&c=yu0fLje287YHeVaaJsUEWset9c7HQmORhIDgzsNtyAU=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'nature-12',
        title: 'Nature 12',
        thumb: 'https://media.gettyimages.com/id/2170828687/video/horizontal-video-of-green-vegetation.jpg?s=640x640&k=20&c=ORpttwbv8uJHjM_78f2xecO6KZ75AoZqIjgQFD1Zc6w=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    // ==========================================================
    // TRAVEL
    // ==========================================================

    travel: [
      {
        id: 'travel-1',
        title: 'Travel 1',
        thumb: 'https://media.gettyimages.com/id/1425846046/video/cathedral-church-of-christ.jpg?s=640x640&k=20&c=DQrOC8XSfSxR46WOwJXzP-TuNaJsy7E7AuEbJqAuBuc=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-2',
        title: 'Travel 2',
        thumb: 'https://media.gettyimages.com/id/2282905822/video/cultural-celebration-of-igbo-tribe.jpg?s=640x640&k=20&c=CXwMzarp-H7t9tgFP1uWy-UQEIwqFg37O_spBJBS8iA=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-3',
        title: 'Travel 3',
        thumb: 'https://media.gettyimages.com/id/2253738661/video/creative-traditional-festival-called-eyo-in-lagos-nigeria.jpg?s=640x640&k=20&c=RrIxq3l-GHoABm0WttGtrE1j3Gjj00MPyNYC-NXtSGA=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-4',
        title: 'Travel 4',
        thumb: 'https://media.gettyimages.com/id/2234279925/video/aerial-view-a-community-with-lush-vegetation.jpg?s=640x640&k=20&c=hLcJaE6Ss9tJTFN_S0nOmcdyiHejxPcNkwZAjc5ePAE=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-5',
        title: 'Travel 5',
        thumb: 'https://media.gettyimages.com/id/2111417401/video/lagos-city-life-nigeria.jpg?s=640x640&k=20&c=n_Dnjus1Iz6k2HDaxgbiqyIDJe9bpovtTvnbcLzXWZU=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-6',
        title: 'Travel 6',
        thumb: 'https://media.gettyimages.com/id/2234310925/video/group-of-african-people-drummers-and-performers.jpg?s=640x640&k=20&c=UGwD01HSyV1V00RkTnYkC_49Sf8eMSFfI2It2HPS-4I=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-7',
        title: 'Travel 7',
        thumb: 'https://media.gettyimages.com/id/2222374945/video/annual-colourful-ancient-festival.jpg?s=640x640&k=20&c=hmdtRL9B6OW-gfAZFmXik_fAtBXFbibBfFa6rCznoJE=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-8',
        title: 'Travel 8',
        thumb: 'https://media.gettyimages.com/id/2234304816/video/african-drummers-and-performers.jpg?s=640x640&k=20&c=WfwissE3C4OjdOdIiuwlvkXwBmEyFs3iiGSauIFCP70=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-9',
        title: 'Travel 9',
        thumb: 'https://media.gettyimages.com/id/2221677694/video/annual-colourful-ancient-festival.jpg?s=640x640&k=20&c=bnVRpt2M-cs--VNK93LD1sgjJvhAU3m-_t8fZMbrdvY=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-10',
        title: 'Travel 10',
        thumb: 'https://media.gettyimages.com/id/2222374429/video/annual-colourful-ancient-festival.jpg?s=640x640&k=20&c=2-DAjfGcM3H8sPzXf7oMhFhUH33KqKdMVX7NYImR7iw=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-11',
        title: 'Travel 11',
        thumb: 'https://media.gettyimages.com/id/2189325224/video/christmas-shopping-rush-in-lagos.jpg?s=640x640&k=20&c=pNQeFEm2bHf_QPKztPYZ-nO0kFDCUWX7Pe11O1VUDyY=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'travel-12',
        title: 'Travel 12',
        thumb: 'https://media.gettyimages.com/id/1434627802/video/commercial-streets-of-lagos.jpg?s=640x640&k=20&c=tIoFGsvaQVL11ZhKp0HDMCI47SpNakMVjpt09mxOMLA=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ],

    // ==========================================================
    // LANDMARK
    // ==========================================================

    landmark: [
      {
        id: 'landmark-1',
        title: 'Landmark 1',
        thumb: 'https://media.gettyimages.com/id/2283180763/video/aerial-view-of-an-artistic-building.jpg?s=640x640&k=20&c=vdtKIBLH_8VgsapMRxshmqq8gKWPWcUuAwIF21nmjts=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-2',
        title: 'Landmark 2',
        thumb: 'https://media.gettyimages.com/id/2179012620/video/modern-bus-terminal-and-parking-system.jpg?s=640x640&k=20&c=MQQPLRIBR-k5HvVR_Lr14VeGV35HY49cSA-HfOIrkfg=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-3',
        title: 'Landmark 3',
        thumb: 'https://media.gettyimages.com/id/2162918071/video/daylight-market-on-the-side-of-roads.jpg?s=640x640&k=20&c=2S5u-9ascSXaZv4tQUCN8EuZcndHwgF_bIbE1jovIWQ=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-4',
        title: 'Landmark 4',
        thumb: 'https://media.gettyimages.com/id/2180907046/video/aerial-perspective-of-growth-and-development.jpg?s=640x640&k=20&c=zgwJQB-rIx1dretebazunYir6Wo6hI7hANRfFosdyug=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-5',
        title: 'Landmark 5',
        thumb: 'https://media.gettyimages.com/id/2265582821/video/fishermen-on-a-canoe.jpg?s=640x640&k=20&c=5kQXqtyMCCOq0xBxSkS_a5BjQsMP_2chLHFVLFAES64=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-6',
        title: 'Landmark 6',
        thumb: 'https://media.gettyimages.com/id/2262539700/video/means-of-transportation-in-lagos.jpg?s=640x640&k=20&c=BEgcAVmccv7Pzo8eERONQFnuGVGyS3srXZnApJmA7q4=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-7',
        title: 'Landmark 7',
        thumb: 'https://media.gettyimages.com/id/2253744407/video/creative-traditional-festival-called-eyo-in-lagos-nigeria.jpg?s=640x640&k=20&c=2zo0F4K5Fzr-VZKnTStXv6g00V_yQiqz9sXqbSnogEE=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-8',
        title: 'Landmark 8',
        thumb: 'https://media.gettyimages.com/id/2253172553/video/aerial-view-of-tafawa-balewa-square.jpg?s=640x640&k=20&c=G0y-3cbgKtij8VVp3mfpuTjB11MAxSjDtBoEXlA9vQw=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-9',
        title: 'Landmark 9',
        thumb: 'https://media.gettyimages.com/id/2279214624/video/train-transportation-in-nigeria.jpg?s=640x640&k=20&c=gmpGAcPIbjy7NScgJR56oRQmfnSA-v3GbBQV9uWDWDA=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-10',
        title: 'Landmark 10',
        thumb: 'https://media.gettyimages.com/id/2252360939/video/lekki-link-bridge-in-lagos-nigeria.jpg?s=640x640&k=20&c=byx1R9WDXondp-ZrFbnlrfa2c8WjYDdrqcW09LPgBWs=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-11',
        title: 'Landmark 11',
        thumb: 'https://media.gettyimages.com/id/2244512840/video/aerial-view-of-a-interchange-where-roads-curve.jpg?s=640x640&k=20&c=_PO6gNKmzbVa0NnAeEPELdpUorULuifjyBxHW82L8fo=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      },
      {
        id: 'landmark-12',
        title: 'Landmark 12',
        thumb: 'https://media.gettyimages.com/id/2234565490/video/aerial-view-of-lagos-island.jpg?s=640x640&k=20&c=KMqDj_sFmaEZnd99PByNHxqR9KKJ--QgTO7dkNOXjww=',
        url: '#',
        platforms: ['getty', 'shutterstock', 'adobe', 'pond5']
      }
    ]
  };

  // Get videos for the current category
  const videos = categoryVideos[category.slug] || [];

  return {
    props: { category, videos },
    revalidate: 3600
  };
}

export async function getStaticPaths() {
  const paths = videoCategories.map((category) => ({
    params: { category: category.slug }
  }));

  return {
    paths,
    fallback: false
  };
}
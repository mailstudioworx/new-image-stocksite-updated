import Link from 'next/link';
import styles from '@/styles/FeaturedGallery.module.css';

export default function FeaturedGallery() {
  const featuredItems = [
    {
      id: 1,
      title: 'Transportation',
      image: 'https://media.gettyimages.com/id/637382222/photo/tricycle-driver.jpg?s=612x612&w=0&k=20&c=djHBvonOhcE1pgyG4AcVrW_chXVI6DmZ8yOFFlg8Pcg=',
      link: '/images/transportation'
    },
    {
      id: 2,
      title: 'Market',
      image: 'https://media.gettyimages.com/id/2159863988/photo/fashion-designer-draping-cloth-on-a-mannequin.jpg?s=612x612&w=0&k=20&c=RetMrlhlXhpLCT-DO9L4JfLT03ByNn-Twrnlwh8__yk=',
      link: '/images/market'
    },
    {
      id: 3,
      title: 'Lifestyle',
      image: 'https://media.gettyimages.com/id/2149573150/photo/lady-carrying-shopping-paper-bags.jpg?s=612x612&w=0&k=20&c=XHgQhTfpnwoN0mz2BeWiRYQphHUXXKfNgGk0eaSXSrA=',
      link: '/images/lifestyle'
    },
    {
      id: 4,
      title: 'Nature',
      image: 'https://media.gettyimages.com/id/2237820120/photo/macro-view-tiny-moss-plants.jpg?s=612x612&w=0&k=20&c=EIQcuXB-0VcT9m_8eemznlmG8T76uPl-qJ1RNL5H5SE=',
      link: '/images/nature'
    },
    {
      id: 5,
      title: 'Aerial',
      image: 'https://media.gettyimages.com/id/2253043338/photo/aerial-view-of-lagos-island.jpg?s=612x612&w=0&k=20&c=ZLnJCSFhB-ZUb4bOco5iO41QTbUu_5jCEG0PA8x1iBo=',
      link: '/images/aerial'
    },
    {
      id: 6,
      title: 'Food',
      image: 'https://images.pond5.com/garden-egg-and-grinded-groundnut-photo-249174816_iconl_nowm.jpeg',
      link: '/images/food'
    }
  ];

  return (
    <section className={styles.featured}>
      <div className={styles.container}>
        <h2 className={styles.title}>Explore Our Collections</h2>
        <div className={styles.grid}>
          {featuredItems.map(item => (
            <Link key={item.id} href={item.link} className={styles.card}>
              <div className={styles.cardImage}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardOverlay}>
                <h3>{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

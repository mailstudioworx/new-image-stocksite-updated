import Link from 'next/link';
import styles from '@/styles/GalleryIndex.module.css';

export default function GalleryIndex({ categories, type }) {
  const title = type === 'images' ? 'Stock Photography' : 'Stock Videos';
  const description = type === 'images' 
    ? 'Browse our extensive collection of African stock photography across multiple categories'
    : 'Browse our collection of African stock videos across multiple categories';

  return (
    <section className={styles.galleryIndex}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.categoryGrid}>
          {categories.map(category => (
            <Link 
              key={category.slug}
              href={`/${type}/${category.slug}`}
              className={styles.categoryCard}
            >
              <div className={styles.categoryImage}>
                <img 
                  src={category.image} 
                  alt={category.title}
                  loading="lazy"
                />
              </div>
              <div className={styles.categoryOverlay}>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

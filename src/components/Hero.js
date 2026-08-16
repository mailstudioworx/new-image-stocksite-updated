import Link from 'next/link';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Discover African Visual Excellence</h1>
        <p className={styles.subtitle}>Premium stock photography and videography from Africa's most talented creators</p>
        <div className={styles.cta}>
          <Link href="/images" className={styles.ctaButton}>Browse Images</Link>
          <Link href="/videos" className={`${styles.ctaButton} ${styles.secondary}`}>Browse Videos</Link>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img 
          src="https://media.gettyimages.com/id/1453866549/photo/beautiful-african-lady-on-african-outfit.jpg?s=612x612&w=0&k=20&c=32U6xBEdXnvWCZPYc84aGm8I74N3j4_OM3z6UNaqtxA=" 
          alt="African landscape and culture"
          loading="lazy"
        />
      </div>
    </section>
  );
}

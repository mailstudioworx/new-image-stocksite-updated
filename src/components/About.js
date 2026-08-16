import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.profileSection}>
          <div className={styles.profileImage}>
            <img 
              src="https://cdn.pond5.com/p21/002503253_l670.jpg" 
              alt="Profile photograph"
            />
          </div>
          <div className={styles.profileContent}>
            <h1>About Me</h1>
            <p className={styles.intro}>
              Welcome to African Photos and Videos, your gateway to premium stock photography and videography from Africa's most talented visual creators.
            </p>
            <p>
              As a passionate photographer and videographer, I have dedicated my career to capturing the rich diversity, vibrant cultures, and stunning landscapes of Africa. My work has been featured on leading stock photography platforms including Getty Images, Shutterstock, Adobe Stock, and Pond5.
            </p>
            <p>
              This platform was created to make it easier for you to discover and license high-quality African imagery. Rather than hosting content here, I've curated galleries that showcase my best work across multiple platforms, allowing you to find exactly what you're looking for from the world's leading stock media providers.
            </p>
          </div>
        </div>

        <section className={styles.section}>
          <h2>Experience</h2>
          <p>
            With over a decade of experience in visual storytelling, I specialize in capturing authentic moments that reflect the essence of African life, culture, and environment. My portfolio spans multiple categories including transportation, markets, lifestyle, aerial photography, food, nature, festivals, and more.
          </p>
          <p>
            My work has been licensed by agencies, publications, and creative professionals worldwide, helping them tell compelling stories through visuals.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Mission</h2>
          <p>
            To celebrate and showcase the visual richness of Africa while providing photographers, videographers, and content creators with accessible, high-quality stock media. We believe in authentic representation and the power of visual storytelling to connect, inspire, and inform audiences around the world.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Stock Portfolio Presence</h2>
          <div className={styles.platforms}>
            <div className={styles.platformItem}>
              <h3>Getty Images</h3>
              <p>Explore my extensive collection on Getty Images</p>
            </div>
            <div className={styles.platformItem}>
              <h3>Shutterstock</h3>
              <p>Discover diverse imagery on Shutterstock</p>
            </div>
            <div className={styles.platformItem}>
              <h3>Adobe Stock</h3>
              <p>Browse creative assets on Adobe Stock</p>
            </div>
            <div className={styles.platformItem}>
              <h3>Pond5</h3>
              <p>Find premium content on Pond5</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import styles from '@/styles/CategoryGallery.module.css';

export default function CategoryGallery({ category, images, videos, isVideo = false }) {
  const items = isVideo ? videos : images;
  const stockPlatforms = {
    getty: { name: 'Getty Images', url: 'https://www.gettyimages.com/search/2/image?phrase=ariyo%20olasunkanmi' },
    shutterstock: { name: 'Shutterstock', url: 'https://www.shutterstock.com/g/pencilsmoka?msockid=39c8125b262c607e21de04f7271861ba' },
    adobe: { name: 'Adobe Stock', url: 'https://stock.adobe.com/ng/contributor/206951688/ariyo?msockid=39c8125b262c607e21de04f7271861ba' },
    pond5: { name: 'Pond5', url: 'https://www.pond5.com/index.php?page=my_uploads' }
  };

  return (
    <section className={styles.categoryGallery}>
      <div className={styles.container}>
        <h1 className={styles.title}>{category.title}</h1>
        <p className={styles.description}>{category.description}</p>
        
        <div className={styles.masonry}>
          {items.map(item => (
            <div key={item.id} className={styles.galleryItem}>
              <div className={styles.itemImage}>
                <img 
                  src={item.thumb} 
                  alt={item.title}
                  loading="lazy"
                />
                {isVideo && <div className={styles.playIcon}>▶</div>}
              </div>
              <div className={styles.itemOverlay}>
                <h3>{item.title}</h3>
                <div className={styles.platforms}>
                  {item.platforms.map(platform => {
                    // Each card has its own editable marketplace URL.
                    // The per-card map takes priority; the platform default remains
                    // as a safety fallback for any card not yet customized.
                    const platformUrl = (item.platformLinks && item.platformLinks[platform])
                      ? item.platformLinks[platform]
                      : (stockPlatforms[platform] && stockPlatforms[platform].url) || '#';

                    const platformName = (stockPlatforms[platform] && stockPlatforms[platform].name) || platform;

                    return (
                      <a 
                        key={platform}
                        href={platformUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.platformLink}
                        title={`View on ${platformName}`}
                      >
                        {platformName}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

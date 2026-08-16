import styles from '@/styles/BlogList.module.css';
import Link from 'next/link';

export default function BlogList({ posts }) {
  return (
    <section className={styles.blogList}>
      <div className={styles.container}>
        <h1 className={styles.title}>Blog</h1>
        <p className={styles.description}>Read our latest articles on African photography, stock media, and visual content creation</p>
        
        <div className={styles.posts}>
          {posts && posts.length > 0 ? (
            posts.map(post => (
              <article key={post.slug} className={styles.postCard}>
                {post.image && (
                  <div className={styles.postImage}>
                    <img src={post.image} alt={post.title} loading="lazy" />
                  </div>
                )}
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.date}>{new Date(post.date).toLocaleDateString()}</span>
                    <span className={styles.author}>By {post.author}</span>
                  </div>
                  <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    Read More →
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <p>No posts yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}

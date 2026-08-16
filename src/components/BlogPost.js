import styles from '@/styles/BlogPost.module.css';
import Link from 'next/link';

export default function BlogPost({ post }) {
  return (
    <article className={styles.blogPost}>
      <div className={styles.container}>
        <div className={styles.postHeader}>
          {post.image && (
            <div className={styles.featuredImage}>
              <img src={post.image} alt={post.title} />
            </div>
          )}
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.postMeta}>
            <span className={styles.date}>{new Date(post.date).toLocaleDateString()}</span>
            <span className={styles.author}>By {post.author}</span>
            {post.category && <span className={styles.category}>{post.category}</span>}
          </div>
        </div>
        
        <div className={styles.content}>
          {post.content && <div dangerouslySetInnerHTML={{ __html: post.content }} />}
        </div>

        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <section className={styles.relatedPosts}>
            <h2>Related Articles</h2>
            <div className={styles.relatedGrid}>
              {post.relatedPosts.map(relatedPost => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className={styles.relatedCard}>
                  <h3>{relatedPost.title}</h3>
                  <p>{relatedPost.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}

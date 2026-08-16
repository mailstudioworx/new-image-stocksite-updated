import Link from 'next/link';
import styles from '@/styles/Breadcrumb.module.css';

export default function Breadcrumb({ items }) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ul className={styles.breadcrumbList}>
        {items.map((item, index) => (
          <li key={index}>
            {index > 0 && <span className={styles.separator}>/</span>}
            {index === items.length - 1 ? (
              <span className={styles.current}>{item.name}</span>
            ) : (
              <Link href={item.url}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

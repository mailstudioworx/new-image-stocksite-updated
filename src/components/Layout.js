import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/Layout.module.css';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imageDropdownOpen, setImageDropdownOpen] = useState(false);
  const [videoDropdownOpen, setVideoDropdownOpen] = useState(false);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>African Photos & Videos</span>
          </Link>
          
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
            <Link href="/" className={styles.navLink}>Home</Link>
            
            <div className={styles.navDropdown}
              onMouseEnter={() => setImageDropdownOpen(true)}
              onMouseLeave={() => setImageDropdownOpen(false)}
            >
              <Link href="/images" className={styles.navLink}>
                Images
              </Link>
              {imageDropdownOpen && (
                <div className={styles.dropdown}>
                  <Link href="/images/transportation">Transportation</Link>
                  <Link href="/images/market">Market</Link>
                  <Link href="/images/lifestyle">Lifestyle</Link>
                  <Link href="/images/aerial">Aerial</Link>
                  <Link href="/images/technology">Technology</Link>
                  <Link href="/images/food">Food</Link>
                  <Link href="/images/nature">Nature</Link>
                  <Link href="/images/backgrounds">Backgrounds</Link>
                  <Link href="/images/festivals">Festivals</Link>
                  <Link href="/images/business">Business</Link>
                  <Link href="/images/religion">Religion</Link>
                  <Link href="/images/travel">Travel</Link>
                  <Link href="/images/creative">Creative</Link>
                </div>
              )}
            </div>

            <div className={styles.navDropdown}
              onMouseEnter={() => setVideoDropdownOpen(true)}
              onMouseLeave={() => setVideoDropdownOpen(false)}
            >
              <Link href="/videos" className={styles.navLink}>
                Videos
              </Link>
              {videoDropdownOpen && (
                <div className={styles.dropdown}>
                  <Link href="/videos/lifestyle">Lifestyle</Link>
                  <Link href="/videos/transportation">Transportation</Link>
                  <Link href="/videos/market">Market</Link>
                  <Link href="/videos/aerial">Aerial</Link>
                  <Link href="/videos/festival">Festival</Link>
                  <Link href="/videos/nature">Nature</Link>
                  <Link href="/videos/travel">Travel</Link>
                  <Link href="/videos/landmark">Landmark</Link>
                </div>
              )}
            </div>

            <Link href="/blog" className={styles.navLink}>Blog</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>African Photos & Videos</h3>
            <p>Discover stunning African imagery from premium stock photography and videography platforms.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/images">Images</Link></li>
              <li><Link href="/videos">Videos</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Stock Platforms</h4>
            <ul>
              <li><a href="https://www.gettyimages.com/search/2/image-film?family=creative&phrase=ariyo%20olasunkanmi&sort=best&assetfiletype=" target="_blank" rel="noopener noreferrer">Getty Images</a></li>
              <li><a href="https://www.shutterstock.com/g/pencilsmoka?msockid=39c8125b262c607e21de04f7271861ba" target="_blank" rel="noopener noreferrer">Shutterstock</a></li>
              <li><a href="https://stock.adobe.com/ng/contributor/206951688/ariyo?msockid=39c8125b262c607e21de04f7271861ba" target="_blank" rel="noopener noreferrer">Adobe Stock</a></li>
              <li><a href="https://www.pond5.com/artist/sunkanmi38180" target="_blank" rel="noopener noreferrer">Pond5</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2026 African Photos and Videos. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

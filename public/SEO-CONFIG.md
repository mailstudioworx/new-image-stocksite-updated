# African Photos and Videos - Meta Tags and SEO Configuration

## Overview
This document outlines the SEO structure and configuration for the website.

## Domain
- Production Domain: www.africanphotosandvideos.com.ng

## Meta Tags
All pages include:
- Title tags (unique per page)
- Meta descriptions (unique per page)
- Viewport meta tag for mobile responsiveness
- Canonical URLs to prevent duplicate content
- Open Graph tags for social sharing
- Twitter Card tags

## Structured Data
Implemented Schema.org structured data:
- Organization schema on homepage
- CollectionPage schema on category pages
- BlogPosting schema on blog posts
- BreadcrumbList schema for navigation
- ImageObject schema for images

## SEO Files
- robots.txt - Directs search engine crawlers
- sitemap.xml - Main sitemap with all pages
- sitemap-images.xml - Image sitemap for Google Images
- sitemap-index.xml - Index of all sitemaps

## Internal Linking
- Breadcrumb navigation on all pages
- Related posts on blog pages
- Navigation menus linking to all sections
- Strategic internal links in content

## Image SEO
- ALT text on all images
- Descriptive filenames
- Image sitemap for Google Images
- Lazy loading for performance
- Responsive images with srcset

## Performance
- Next.js static generation for fast load times
- Image optimization
- CSS and JavaScript minification
- Core Web Vitals optimization

## Mobile
- Fully responsive design
- Mobile-first approach
- Touch-friendly interface
- Fast mobile loading

## Indexing Status
Pages configured for indexing:
- Homepage: index, follow
- Category pages: index, follow
- Blog pages: index, follow
- About/Contact: index, follow
- Policy pages: index, follow

## Crawl Parameters
- Crawl delay: automatic (no restrictions for major search engines)
- Slow crawlers: 10 second delay
- Query parameters: excluded (fbclid, utm_*)

## Next Steps
1. Submit sitemap to Google Search Console
2. Submit sitemap to Bing Webmaster Tools
3. Configure domain verification
4. Monitor indexing status
5. Track search performance
6. Optimize for target keywords

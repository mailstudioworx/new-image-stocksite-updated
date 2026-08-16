# African Photos and Videos - Complete Website Documentation

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Development Guide](#development-guide)
6. [Deployment](#deployment)
7. [SEO & Performance](#seo--performance)
8. [API Documentation](#api-documentation)
9. [Contributing](#contributing)
10. [Troubleshooting](#troubleshooting)

---

## Project Overview

**African Photos and Videos** is a premium stock photography and videography portfolio discovery platform built with Next.js. The site serves as a curated gateway to high-quality African imagery available on major stock platforms including Getty Images, Shutterstock, Adobe Stock, and Pond5.

### Key Features

- **Multiple Collections**: Browse 13+ image categories and 8+ video categories
- **Blog System**: Share insights about African photography and visual content
- **Responsive Design**: Fully mobile-optimized interface
- **SEO Optimized**: Structured data, sitemaps, and performance optimizations
- **Fast Loading**: Static site generation and image optimization
- **Professional Portfolio**: Showcase high-quality African imagery

### Target Audience

- Stock photographers and videographers
- Creative professionals seeking African imagery
- Content creators and agencies
- Marketing and branding professionals
- Publishers and media companies

---

## Technology Stack

### Frontend
- **Framework**: Next.js 14+ (React 18)
- **Styling**: CSS Modules with responsive design
- **Image Optimization**: Next.js Image component
- **Package Manager**: npm

### Backend & Services
- **API**: Next.js API Routes
- **Static Generation**: Incremental Static Regeneration (ISR)
- **Content Management**: File-based (Markdown for blog posts)

### Development Tools
- **Linting**: ESLint with Next.js config
- **Version Control**: Git & GitHub
- **Deployment**: Vercel (recommended) or any Node.js host

### SEO & Analytics
- **Schema.org**: Structured data markup
- **Sitemaps**: XML sitemaps for search engines
- **Google Analytics**: Ready for integration
- **Meta Tags**: Open Graph and Twitter Card support

---

## Project Structure

```
african-photos-videos/
├── src/
│   ├── pages/                 # Next.js pages and API routes
│   │   ├── _app.js           # App wrapper with global head
│   │   ├── _document.js       # Document wrapper
│   │   ├── index.js           # Homepage
│   │   ├── images/
│   │   │   ├── index.js       # Images gallery index
│   │   │   └── [category].js  # Category pages (dynamic)
│   │   ├── videos/
│   │   │   ├── index.js       # Videos gallery index
│   │   │   └── [category].js  # Category pages (dynamic)
│   │   ├── blog/
│   │   │   ├── index.js       # Blog index
│   │   │   └── [slug].js      # Blog post pages (dynamic)
│   │   ├── about.js           # About page
│   │   ├── contact.js         # Contact page
│   │   └── api/
│   │       ├── health.js      # Health check endpoint
│   │       ├── categories.js  # Categories API
│   │       ├── blog.js        # Blog posts API
│   │       └── sitemap.js     # Dynamic sitemap
│   ├── components/            # React components
│   │   ├── Layout.js          # Main layout wrapper
│   │   ├── Hero.js            # Hero section
│   │   ├── FeaturedGallery.js # Featured collections
│   │   ├── Breadcrumb.js      # Breadcrumb navigation
│   │   ├── GalleryIndex.js    # Gallery category listing
│   │   ├── CategoryGallery.js # Category gallery view
│   │   ├── BlogList.js        # Blog posts listing
│   │   ├── BlogPost.js        # Individual blog post
│   │   ├── About.js           # About page content
│   │   └── Contact.js         # Contact page content
│   ├── styles/                # CSS modules
│   │   ├── globals.css        # Global styles
│   │   ├── Layout.module.css  # Layout styles
│   │   ├── Hero.module.css    # Hero styles
│   │   ├── [...component].module.css # Component styles
│   ├── data/
│   │   ├── categories.js      # Category definitions
│   │   └── blog/              # Blog post markdown files
│   ├── utils/
│   │   ├── blog.js            # Blog post utilities
│   │   ├── sitemap.js         # Sitemap generation
│   │   ├── imageSitemap.js    # Image sitemap generation
│   │   └── seo.js             # SEO helpers
│   ├── lib/
│   │   ├── config.js          # Configuration
│   │   ├── analytics.js       # Analytics tracking
│   │   ├── content.js         # Content utilities
│   │   ├── performance.js     # Performance optimization
│   │   ├── staticGeneration.js# Static generation helpers
│   │   └── validation.js      # Input validation
├── public/
│   ├── robots.txt             # Search engine crawling rules
│   ├── sitemap.xml            # Main sitemap
│   ├── sitemap-images.xml     # Image sitemap
│   ├── sitemap-index.xml      # Sitemap index
│   ├── PRIVACY.md             # Privacy policy
│   ├── TERMS.md               # Terms of service
│   ├── SECURITY.md            # Security policy
│   └── SEO-CONFIG.md          # SEO configuration
├── scripts/
│   ├── generate-sitemap.js    # Sitemap generation script
│   ├── check-structure.js     # Project structure checker
│   └── setup-env.js           # Environment setup script
├── .github/
│   └── workflows/             # GitHub Actions (optional)
├── package.json               # Project dependencies
├── next.config.js             # Next.js configuration
├── jsconfig.json              # JavaScript path aliases
├── .eslintrc.json             # ESLint configuration
├── .gitignore                 # Git ignore rules
├── README.md                  # Project readme
└── DOCUMENTATION.md           # This file
```

---

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/reddotmediang-ui/image-stock.git
   cd image-stock
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   npm run setup-env
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Visit `http://localhost:3000`

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

### Generate Sitemap

```bash
npm run sitemap
```

---

## Development Guide

### Adding New Image Categories

1. Edit `src/data/categories.js`
2. Add to `imageCategories` array:
   ```javascript
   {
     slug: 'your-category',
     title: 'Your Category',
     description: 'Category description',
     image: 'https://example.com/image.jpg'
   }
   ```
3. Next.js will automatically generate the route

### Adding New Video Categories

Follows the same process as image categories in the `videoCategories` array.

### Creating Blog Posts

1. Create a new file: `src/data/blog/your-post-slug.md`
2. Use the following format:
   ```markdown
   ---
   title: Your Blog Post Title
   date: 2024-01-15
   author: Author Name
   excerpt: Brief description of the post
   image: https://example.com/image.jpg
   category: Photography
   ---
   
   # Your Blog Post
   
   Your content here...
   ```
3. Post will be automatically available at `/blog/your-post-slug`

### Adding New Pages

1. Create a new file in `src/pages/your-page.js`
2. Use existing page as template
3. Add navigation links in `Layout.js`

### Component Development

All components use CSS Modules for scoped styling:

```javascript
// Component file: src/components/MyComponent.js
import styles from '@/styles/MyComponent.module.css';

export default function MyComponent() {
  return <div className={styles.container}>Content</div>;
}
```

```css
/* CSS Module: src/styles/MyComponent.module.css */
.container {
  padding: 2rem;
  background-color: #f9f9f9;
}
```

### Styling Guidelines

- Use CSS Modules for component-specific styles
- Use global styles in `globals.css` for site-wide rules
- Follow mobile-first approach
- Ensure accessibility (WCAG 2.1 AA)
- Use semantic HTML

### Code Quality

```bash
# Run ESLint
npm run lint

# Build for production (catches errors)
npm run build
```

---

## Deployment

### Vercel (Recommended)

1. **Connect GitHub repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select GitHub repository

2. **Configure environment variables**
   - Add variables from `.env.local`
   - Vercel will automatically detect Next.js

3. **Deploy**
   - Vercel automatically deploys on push to main branch
   - Preview deployments for pull requests

### Self-Hosted (Node.js)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start server**
   ```bash
   npm start
   ```

3. **Configure reverse proxy** (nginx example)
   ```nginx
   server {
       listen 80;
       server_name www.africanphotosandvideos.com.ng;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### Docker Deployment

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

---

## SEO & Performance

### SEO Features Implemented

✓ Structured data (Schema.org)
✓ Meta tags (title, description, OG tags)
✓ XML sitemaps
✓ Robots.txt
✓ Canonical URLs
✓ Breadcrumb navigation
✓ Mobile-friendly design
✓ Fast page load times
✓ Image optimization
✓ Internal linking strategy

### Performance Optimization

- **Static Generation**: 99% of pages pre-rendered
- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Code Splitting**: Automatic by Next.js
- **Minification**: CSS and JS minified in production
- **Compression**: Gzip compression enabled

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### SEO Checklist

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify domain ownership
- [ ] Monitor search performance
- [ ] Set up Google Analytics
- [ ] Configure robots.txt
- [ ] Test mobile usability
- [ ] Check Core Web Vitals

---

## API Documentation

### Available Endpoints

#### 1. Health Check
```
GET /api/health
```
Response:
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "service": "African Photos and Videos API"
}
```

#### 2. Get Categories
```
GET /api/categories?type=images
GET /api/categories?type=videos
```
Parameters:
- `type` (required): "images" or "videos"

Response:
```json
{
  "success": true,
  "data": [
    {
      "slug": "transportation",
      "title": "Transportation",
      "description": "Vehicles, roads, and movement across Africa",
      "image": "https://example.com/image.jpg"
    }
  ],
  "count": 13
}
```

#### 3. Get Blog Posts
```
GET /api/blog
```
Response:
```json
{
  "success": true,
  "data": [
    {
      "slug": "post-slug",
      "title": "Post Title",
      "date": "2024-01-15",
      "author": "Author Name",
      "excerpt": "Brief description",
      "content": "Full HTML content"
    }
  ],
  "count": 5
}
```

#### 4. Dynamic Sitemap
```
GET /api/sitemap
```
Returns XML sitemap

---

## Contributing

### Code Style

- Use 2-space indentation
- Use semicolons
- Use meaningful variable names
- Comment complex logic
- Use arrow functions

### Git Workflow

1. Create feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m "Add your feature"`
3. Push branch: `git push origin feature/your-feature`
4. Create pull request

### Commit Message Format

```
type(scope): subject

body

footer
```

Example:
```
feat(blog): add reading time calculation

Implements automatic reading time calculation for blog posts
based on word count and average reading speed.

Fixes #123
```

---

## Troubleshooting

### Common Issues

#### 1. Build Fails
```bash
# Clear Next.js cache
rm -rf .next/
npm run build
```

#### 2. Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

#### 3. Dependencies Issues
```bash
# Clean install
rm -rf node_modules/ package-lock.json
npm install
```

#### 4. Images Not Loading
- Check image URLs are valid
- Verify CORS headers if using external images
- Check image optimization settings in next.config.js

#### 5. Blog Posts Not Appearing
- Verify markdown files are in `src/data/blog/`
- Check front matter format
- Ensure proper YAML syntax

### Debug Mode

```bash
# Enable verbose logging
DEBUG=* npm run dev

# Check build output
npm run build -- --debug
```

### Performance Debugging

```bash
# Analyze bundle size
npm install -D @next/bundle-analyzer

# In next.config.js:
const withBundleAnalyzer = require('@next/bundle-analyzer')
module.exports = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(nextConfig)

# Run analysis
ANALYZE=true npm run build
```

---

## Support & Contact

- **Email**: contact@africanphotosandvideos.com.ng
- **GitHub Issues**: [Create an issue](https://github.com/reddotmediang-ui/image-stock/issues)
- **Security**: security@africanphotosandvideos.com.ng

---

## License

This project is proprietary and confidential.

---

## Changelog

### Version 1.0.0 (2024-01-15)
- Initial release
- Image gallery with 13 categories
- Video gallery with 8 categories
- Blog system with Markdown support
- Full SEO optimization
- Responsive mobile design
- API endpoints

---

**Last Updated**: January 15, 2024

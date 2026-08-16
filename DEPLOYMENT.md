# DEPLOYMENT.md

## Deployment Guide for African Photos and Videos

## Table of Contents

1. [Vercel Deployment](#vercel-deployment)
2. [Self-Hosted Deployment](#self-hosted-deployment)
3. [Docker Deployment](#docker-deployment)
4. [GitHub Actions CI/CD](#github-actions-cicd)
5. [Environment Variables](#environment-variables)
6. [Domain Configuration](#domain-configuration)
7. [SSL/TLS](#ssltls)
8. [Monitoring & Maintenance](#monitoring--maintenance)

## Vercel Deployment

### Prerequisites

- Vercel account (free at [vercel.com](https://vercel.com))
- GitHub repository

### Step 1: Connect Repository

1. Go to [vercel.com](https://vercel.com/dashboard)
2. Click "New Project"
3. Select "Import Git Repository"
4. Connect your GitHub account
5. Select the `image-stock` repository

### Step 2: Configure Project

1. **Project Name**: `african-photos-videos` (or your choice)
2. **Framework**: Select "Next.js"
3. **Root Directory**: Leave default
4. Click "Deploy"

### Step 3: Set Environment Variables

1. Go to Settings → Environment Variables
2. Add variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://www.africanphotosandvideos.com.ng
   NEXT_PUBLIC_SITE_NAME=African Photos and Videos
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Save changes

### Step 4: Custom Domain

1. Go to Settings → Domains
2. Add domain: `www.africanphotosandvideos.com.ng`
3. Follow DNS configuration steps
4. Wait for verification (24-48 hours)

### Deployment Complete

Vercel automatically deploys on:
- Push to main branch → Production
- Pull requests → Preview deployments
- Push to other branches → Preview deployments

## Self-Hosted Deployment

### Prerequisites

- Ubuntu 20.04 LTS server (or similar)
- Node.js 16+
- npm or yarn
- Git
- nginx (reverse proxy)
- SSL certificate (Let's Encrypt)

### Step 1: Server Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install nginx
sudo apt install -y nginx

# Install Let's Encrypt certbot
sudo apt install -y certbot python3-certbot-nginx
```

### Step 2: Clone & Setup Application

```bash
# Clone repository
cd /var/www
sudo git clone https://github.com/reddotmediang-ui/image-stock.git
cd image-stock

# Install dependencies
sudo npm install

# Setup environment
sudo cp .env.example .env.local
sudo nano .env.local  # Edit with your values

# Build application
sudo npm run build
```

### Step 3: Create systemd Service

```bash
# Create service file
sudo nano /etc/systemd/system/african-photos-videos.service
```

Add content:

```ini
[Unit]
Description=African Photos and Videos
After=network.target

[Service]
User=www-data
WorkingDirectory=/var/www/image-stock
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=10
StandardOutput=append:/var/log/image-stock.log
StandardError=append:/var/log/image-stock.error.log

[Install]
WantedBy=multi-user.target
```

Enable and start service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable african-photos-videos
sudo systemctl start african-photos-videos
```

### Step 4: Configure nginx

```bash
sudo nano /etc/nginx/sites-available/african-photos-videos
```

Add configuration:

```nginx
server {
    listen 80;
    server_name www.africanphotosandvideos.com.ng africanphotosandvideos.com.ng;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:

```bash
sudo ln -s /etc/nginx/sites-available/african-photos-videos /etc/nginx/sites-enabled/
sudo nginx -t  # Test configuration
sudo systemctl restart nginx
```

### Step 5: SSL Certificate

```bash
sudo certbot --nginx -d www.africanphotosandvideos.com.ng -d africanphotosandvideos.com.ng

# Auto-renew
sudo systemctl enable certbot.timer
```

## Docker Deployment

### Prerequisites

- Docker installed
- Docker Compose (optional)
- Docker Hub account (for pushing images)

### Dockerfile

Already included in repository.

### Build & Run

```bash
# Build image
docker build -t african-photos-videos:1.0.0 .

# Run container
docker run -d \
  -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://example.com \
  --name african-photos-videos \
  african-photos-videos:1.0.0

# View logs
docker logs -f african-photos-videos
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      NEXT_PUBLIC_SITE_URL: https://www.africanphotosandvideos.com.ng
      NEXT_PUBLIC_SITE_NAME: African Photos and Videos
    restart: always
    volumes:
      - ./src:/app/src
```

Run with:

```bash
docker-compose up -d
```

## GitHub Actions CI/CD

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Lint code
      run: npm run lint
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Vercel
      if: github.ref == 'refs/heads/main'
      uses: vercel/action@master
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Environment Variables

### Production Variables

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.africanphotosandvideos.com.ng
NEXT_PUBLIC_SITE_NAME=African Photos and Videos
NEXT_PUBLIC_CONTACT_EMAIL=contact@africanphotosandvideos.com.ng

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API Configuration
NEXT_PUBLIC_API_URL=https://www.africanphotosandvideos.com.ng/api

# Feature Flags
NEXT_PUBLIC_ENABLE_NEWSLETTER=true
NEXT_PUBLIC_ENABLE_COMMENTS=false
```

## Domain Configuration

### DNS Records

Add these DNS records:

```
Type    Name    Value
----    ----    -----
A       @       Your Server IP
A       www     Your Server IP
CNAME   blog    example.vercel.app (if using Vercel for blog)
TXT     @       v=spf1 include:_spf.vercel.app ~all
```

### Email Configuration (Optional)

```
Type    Name    Value
----    ----    -----
MX      @       mail.yourdomain.com
TXT     @       v=spf1 mx ~all
```

## SSL/TLS

### Let's Encrypt (Recommended)

```bash
# Obtain certificate
sudo certbot certonly --standalone -d www.africanphotosandvideos.com.ng

# Renewal
sudo certbot renew --dry-run
```

### Manual Certificate

1. Purchase from certificate provider
2. Download certificate files
3. Upload to server
4. Configure nginx with paths

## Monitoring & Maintenance

### Health Checks

```bash
# Test health endpoint
curl https://www.africanphotosandvideos.com.ng/api/health

# Response should be:
# {"status":"ok","timestamp":"...","service":"..."}
```

### Log Monitoring

```bash
# Vercel logs
vercel logs african-photos-videos

# Server logs
sudo journalctl -u african-photos-videos -f
sudo tail -f /var/log/image-stock.log
```

### Performance Monitoring

- Vercel Analytics
- Google Analytics
- Server CPU/Memory
- nginx status

### Backups

```bash
# Backup database/files
tar -czf backup-$(date +%Y%m%d).tar.gz /var/www/image-stock

# Store backup
cp backup-*.tar.gz /backup/
```

### Updates

```bash
# Pull latest changes
cd /var/www/image-stock
git pull origin main

# Rebuild
npm install
npm run build

# Restart service
sudo systemctl restart african-photos-videos
```

## Troubleshooting

### Application won't start

```bash
# Check logs
sudo journalctl -u african-photos-videos -n 50

# Test build
npm run build

# Check for errors
npm run lint
```

### High CPU/Memory usage

```bash
# Check process
top -p $(pgrep -f 'npm start')

# Restart
sudo systemctl restart african-photos-videos
```

### Domain not resolving

```bash
# Check DNS
nslookup www.africanphotosandvideos.com.ng
dig www.africanphotosandvideos.com.ng

# Check nginx
sudo nginx -t
```

## Support

For deployment issues:
- Check logs first
- Review configuration
- Test locally
- Contact support: contact@africanphotosandvideos.com.ng

---

**Last Updated**: January 15, 2024

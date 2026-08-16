#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const config = {
  siteName: 'African Photos and Videos',
  siteUrl: 'https://www.africanphotosandvideos.com.ng',
  email: 'mailstudioworx@gmail.com',
  googleAnalyticsId: 'G-XXXXXXXXXX',
  vercelProjectId: 'YOUR_VERCEL_PROJECT_ID',
  vercelTeamId: 'YOUR_VERCEL_TEAM_ID'
};

const envTemplate = `
# Application
NEXT_PUBLIC_SITE_URL=${config.siteUrl}
NEXT_PUBLIC_SITE_NAME=${config.siteName}

# Analytics
NEXT_PUBLIC_GA_ID=${config.googleAnalyticsId}

# Contact
NEXT_PUBLIC_CONTACT_EMAIL=${config.email}

# Vercel (if deploying to Vercel)
VERCEL_PROJECT_ID=${config.vercelProjectId}
VERCEL_TEAM_ID=${config.vercelTeamId}
`;

const envPath = path.join(process.cwd(), '.env.example');

fs.writeFileSync(envPath, envTemplate.trim());
console.log(`✓ Environment template created at ${envPath}`);
console.log('\nNext steps:');
console.log('1. Copy .env.example to .env.local');
console.log('2. Update environment variables with your values');
console.log('3. Run: npm run dev');

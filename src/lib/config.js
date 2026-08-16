// Environment and configuration helpers

export const config = {
  siteName: 'African Photos and Videos',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.africanphotosandvideos.com.ng',
  description: 'Discover stunning African photography and videography from premium stock platforms',
  author: 'African Photos and Videos',
  socialLinks: {
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com'
  },
  contacts: {
    email: 'contact@africanphotosandvideos.com.ng',
    phone: '+234-8XX-XXX-XXXX',
    securityEmail: 'security@africanphotosandvideos.com.ng'
  },
  stockPlatforms: {
    getty: 'https://www.gettyimages.com',
    shutterstock: 'https://www.shutterstock.com',
    adobe: 'https://stock.adobe.com',
    pond5: 'https://www.pond5.com'
  }
};

export function getEnvironmentVariable(key, defaultValue) {
  const value = process.env[key];
  return value !== undefined ? value : defaultValue;
}

export function isDevelopment() {
  return process.env.NODE_ENV === 'development';
}

export function isProduction() {
  return process.env.NODE_ENV === 'production';
}

export function getApiUrl() {
  if (typeof window !== 'undefined') {
    return window.location.origin + '/api';
  }
  return config.siteUrl + '/api';
}

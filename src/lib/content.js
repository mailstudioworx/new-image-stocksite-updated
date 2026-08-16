// Content management helpers

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatTime(date) {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  });
}

export function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function truncateText(text, length = 150) {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
}

export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function extractKeywords(text, limit = 5) {
  const words = text.toLowerCase().split(/\s+/);
  const keywords = [...new Set(words)]
    .filter(word => word.length > 3)
    .slice(0, limit);
  return keywords;
}

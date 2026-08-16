import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'src/data/blog');

// Create blog directory if it doesn't exist
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

export function getAllBlogPosts() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      return getBlogPost(slug);
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

export function getAllBlogSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
}

export function getBlogPost(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = parseFrontMatter(fileContents);

  // Convert Markdown content to HTML for rendering
  const contentHtml = marked.parse(content);

  return {
    slug,
    ...data,
    content: contentHtml,
  };
}

function parseFrontMatter(fileContents) {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = fileContents.match(frontMatterRegex);

  if (!match) {
    return { data: {}, content: fileContents };
  }

  const frontMatter = match[1];
  const content = match[2];

  const data = {};
  frontMatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    const value = valueParts.join(':').trim();
    if (key && value) {
      data[key.trim()] = value.replace(/^['\"]|['\"]$/g, '');
    }
  });

  return { data, content };
}

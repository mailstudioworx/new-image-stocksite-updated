import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const postsDirectory = path.join(process.cwd(), 'src/data/blog');

function parseFrontMatter(fileContent) {
  const match = fileContent.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);

  if (!match) {
    return { data: {}, content: fileContent };
  }

  const frontMatter = {};
  match[1].split('\n').forEach((line) => {
    const separator = line.indexOf(':');
    if (separator === -1) return;

    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    frontMatter[key] = value;
  });

  return {
    data: frontMatter,
    content: match[2]
  };
}

function readPostFile(filename) {
  const filePath = path.join(postsDirectory, filename);
  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = parseFrontMatter(source);

  return {
    slug: filename.replace(/\.md$/, ''),
    title: data.title || '',
    date: data.date || '',
    author: data.author || '',
    category: data.category || '',
    excerpt: data.excerpt || '',
    image: data.image || '',
    content: marked.parse(content),
    rawContent: content
  };
}

export function getAllBlogPosts() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith('.md'));

  return filenames
    .map(readPostFile)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getAllBlogSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => filename.replace(/\.md$/, ''));
}

export function getBlogPost(slug) {
  if (!slug || !fs.existsSync(postsDirectory)) {
    return null;
  }

  const filename = `${slug}.md`;
  const filePath = path.join(postsDirectory, filename);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const post = readPostFile(filename);
  const allPosts = getAllBlogPosts();

  post.relatedPosts = allPosts
    .filter((item) => item.slug !== post.slug)
    .filter((item) => !post.category || item.category === post.category)
    .slice(0, 3)
    .map(({ slug: relatedSlug, title, excerpt }) => ({
      slug: relatedSlug,
      title,
      excerpt
    }));

  return post;
}

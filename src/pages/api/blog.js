// API route for getting blog posts
import { getAllBlogPosts } from '@/utils/blog';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const posts = getAllBlogPosts();
    return res.status(200).json({
      success: true,
      data: posts,
      count: posts.length
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}

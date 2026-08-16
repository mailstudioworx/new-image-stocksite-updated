// API route for getting category information
import { imageCategories, videoCategories } from '@/data/categories';

export default function handler(req, res) {
  const { type } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    if (type === 'images') {
      return res.status(200).json({
        success: true,
        data: imageCategories,
        count: imageCategories.length
      });
    } else if (type === 'videos') {
      return res.status(200).json({
        success: true,
        data: videoCategories,
        count: videoCategories.length
      });
    } else {
      return res.status(400).json({
        success: false,
        error: 'Type parameter must be "images" or "videos"'
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}

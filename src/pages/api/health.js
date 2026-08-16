// API route for health check
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ 
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'African Photos and Videos API'
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

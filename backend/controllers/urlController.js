const { v4: uuidv4 } = require('uuid');

let urlDatabase = {}; 

const createShortUrl = (req, res) => {
  const { url, validity = 30, shortcode } = req.body;
  const code = shortcode || uuidv4().slice(0, 6);

  const now = new Date();
  const expiry = new Date(now.getTime() + validity * 60000).toISOString();

  urlDatabase[code] = {
    originalUrl: url,
    createdAt: now.toISOString(),
    expiry,
    clicks: []
  };

  return res.status(201).json({
    shortLink: `http://localhost:3001/${code}`,
    expiry
  });
};

const getShortUrlStats = (req, res) => {
  const { shortcode } = req.params;
  const data = urlDatabase[shortcode];

  if (!data) {
    return res.status(404).json({ message: 'Shortcode not found' });
  }

  return res.json({
    totalClicks: data.clicks.length,
    originalUrl: data.originalUrl,
    createdAt: data.createdAt,
    expiry: data.expiry,
    clicks: data.clicks
  });
};

module.exports = { createShortUrl, getShortUrlStats };

// Flutter frontend + Node.js backend + Railway deploy-ready boilerplate
// Author: Sarang Satheesh

// Structure overview:
// frontend/ -> Flutter app (UI for meme coin/stock market analytics)
// backend/  -> Node.js/Express API

// ========== 1. BACKEND (Node.js + Express) ==========

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000; // hardcoded since .env won't work on free Railway

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
  res.json({ status: 'online', timestamp: Date.now() });
});

app.get('/api/watchlist', (req, res) => {
  const mockData = [
    { name: 'DOGE', price: 0.12, volume: 12000000 },
    { name: 'SHIBA', price: 0.000023, volume: 30000000 },
  ];
  res.json(mockData);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// ========== 2. FRONTEND (Flutter Minimal UI) ==========
// Will include after initial backend deploy
// Includes: WatchlistPage, CoinCard widget, AnalyticsTracker

// ========== 3. DEPLOYMENT TO RAILWAY ==========
// Railway steps:
// 1. Create Railway account at railway.app
// 2. Start new project → Deploy from GitHub or ZIP
// 3. Add .env vars via dashboard
// 4. Deploy backend folder
// 5. Connect your Flutter frontend to API base URL

// ========== 4. SECURITY ==========
// - Local server only if you're prototyping
// - Public deploy: Use Railway HTTPS endpoint
// - Protect endpoints: Add API key headers later

// ========== 5. NEXT UP ==========
// - Firebase Analytics integration
// - Flutter frontend watchlist UI
// - .env management for frontend (API_URL)
// - App Store optimization + monetization options

import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// API placeholder routes
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.get('/api/wallet', (req, res) => res.json({ balance: 100 }));

// Serve frontend static files
app.use(express.static(path.join(process.cwd(), 'public')));

// SPA fallback
app.get(/.*/, (req, res) => res.sendFile(path.join(process.cwd(), 'public', 'index.html')));

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT} (MongoDB skipped, Render URL active)`));

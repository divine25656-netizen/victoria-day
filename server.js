const express = require('express');
const path = require('path');
const app = express();

// Serve static files (HTML, CSS, JS, videos)
app.use(express.static(path.join(__dirname, '.')));

// Main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🎂 Birthday greeting server running on port ${PORT}`);
});

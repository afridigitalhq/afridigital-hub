const express = require('express');
const fs = require('fs');

const app = express();

app.get('/afrid/state', (req, res) => {
  const raw = fs.readFileSync('./core/.afrid_state', 'utf-8');

  const state = Object.fromEntries(
    raw.split('\n').filter(Boolean).map(line => line.split('='))
  );

  res.json(state);
});

app.listen(3000, () => {
  console.log('⚡ Afri state running on http://localhost:3000/afrid/state');
});

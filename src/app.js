const express = require('express');
const routes = require('./routes');

const app = express();
routes(app);

app.get('/teste', (req, res) => {
  res.send('Rota de teste funcionando!');
});

module.exports = app; // Exportação no padrão CommonJS

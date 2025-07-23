const express = require('express');
const cors = require('cors');
const app = express();

// Permite que Render y freeCodeCamp accedan a tu servidor
app.use(cors());

// Ruta raíz (opcional)
app.get('/', (req, res) => {
  res.send('Request Header Parser Microservice');
});

// Ruta principal de la API
app.get('/api/whoami', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({
    ipaddress: ip.split(',')[0],
    language,
    software
  });
});

// Escucha en puerto asignado por Render o 3000 en local
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});

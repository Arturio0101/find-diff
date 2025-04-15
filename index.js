const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

// Маршрут для заставки
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Заставка
});

// Маршрут для главного меню
app.get('/menu', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'menu.html'));  // Главное меню
});

// Маршрут для главного меню
app.get('/game', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'game.html'));  // Главное меню
});

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
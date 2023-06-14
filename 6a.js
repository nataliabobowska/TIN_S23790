const express = require('express');

const app = express();

// Obsługa żądania dla URL '/'
app.get('/', (req, res) => {
  res.send('Strona główna');
});

// Obsługa żądania dla URL '/about'
app.get('/about', (req, res) => {
  res.send('O nas');
});

// Obsługa żądania dla URL '/contact'
app.get('/contact', (req, res) => {
  res.send('Kontakt');
});

// Obsługa żądania dla nieznanego URL-a
app.use((req, res) => {
  res.status(404).send('Nie znaleziono strony');
});

// Uruchomienie serwera
app.listen(3000, () => {
  console.log('Serwer HTTP nasłuchuje na porcie 3000');
});

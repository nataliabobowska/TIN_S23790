const http = require('http');

// Tworzenie serwera HTTP
const server = http.createServer((req, res) => {
  // Obsługa żądań GET pod różnymi URL-ami
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Strona główna');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('O nas');
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Kontakt');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Nie znaleziono strony');
  }
});

// Uruchomienie serwera na porcie 3000
server.listen(3000, () => {
  console.log('Serwer HTTP nasłuchuje na porcie 3000');
});

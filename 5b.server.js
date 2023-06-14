const http = require('http');
const { getHomePage, getAboutPage, getContactPage } = require('./pages');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const response = getHomePage();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(response);
  } else if (req.url === '/about') {
    const response = getAboutPage();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(response);
  } else if (req.url === '/contact') {
    const response = getContactPage();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(response);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Nie znaleziono strony');
  }
});

server.listen(3000, () => {
  console.log('Serwer HTTP nasłuchuje na porcie 3000');
});

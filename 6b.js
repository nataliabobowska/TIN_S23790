// Obsłuży ścieżkę /hello zwracając “hello world”

const express = require('express');
const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Aplikacja jest dostępna pod adresem http://localhost:${port}`);
});



// Obsłuży ścieżkę /form zwracając formularz HTML z 3 polami, formularz powinien wysyłać dane pod /formdata

const express = require('express');
const app = express();
const port = 3000;

app.get('/form', (req, res) => {
  const formHTML = `
    <form action="/formdata" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br>

      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea><br>

      <button type="submit">Submit</button>
    </form>
  `;
  res.send(formHTML);
});


app.post('/formdata', (req, res) => {
  const { name, email, message } = req.body;
  
  console.log('Received form data:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  
  res.redirect('/thankyou');
});

app.listen(port, () => {
  console.log(`Aplikacja jest dostępna pod adresem http://localhost:${port}`);
});



// Obsłuży ścieżkę /formdata akceptując dane formularza i wyświetli je w cywilizowany sposób 
// korzystając z wybranego engine szablonów

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views');

app.post('/formdata', (req, res) => {
  const { name, email, message } = req.body;

  const formData = {
    name,
    email,
    message
  };

  res.render('formdata', { formData });
});

app.listen(port, () => {
  console.log(`Aplikacja jest dostępna pod adresem http://localhost:${port}`);
});



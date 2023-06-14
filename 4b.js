// Funkcja dodająca akapit tekstu do strony po wciśnięciu przycisku

function addParagraph() {
  const inputElement = document.getElementById('text-input');
  const text = inputElement.value;

  const paragraphElement = document.createElement('p');
  paragraphElement.textContent = text;

  document.body.appendChild(paragraphElement);
}


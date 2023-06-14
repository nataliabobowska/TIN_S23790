// Funkcja walidująca zawartość formularza

function validateForm(event) {
  const numberInput = document.getElementById('number-input');
  const textInput = document.getElementById('text-input');
  const errorElement = document.getElementById('error-message');

  if (numberInput.value === '' || isNaN(parseFloat(numberInput.value))) {
    errorElement.textContent = 'Please enter a valid number.';
    event.preventDefault();
    return false;
  }

  if (textInput.value === '') {
    errorElement.textContent = 'Please enter a value for the text field.';
    event.preventDefault();
    return false;
  }

  return true;
}


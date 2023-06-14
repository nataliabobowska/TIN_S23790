// Funkcja sprawdzająca, czy przekazany ciąg jest palindromem

function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  console.log(isPalindrome('kajak')); // Przykładowe wywołanie: oczekiwane wyjście: true
  console.log(isPalindrome('hello')); // Przykładowe wywołanie: oczekiwane wyjście: false
  
  
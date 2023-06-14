// Funkcja przyjmująca ciąg jako parametr i zwracająca najdłuższe słowo w ciągu

function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  
  console.log(findLongestWord('Lorem ipsum dolor sit amet')); // Przykładowe wywołanie: oczekiwane wyjście: 'dolor'
  
  
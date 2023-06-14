// Funkcja przyjmująca tablicę liczb i znajdująca drugą najmniejszą i drugą największą wartość

function findSecondSmallestAndLargest(arr) {
    arr.sort(function(a, b) {
      return a - b;
    });
    const secondSmallest = arr[1];
    const secondLargest = arr[arr.length - 2];
    return [secondSmallest, secondLargest];
  }
  
  console.log(findSecondSmallestAndLargest([5, 2, 8, 1, 9])); // Przykładowe wywołanie: oczekiwane wyjście: [2, 8]
  
  
// Funkcja licząca silnię zadanej liczby (implementacja rekurencyjna)

const factorialRecursive = function(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorialRecursive(n - 1);
  };
  
  console.log(factorialRecursive(5)); // Przykładowe wywołanie: oczekiwane wyjście: 120
  
  
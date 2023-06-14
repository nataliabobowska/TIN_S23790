// Funkcja konstruktora tworząca obiekty reprezentujące studentów

function Student(firstName, lastName, indexNumber, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.indexNumber = indexNumber;
    this.grades = grades;
    this.calculateAverageGrade = function() {
      const sum = this.grades.reduce(function(acc, grade) {
        return acc + grade;
      }, 0);
      return sum / this.grades.length;
    };
  }
  
  const student1 = new Student('John', 'Doe', '12345', [4, 3.5, 4.5, 5]);
  console.log(student1.firstName); // Przykładowe wywołanie: oczekiwane wyjście: 'John'
  console.log(student1.calculateAverageGrade()); // Przykładowe wywołanie: oczekiwane wyjście: 4.25
  
  
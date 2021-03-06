'use strict';

class Student {
  constructor({ name, age, interestLevel = 5 } = {}) {
    this.name = name;
    this.age = age;
    this.interestLevel = interestLevel;
    this.grades = new Map();
  }
}

let joey = new Student({ name: 'Joey', age: 25 });
let sarah = new Student({ name: 'Sarah', age: 22 });

console.log(joey);
console.log(sarah);

// Logs:
// Student { name: 'Joey', age: 25, interestLevel: 5}
// Student { name: 'Sarah', age: 22, interestLevel: 5 }


sarah.grades.set('History', 'B');
sarah.grades.set('Math', 'A');

console.log(Array.from(sarah.grades));

// Logs:
// [ [ 'History', 'B' ], [ 'Math', 'A' ] ]



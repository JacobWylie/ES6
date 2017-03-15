'use strict';

// A set has must have unique values

let classroom = new Set();

let stevenJ = {name: 'Steven', age: 22},
	sarah = {name: 'Sarah', age: 21},
	stevenS = {name: 'Steven', age: 22}

classroom.add(stevenJ);
classroom.add(sarah);
classroom.add(stevenS);

if (classroom.has(stevenJ)) console.log('stevenJ is in the classroom');
if (classroom.has(sarah)) console.log('sarah is in the classroom');
if (classroom.has(stevenS)) console.log('stevenS is in the classroom');
	
console.log('classroom size:', classroom.size)

// Logs:
// stevenJ is in the classroom
// sarah is in the classroom
// stevenS is in the classroom
// classroom size: 3

classroom.delete(stevenJ);

console.log('classroom size:', classroom.size)

// Logs: 
// classroom size: 2


// Create an Array of students from the classroom set
let arrayOfStudents = Array.from(classroom);
console.log(arrayOfStudents);


// Create a Set from an existing array
let alumni = new Set(arrayOfStudents);
console.log('alumni size:', alumni.size)

// Logs:
// stevenJ is in the classroom
// sarah is in the classroom
// stevenS is in the classroom
// classroom size: 3
// classroom size: 2
// [ { name: 'Sarah', age: 21 }, { name: 'Steven', age: 22 } ]
// alumni size: 2




















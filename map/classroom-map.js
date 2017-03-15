'use strict';

let classroom = new Map();

let stevenJ = { name: 'Steven', age: 22 },
    sarah = { name: 'Sarah', age: 23 },
    stevenS = { name: 'Steven', age: 22 };

classroom.set('stevenJ', stevenJ);
classroom.set('sarah', sarah);
classroom.set('stevenS', stevenS);

// console.log('classroom size:', classroom.size);
// clears object without deleting it
// classroom.clear();
// console.log('classroom size:', classroom.size);
// Logs: 
// classroom size: 3
// classroom size: 0

// if (classroom.has('stevenJ')) console.log('StevenJ is in the classroom');
// if (classroom.has('sarah')) console.log('Sarah is in the classroom');
// if (classroom.has('stevenS')) console.log('StevenS is in the classroom');

// Logs: 
// classroom size: 3
// StevenJ is in the classroom
// Sarah is in the classroom
// StevenS is in the classroom


console.log('sarah', classroom.get('sarah'));
// Logs: sarah { name: 'Sarah', age: 23 


for (let student of classroom) {
	console.log(`${student[0]} : ${student[1].name} is ${student[1].age} years old.`)
}

// Logs :
// stevenJ : Steven is 22 years old.
// sarah : Sarah is 23 years old.
// stevenS : Steven is 22 years old.
















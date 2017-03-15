'use strict';

// ES5

// function greet(name, timeOfDay) {
// 	name = name || 'Jacob';
// 	timeOfDay = timeOfDay || 'Day';
//   console.log(`Good ${timeOfDay}, ${name}!`);
// }
// greet();



// ES6

const greet = (name = 'Guil', timeOfDay = 'Day') => {

  console.log(`Good ${timeOfDay}, ${name}!`);
}
greet(undefined, 'afernoon');
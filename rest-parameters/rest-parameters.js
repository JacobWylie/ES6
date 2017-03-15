'use strict';

// ES5

// function myFunction(name, ...params) {
//   console.log(name, params);
// }



// ES6

// rest parameter defined with ... before parameter
// must be last parameter defined

const myFunction = (name, ...params) => {
  console.log(name, params);
}

myFunction('Andrew', 1, 2, 3)

// will log: Andrew [1, 2, 3]
'use strict';

// OLD STYLE

// var Person = function (data) {
//   for (var key in data) {
//     this[key] = data[key];  
//   }
//   this.getKeys = function () {
//     return Object.keys(this);
//   }
// }

// var Alena = new Person({ name: 'Alena', role: 'Teacher' });

// console.log('Alena\'s Keys:', Alena.getKeys()); // 'this' refers to 'Alena'

// var getKeys = Alena.getKeys;

// console.log(getKeys()); // 'this' refers to the node process


// ES6

var Person = function (data) {
  for (var key in data) {
    this[key] = data[key];  
  }
  // lamda function binds to the instance
  this.getKeys = () => {
    return Object.keys(this);
  }
}

var Alena = new Person({ name: 'Alena', role: 'Teacher' });

console.log(`Alena's Keys:`, Alena.getKeys()); // 'this' refers to 'Alena'

var getKeys = Alena.getKeys;

console.log(getKeys()); // 'this' refers to 'Alena'
















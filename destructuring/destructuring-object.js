'use strict';

let toybox = { item1: 'car', item2: 'ball', item3: 'frisbee' };

// Key on the left and new variable on right

let {item1, item2} = toybox;

console.log(item1, item2);

// Logs: car ball
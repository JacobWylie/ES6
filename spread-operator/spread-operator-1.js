'use strict';

const originalFlavors = ['Chocolate', 'Vanilla'];

const newFlavors = ['Strawberry', 'Mint Chocolate Chip'];

const inventory = ['Rocky Road', ...originalFlavors, 'Neopolitan', ...newFlavors];

console.log(inventory);

// Will pass all the values of spread operator.

// 	   [ 'Rocky Road',
//		 'Chocolate',
//		 'Vanilla',
//		 'Neopolitan',
//		 'Strawberry',
// 		 'Mint Chocolate Chip' ]
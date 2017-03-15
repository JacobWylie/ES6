'use strict';

const myFunction = (name, iceCreamFlavor) => {
  console.log(`${name} really likes ${iceCreamFlavor} ice cream.`)
}

let args = ['Gabe', 'Vanilla'];

myFunction(...args);

// logs: Gabe really likes Vanilla ice cream.
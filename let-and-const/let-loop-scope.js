'use strict';

// OUT OF STYLE

// (function initLoop() {
//   function doLoop(x) {
//     console.log('loop:', x);
//   }
  
//   for (var i = 0; i < 10; i++) {
//     doLoop(i + 1);
//   }
// })();



// ES6 EXAMPLE

(function initLoop() {
  function doLoop(x) {
    console.log('loop:', x);
  }
  // i=3, an error will be thrown rather than infinite loop
  // i only exists in scope of for loop
  // "block-level scoping"
  
  for (let i = 0; i < 10; i++) {
    doLoop(i + 1);
  }
})();
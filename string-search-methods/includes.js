'use strict';

let strToSearch = 'a-really-long-hyphenated-string';

console.log(/long/.test(strToSearch)); // test string w/ regular expression
// true

console.log(strToSearch.indexOf('long') > -1); // indexOf
// true

console.log(strToSearch.includes('long')); // includes
// true
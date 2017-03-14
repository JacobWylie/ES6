'use strict';

let strToSearch = 'a-really-long-hyphenated-string';

console.log(/^a-really/.test(strToSearch)); // test string w/ regular expression
// true

console.log(strToSearch.indexOf('a-really') === 0); // indexOf
// true

console.log(strToSearch.startsWith('a-really')); // startsWith
// true

// 2nd parameter is indexOf
console.log(strToSearch.startsWith('a-really', 5)); // startsWith
// true
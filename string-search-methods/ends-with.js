'use strict';

let strToSearch = 'a-really-long-hyphenated-string';

console.log(/hyphenated-string$/.test(strToSearch)); // test string w/ regular expression
// true

console.log(strToSearch.indexOf('hyphenated-string') === strToSearch.length - 'hyphenated-string'.length); // indexOf
// true

console.log(strToSearch.endsWith('hyphenated-string')); // endsWith
// true

// 2nd parameter is length of search
console.log(strToSearch.endsWith('hyphenated-string', 21)); // endsWith
// false
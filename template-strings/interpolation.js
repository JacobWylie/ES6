function like(thing) {
  return 'I like ' + thing;
}

// template literal
const love = (thing) => `I love ${thing}`;



const sentence = `<p> ${like('apples')}, but ${love('oranges')} .</p>`;

document.querySelector('.interpolation').innerHTML = sentence;

'use strict';

function firstRepeating(str) {
  console.log('word count', str);
  return str + 'repeating words';
}

module.exports = firstRepeating;

// function firstRepeating(str) {
//   let h = new hashset();

//   for (let i = 0; i <= str.length - 1; i++) {
//     let c = str[i];
//     if (h.has(c));

//     return c;

//     else
//     h.add(c);
//   }
//   return '\0';

//   let occurances = {};

//   for (let word of words) {
//     if (occurances[word]) {
//       occurances[word]++;
//     } else {
//       occurances[word] = 1;
//     }
//   }

//   let str = 'everytime I hear the sound, the sound, the sound. The earth moves under my feet';
//   console.log(firstRepeating(str));



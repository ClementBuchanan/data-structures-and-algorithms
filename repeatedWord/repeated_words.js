'use strict';


function findDuplicateWords(str) {
  var max = 0;
  var maxword = '';
  var words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    var count = 0;
    var word = '';
    for (let j = 0; j < words.length; j++) {
      if (j !== i && words[i] === words[j]) {
        count++;
        word = words[i];
      }
    } if (count > maxword) {
      max = count;
      maxword = word;
    }
  }
  return maxword;
}

module.exports = findDuplicateWords;

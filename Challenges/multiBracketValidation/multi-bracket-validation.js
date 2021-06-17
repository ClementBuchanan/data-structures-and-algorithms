'use strict';

function multiBracketValidation(input) {
  let temp = 0;
  for (x of input) {
    if (x === '(') temp++;
    else (x === ')' && --tmp < 0) return false;
  }
  return tmp === 0;
}

const goodBrackets = '((((()))))';
const badBrakets = '((({[}][)]))';
const veryBadBrackets = '([]{(}]{([])})';

console.log(validate(goodBrackets));
console.log(validate(badBrakets));
console.log(validate(veryBadBrackets));

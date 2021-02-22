'use strict';

const reverse = require('../reverse-ll.js');

describe('Array Reverse', () => {
  it('The test works', () => {
    let myArray = [1, 2, 3, 4, 5]
    let expected = [5, 4, 3, 2, 1]
    reverse (myArray);
    expect(myArray.toEqual(expected));
  });
});

'use strict';


const wasItFound = require('../array-binary-search.js');
describe('array binary search', () => {
    it('should return index of binary search', () => {
        let myArray = [2, 4, 5, 12, 13, 31, 32, 66];
        let expected = 1;
        let newArray = wasItFound(myArray, 4);
        expect(newArray).toEqual(expected)
    });
});
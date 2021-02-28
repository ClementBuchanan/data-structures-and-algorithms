'use strict';


let arr = [2, 4, 5, 12, 13, 31, 32, 66];
let value = 13;

function binarySearch (arr, value) {
    let high = arr.length - 1;
    let low = 0;
    let mid = 0;
    
    while (low <= high) {
      mid = Math.ceil((low + high) / 2);  // if middle == value we're done
      if(arr[mid] == value){
      //return value
      return mid;
      }else if (value > arr[mid]) {
      // move low up by 1
      low = mid + 1;
      }else {
      // move high down by 1
      high = mid - 1
      } 
    } 
   return -1;
}
let wasItFound = binarySearch(arr, value)
console.log(wasItFound);

module.exports = binarySearch;
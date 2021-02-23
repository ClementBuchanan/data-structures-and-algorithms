'use strict';

function insertShiftArray(arr, val) {
    let midIndex = Math.ceil(arr.length/2);
    let temp = arr[midIndex];
    arr[midIndex] = val;
    let tempTwo = arr[midIndex+1];
    for (let i=midIndex+1; i<arr.length; i++) {
      tempTwo = arr[i];
      arr[i]=temp;
      temp=tempTwo;
    }
    arr[arr.length] = temp
    return arr
  }
  console.log(insertShiftArray([1,2,3,4,5], 99))
  console.log(insertShiftArray([1,2,3,4], 99))

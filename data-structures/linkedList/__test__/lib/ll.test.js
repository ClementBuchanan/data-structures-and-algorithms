'use strict';

const LL = require('../../lib/ll.js');

describe('LINKED LIST', () => {
  it('Should create and empty list on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('Should add items to the list', () => {
    let list = new LL();
    let first = 'first';
    let second = 'second';

    list.append(first); //adds an item to the list
    expect(list.head.value).toEqual(first); //checks the the item was added with the value

    list.append(second); //checks the property of the next test
    list.append(3);
    list.append(4);

    console.group(list);
  });

  it('can point the head property to the first node', () => {
    let list = new LL();
    list.head = new LL();
    console.log('this is head', list.head);

    expect(list.head).toBeTruthy();
  });

  it('should return a string of all values that exist in the linked list', () => {
    let list = new LL();
    let string1 = 'baldy';
    let string2 = 'baldy2';
   
    list.append(string1);
    list.append(string2);

    expect(list.toString()).toEqual('{baldy} -> {baldy2} -> {null}');
  
  });

  it('should return true if search value is in the list', () => {
    let list = new LL();
    expect(list.includes('first')).toBeFalsy();
    
    list.append('first');
    list.append('second');
    expect(list.includes('first')).toBeTruthy();
    expect(list.includes('second')).toBeTruthy();
  });

});

'use strict';

const LL = require('../../lib/ll.js');

describe('LINKEDLIST', () => {
  it('Should create and empty list on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('Should add items to the list', () => {
    let list = new LL();
    let first = 'first';
    let second = 'second';
  });

  list.append(first); //adds an item to the list
  expect(list.head.value).toEqual(first); //checks the the item was added with the value

  list.append(second); //checks the property of the next test

  list.append(3);
  list.append(4);

  console.group(list);


});

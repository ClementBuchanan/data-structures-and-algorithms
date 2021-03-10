'use strict';

const linkedList = require('./lib/linkedlist.js');

let insert = new linkedList();

insert.insertAtHead(10);
console.log(insert);
insert.insertAtHead(20);
// insert.append('three');
// insert.append('four');

console.log(insert);


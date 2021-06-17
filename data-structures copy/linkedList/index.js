'use strict';

const linkedList = require('./lib/linked-list.js');

let ll = new linkedList();

ll.append('first');
ll.append(2);
ll.append('three');
ll.append('four');

console.log(ll);

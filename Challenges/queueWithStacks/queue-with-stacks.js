'use strict';

const Stack = require('.stacks.js');

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.head = null;
    this.tail = null;
  }

  enqueue(number) {
    this.stack1[this.head] = number;
    this.head++;
  }

  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

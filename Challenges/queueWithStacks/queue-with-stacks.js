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
    this.stack1[this.tail] = number;
    this.head++;
  }

  dequeue() {
    let removed = this.stack2[this.head];
    delete this.stack2[this.head];
    this.head++;
    return removed;
  }
}

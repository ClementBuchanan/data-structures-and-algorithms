'use strict';

const Stack = require('./stacks.js');
class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    this.stack1.push(value);
    for (let i = 0; i < this.stack2.length; i++) {
      this.stack1.push(this.tail.pop());
    }
    this.stack1.push(value);
  }

  dequeue() {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }

  peek() {
    if (this.stack1.length > 0) {
      return this.stack1[0];
    }
    return this.stack2[this.stack2.length - 1];
  }
}
module.exports = Queue;

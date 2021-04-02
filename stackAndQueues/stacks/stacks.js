'use strict';

class Stack {
  constructor() {
    this._size = 0;
  }

  pop() {
    if (!this._size) {
      throw new Error('Stack underflow');
    }
    const result = this.toBePopped.item;
    this.toBePopped = this.toBePopped.nextToBePopped;
    this._size = this._size - 1;
    return result;
  }

  push(item) {
    this.toBePopped = {
      item,
      nextToBePopped: this.toBePopped
    };
    this._size = this._size + 1;
  }

  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }
}

module.exports = Stack;


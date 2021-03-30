'use strict';

/* ========== STACK ========== */

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(element) {
    this.size++;
    this.storage[this.size] = element;
  }

  pop() {
    let removed = this.storage[this.size];
    delete this.storage[this.size];
    this.size--;
    return removed;
  }

  peek() {
    return this.storage[this.size];
  }
}

const stack = new Stack();

stack.push('dog');
stack.push('cat');
stack.push('bear');

stack.pop();
stack.peek();


module.Stack = Stack;













// class Stack {
//   constructor() {
//     this._size = 0;
//   }

//   pop() {
//     if (!this._size()) {
//       throw new Error('Stack underflow');
//     }
//     const result = this.toBePopped.item;
//     this.toBePopped = this.toBePopped.nextToBePopped;
//     this._size = this._size - 1;
//     return result;
//   }

//   peek() {
//     if (!this._size()) {
//       throw new Error('Stack underflow');
//     }
//     return this.toBePopped.item;
//   }

//   push(item) {
//     this.toBePopped = {
//       item,
//       nextToBePopped: this.toBePopped
//     };
//     this._size = this._size + 1;
//   }

//   size() {
//     return this._size;
//   }

//   isEmpty() {
//     return this._size() === 0;
//   }
// }

// module.exports = Stack;


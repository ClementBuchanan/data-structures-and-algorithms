'use strict';

const node = require('..queueWithStacks/node');

class AnimalShelter {
  constructor() {
    this.front = null;
    this.back = null;
  }
  isEmpty() {
    return !this.front;
  }

  enqueue(animal) {
    let node = new Node(animal);
    if (this.isEmpty()) {
      this.front = this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    return this.back.value;
  }

  dequeue() {
    let node = this.front;
    console.log('dequeue', node.value);
    if (!this.isEmpty()) {
      this.front = this.front.next;
    }
    if (!this.front) {
      this.back = null;
    }
    return node.value;
  }

  dequeueAnimal(pref) {
    if (pref === 'cat' || pref === 'dog') {
      if (pref === 'cat') {
        if (
      }
    }
  }

}


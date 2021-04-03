'use strict';

const Node = require('./node.js');

class AnimalShelter {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(animal) {
    let node = new Node(animal);
    if (this.front === null) {
      this.back = node;
      this.back.next = node;
      this.front = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    return this.back.value;
  }

  dequeue() {
    let node = this.front;
    console.log('dequeue', node.value);
    if (!this.front) {
      this.back = null;
    }
    return node.value;
  }

  dequeueAnimal(pref) {
    let current = this.front;
    let previous;
    if (pref) {
      if (current.value === pref) {
        this.front = current.next;
      }
      while (current.value !== pref) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next || null;
      return `${current.value}`;
    } else {
      return 'null';

    }
  }
}



//enqueue test
let queue = new AnimalShelter;
queue.enqueue('cat');
queue.enqueue('dog');
queue.enqueue('cat');
queue.enqueue('dog');
console.log(queue);

//dequeue() test
console.log(queue.dequeueAnimal());
console.log(queue);
module.exports = AnimalShelter;

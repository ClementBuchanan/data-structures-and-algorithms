'use strict';

const Node = require('./node.js');

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
        if (!this.isEmpty()) {
          if (this.front.value === 'cat') {
            this.front = this.front.next;
            return 'Delete a cat';
          } else {
            if (pref === 'dog') {
              if (!this.isEmpty()) {
                if (this.front.value === 'dog') {
                  this.front = this.front.next;
                  return 'Delete a dog';
                }
              } else {
                return 'null';
              }
            }
          }
        }
      }
    }
  }
}

//enqueue test
let queue = new AnimalShelter;
console.log('isEmpty =', queue.isEmpty());
queue.enqueue('cat');
queue.enqueue('dog');

//dequeue() test
console.log(queue.dequeueAnimal());

module.exports = AnimalShelter;



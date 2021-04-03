'use strict';

let Queue = require('../fifo-animal-shelter.js');

describe('enqueue', () => {
  it('Add node to the back-end of the queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
  });

  describe('dequeueAnimal(cat)', () => {
    it('Remove first cat', () => {

      let queue = new Queue();
      queue.enqueue('cat');
      queue.enqueue('dog');
      queue.enqueue('dog');
      queue.enqueue('cat');

      expect(queue.dequeueAnimal('cat')).toEqual('cat');

    });
  });

  describe('dequeueAnimal(cat)', () => {
    it('Remove sec cat', () => {

      let queue = new Queue();
      queue.enqueue('dog');
      queue.enqueue('cat');
      queue.enqueue('dog');
      queue.enqueue('cat');

      expect(queue.dequeueAnimal('cat')).toEqual('cat');

    });
  });

  describe('dequeueAnimal(dog)', () => {
    it('Remove first dog', () => {

      let queue = new Queue();
      queue.enqueue('dog');
      queue.enqueue('cat');
      queue.enqueue('dog');
      queue.enqueue('cat');

      expect(queue.dequeueAnimal('dog')).toEqual('dog');

    });
  });

  describe('dequeueAnimal(dog)', () => {
    it('Remove sec dog', () => {

      let queue = new Queue();
      queue.enqueue('cat');
      queue.enqueue('dog');
      queue.enqueue('cat');
      queue.enqueue('dog');

      expect(queue.dequeueAnimal('dog')).toEqual('dog');

    });
  });
});



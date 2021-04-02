'use strict';

let Queue = require('../fifo-animal-shelter.js');

describe('enqueue', () => {
  it('Add node to the back-end of the queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.peek()).toBe(4);

  });

  describe('isEmpty', () => {
    it('This will check if the queue isEmpty()', () => {

      let queue = new Queue();
      expect(queue.isEmpty()).toBeTruthy();
      queue.enqueue(1);
      expect(queue.isEmpty()).toBeFalsy();
      queue.enqueue(2);
      expect(queue.isEmpty()).toBeFalsy();
      queue.enqueue(3);
      expect(queue.isEmpty()).toBeFalsy();
      queue.enqueue(4);
      expect(queue.isEmpty()).toBeFalsy();
    });
  });

  describe('dequeueAnimal(cat)', () => {
    it('Remove first cat', () => {

      let queue = new Queue();
      queue.enqueue('cat');
      queue.enqueue('dog');
      queue.enqueue('dog');
      queue.enqueue('cat');

      expect(queue.dequeueAnimal('cat')).toEqual('Delete a cat');

    });
  });

  describe('dequeueAnimal(cat)', () => {
    it('Remove sec cat', () => {

      let queue = new Queue();
      queue.enqueue('dog');
      queue.enqueue('cat');
      queue.enqueue('dog');
      queue.enqueue('cat');

      expect(queue.dequeueAnimal('cat')).toEqual('Delete a cat');

    });
  });

  describe('dequeueAnimal(dog)', () => {
    it('Remove first dog', () => {

      let queue = new Queue();
      queue.enqueue('dog');
      queue.enqueue('cat');
      queue.enqueue('dog');
      queue.enqueue('cat');

      expect(queue.dequeueAnimal('dog')).toEqual('Delete a dog');

    });
  });

  describe('dequeueAnimal(dog)', () => {
    it('Remove sec dog', () => {

      let queue = new Queue();
      queue.enqueue('cat');
      queue.enqueue('dog');
      queue.enqueue('cat');
      queue.enqueue('dog');

      expect(queue.dequeueAnimal('dog')).toEqual('Delete a dog');

    });
  });

});



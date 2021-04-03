'use strict';

const Queue = require('../queue-with-stacks.js');

describe('it should test enqueue/dequeue', () => {
  it('should enqueue a stack', () => {
    let list = new Queue();
    list.enqueue(4);
    list.enqueue(7);
    list.enqueue(5);
    expect(list.stack1.pop()).toEqual(5);
  });

  it('should dequeue a stack', () => {
    let listy = new Queue();
    listy.enqueue(1);
    listy.enqueue(2);
    listy.enqueue(3);
    // let listy2 = listy.dequeue(1);

    listy.dequeue();
    expect(listy.stack1.storage.length).toEqual(6);
  });

  it('should look at the front of the stack', () => {
    let stack = new Queue();
    stack.enqueue(6);
    expect(stack.stack1.peek()).toBe(6);
  });
});

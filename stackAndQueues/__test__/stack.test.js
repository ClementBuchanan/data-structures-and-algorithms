'use strict';

const Stack = require('../stacks/stacks.js');
describe('stack', () => {
  it('throws when popping from an empty stack', () => {
    const stack = new Stack();
    expect(() => {
      stack.pop();
    }).toThrow(new Error('Stack underflow'));
  });

  it('it pops the most recently pushed item - 11', () => {
    const stack = new Stack();
    stack.push(11);
    expect(stack.pop()).toEqual(11);
  });

  it('it pops the most recently pushed items - 13, 11', () => {
    const stack = new Stack();
    stack.push(11);
    stack.push(13);
    expect(stack.pop()).toEqual(13);
    expect(stack.pop()).toEqual(11);
  });

  it('it pops the most recently pushed items - 13, 11', () => {
    const stack = new Stack();
    stack.push(11);
    expect(stack.pop()).toEqual(11);
    stack.push(13);
    expect(stack.pop()).toEqual(13);
  });
});

describe('size', () => {
  it('returns 0 for empty stack', () => {
    const stack = new Stack();
    expect(stack.size()).toEqual(0);
  });

  it('returns 1 for stack with 1 element', () => {
    const stack = new Stack();
    stack.push(19);
    expect(stack.size()).toEqual(1);
  });

  it('returns 2 for stack with 2 elements', () => {
    const stack = new Stack();
    stack.push(19);
    stack.push(23);
    expect(stack.size()).toEqual(2);
  });

  it('returns 3 for stack with 3 elements', () => {
    const stack = new Stack();
    stack.push(19);
    stack.push(23);
    stack.push(29);
    expect(stack.size()).toEqual(3);
  });
});

describe('isEmpty', () => {
  it('returns true for empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
  });

  it('returns true for empty stack', () => {
    const stack = new Stack();
    stack.push(7);
    expect(stack.isEmpty()).toEqual(false);
  });
});

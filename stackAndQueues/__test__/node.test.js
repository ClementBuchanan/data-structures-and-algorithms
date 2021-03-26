'use strict';

const Node = require('../node.js');

describe('NODE CLASS', () => {
  it('can create a new node', () => {
    let val = 'test value';
    let node = new Node(val);

    expect(node.value).toEqual(val);
    expect(node.next).toBeNull();
  });
});

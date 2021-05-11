'use strict';

const BinarySearchTree = require('../modules/bst.js');
const BinaryTree = require('../tree.js');

describe('binaryTree test', () => {
  it('should return the values in pre-order', () => {

    const binaryTree = new BinaryTree();
    binaryTree.insertNode(10);
    binaryTree.insertNode(2);
    binaryTree.insertNode(11);
    binaryTree.insertNode(31);
    binaryTree.insertNode(17);
    binaryTree.insertNode(22);

    expect(binaryTree.PreOrder()).toEqual([10, 2, 11, 31, 17, 22]);

  });

  it('should return the values in post-order', () => {

    const binaryTree = new BinaryTree();
    binaryTree.insertNode(10);
    binaryTree.insertNode(2);
    binaryTree.insertNode(11);
    binaryTree.insertNode(31);
    binaryTree.insertNode(17);
    binaryTree.insertNode(22);

    expect(binaryTree.PostOrder()).toEqual([2, 22, 17, 31, 11, 10]);

  });

  it('should return the values in in-order', () => {

    const binaryTree = new BinaryTree();
    binaryTree.insertNode(10);
    binaryTree.insertNode(2);
    binaryTree.insertNode(11);
    binaryTree.insertNode(31);
    binaryTree.insertNode(17);
    binaryTree.insertNode(22);

    expect(binaryTree.InOrder()).toEqual([2, 10, 11, 17, 22, 31]);

  });
});

describe('BinarySearchTree test', () => {
  it('should find the max value', () => {

    const binarySearchTree = new BinarySearchTree();

    binarySearchTree.insert(22);
    binarySearchTree.insert(15);
    binarySearchTree.insert(34);

    expect(binarySearchTree.root.value).toEqual(22);
    expect(binarySearchTree.root.left.value).toEqual(15);
    expect(binarySearchTree.root.right.value).toEqual(34);
  });
});

'use strict';


class BinaryTree {

  constructor() {
    this.root = null;
  }

  insertNode(val) {
    const node = {
      value: val,
      left: null,
      right: null
    };

    let currentNode;

    if (!this.root) {
      this.root = node;
    } else {
      currentNode = this.root;
      while (currentNode) {
        if (val < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = node;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else if (val > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = node;
            break;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          break;
        }
      }
    }
  }

  // depth first search algorythm - branch by branch. 
  //in-order. Process left node -> root node -> right node
  //breath first search - level by level
  //use a queue
  InOrder() {
    let result = [];

    const traverse = node => {
      // if left child exists, go left
      if (node.left) traverse(node.left);
      result.push(node.value);

      //if righ child exists, go right
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  //pre-order. Process root node -> left node -> right node
  PreOrder() {
    let result = [];

    const traverse = node => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);

    return result;
  }

  //post-order. Process left node -> right node -> root node
  PostOrder() {
    let result = [];

    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);

    return result;
  }

  //contains gets a value and check whether its in the tree
  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value);
      return true;
    }
    if (value < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
    return false;
  }
}

module.exports = BinaryTree;


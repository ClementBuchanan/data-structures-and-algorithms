"use strict";

const Node = require("./node.js");
const { BinarySearchTree } = require("./binarysearch.js");

class BreadthFirst extends BinarySearchTree {
  breadth() {
    if (!this.root) {
      return "Empty";
    }
    let queue = [];
    let path = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let currentNode = queue.shift();
      path.push(currentNode.value);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    return path;
  }
}

module.exports = { BreadthFirst };

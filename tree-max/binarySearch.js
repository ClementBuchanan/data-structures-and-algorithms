"use strict";

const Node = require("./node.js");
const { BinaryTree } = require("./tree.js");

class BinarySearchTree extends BinaryTree {
  addNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) node.left = newNode;
      else this.addNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.addNode(node.right, newNode);
    }
  }

  add(value) {
    var newNode = new Node(value);

    if (this.root === null) this.root = newNode;
    else this.addNode(this.root, newNode);
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }
  removeNode(node, key) {
    if (node === null) return null;
    else if (key < node.value) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.value) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      var aux = this.findMinNode(node.right);
      node.value = aux.value;

      node.right = this.removeNode(node.right, aux.value);
      return node;
    }
  }

  breadth(tree, rootNode, searchValue) {
    let queue = [];
    let path = [];
    queue.push(rootNode);

    while (queue.length > 0) {
      let currentNode = queue[0];
      path.push(currentNode.value);

      if (currentNode.value === searchValue) {
        return path;
      }

      if (currentNode.left !== null) {
        queue.push(tree[currentNode.left]);
      }

      if (currentNode.right !== null) {
        queue.push(tree[currentNode.right]);
      }
      queue.shift();
    }
  }
  fizzBuzz() {
    if (!this.root) {
      return "Empty";
    }

    let queue = [];
    let path = [];

    queue.push(this.root);

    while (queue.length > 0) {
      let currentNode = queue.shift();
      path.push(currentNode.value);

      if (currentNode.value % 15 === 0) {
        console.log("FizzBuzz");
      } else if (currentNode.value % 3 === 0) {
        console.log("Fizz");
      } else if (currentNode.value % 5 === 0) {
        console.log("Buzz");
      } else if (currentNode.value) {
        console.log(currentNode.value);
        console.log(path);
      }

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

module.exports = { BinarySearchTree };

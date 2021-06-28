"use strict";

const Node = require("./node.js");

class BST {
  constructor() {
    this.root = null;
    // keeping track on # of nodes in the tree
    this.count = 0;
  }
  size() {
    return this.count;
  }
  insert(value) {
    this.count++;

    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;

      return this.root;
    }
    const searchTree = (node) => {
      //value < node.value go left
      if (value < node.value) {
        //if no left child then append new node here
        if (!node.left) {
          node.left = newNode;
        }
        // if there is a left child. look left again
        else {
          searchTree(node.left);
        }
      }
      //if value > node.value go right
      else if (value > node.value) {
        // if no right child. Append new node
        if (!node.right) {
          node.right = newNode;
        }
        // if there is a left child. look left again
        else {
          searchTree(node.right);
        }
      }
      //if there is a right child node. Call searchTree and look right again.
    };
    searchTree(this.root);
    //while inside the insert method call searchTree in the root node
  }

  //contains gets a value and check whether its in the tree
  contains(value) {
    // let currentNode = this.root;

    const traverse = (node) => {
      if (!node) return false;
      if (node.value === value) return true;

      const left = traverse(node.left);
      const right = traverse(node.right);

      if (left || right) return true;
    };
    const tree = traverse(this.root);
    if (tree) return true;

    return false;
  }
}

module.exports = BST;

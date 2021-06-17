'use strict';
class Node {

  constructor(value) {
    this.value = value;
    this.storage = [];
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

module.exports = Node;

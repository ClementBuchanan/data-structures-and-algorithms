'use strict';

// const { interface } = require('node:readLine');

//pull in the Node Class --> giving the ability to instantiate (add) a new node to the list
const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }
  // the ability to add an item to the tail
  append(value) {
    let node = new Node(value);
    if (!this.head) { // same as this.head === null
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }
    return this;
  }

  includes(value) {
    // check in linkedlist  is empty
    if (!this.head) {
      return false;
    } else {
      let current = this.head;
      while (current) {
        if (value === current.value) {
          return true;
        } else {
          current = current.next;
        }
      }
      return false;
    }
  }

  toString() {
    let current = this.head;
    let string = '';
    while (current) {
      string += `{${current.value}} -> `;
      current = current.next;
    }
    string += '{null}';
    return string;

  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  } 
}

module.exports = LinkedList;

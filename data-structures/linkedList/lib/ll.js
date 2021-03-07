'use strict';

const { interface } = require('node:readLine');

//pull in the Node Class --> giving the ability to instantiate (add) a new node to the list
const Node = require('./node1.js');

class linkedList {
    constructor() {
        this.head = null;
    }
    // the ability to add an item to the tail
    append(value) {
        let node = new Node(value);
        if (!this.head) {    // same as this.head === null
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
}
module.exports = LinkedList;
'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;

  }

  insertAtHead(data) {
    const newNode = new Node(data);
    if (!this.head) {
<<<<<<< HEAD
      this.head = newNode
    } else {
      let oldHead = this.head
=======
      this.head = newNode;
    } else {
      let oldHead = this.head;
>>>>>>> ad7f74694c6065cdd8d42b46c8d56e3cdd4c8a66
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
<<<<<<< HEAD
  

  let newLL = new LinkedList()
  newLL.insertAtHead(100)
  newLL.insertAtHead(200)
  newLL.insertAtHead(300)
}

module.exports = LinkedList;







insertBefore(value, newVal) {
  let current = this.head;
  //need logic for if value to insert before is this.head
  let newNode = new Node(newVal);
  while (current.next !== null) {
    //need conditional for this.head === value
    if (current.value === value) {
      newNode.next = current;
      this.head = newNode;
    } else if (current.next.value === value) {
      let temp = current.next;
      current.next = newNode;
      newNode.next = temp;
      // console.log('this is list', this.head);
      return;
    }
    current = current.next;
=======


  insertBefore(value, newVal) {
    let current = this.head;
    //need logic for if value to insert before is this.head
    let newNode = new Node(newVal);
    while (current.next !== null) {
    //need conditional for this.head === value
      if (current.value === value) {
        newNode.next = current;
        this.head = newNode;
      } else if (current.next.value === value) {
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        // console.log('this is list', this.head);
        return;
      }
      current = current.next;
    }
>>>>>>> ad7f74694c6065cdd8d42b46c8d56e3cdd4c8a66
  }

  insertAfter(value, newVal) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        let newNode = new Node(newVal);
        let temp = current.next;
        current.next = newNode;
        newNode.next = temp;
        return;
      }
      current = current.next;
    }
<<<<<<< HEAD
  }
=======
  }
}


module.exports = LinkedList;
>>>>>>> ad7f74694c6065cdd8d42b46c8d56e3cdd4c8a66

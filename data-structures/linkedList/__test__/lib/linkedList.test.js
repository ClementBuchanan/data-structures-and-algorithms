'use Strict';

const LinkedList = require('../../lib/linkedlist.js');

describe('#insertAtHead', () => {
  it('it adds the element to the beginning of the list', () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    
  });

  it('should return a string of all values that exist in the linked list', () => {

    const ll = new LinkedList();
    ll.insertAtHead(0);
    ll.insertAtHead(1);
    ll.insertAtHead(2);
    ll.insertAtHead(3);
    
    const testString = ll.toString();
    expect(testString).toEqual('{3} -> {2} -> {1} -> {0} -> {null}');
  });

    // it('Can successfully instantiate an empty linked list')

    // it('Can properly insert into the linked list')

    // it('Can head property will properly point to the first node in the linked list')

    // it('Can properly insert multiple nodes into the linked list')

    // it('Will return true when finding a value within the linked list that exists')
    
    // it('Will return false when searching for a value in the linked list that does not exist')

    // it('Can properly return a collection of all the values that exist in the linked list')

});

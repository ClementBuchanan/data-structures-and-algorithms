## Singly Linked List
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

## Challenge

- Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
- Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"

## Approach & Efficiency

I first created a test for each of the features then check for assurance that they pass. I then coded based on the success of the tests. This was the most effe\icient way to do it.

## Tests

Write tests to prove the following functionality:

- It can successfully instantiate an empty linked list
- It can properly insert into the linked list
- The head property will properly point to the first node in the linked list
- It can properly insert multiple nodes into the linked list
- It will return true when finding a value within the linked list that exists
- It will return false when searching for a value in the linked list that does not exist
- It can properly return a collection of all the values that exist in the linked list
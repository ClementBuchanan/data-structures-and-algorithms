
## Stacks and Queues
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
- Create a Queue class that has a front property. It creates an empty Queue when instantiated.

## Description
- Define a method called **PUSH**
- Define a method called **POP**
- Define a method called **PEEK**
- Define a method called **isEMPTY**

## Approach & Efficiency
I referenced a Youtube video for this challenge. The video was titled [Implementing stack data structure with TDD (Kata 2)](https://www.youtube.com/watch?v=hTx3bmMsISc) with sample codes and tests that I refactured. The code only sample for Stacks and Stacks testing. I got assistance from a classmate on Queues and Queues testing.

## Testing

- Can successfully push onto a stack
- Can successfully push multiple values onto a stack
- Can successfully pop off the stack
- Can successfully empty a stack after multiple pops
- Can successfully peek the next item on the stack
- Can successfully instantiate an empty stack
- Calling pop or peek on empty stack raises exception
- Can successfully enqueue into a queue
- Can successfully enqueue multiple values into a queue
- Can successfully dequeue out of a queue the expected value
- Can successfully peek into a queue, seeing the expected value
- Can successfully empty a queue after multiple dequeues
- Can successfully instantiate an empty queue
- Calling dequeue or peek on empty queue raises exception
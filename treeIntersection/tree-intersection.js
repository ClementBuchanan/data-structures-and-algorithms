// Function print common elements in two trees
function printCommon(root1, root2) {

  const Node1 = new NodeRoot1();
  const Node2 = new NodeRoot2();

  while (true) {
    // push the Nodes of first tree in Node1
    if (root1 != null) {
      Node1.push(root1);
      root1 = root1.left;
    }

    // push the Nodes of second tree in Node2
    else if (root2 != null) {
      Node2.push(root2);
      root2 = root2.left;
    }

    // Both root1 and root2 are NULL here
    else if (!Node1.isEmpty() && !Node2.isEmpty()) {
      root1 = Node1.peek();
      root2 = Node2.peek();

      // If current keys in two trees are same
      if (root1.key === root2.key) {
        console.log(root1.key + " ");
        Node1.pop();
        Node2.pop();

        // move to the inorder successor
        root1 = root1.right;
        root2 = root2.right;
      }

      else if (root1.key < root2.key) {
        // If Node of first tree is smaller, than that of
        // second tree, then its obvious that the inorder
        // successors of current Node can have same value
        // as that of the second tree Node. Thus, we pop from Node2
        Node1.pop();
        root1 = root1.right;

        // root2 is set to NULL, because we need new Nodes of tree 1
        root2 = null;
      }
      else if (root1.key > root2.key) {
        Node2.pop();
        root2 = root2.right;
        root1 = null;
      }
    }

    // Both roots and both stacks are empty
    else break;
  }
}

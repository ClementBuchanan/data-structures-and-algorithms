'use strict';



// Function print common elements in two trees
const printCommon = async (root1, root2) => {

  const storeArry = [];
  const matchingValues = [];

  if (root1 && root2) {
    const walk = (node) => {
      if (storeArry.includes(node.value)) {
        matchingValues.push(node.value);
      }
      else if (!storeArry.includes(node.value) && !matchingValues.includes(node.value)) {
        storeArry.push(node.value);
      }

      if (node.left) {
        walk(node.left);
      }
      if (node.right) {
        walk(node.right);
      }

    };

    await walk(root1);
    await walk(root2);
  }
  return matchingValues;

};

module.exports = printCommon;
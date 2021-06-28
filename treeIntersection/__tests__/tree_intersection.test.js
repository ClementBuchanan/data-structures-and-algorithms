'use strict';


const { BinarySearchTree } = require('../search.js');
const printCommon = require('../tree-intersection.js');

describe('Hashtables', () => {

  it('should return common values of 2 trees  ', async () => {

    const tree1 = new BinarySearchTree();
    const tree2 = new BinarySearchTree();
    tree1.add(1);
    tree1.add(4);
    tree1.add(5);
    tree1.add(6);
    tree1.add(7);
    tree1.add(9);

    tree2.add(4);
    tree2.add(8);
    tree2.add(7);
    tree2.add(6);
    tree2.add(1);


    const result = await printCommon(tree1.root, tree2.root);
    expect(result).toContain(7);
    expect(result).toContain(1);
    expect(result).toContain(6);
    expect(result).toContain(4);
    console.log(result);

  });


});
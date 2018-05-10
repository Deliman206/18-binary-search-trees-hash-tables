'use strict';

import BinarySearchTree from '../../lib/binary-search-tree';
import Node from '../../lib/node';
// import inOrderTraversal from '../lib/in-order';

describe('binary-search-tree.js', () => {
  test('#find', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const testTree = new BinarySearchTree(one);
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    const x = testTree.find(9);
    console.log(x);
    // expect(x).toBe(7, 9);
  });
});


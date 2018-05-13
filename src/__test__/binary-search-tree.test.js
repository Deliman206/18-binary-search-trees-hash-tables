'use strict';

import BinarySearchTree from '../lib/binary-search-tree';
import Node from '../lib/node';
// import inOrderTraversal from '../lib/in-order';

describe('binary-search-tree.js', () => {
  test('Should validate the find method for BST', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const testTree = new BinarySearchTree(five);

    five.left = three;
    five.right = eight;
    three.left = two;
    three.right = four;
    two.left = one;
    eight.left = six;
    eight.right = nine;
    six.right = seven;
    expect(testTree.find(9)).toEqual(nine);
  });
  test('Should validate the remove method for BST no children', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const testTree = new BinarySearchTree(five);

    five.left = three;
    five.right = eight;
    three.left = two;
    three.right = four;
    two.left = one;
    eight.left = six;
    eight.right = nine;
    six.right = seven;

    const one1 = new Node(1);
    const two1 = new Node(2);
    const three1 = new Node(3);
    const four1 = new Node(4);
    const five1 = new Node(5);
    const six1 = new Node(6);
    const seven1 = new Node(7);
    const eight1 = new Node(8);
    const testTree1 = new BinarySearchTree(five1);
    
    five1.left = three1;
    five1.right = eight1;
    three1.left = two1;
    three1.right = four1;
    two1.left = one1;
    eight1.left = six1;
    six1.right = seven1;
    expect(testTree.remove(9)).toEqual(testTree1.root);
  });
  test('Should validate the remove method for BST one children', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const testTree = new BinarySearchTree(five);

    five.left = three;
    five.right = eight;
    three.left = two;
    three.right = four;
    two.left = one;
    eight.left = six;
    eight.right = nine;
    six.right = seven;

    const one1 = new Node(1);
    const two1 = new Node(2);
    const three1 = new Node(3);
    const four1 = new Node(4);
    const five1 = new Node(5);
    const seven1 = new Node(7);
    const eight1 = new Node(8);
    const nine1 = new Node(9);
    const testTree1 = new BinarySearchTree(five1);
    
    five1.left = three1;
    five1.right = eight1;
    three1.left = two1;
    three1.right = four1;
    two1.left = one1;
    eight1.left = seven1;
    eight1.right = nine1;
    expect(testTree.remove(6)).toEqual(testTree1.root);
  });
  test('Should validate the remove method for BST two children', () => { 
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);
    const seven = new Node(7);
    const eight = new Node(8);
    const nine = new Node(9);
    const testTree = new BinarySearchTree(five);
  
    five.left = three;
    five.right = eight;
    three.left = two;
    three.right = four;
    two.left = one;
    eight.left = six;
    eight.right = nine;
    six.right = seven;

    const one1 = new Node(1);
    const two1 = new Node(2);
    const three1 = new Node(3);
    const four1 = new Node(4);
    const five1 = new Node(5);
    const six1 = new Node(6);
    const seven1 = new Node(7);
    const nine1 = new Node(9);
    const testTree1 = new BinarySearchTree(five1);
    
    five1.left = three1;
    five1.right = six1;
    three1.left = two1;
    three1.right = four1;
    two1.left = one1;
    six1.right = nine1;
    six1.left = seven1;

    expect(testTree.remove(8)).toEqual(testTree1.root);
  });
});

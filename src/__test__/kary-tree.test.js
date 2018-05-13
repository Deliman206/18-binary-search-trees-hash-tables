'use strict';

import KAryNode from '../lib/k-ary-node';
import KAryTree from '../lib/k-ary-tree';

describe('test K-ary-tree', () => {
  test('Should validate the find method of K-Ary Tree using Breadth Traversal', () => {
    const one = new KAryNode(1);
    one.appendChild(2); // 0
    one.appendChild(3); // 1
    one.appendChild(4); // 2
    
    one.children[1].appendChild(5); // 0
    one.children[1].appendChild(6); // 1
    one.children[1].appendChild(7); // 2
    
    one.children[1].children[1].appendChild(8);
    
    const kAryTree = new KAryTree(one);
    const kAryTree2 = new KAryTree();
    
    expect(kAryTree.find(6)).toBeTruthy();
    expect(kAryTree.find(10)).toBeFalsy();
    expect(kAryTree2.find(5)).toEqual(null);
  });
  test('Should validate the toString method of K-Ary Tree using Breadth Traversal', () => {
    const one = new KAryNode(1);
    one.appendChild(2); // 0
    one.appendChild(3); // 1
    one.appendChild(4); // 2
    
    one.children[1].appendChild(5); // 0
    one.children[1].appendChild(6); // 1
    one.children[1].appendChild(7); // 2
    
    one.children[1].children[1].appendChild(8);
    
    const kAryTree = new KAryTree(one);
    
    expect(kAryTree.toString('string')).toEqual('\n1\n2\n3\n4\n5\n6\n7\n8');
  });
  test('Should validate the toArray method of K-Ary Tree using Breadth Traversal', () => {
    const one = new KAryNode(1);
    one.appendChild(2); // 0
    one.appendChild(3); // 1
    one.appendChild(4); // 2
    
    one.children[1].appendChild(5); // 0
    one.children[1].appendChild(6); // 1
    one.children[1].appendChild(7); // 2
    
    one.children[1].children[1].appendChild(8);
    
    const kAryTree = new KAryTree(one);
    
    expect(kAryTree.toArray('array')).toEqual([1, 4, 3, 7, 6, 8, 5, 2]);
  });
});


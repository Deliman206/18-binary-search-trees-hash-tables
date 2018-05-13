'use strict';

import Queue from 'queue-fifo';
import Stack from 'stack-lifo';

export default class KAryTree {
  constructor(root = null) {
    this.root = root; 
  }
  // Time : O(n)
  // Space : O(w) -> O(n)
  breadthSearchTraversal(value) {
    if (!this.root) {
      return null;
    }
    return this._breadthFirstSearch(this.root, value);
  }
  _breadthFirstSearch(root, value) { /* eslint-disable-line */
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      if (currentNode.value === value) return currentNode;
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
    return undefined;
  }
  breadthPrintTraversal(command) {
    if (!this.root) {
      return null;
    }
    return this._breadthPrintSearch(this.root, command);
  }
  _breadthPrintSearch(root, command) { /* eslint-disable-line */
    const queue = new Queue();
    queue.enqueue(root);

    let currentNode = null;
    let solution = ''; /* eslint-disable-line */

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();

      if (command === 'string') solution += `\n${currentNode.value}`;
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
    if (command === 'string') return solution;
  }
  depthFirstTraversal(command) {
    if (!this.root) {
      return null;
    }
    if (command === 'array') return this._depthFirstTraversal(this.root);
    return undefined;
  }
  _depthFirstTraversal(root) { /* eslint-disable-line */
    const stack = new Stack();
    stack.push(root);

    let currentNode = null;
    const solution = [];

    while (!stack.isEmpty()) {
      currentNode = stack.pop();
      solution.push(currentNode.value);

      for (let i = 0; i < currentNode.children.length; i++) {
        stack.push(currentNode.children[i]);
      }
    }
    return solution;
  }
  find(value) {
    return this.breadthSearchTraversal(value);
  }
  toString(command) {
    return this.breadthPrintTraversal(command);
  }
  toArray(command) {
    return this.depthFirstTraversal(command);
  }
}

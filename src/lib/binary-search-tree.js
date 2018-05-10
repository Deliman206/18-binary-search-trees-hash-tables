'use strict';

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  // Sean- Time : O(H) -> O(lg n)
  // Sean- Space : O(H) -> O(lg n)
  insert(nodeToInsert) {
    if (!this.root) {
      this.root = nodeToInsert;
    } else {
      this._insert(this.root, nodeToInsert);
    }
  }
  _insert(rootNode, nodeToInsert) {
    if (nodeToInsert.value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = nodeToInsert;
      } else {
        this._insert(rootNode.left, nodeToInsert);
      }
    } else if (!rootNode.right) {
      rootNode.right = nodeToInsert;
    } else {
      this._insert(rootNode.right, nodeToInsert);
    }
  }
  // Sean- Time : O(H) -> O(lg n)
  // Sean- Space : O(H) -> O(lg n)
  find(value) {
    if (!this.root) {
      return null;
    }
    return this._find(this.root, value);
  }
  _find(root, value) {
    if (!root) {
      return null;
    } else if (root.value === value) {
      return root;
    } else if (root.value < value) {
      return this._find(root.right, value);
    }
    return this._find(root.left, value);
  }
  findMinRoot(root) {
    // Sean- Base Case for Search
    if (root.left === null) return root;
    // Sean- Always go Left 
    return this.findMinNode(root.left);
  }
  remove(value) {
    if (!this.root) return null;
    return this._remove(this.root, value);
  }
  _remove(root, value) { /* eslint-disable-line */
    // Sean- Go Left
    if (value < root.value) {
      root.left = this._remove(root.left, value);
      return root;
    
    // Sean- Go Right
    } else if (value > root.value) {
      root.right = this._remove(root.right, value);
      return root;
    }
    // Sean- To Be Removed Node has no Children
    if (root.left === null && root.right === null) {
      // Sean- Remove it
        root = null; /* eslint-disable-line */
      return root;
    }
    // Sean- To Be Removed Node has 1 Children
    // Sean- Is Child on Right or Left?
    if (root.left === null) {
        root = root.right; /* eslint-disable-line */
      return root;
    } else if (root.right === null) {
        root = root.left; /* eslint-disable-line */
      return root;
    }
    
    // Sean- To Be Removed Node has 2 Children
    const lowestValue = this.findMinRoot(root.left);
    root.value = lowestValue.value;
 
    root.left = this._remove(root.left, lowestValue.value);
    return root;
  }
}
export default BinarySearchTree;


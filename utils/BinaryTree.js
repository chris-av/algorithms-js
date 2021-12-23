/**
 * Binary Tree
 * @constructor
 * @param {any} data - any data point that can be stored at a given node
 * @param {BinaryTree} left - the left child of the current Node
 * @param {BinaryTree} right - the right child of the current Node
 *
 */
class BinaryTree {
  constructor(data, left, right) {
    this.data = data;
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}


module.exports = BinaryTree;


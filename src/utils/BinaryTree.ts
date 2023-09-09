
type NodePrimitives = number | string | Date;
type BinaryTreeNode = {
  data: NodePrimitives;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;
}

/**
 * Binary Tree
 * @constructor
 * @param {any} data - any data point that can be stored at a given node
 * @param {BinaryTree} left - the left child of the current Node
 * @param {BinaryTree} right - the right child of the current Node
 *
 */
class BinaryTree {
  data: any;
  left: any;
  right:any ;
  constructor(data: NodePrimitives, left: BinaryTreeNode, right: BinaryTreeNode) {
    this.data = data;
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}


module.exports = BinaryTree;


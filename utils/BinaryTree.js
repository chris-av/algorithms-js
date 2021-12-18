class BinaryTree {
  constructor(data, left, right) {
    this.data = data;
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

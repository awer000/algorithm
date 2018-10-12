function BinarySearchTree() {
  const Node = function(key) {
    (this.key = key), (this.left = null), (this.right = null);
  };
  let root = null;

  const insertNode = (root, newNode) => {
    if (root.key > newNode.key) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        insertNode(root.right, newNode);
      }
    }
  };

  this.insert = key => {
    const newNode = new Node(key);
    if (!root) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  const inOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };

  this.inOrderTraverse = callback => {
    inOrderTraverseNode(root, callback);
  }; // 최소 노드부터 출력

  const preOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };

  this.preOrderTraverse = callback => {
    preOrderTraverseNode(root, callback);
  };

  const postOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };

  this.postOrderTraverse = callback => {
    postOrderTraverseNode(root, callback);
  };

  this.min = () => {
    return searchMin(root);
  };
  const searchMin = node => {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };

  this.max = () => {
    return searchMax(root);
  };

  const searchMax = node => {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  };

  const searchNode = (node, key) => {
    if (node.key === key) return true;
    if (node.key > key) {
      return searchNode(node.left, key);
    } else if (node.key < key) {
      return searchNode(node.right, key);
    } else {
      return false;
    }
  };

  this.search = key => {
    return searchNode(root, key);
  };
}

const tree = new BinarySearchTree();

function printNode(node) {
  console.log(node);
}

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

tree.postOrderTraverse(printNode);
console.log(tree.min());
console.log(tree.max());
console.log(tree.search(11));

var BinarySearchTree = function(value) {
  var newTree = {};
  // value
  newTree.value = value;
  // left, right properties
  newTree.left; // smaller
  newTree.right; // bigger

  // extend the methods
  newTree = _.extend(newTree, BSTmethods);

  return newTree;
};

// methods
var BSTmethods = {};

BSTmethods.insert = function(value) {
  // make a BST instance
  var newChild = BinarySearchTree(value);
  // if the value is smaller than the parent
  if (newChild.value < this.value) {
    // if occupied,
    if (this.left) {
      this.left.insert(value);
      // if occupied, recursively find open spot
    } else {
      // then assign it to the left
      this.left = newChild;
    }
    // if the value is bigger
  } else if (newChild.value > this.value) {
    // if occupied,
    if (this.right) {
      this.right.insert(value);
      // if occupied, recursively find open spot
    } else {
      // then assign it to the right
      this.right = newChild;
    }
  }
};
BSTmethods.contains = function(value) {
  // check if the value of current node is equal to value
  if (this.value === value) {
    // if yes, return true
    return true;
  }

  // if there is a node on the left
  if (value < this.value) {
    // call contains recursively on the left child
    if (this.left && this.left.contains(value)) {
      return true;
    }
  } else {
  // if there is a node on the right
    // call contains recursively on the right child
    if (this.right && this.right.contains(value)) {
      return true;
    }
  }
  // finished searching, return false
  return false;

};
BSTmethods.depthFirstLog = function(callback) {
  // invoke the callback function on the current node's value
  callback(this.value);
  // check if left child exists
  // - invoke function on left child's value
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  // check if right child exists
  // - invoke function on right child's value
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
insert: O(log n)
contains: O(log n)
depthFirstLog: O(n)
 */

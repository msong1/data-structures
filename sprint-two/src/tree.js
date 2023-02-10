var Tree = function(value) {
  // make in a functional-shared style using this
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];// fix me
  // extend the methods to Tree
  newTree = _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a child Tree
  // -add a value to the Tree
  // -add children property to the Tree
  var childTree = new Tree(value);
  // add a child 'Tree' to the target 'Tree'
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  // check if the value of this tree is same as 'target'
  if (this.value === target) {
    return true;
  }

  // prep

  // base case
  // stop when no children
  if (this.children.length === 0) {
    if (this.value === target) {
      return true;
    }
    return false;
  }

  // recursive case
  // check if any of your children's value is target
  for (var i = 0; i < this.children.length; i++) {
    var childResult = this.children[i].contains(target);
    if (childResult === true) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
  addChild: O(1)
  contains: O(n)
 */

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a new node(new tail) to be added
    var newNode = new Node(value);
    // make the old tail to point at the new tail
    if (list.tail !== null) {
      var oldTail = list.tail;
      oldTail.next = newNode;
    }
    // assign the new node as the tail (change the tail)
    list.tail = newNode;
    // if head is empty
    if (list.head === null) {
    // then give value to head
      list.head = newNode;
    }
  };



  list.removeHead = function() {
    // assign the next node
    var removedElement = list.head;
    delete list.head;
    list.head = removedElement.next;
    return removedElement.value;
    // remember to give head/tail back to null
    // if list is empty
  };

  list.contains = function(target) {
    // repeat

    //// draft
    // start from head
    // check if the value === target
    if (list.head.value === target) {
      // if yes, return true
      return true;
    }
    // check if there is a next value;
    if (list.head.next === null) {
      return false;
    }

    // if not, get the address from the node
    var nextNode = list.head.next;
    // call the next node
    while (true) {
    // check the value... repeat
      if (nextNode.value === target) {
        return true;
      }
      if (nextNode.next === null) { // once reach the tail
        break;
      }
      nextNode = nextNode.next;
    }

    return false;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

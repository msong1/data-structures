

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  // create an object to store value and edge info
  var addedNode = {};
  // add value to the object's value property
  addedNode.value = value;
  // add edge property with an empty array
  addedNode.edge = {};
  // add node to storage
  this.storage.push(addedNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  // iterate over the storage of the Graph
  for (var i = 0; i < this.storage.length; i++) {
  //-  while checking each node's value
    if (this.storage[i] && this.storage[i].value === value) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // iterate through storage of the Graph
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === node) {
      delete this.storage[i];
      continue;
    }
    // - remove edges
    delete this.storage[i].edge[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromNodeEdge = false;
  var toNodeEdge = false;

  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === fromNode) {
      fromNodeEdge = true;
    } else if (this.storage[i].value === toNode) {
      toNodeEdge = true;
    }
  }
  return fromNodeEdge && toNodeEdge
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // if they both are present within the graph
  var hasFromNode = this.contains(fromNode);
  var hasToNode = this.contains(toNode);
  var bothNodes = hasFromNode && hasToNode;

  if (bothNodes) {
    for (var i = 0; i < this.storage.length; i++) {
      if (this.storage[i].value === fromNode) {
        this.storage[i].edge[toNode] = true;
      } else if (this.storage[i].value === toNode) {
        this.storage[i].edge[fromNode] = true;
      }
    }
  }



  // 1 2 3 4 5 6 7 8 9 [7 3]
  //i =0 -> 8
  // check 7?
  // value in [7 3]
  // 3
  // continue 4 5 6
  // 7
  // make 3->7
  // make 7->3

  // for (var i = 0; i < this.storage.length; i++) {
  //   if (this.storage[i] === fromNode || this.storage[i] === toNode) {
  //     for (var j = 0; j < this.storage.length; j++) {
  //       if (this.storage[j] === fromNode || this.storage[j] === toNode) {
  //         // add edges to each node
  //         this.storage[i].edge[j] = true;
  //         this.storage[j].edge[i] = true;
  //       }
  //     }
  //   }
  // }


};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // remove each other's value from its edge info array
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === fromNode) {
      delete this.storage[i].edge[toNode];
    } else if (this.storage[i].value === toNode) {
      delete this.storage[i].edge[fromNode];
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



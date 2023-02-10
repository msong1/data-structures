var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // iterate over storage
  for (var i = 0; i < this._storage.length; i++) {
    // check if any element === item
    if (this._storage[i] === item) {
      // if equal, then change noItem to false
      return;
    }
  }
  // if noItem is true
  // then add item to storage
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  // iterate over the storage
  for (var i = 0; i < this._storage.length; i++) {
    // when found, return true
    if (this._storage[i] === item) {
      return true;
    }
  }
  // if not found, return false
  return false;
};

setPrototype.remove = function(item) {
  // iterate over the storage
  // remove the element once found
  // stop the iteration once found
  for (var i = 0; i < this._storage.length; i ++) {
    if (this._storage[i] === item) {
      delete this._storage[i];
      return;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
add: O(n)
contains: O(n)
remove: O(n)
 */

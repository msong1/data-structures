

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // check if index in storage is assigned
  if (!this._storage.get(index)) {
    // assign value to the limitedArray with index
    this._storage.set(index, [[k, v]]);
  } else {
    // push pair into bucket
    this._storage.get(index).push([k, v]);
  }
  //

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // retrieve a value at the index
  var values = this._storage.get(index); // array
  // iterate over the bucket array until 'k' is found
  for (var i = 0; i < values.length; i++) {
    if(values[i][0] === k) { // values[i] == ['cat', feisty]
      return values[i][1];
    }
  }
  return;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
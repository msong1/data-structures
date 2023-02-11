

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
    var bucket = this._storage.get(index);
    // iterate over array to check keys
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][0] = v;
      }
    }
    // if not, push pair into bucket
    this._storage.get(index).push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // retrieve a value at the index
  var values = this._storage.get(index); // array
  // iterate over the bucket array until 'k' is found
  if (values) {
    for (var i = 0; i < values.length; i++) {
      if (values[i][0] === k) { // values[i] == ['cat', feisty]
        return values[i][1];
      }
    }
  }
  return;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

// see if something is in the bucket
// if not, make a bucket
// if yes, add [k,v] pair




/*
 * Complexity: What is the time complexity of the above functions?
insert: O(1)
retrieve: O(1)
remove: O(1)
 */
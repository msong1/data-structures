

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  /////-----
  // add a property to keep track of the number of tuples
  this.size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // check if index in storage is assigned
  if (!this._storage.get(index)) {
    // assign value to the limitedArray with index
    this._storage.set(index, [[k, v]]);
    this.size++;
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
    this.size++;
  }
  // check if we need to increase the size
  // 1. increase
  // after inserting, check the ratio of the number of tuples to the limit
  // if it is bigger than 75%
  // - double the limit
  // - arrange the tuples
  if (this.size / this._limit > 0.75) {
    this._limit *= 2;
    // make a new storage
    var oldStorage = this._storage;
    this._storage = LimitedArray(this._limit); //set get each

    var hashT = this;
    this.size = 0;

    oldStorage.each(function (bucket) {
      // this === window, nothing
      if (bucket) {
        //iterate over each bucket
        for (var i = 0; i < bucket.length; i++) {
          // - inserting each tuple to the new storage
          hashT.insert(...bucket[i]);
        }
      }
    });

    delete oldStorage;

  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // retrieve a value at the index
  var values = this._storage.get(index); // array [undefined , [b,2]] => [[b,2]]
  // iterate over the bucket array until 'k' is found
  if (values) {
    for (var i = 0; i < values.length; i++) {
      if (values[i] && values[i][0] === k) { // values[i] == ['cat', feisty]
        return values[i][1];
      }
    }
  }
  return;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var hashT = this;
  this._storage.each(function(bucket) {
    // check if target is in the bucket
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        // if yes, remove it
        if (bucket[i] && bucket[i][0] === k) {
          delete bucket[i];
          hashT.size--;
        }
      }
    }
  });


  // check if we need to decrease the size
  if (this.size / this._limit < 0.25) {
    this._limit /= 2;
    // make a new storage
    var oldStorage = this._storage;
    this._storage = LimitedArray(this._limit);
    this.size = 0;

    oldStorage.each(function (bucket) {
      if (bucket) {
        //iterate over each bucket
        for (var i = 0; i < bucket.length; i++) {
          if (bucket[i]) {
            hashT.insert(...bucket[i]);
          }
          // - inserting each tuple to the new storage
        }
      }
    });

    delete oldStorage;

  }

};

/*
 * Complexity: What is the time complexity of the above functions?
insert: O(1)
retrieve: O(1)
remove: O(n)
 */


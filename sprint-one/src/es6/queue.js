class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(string) {
    var newKey = Object.keys(this.storage).length;
    // add key value pair to the storage
    this.storage[newKey] = string;
  }

  dequeue() {
    var firstValue = this.storage[0];
    // delete the first key and value
    delete this.storage[0];
    // re-assign the keys
    //   save the values
    var values = Object.values(this.storage);
    //   reset the storage
    this.storage = {};
    // assign keys
    for (var i = 0; i < values.length; i++) {
      this.storage[i] = values[i];
    }
    // can't use 'this' in forEach
    return firstValue;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}

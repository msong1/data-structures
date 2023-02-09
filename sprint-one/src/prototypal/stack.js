var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  push: function (string) {
    // get a new key
    var newKey = Object.values(this.storage).length;
    // assign the given string to the key
    this.storage[newKey] = string;
  },
  pop: function () {
    var lastKey = Object.values(this.storage).length - 1;
    var lastValue = this.storage[lastKey];
    delete this.storage[lastKey];
    return lastValue;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }

};
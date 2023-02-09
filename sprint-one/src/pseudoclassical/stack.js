var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};


Stack.prototype.push = function (string) {
  // get a new key
  var newKey = Object.values(this.storage).length;
  // assign the given string to the key
  this.storage[newKey] = string;
};

Stack.prototype.pop = function () {
  var lastKey = Object.values(this.storage).length - 1;
  var lastValue = this.storage[lastKey];
  delete this.storage[lastKey];
  return lastValue;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
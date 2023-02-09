class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(string) {
    // get a new key
    var newKey = Object.values(this.storage).length;
    // assign the given string to the key
    this.storage[newKey] = string;
  }

  pop() {
    var lastKey = Object.values(this.storage).length - 1;
    var lastValue = this.storage[lastKey];
    delete this.storage[lastKey];
    return lastValue;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}
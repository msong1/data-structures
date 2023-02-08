var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // get the corresonding key
    // assign zero when it's the first value
    var index = Object.keys(storage).length;
    // add value with the corresponding numeric key
    storage[index] = value;
  };

  someInstance.pop = function() {
    // get the last key and value
    var lastKey = Object.keys(storage).length - 1;
    var lastValue = storage[lastKey]; // storage.lastkey does not work
    // remove the last element
    delete storage[lastKey];
    return lastValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
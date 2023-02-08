var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var index = Object.keys(storage).length;
    storage[index] = value;
  };

  someInstance.dequeue = function() {
    var firstValue = storage[0];
    delete storage[0];

    var values = Object.values(storage);
    storage = {};
    for (i = 0; i < values.length; i++) {
      storage[i] = values[i];
    }

    return firstValue;

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

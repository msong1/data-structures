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
    var lastKey = String(Object.keys(storage).length - 1);
    var lastValue = storage[lastKey];
    // remove the last element
    delete storage[lastKey];
    return lastValue;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

var st = Stack();
st.push('x');
st.push('y');
st.pop();
st.size();

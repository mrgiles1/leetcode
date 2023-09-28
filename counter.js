/**
 * @param {number} n
 * @return {Function} counter
 */

// One way to implement this function is to use a closure - we define an outer function that takes the initial count as a parameter, and returns an inner function that increments and returns the count on each call. The inner function has access to the count variable of the outer function, and since the outer function has already returned, the inner function's closure retains a reference to the count variable. This allows the inner function to maintain the state of the count between calls.
var createCounter = function(n) {
    let count = n;
    return function() {
      return count++;  
    };
    
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

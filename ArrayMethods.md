#### Array.prototype.pop()
  * “Pops” off and removes the last element from an array and returns it.

#### Array.prototype.push()
  * Pushes or adds one or more elements to the end of an array and returns the new length of the array.
  
#### Array.prototype.reverse()
  * Reverses the order of the elements of an array to where the first element becomes the last, and the last element becomes the first.

#### Array.prototype.shift()
  * “Shifts”(Removes) the first element from an array and returns that element.

#### Array.prototype.sort()
  * Sorts the elements of an array in place and returns the array.(?)

#### Array.prototype.splice()
  * Adds and/or removes elements from an array.

#### Array.prototype.unshift()
  * Adds one or more elements to the front of an array and returns the new length of the array.

#### Array.prototype.concat()
  * Concatenates Arrays and returns, or returns a new array comprised of the original array joined with other array(s) and/or value(s).

#### Array.prototype.join()
  * "Joins” the elements of an array together into a string.

#### Array.prototype.slice()
  * Extracts a section of an array and returns a new array based on their indexes.

#### Array.prototype.toString()
  * Converts an array and its elements to a string(Returns a string representing the array and its elements.) Overrides theObject.prototype.toString() method.

#### Array.prototype.toLocaleString()
  * Returns a localized string representing the array and its elements. Overrides theObject.prototype.toLocaleString() method. (strings are separated by a Locale specific String like commas)

#### Array.prototype.indexOf()
  * Returns the first (lowest) index of an element within the designated array equal to the specified value, or -1 if none is found.

#### Array.prototype.lastIndexOf()
  * Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.

#### Array.prototype.forEach()
  * Calls a function for each element in the array. Acts similar to a loop.

#### Array.prototype.every()
  * Returns true if every element in this array satisfies the provided testing function or false if there are problematic elements. (Similar to &&).

#### Array.prototype.some()
  * Returns true if at least one element in this array satisfies the provided testing function.(Similar to ||(or))

#### Array.prototype.filter()
  * Creates a new array with all of the elements of this array for which the provided filtering function returns true.                              
Example:                                           
```javascript                                                 
var numbers = [1, 2, 3, 4, 5]                                            
function even(value){
  if(value % 2 === 0){
      return value;
    }
  }
numbers.filter(even)
[2, 4]
```

#### Array.prototype.map()
  * Creates a new array with the results of calling a provided function on every element in this array.

#### Array.prototype.reduce()
  * Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.

#### Array.prototype.reduceRight()
  * Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.

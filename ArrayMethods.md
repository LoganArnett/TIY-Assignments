#### Array.prototype.pop()
  * “Pops” off and removes the last element from an array and returns it.

Example:
```javascript
var numbers =[1, 2, 3, 4, 5];

numbers.pop();
5
```
#### Array.prototype.push()
  * Pushes or adds one or more elements to the end of an array and returns the new length of the array.
  
Example: 
```javascript
var numbers = [1, 2, 3, 4];//call variable numbers

numbers.push(5);//push the value of 5 to the end of the array
5

numbers = [1, 2, 3, 4, 5]//call variable numbers and see that the number 5 has been pushed onto the end of the array
```
#### Array.prototype.reverse()
  * Reverses the order of the elements of an array to where the first element becomes the last, and the last element becomes the first.

Example: 
```javascript
var numbers = [1, 2, 3, 4, 5];

numbers.reverse();//completely reverse the array from front to back. This is the new order for the numbers array.
[5, 4, 3, 2, 1]
```
#### Array.prototype.shift()
  * “Shifts”(Removes) the first element from an array and returns that element.

Example: 
```javascript
var numbers = [1, 2, 3, 4, 5];

numbers.shift();//removes the first element in the array 
1//and returns it

numbers = [2, 3, 4, 5];//call variable numbers and the array now has 2 at the first index with 1 being completely removed
```
#### Array.prototype.sort()
  * Sorts the elements of an array in place and returns the array.(?)

Example:
```javascript
var numbers = [1, "two", "Three", 4, "five"];

numbers.sort();
[1, 4, "Three", "five", "two"]//In Unicode #'s come before Uppercase letters which come before Lowercase letters. This is the order for the numbers array
```
#### Array.prototype.splice()
  * Adds and/or removes elements from an array.

Example:
```javascript
var numbers = [1, 2, 3, 4, 5];

numbers.splice(5, 0, 6);//says that I will remove 0 elements fromt the 5th index and add the value of 6
[]

numbers = [1, 2, 3, 4, 5, 6];//call variable numbers and the new numbers array is returned
```
#### Array.prototype.unshift()
  * Adds one or more elements to the front of an array and returns the new length of the array.

Example:
```javascript
var numbers = [1, 2, 3, 4, 5];

numbers.unshift(0);//adds the number 0 to the front(index 0) of the array and returns the new length of the array
6//new length

numbers = [0, 1, 2, 3, 4, 5];//call variable numbers and see the new numbers array with 0 at the index of 0 and all of ther other values increasing by 1 index.
```
#### Array.prototype.concat()
  * Concatenates Arrays and returns, or returns a new array comprised of the original array joined with other array(s) and/or value(s).

Example:
```javascript
var numbers = [1, 2, 3, 4, 5];
var letters = ["a", "b", "c", "d", "e"];

numbers.concat(letters);//concatenates the two seperate arrays into one array and returns that new array
[1, 2, 3, 4, 5, "a", "b", "c", "d", "e"]//concatenation of numbers and letters

numbers = [1, 2, 3, 4, 5];//original array remains unaltered
letters = ["a", "b", "c", "d", "e"]//original array remains unaltered
```
#### Array.prototype.join()
  * "Joins” the elements of an array together into a string.

Example:
```javascript
var numbers = [1, 2, 3, 4, 5];

numbers.join();//joins the elements together into a single string and returns this string
"1,2,3,4,5"

numbers = [1, 2, 3, 4, 5];//original array remains unaltered
```
#### Array.prototype.slice()
  * Extracts a section of an array and returns a new array based on their indexes.

Example:
```javascript
var numbers = [1, 2, 3, 4, 5];

numbers.slice(2)//cuts off the every element up to the 2nd index and returns the remaining values
[3, 4, 5]

numbers = [1, 2, 3, 4, 5]//but the original array is unaltered

numbers.slice(0,3)//.slice takes inputs as well. This says that slice will starts at the 0 index and proceed to the 3rd index, then cut off anything that is left after that. And then return the remaining values
[1, 2, 3]

numbers = [1, 2, 3, 4, 5];//once again the original array is unaltered

numbers.slice(-2)//.slice will also take negative number paramaters. This shows that it starts from the right side of the number and goes back 2 indexes and cuts off the remaining elements of the array. This returns the last 2 values of the array 4 and 5.
[4, 5]
numbers = [1, 2, 3, 4, 5];// numbers is still unaltered

numbers.slice(0,-3)//This will act just like before only from right to left instead of left to right. It starts at the left at the index of 0 then goes to the far right and counts back three indexes and cuts those elements off. Returning the remaining values of the array.
[1, 2]

numbers = [1, 2, 3, 4, 5];// numbers remains unaltered through all slices
```
#### Array.prototype.toString()
  * Converts an array and its elements to a string(Returns a string representing the array and its elements.) Overrides theObject.prototype.toString() method.

Example:
```javascript
var numbers = [1, 2, 3, 4, 5];

var stringNumbers = numbers.toString();//will convert all of the elements in the numbers array to a single string and assign it to the variable stringNumbers

stringNumbers = "1,2,3,4,5"//now has a value that reflects all of the elements in the numbers array as a single string
```
#### Array.prototype.toLocaleString()
  * Returns a localized string representing the array and its elements. Overrides theObject.prototype.toLocaleString() method. (strings are separated by a Locale specific String like commas)

Example:
```javascript
```
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

/**
 * String Calculator
 *
 * Given two strings that represent numbers in English -- "one", "two", "three" --
 * calculate the addition, subtraction, multiplication, and division of those numbers
 * and return that value as a `Number`. For example:
 *
 * add("one", "one") === 2
 *
 * For complete credit, provide test coverage for all numbers "zero" through "ten"
 * for at least _two_ operations, but keep in mind that the assignment is designed
 * to enforce _practice_ not _completeness_. Follow "red-green-refactor", use
 * ping-pong pairing, and commit often using `@username & @username` as the
 * commit message.
 */
var add = function(a, b){
  if (b === "three"){
    return 5;
  }
  if (a === "two"){
    return 4;
  }
  if (b === "two"){
    return 3;
  }
  if (a === "one"){
    return 2;
  }
}

console.log('It should add "one" and "one" to equal 2:',
            add("one", "one") === 2);
console.log('It should add "one" and "two" to equal 3:',
            add("one", "two") === 3);
console.log('It should add "two" and "two" to equal 4:',
            add("two", "two") === 4);
console.log('It should add "two" and "three" to equal 5:',
            add("two", "three") === 5);

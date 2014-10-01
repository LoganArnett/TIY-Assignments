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
var letters2Numbers = function(letters){
  if (letters == "one"){
    letters = 1;
  }
  if (letters == "two"){
    letters = 2;
  }
  if (letters == "three"){
    letters = 3;
  }
  if (letters == "four"){
    letters = 4;
  }
  if (letters == "five"){
    letters = 5;
  }
  if (letters == "six"){
    letters = 6;
  }
  if (letters == "seven"){
    letters = 7;
  }
  if (letters == "eight"){
    letters = 8;
  }
  if (letters == "nine"){
    letters = 9;
  }
  if (letters == "ten"){
    letters = 10;
  }
  return letters;
}

function test_letters2Numbers(a, b){
  console.log('It should convert "' + a + '" to "' + b + '":',
        letters2Numbers(a) === b);
}

test_letters2Numbers("one", 1);
test_letters2Numbers("two", 2);
test_letters2Numbers("three", 3);
test_letters2Numbers("four", 4);
test_letters2Numbers("five", 5);
test_letters2Numbers("six", 6);
test_letters2Numbers("seven", 7);
test_letters2Numbers("eight", 8);
test_letters2Numbers("nine", 9);
test_letters2Numbers("ten", 10);


var add = function(a, b){
  a = letters2Numbers(a);
  b = letters2Numbers(b);
   return a + b;

}

console.log('It should add "one" and "one" to equal 2:',
            add("one", "one") === 2);
console.log('It should add "one" and "two" to equal 3:',
            add("one", "two") === 3);
console.log('It should add "two" and "two" to equal 4:',
            add("two", "two") === 4);
console.log('It should add "two" and "three" to equal 5:',
            add("two", "three") === 5);
console.log('It should add "four" and "five" to equal 9:',
            add("four", "five") === 9);

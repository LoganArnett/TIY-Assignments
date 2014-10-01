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

console.log(letters2Numbers("two"))

var add = function(a, b) {
    a = letters2Numbers(a);
    b = letters2Numbers(b);
    return a + b;
};

function test_letters2Numbers(a, b){
  console.log('it should convert "' + a + '" to "' + b + '" :',
  letters2Numbers(a) === b);
}

test_letters2Numbers("one", 1);
test_letters2Numbers("two", 2);


function test_add(a, b, c){
  console.log('it should add "' + a + '" and "' + b + '" to equal ' + c + ':',
  add(a, b) === c);
}

test_add("one", "one", 2);
test_add("one", "two", 3);
test_add("one", "three", 4);
test_add("one", "four", 5);
test_add("one", "five", 6);
test_add("one", "six", 7);
test_add("one", "seven", 8);
test_add("one", "eight", 9);
test_add("one", "nine", 10);
test_add("one", "ten", 11);
test_add("two", "one", 3);
test_add("two", "two", 4);
test_add("two", "three", 5);
test_add("two", "four", 6);
test_add("two", "five", 7);
test_add("two", "six", 8);
test_add("two", "seven", 9);
test_add("two", "eight", 10);
test_add("two", "nine", 11);
test_add("two", "ten", 12);
test_add("three", "one", 4);
test_add("three", "two", 5);
test_add("three", "three", 6);
test_add("three", "four", 7);
test_add("three", "five", 8);
test_add("three", "six", 9);
test_add("three", "seven", 10);
test_add("three", "eight", 11);
test_add("three", "nine", 12);
test_add("three", "ten", 13);



console.log('it should add "one" and "one":',
            add("one", "one") === 2);
console.log('it should add "one" and "two" to equal 3:',
            add("one", "two") === 3);
console.log('it should add "one" and "three" to equal 4:',
            add("one", "three") === 4);
console.log('it should add "one" and "four" to equal 5:',
            add("one", "four") === 5);
console.log('it should add "two" and "one" to equal 3:',
            add("two", "one") === 3);
console.log('it should add "two" and "two" to equal 2:',
            add("two", "two") === 4);
console.log('it should add "three" and "two" to equal 5:',
            add("three", "two") === 5);
console.log('it should add "three" and "one" to equal 4:',
            add("three", "one") === 4);
console.log('it should add "four" and "two" to equal 6:',
            add("four", "two") === 6);
console.log('it should add "five" and "one" to equal 6:',
            add("five", "one") === 6);

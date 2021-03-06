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
 describe('Array', function(){
  before(function(){
    // ...
  });

  describe('#indexOf()', function(){
    it('should return -1 when not present', function(){
      [1,2,3].indexOf(4).should.equal(-1);
    });
  });
});
 */
 var expect = require('chai').expect;
 var should = require('chai').should();
 var assert = require('chai').assert

 /**
  * Log `success` if `actual` is STRICTLY equal to `expected`
  *
  * @param ANY actual
  * @param ANY expected
  * @param String success
  */
 function test1(actual, expected, success){
   success = success || 'YOU DID IT';

   assert(actual === expected) || console.log(success);
     /*if (success === undefined) success = 'Wait Really? It worked? Holy Shit it WORKED!!!';
     assert.strictEqual(actual, expected);
     console.log(success);*/
 }
var words = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6,
            seven: 7, eight: 8, nine: 9, ten: 10
          };
//converts 'Strings' to Numbers
var stringCalc = {
  fromEnglish: function(word1, word2){
  return words[word1] + words[word2];
  }
}

describe('stringCalc.fromEnglish(), should return the sum of 2 word inputs converted to numbers', function(){
  it('should return 0 for zero and zero', function(){
    assert.equal(stringCalc.fromEnglish('zero', 'zero'), 0);
  })
  it('should return 1 for one and one', function(){
    assert.equal(stringCalc.fromEnglish('one', 'one'), 2);
  })
  it('should return 3 for one and two', function(){
    assert.equal(stringCalc.fromEnglish('one', 'two'), 3);
  })
  it('should return 19 for ten and nine', function(){
    assert.equal(stringCalc.fromEnglish('ten', 'nine'), 19);
  })
})
/*  if (letters === "one"){
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
}*/
/*
describe("fromEnglish(), which converst English 'Strings' to Numbers", function(){
  it('should convert string one to # 1', function(){
    assert.equal(fromEnglish("one"), 1);
  })
  it('should display typeOf output "Number" for 1', function(){
    assert.typeOf(fromEnglish("one"), 'Number');//chai testing
    assert.isNumber(fromEnglish("one"), 1);//chai testing
  })
  it('should EXPECT output to be a "Number"', function(){
    expect(fromEnglish("two")).to.be.a('number');//chai testing
  })
  it('should display the lengthOf of "one" as a "string"', function(){
    assert.lengthOf(("one"), 3);//chai testing
  })
  it('should convert string two to # 2', function(){
    assert.equal(fromEnglish("two"), 2);
  })
  it('should display typeOf output "Number" for 2', function(){
    assert.typeOf(fromEnglish("two"), 'Number');//chai testing
    assert.isNumber(fromEnglish("two"), 2);//chai testing
  })
  it('SHOULD be a "Number"', function(){
    fromEnglish("two").should.be.a('number');//chai testing
  })
  it('should display the lengthOf of "two" as a "string"', function(){
    assert.lengthOf(("two"), 3);//chai testing
  })
  it('should convert string three to # 3', function(){
    assert.equal(fromEnglish("three"), 3);
  })
  it('should display typeOf output "Number" for 3', function(){
    assert.typeOf(fromEnglish("three"), 'Number');//chai testing
    assert.isNumber(fromEnglish("three"), 3);//chai testing
  })
  it('should display the lengthOf of "three" as a "string"', function(){
    assert.lengthOf(("three"), 5);//chai testing
  })
})

function test_fromEnglish(a, b){
  console.log('It should convert "' + a + '" to "' + b + '":',
        fromEnglish(a) === b);
}
/*
test_fromEnglish("one", 1);
test_fromEnglish("two", 2);
test_fromEnglish("three", 3);
test_fromEnglish("four", 4);
test_fromEnglish("five", 5);
test_fromEnglish("six", 6);
test_fromEnglish("seven", 7);
test_fromEnglish("eight", 8);
test_fromEnglish("nine", 9);
test_fromEnglish("ten", 10);
*/
/*
// adds our a and b inputs
var add = function(a, b){
  a = fromEnglish(a);
  b = fromEnglish(b);
   return a + b;
}

function test_add(a, b, c){
  //console.log('It should add "' + a + '" and "' + b + '" to equal ' + c + ':',
          return add(a, b) == c;
}

describe("test_add(), it should add two Number inputs and produce a sum", function(){
  it('should add one and one', function(){
    assert.equal(test_add("one", "one", 2), true);
  })
  it('should prove the sum returns as a Boolean', function(){
    assert.isBoolean(test_add("one", "one", 2));//chai testing
  })
  it('should add one and two', function(){
    assert.equal(test_add("one", "two", 3), true);
  })
  it('should prove the sum returns as a Boolean', function(){
    assert.isBoolean(test_add("one", "two", 3));//chai testing
  })
  it('should add one and three', function(){
    assert.equal(test_add("one", "three", 4), true);
  })
  it('should prove the sum returns as a Boolean', function(){
    assert.isBoolean(test_add("one", "three", 4));//chai testing
  })
  it('should add one and four', function(){
    assert.equal(test_add("one", "four", 5), true);
  })
  it('should prove the sum returns as a Boolean', function(){
    assert.isBoolean(test_add("one", "four", 5));//chai testing
  })
  it('should add one and five', function(){
    assert.equal(test_add("one", "five", 6), true);
  })
  it('should prove the sum returns as a Boolean', function(){
    assert.isBoolean(test_add("one", "five", 6));//chai testing
  })
  it('should add one and six', function(){
    assert.equal(test_add("one", "six", 7), true);
  })
  it('should prove the sum returns as a Boolean', function(){
    assert.isBoolean(test_add("one", "six", 7));//chai testing
  })
})


/*test_add("one", "one", 2);
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
test_add("four", "one", 5);
test_add("four", "two", 6);
test_add("four", "three", 7);
test_add("four", "four", 8);
test_add("four", "five", 9);
test_add("four", "six", 10);
test_add("four", "seven", 11);
test_add("four", "eight", 12);
test_add("four", "nine", 13);
test_add("four", "ten", 14);
test_add("five", "one", 6);
test_add("five", "two", 7);
test_add("five", "three", 8);
test_add("five", "four", 9);
test_add("five", "five", 10);
test_add("five", "six", 11);
test_add("five", "seven", 12);
test_add("five", "eight", 13);
test_add("five", "nine", 14);
test_add("five", "ten", 15);
test_add("six", "one", 7);
test_add("six", "two", 8);
test_add("six", "three", 9);
test_add("six", "four", 10);
test_add("six", "five", 11);
test_add("six", "six", 12);
test_add("six", "seven", 13);
test_add("six", "eight", 14);
test_add("six", "nine", 15);
test_add("six", "ten", 16);
test_add("seven", "one", 8);
test_add("seven", "two", 9);
test_add("seven", "three", 10);
test_add("seven", "four", 11);
test_add("seven", "five", 12);
test_add("seven", "six", 13);
test_add("seven", "seven", 14);
test_add("seven", "eight", 15);
test_add("seven", "nine", 16);
test_add("seven", "ten", 17);
test_add("eight", "one", 9);
test_add("eight", "two", 10);
test_add("eight", "three", 11);
test_add("eight", "four", 12);
test_add("eight", "five", 13);
test_add("eight", "six", 14);
test_add("eight", "seven", 15);
test_add("eight", "eight", 16);
test_add("eight", "nine", 17);
test_add("eight", "ten", 18);
test_add("nine", "one", 10);
test_add("nine", "two", 11);
test_add("nine", "three", 12);
test_add("nine", "four", 13);
test_add("nine", "five", 14);
test_add("nine", "six", 15);
test_add("nine", "seven", 16);
test_add("nine", "eight", 17);
test_add("nine", "nine", 18);
test_add("nine", "ten", 19);
test_add("ten", "one", 11);
test_add("ten", "two", 12);
test_add("ten", "three", 13);
test_add("ten", "four", 14);
test_add("ten", "five", 15);
test_add("ten", "six", 16);
test_add("ten", "seven", 17);
test_add("ten", "eight", 18);
test_add("ten", "nine", 19);
test_add("ten", "ten", 20);
*/

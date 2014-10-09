

/**
 * Check Writing
 *
 * Given an integer representing money -- $1234.56 -- convert
 * that into it;s string representation in English words. For
 * example, 1234.56 is "one thousand, two hundred thirty four
 * and 56/100s", just like you would see on a check.
 *
 * In a lot of ways this is the inverse of the "String Calculator"
 * problem, so a lot of what you've learned there will be put into
 * practice here, but backwards. Hooray!
 */
/*
 function toEnglish(value){
   var ones = [ "zero", 'one', 'two', 'three', 'four', 'five', 'six',
                'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
                'thirteen', 'fourteen', 'fifteen','sixteen', 'seventeen',
                'eighteen', 'nineteen'];

   var tens = [ 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
                'eighty', 'ninety'];

   if (value > 19 ){
     value_ones = value - 20

     value_tens = value/10;

  if (value > 0){
          return tens[value_tens - 1] + ' ' + ones[value_ones];
        }

        return tens[value_tens - 1];
    }

    return ones[value];
  }

  var assert = require('assert');

  function test(actual, expected, success){
      assert(actual === expected) || console.log(success);
  }


//test(true, true, 'true is true');


var testCases = [

        [0, 'zero']
/*        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine'],
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen'],
        [20, 'twenty'],
        [21, 'twenty one'],];


 //for ( var index = 0; index < testCases.length; index++ ){
    testCases.forEach(forEachTestCase);

    function forEachTestCase (testCase, index, testCases){
        //console.log('inside forEach: ', testCase, index);
        message = 'should convert ' +
            testCases[index][0] + ' to ' + testCases[index][1];

        it(message, function(){
            //console.log('inside of it(): ', index, testCases[index]);
            test(testCases[index][0], testCases[index][1]);
        });
    };

/*var index = 0, testCase;

testCases.forEach(function(testCase, index, TestCases){
//while(index < testCases.length){
  var testCase = testCases[index];
  actual = toEnglish(testCase[0]);
  expected = testCase[1];
  test(actual, expected, testCase[0] + ' >> ' + testCase[1]
);
index++;
});

[ 1, 'one']
[ 2, 'two']
[ 3, 'three']
[ 4, 'four']
[ 5, 'five']



test(toEnglish(1));
test(toEnglish(2));
test(toEnglish(3));
test(toEnglish(4));
test(toEnglish(5));*/

 /**
 * Sample Data
 *
 * $1234.56 => "one thousand, two hundred thirty four and 56/100s"
 * $123.45 => "one hundred twenty three and 45/100s"
 * $12.34 => "twelve and 34/100s"
 * $1.23 => "one and 23/100s"
 *
 * EXTRA Credit:
 * $12345678.90 => "twelve million, three hundred forty five thousand,
 * six hundred seventy eight and 90/100s"
 *
 * Make up your own, too.
 */
 var expect = require('chai').expect;
 var should = require('chai').should();
 var assert = require('chai').assert;

 /**
  * Log `success` if `actual` is STRICTLY equal to `expected`
  *
  * @param ANY actual
  * @param ANY expected
  * @param String success
  */
 function test(actual, expected, success){
     if (success === undefined) success = 'Wait Really? It worked? Holy Shit it WORKED!!!';
     assert.strictEqual(actual, expected);
     console.log(success);
 }

numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen","seventeen", "eighteen", "nineteen"]
tens = ["zero","ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
hundreds = ["zero", "one hundred ", "two hundred ", "three hundred ", "four hundred ","five hundred ", "six hundred ", "seven hundred ", "eight hundred ","nine hundred "]
var numerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function num2Letter(num) {
var cents = ((num - Math.floor(num))* 100).toFixed(0)
num = Math.floor(num)
var val = num.toString();

    if (num < 20){
    return numbers[num] + " and " + cents + "/100 dollars";
  }
    if (num < 100) {
      if (num % 10 === 0) {
      return tens[val[0]] + " and " + cents + "/100 dollars";
    } {
      return tens[val[0]] + ones[val[1]] + " and " + cents + "/100 dollars";
    }
  }
}

describe("num2Letter(), takes a Number with two decimal places as an input and returns it in check form", function(){
  it ("should return $1.23 as if on a check", function(){
    assert.equal(num2Letter(1.23), 'one and 23/100 dollars');
  })
  it ("should 'EXPECT' $1.23 to be a string", function(){
    expect(num2Letter(1.23)).to.be.a('string');
  })
  it ("should return $9.50 as if on a check", function(){
    assert.equal(num2Letter(9.50), 'nine and 50/100 dollars');
  })
  it ("should 'EXPECT' $9.50 to be a string", function(){
    expect(num2Letter(9.50)).to.be.a('string');
  })
  it ("should return $6.72 as if on a check", function(){
    assert.equal(num2Letter(6.72), 'six and 72/100 dollars');
  })
  it ("should show say the $6.72 'SHOULD' be a string", function(){
    (num2Letter(6.72)).should.be.a('string');
  })
  it ("should return $20.20 as if on a check", function(){
    assert.equal(num2Letter(20.20), 'twenty and 20/100 dollars');
  })
  it ("should show say the $20.20 'SHOULD' be a string", function(){
    (num2Letter(20.20)).should.be.a('string');
  })
  it ("should return $30.30 as if on a check", function(){
    assert.equal(num2Letter(30.30), 'thirty and 30/100 dollars');
  })
  it ("should show say the $30.30 'SHOULD.include' 'thirty'", function(){
    (num2Letter(30.30)).should.include('thirty');
  })
  it ("should return $40.40 as if on a check", function(){
    assert.equal(num2Letter(40.40), 'forty and 40/100 dollars');
  })
  it ("should show say the $40.40 'SHOULD.exist'", function(){
    (num2Letter(40.40)).should.exist;
  })
})

/*console.log(num2letter(1.23))
console.log(num2letter(9.50))
console.log(num2letter(6.72))
console.log(num2letter(20.20))
console.log(num2letter(30.30))
console.log(num2letter(40.40))
console.log(num2letter(50.50))*/

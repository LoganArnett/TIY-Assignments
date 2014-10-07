

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
        [21, 'twenty one'],*/];


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
/**numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen","seventeen", "eighteen", "nineteen"]
tens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
hundreds = ["zero", "one hundred ", "two hundred ", "three hundred ", "four hundred ","five hundred ", "six hundred ", "seven hundred ", "eight hundred ","nine hundred "]
var numerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function num2letter(num) {
var cents = ((num - Math.floor(num))* 100).toFixed(0)
num = Math.floor(num)
var val = num.toString();

    if (num < 20){
    return numbers[num] + " dollars and " + cents + "/100 cents";
  }
    if (num < 100) {
      if (num % 10 === 0) {
      return tens[val[0]] + " dollars and " + cents + "/100 cents";
    } {
      return tens[val[0]] + ones[val[1]] + " dollars and " + cents + "/100 cents";
    }
  }
}

console.log(num2letter(1.23))
console.log(num2letter(9.50))
console.log(num2letter(6.72))
console.log(num2letter(20.20))
console.log(num2letter(30.30))
console.log(num2letter(40.40))
console.log(num2letter(50.50))*/

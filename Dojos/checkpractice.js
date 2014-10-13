/**
  * Check writing
  *
  *Given a number representing money -- $1234.56 -- convert
  * that into it's string representation in English words. For
  * example, 1234.56 is "one thousand, two hundred thirty four
  * and 56/100s", just like you would see on a check.
  *
  * In a lot of ways, this is the inverse of the "String Calculator"
  * problem, so a lot of what you've learned there will be put into
  * practice here, but backwards. Hooray!
  */

/**
 * Sample Data:
 *
 * 1234.56 => "one thousand, two hundred thirty four and 56/100s"
 * 123.45  => "one hundred twenty three and 45/100s"
 * 12.34   => "twelve and 34/100s"
 * 1.23    => "one and 23/100s"
 *
 * EXTRA CREDIT!
 *
 * 12345678.90
 * "twelve million, three hundred forty five thousand,
 * six hundred seventy eight and 90/100s"

 * Make up your own, too.
 */
 function toEnglish(value){
   var ones = ["", "One", "Two", "Three", "Four", "Five", "Six",
               "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
               "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
               "Eighteen", "Nineteen"];

   var tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty",
               "Sixty", "Seventy", "Eighty", "Ninety"];

   value = Number(value).toFixed(2);
   var checkEnd = value.slice(-2) + '/100 dollars';
   var cash = value.slice(0,-3);
   var hundo = ' Hundred ';
   var thous = ' Thousand ';
   var tenK = value.slice(0, -6);
   var twentyKPlus = value.slice(0, -6);


   if(value < 20){
     return ones[cash] + ' ' + checkEnd;
   }
   else if(value < 100){
     if(value % 10 == 0){
       return tens[cash[0]] + ' ' + checkEnd;
     }
     else {
       return tens[cash[0]] + ' ' + ones[cash[1]] + ' ' + checkEnd;
     }
   }
   else if(value < 1000){
      if(value % 100 == 0){
       return ones[cash[0]] + hundo + checkEnd;
     }
     else {
     return ones[cash[0]] + hundo + 'and ' + tens[cash[1]] + ' ' + ones[cash[2]] + ' ' + checkEnd;
   }
 }
   else if(value < 10000){
     if(value % 1000 == 0){
       return ones[cash[0]] + thous + checkEnd;
     }
     else {
       return ones[cash[0]] + thous + ones[cash[1]] + hundo + 'and ' + tens[cash[2]] + ' ' + ones[cash[3]] + ' ' + checkEnd;
     }
 }

}
 console.log(toEnglish(9999));





















 /*
//toEnglish function takes in a parameter 'value' which is a number and converts it
//into a "string" of that number written out
var ones = {0: "", 1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six",
            7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten", 11: "Eleven", 12: "Twelve",
            13: "Thirteen", 14: "Fourteen", 15: "Fifteen", 16: "Sixteen", 17: "Seventeen",
            18: "Eighteen", 19: "Nineteen"};

var tens = [0: "", 1: "Ten", 2: "Twenty", 3: "Thirty", 4: "Forty", 5: "Fifty",
            6: "Sixty", 7: "Seventy", 8: "Eighty", 9: "Ninety"];

function toEnglish(value){

  value = Number(value).toFixed(2);
  var checkEnd = value.slice(-2) + '/100 dollars';
  var cash = value.slice(0,-3);
  var hundo = ' Hundred ';
  var thous = ' Thousand ';
  var tenK = value.slice(0, -6);
  var twentyKPlus = value.slice(0, -6);
  return
/*
  if(value < 20){
    return ones[cash] + ' ' + checkEnd;
  }
  else if(value < 100){
    if(value % 10 == 0){
      return tens[cash[0]] + checkEnd;
    }
    else {
      return tens[cash[0]] + ones[cash[1]] + checkEnd;
    }
  }
  else if(value < 1000){
     if(value % 100 == 0){
      return ones[cash[0]] + hundo + checkEnd;
    }
    else {
    return ones[cash[0]] + hundo + 'and ' + tens[cash[1]] + ' ' + ones[cash[2]] + ' ' + checkEnd;
  }
}
  else if(value < 10000){
    if(value % 1000 == 0){
      return ones[cash[0]] + thous + checkEnd;
    }
    else {
      return ones[cash[0]] + thous + ones[cash[1]] + hundo + 'and ' + tens[cash[2]] + ' ' + ones[cash[3]] + ' ' + checkEnd;
    }
  }
  else if(value < 20000){
    if(value % 1000 == 0){
      return ones[tenK] + thous + checkEnd;
    }
    else {
      return ones[tenK] + thous + ones[cash[2]] + hundo + 'and ' + tens[cash[3]] + ' ' + ones[cash[4]] + ' ' + checkEnd;
    }
  }
}
*/
/*
var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('chai').assert;

describe('toEnglish(), takes in a numerical value anf returns a string', function(){
      it('should convert 1.23 to the amount on a check in a string', function(){
        assert.equal(toEnglish(1.23), 'One 23/100 dollars');
      })
      it('should convert 12.34 to the amount on a check in a string', function(){
        assert.equal(toEnglish(12.34), 'Twelve 34/100 dollars');
      })
      it('should convert 123.45 to the amount on a check in a string', function(){
        assert.equal(toEnglish(123.45), 'One Hundred and Twenty Three 45/100 dollars');
      })
      it('should convert 1234.56 to the amount on a check in a string', function(){
        assert.equal(toEnglish(1234.56), 'One Thousand Two Hundred and Thirty Four 56/100 dollars');
      })
      it('should convert 1000 to the amount on a check in a string', function(){
        assert.equal(toEnglish(1000), 'One Thousand 00/100 dollars');
      })
      it('should convert 12345.67 to the amount on a check in a string', function(){
        assert.equal(toEnglish(12345.67), 'Twelve Thousand Three Hundred and Forty Five 67/100 dollars');
      })
      it('should convert 315.75 to the amount on a check in a string', function(){
        assert.equal(toEnglish(310), 'Three Hundred and Ten  00/100 dollars');
      })
          })
/*console.log(toEnglish(1.23))
console.log(toEnglish(12.34))
console.log(toEnglish(123.45))
console.log(toEnglish(1234.56))
console.log(toEnglish(1000))
console.log(toEnglish(10500))
console.log(toEnglish(12345.67))
*/



















































/*function num2letter(val) {
    ones =     ["zero", "one", "two", "three", "four", "five",
                "six", "seven", "eight", "nine", "ten", "eleven",
                "twelve", "thirteen", "fourteen", "fifteen",
                "sixteen", "seventeen", "eighteen", "nineteen"]

    tens =     ["zero", "ten ", "twenty ", "thirty ", "fourty ", "fifty ",
                "sixty ", "seventy ", "eighty ", "ninety "]

    teens =    ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
                "sixteen", "seventeen", "eighteen", "nineteen"]

    hundreds = ["zero", "one hundred ", "two hundred ", "three hundred ", "four hundred ",
                "five hundred ", "six hundred ", "seven hundred ", "eight hundred ", "nine hundred "]

    thousands = ["zero", "one thousand ", "two thousand ", "three thousand ", "four thousand ",
                 "five thousand ", "six thousand ", "seven thousand ", "eight thousand ", "nine thousand "]

    val = Number(val).toFixed(2);
    var cents = val.slice(-2);
    var dollars = val.slice(0, -3);

    if (dollars < 20){
      return ones[dollars] + " dollars and " + cents + "/100 cents";
    }
    else if (dollars < 100) {
      if (dollars % 10 === 0) {
        return tens[val[0]] + "dollars and " + cents + "/100 cents";
      } else {
        return tens[val[0]] + ones[val[1]] + " dollars and " + cents + "/100 cents";
      }
    }
    else if (dollars < 1000) {
      if (dollars % 100 === 0) {
        return hundreds[val[0]] + "dollars and " + cents + "/100 cents";
      }
      else if (dollars % 10 === 0) {
        return hundreds[val[0]] + tens[val[1]] + "dollars and " + cents + "/100 cents";
      }
      else if (val[1] < 2) {
        return hundreds[val[0]] + teens[val[2]] + " dollars and " + cents + "/100 cents";
      } else {
        return hundreds[val[0]] + tens[val[1]] + ones[val[2]] + " dollars and " + cents + "/100 cents";
      }
    }
    else if (dollars < 10000) {
      if (dollars % 1000 === 0) {
        return thousands[val[0]] + "dollars and " + cents + "/100 cents";
      }
      else if (dollars % 100 === 0) {
        return thousands[val[0]] + hundreds[val[1]] + "dollars and " + cents + "/100 cents";
      }
      else if (dollars % 10 === 0) {
        return thousands[val[0]] + hundreds[val[1]] + tens[val[2]] + "dollars and " + cents + "/100 cents";
      }
      else if (val[2] < 2) {
        return thousands[val[0]] + hundreds[val[1]] + teens[val[3]] + " dollars and " + cents + "/100 cents";
      } else {
        return thousands[val[0]] + hundreds[val[1]] + tens[val[2]] + ones[val[3]] + " dollars and " + cents + "/100 cents";
      }
  }
}

// Test Code

var testCases = [
  [0, 'zero dollars and 00/100 cents'],
  [5, 'five dollars and 00/100 cents'],
  [15, 'fifteen dollars and 00/100 cents'],
  [20, 'twenty dollars and 00/100 cents'],
  [99, 'ninety nine dollars and 00/100 cents'],
  [100, 'one hundred dollars and 00/100 cents'],
  [200, 'two hundred dollars and 00/100 cents'],
  [550, 'five hundred fifty dollars and 00/100 cents'],
  [999, 'nine hundred ninety nine dollars and 00/100 cents'],
  [1000, 'one thousand dollars and 00/100 cents'],
  [1100, 'one thousand one hundred dollars and 00/100 cents'],
  [1110, 'one thousand one hundred ten dollars and 00/100 cents'],
  [5000, 'five thousand dollars and 00/100 cents'],
  [9999, 'nine thousand nine hundred ninety nine dollars and 00/100 cents'],
  [1234.56, 'one thousand two hundred thirty four dollars and 56/100 cents'],
  [100.10, 'one hundred dollars and 10/100 cents'],
  [500.05, 'five hundred dollars and 05/100 cents'],
  [999.990, 'nine hundred ninety nine dollars and 99/100 cents']
];

/*var assert = require('assert');

testCases.forEach(function(testCase) {
  var actual = num2letter(testCase[0]);
  expected = testCase[1];
  console.log('Number: ' + testCase[0] + ' was converted to "' + testCase[1] + '"');

  assert.strictEqual(actual, expected);
})

assert(actual, expected);*/


/*console.log(num2letter(0))
console.log(num2letter(5))
console.log(num2letter(15))
console.log(num2letter(20))
console.log(num2letter(99))
console.log(num2letter(100))
console.log(num2letter(200))
console.log(num2letter(550))
console.log(num2letter(999))
console.log(num2letter(1000))
console.log(num2letter(1100))
console.log(num2letter(1110))
console.log(num2letter(5000))
console.log(num2letter(5500))
console.log(num2letter(5550))
console.log(num2letter(9999))
console.log(num2letter(1234.56))
console.log(num2letter(100.10))
console.log(num2letter(200.5))
console.log(num2letter(300.900))
console.log(num2letter(400.33))
console.log(num2letter(500.54))
console.log(num2letter(1000.00))
console.log(num2letter(2000))
console.log(num2letter(3000))
console.log(num2letter(4000))
console.log(num2letter(5000))*/

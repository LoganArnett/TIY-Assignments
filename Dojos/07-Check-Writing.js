

/**
 * Check Writing
 */
 var expect = require('chai').expect;
 var should = require('chai').should();
 var assert = require('chai').assert;

var ones = [" ", "One", "Two", "Three", "Four", "Five", "Six",
            "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
            "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
            "Eighteen", "Nineteen"];

var tens = [" ", "Ten", "Twenty", "Thirty", "Forty", "Fifty",
            "Sixty", "Seventy", "Eighty", "Ninety"];

var checkWrite = {
   toEnglish: function(value){

  value = Number(value).toFixed(2);
  var checkEnd = value.slice(-2) + '/100 dollars';
  var cash = value.slice(0,-3);
  var hundo = ' Hundred ';
  var thous = ' Thousand ';

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
}

 describe('checkWrite.toEnglish() should convert # to String', function(){
   it('Should give 14.55 as if it was written on a check', function(){
     assert.equal(checkWrite.toEnglish(14.55), 'Fourteen 55/100 dollars');
   })
   it('Should give 19.67 as if it was written on a check', function(){
     assert.equal(checkWrite.toEnglish(19.67), 'Nineteen 67/100 dollars');
   })
   it('Should give 195.67 as if it was written on a check', function(){
     assert.equal(checkWrite.toEnglish(195.67), 'One Hundred and Ninety Five 67/100 dollars');
   })
   it('Should give 1954.67 as if it was written on a check', function(){
     assert.equal(checkWrite.toEnglish(1954.67), 'One Thousand Nine Hundred and Fifty Four 67/100 dollars');
   })
   it('Should give 1954.67 as if it was written on a check', function(){
     assert.equal(checkWrite.toEnglish(9954.67), 'Nine Thousand Nine Hundred and Fifty Four 67/100 dollars');
   })
 })
 /*
 //ROUND 2-5 with refactoring and using mocha and chai
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

 /**
  * Log `success` if `actual` is STRICTLY equal to `expected`
  *
  * @param ANY actual
  * @param ANY expected
  * @param String success
  */
  /** ROUND 1
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
*/
/*console.log(num2letter(1.23))
console.log(num2letter(9.50))
console.log(num2letter(6.72))
console.log(num2letter(20.20))
console.log(num2letter(30.30))
console.log(num2letter(40.40))
console.log(num2letter(50.50))*/

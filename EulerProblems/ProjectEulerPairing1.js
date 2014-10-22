          /* === PRODUCTION CODE === */
/**
 * If we list all the natural numbers below 10 that are
 * multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of
 * these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

var assert = require('chai').assert

function solution(){
    // change input to suit the solution, e.g. `limit`
    return {
        // I wanna see this one...
        solveFor: function(limit){
          var sum = 0;
         for(var i = 0; i < limit; i++){
           if(i % 3 === 0 || i % 5 === 0){
             sum += i;
           }
         }
         return sum;
       },
}
}

describe('Project Euler Probelm 1', function(){
  it('should return the sum of all values that are multiples of 3 and or 5 below the limit 1000', function(){
       assert.equal(solution().solveFor(1000), 233168);
     });
  it('should return the sum as a Number', function(){
       assert.isNumber(solution().solveFor(1000));
     });
});

//console.log(solution().solveFor(1000));

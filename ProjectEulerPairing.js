/* === PRODUCTION CODE === */
/*function solution(){
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


console.log(solution().solveFor(1000));*/

/* === PRODUCTION CODE === */
function solution(){
  var sequence = [];
  var even = [];
  sum = 0;
    // change input to suit the solution, e.g. `limit`
    return {
        // For Problem 2, for example... However you solve it.
        fibonacci: function(limit, prev, curr){
          for(curr = curr; curr < limit; curr = prev + curr){
            prev = curr - prev;
            sequence.push(curr);
          }
          return sequence;
        },

        filterEvens: function(sequence){
          sequence.forEach(function(value){
            if(value % 2 === 0){
              even.push(value);
            }
          });
          return even;
        },
        sum: function(even){
         even.forEach(function(value){
            sum += value;
          });
          return sum;
        }
    }
  }

//console.log(solution().fibonacci(100, 1, 2));

function test(limit, prev, curr){
var testFib = solution().fibonacci(limit,prev,curr);
var testEvens = solution().filterEvens(testFib);
var testSum = solution().sum(testEvens);
console.log(testFib);
console.log(testEvens);
console.log(testSum);
};

/* === TEST CODE === */
// You should probably write some...
//test(100, 1, 2);
//test(50000, 1, 2);
test(4000000, 1, 2);

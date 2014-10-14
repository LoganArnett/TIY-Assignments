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
    // change input to suit the solution, e.g. `limit`
    return {
        solveFor: function(limit){
          return this.sum(
            this.filterEvens(
              this.fibonacci(limit)
          )
      );
  },
        fibonacci: function(limit){
          var prev = 1, curr = 2, temp;
          var sequence = [1, 2];
          if ( limit < 3 ){
              return [ ];
          }

          while(prev + curr < limit){
            temp = prev + curr;
            prev = curr;
            curr = temp;

          sequence.push(temp);
          }
          return sequence;
        },

        filterEvens: function(list){
          return list.filter(function(item){
            return (item % 2 === 0)
          });
        },

        sum: function(list){
         return list.reduce(function(prev, item){
          return prev + item;
        }, 0);
      }
    }
} // END solution


describe('solution().fibonacci', function(){
  it('should return the values in the fibonacci sequence up until the limit given and return a list', function(){
    assert.deepEqual(solution().fibonacci(0), [ ]);
  })
  it('should calculate the values based on a limit for the sequence', function(){
    assert.deepEqual(solution().fibonacci(5), [1 , 2, 3]);
  })
})
describe('solution().filterEvens', function(){
  it('should a list of even numbers in the given segment of the fibonacci sequence ', function(){
    assert.deepEqual(solution().filterEvens([ ]), [ ]);
  })
  it('should a list of even numbers in the given segment of the fibonacci sequence ', function(){
    assert.deepEqual(solution().filterEvens([1, 2, 3 ]), [2]);
    assert.deepEqual(solution().filterEvens([1, 2, 3, 5, 8 ]), [2, 8]);
  })
})
describe('solution().sum', function(){
  it('should find the sum of a list of numbers in the given list', function(){
    assert.deepEqual(solution().sum([ ]), 0);
  })
  it('should sum the list of even numbers in the given segment of the fibonacci sequence ', function(){
    assert.equal(solution().sum([1, 2, 3 ]), [ 6 ]);
    assert.equal(solution().sum([1, 2, 3, 5, 8 ]), [ 19 ]);
  })
})
describe('solution().solveFor', function(){
  it('should find the sum of a list of even numbers in the given a limit for the fibonacci sequence', function(){
    assert.deepEqual(solution().solveFor([ ]), 0);
  })
  it('and solve this beast', function(){
    assert.equal(solution().solveFor(3), [ 2 ]);
  })
  it('and solve this beast', function(){
    assert.equal(solution().solveFor(13), [ 10 ]);
  })
})
it('and solve this beast up to 4 million', function(){
  assert.equal(solution().solveFor(4000000), [ 4613732 ]);
})

//console.log(solution().fibonacci(100, 1, 2));

/*function test(limit, prev, curr){
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
//test(4000000, 1, 2);

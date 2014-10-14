/** Project Euler Problem #1
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

/* var total = 0;

   for (i = 0; i < 1000; i++){
     if (i % 3 == 0 || i % 5 == 0){
       total += i;
     }
   }

   console.log(total);
   */

   function fibonacci(prev, curr){
     var sum = 0;
     for (curr = curr; curr < 4000000; curr = prev + curr){
      console.log('prev is ', prev, ' and curr is ',curr)
       prev = curr - prev;
    if (curr % 2 === 0){
      sum += curr;
    }
  }
  console.log("\nThass a BIG Numba!!!\n");
  return sum;
}

console.log(fibonacci(1, 2));

/* === PRODUCTION CODE === */
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


console.log(solution().solveFor(1000));

/* === TEST CODE === */
// You should probably write some...

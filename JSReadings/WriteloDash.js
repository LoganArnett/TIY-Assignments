/**
 * Attempting to write my naive implementation of _.some in lodash
 * using the .some Array method
 */

var pres = [
        { 'name' : 'George', 'age' : 300},
        { 'name' : 'Abe', 'age' : 280}
        ];

function isTrue(value, index){
  if(value[index]){
  return true;
  }
  else{
  return false;
  }
};

console.log(isTrue({'name': 'Abe'}, 2));

/**
 * Brians Lecture: Thursday October 16th
 */

var expect = require('chai').expect
var _ = require('lodash');

var ralph = { name: 'Ralph', gender: 'm'}
var fabi = { name: 'Fabi', gender: 'f'}
var dave = { name: 'Dave', gender: 'm'}

var pluck = function(collection, property){
  var maleFemale = [];
  collection.forEach(function(item, index){
    //console.log(item[property]);
    maleFemale.push(item[property]);
  });
  return maleFemale;
}

var remove = function(collection, callback){
  var evens = [ ];
  collection.forEach(function(item, index){
    if(callback(item) === true){
    evens.push(item);
  };
});
    return evens;
}
describe('the pluck function()', function(){
  it('should give back an array of strings of the gender', function(){
    var collection = [ralph, fabi, dave]
    expect(pluck(collection, 'gender')).to.deep.eq([ 'm', 'f', 'm' ]);
  });
  it('should give back an array of strings of the names', function(){
    var collection = [ralph, fabi, dave]
    expect(pluck(collection, 'name')).to.deep.eq([ 'Ralph', 'Fabi', 'Dave' ]);
  });
});

describe('the remove function', function(){
  it('returns an array of numbers for which the callback function is true', function(){
    var collection = [1,2,3,4];
    var callback = function(n){
      return true;
    }
    expect(remove(collection, callback)).to.be.deep.eq([1,2,3,4]);
  });
  it('returns the even numbers of an array when the callback is true only for evens', function(){
    var collection = [1,2,3,4];
    var callback = function(n){
      return n % 2 === 0;
      };
      expect(remove(collection, callback)).to.deep.eq([2,4]);
  });
  it('returns the even numbers of an array when the callback is true only for evens', function(){
    var collection = [ralph, fabi, dave]
    _.pluck(collection, 'name');
    console.log(_.pluck(collection, 'name'));
  });
});

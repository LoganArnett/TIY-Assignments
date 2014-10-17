var Chess = require('./chessgame.js');

var assert = require('chai').assert;


it('should check the starting Board', function(){
  var chess = new Chess();

  assert.deepEqual(chess.board, [
   ['R','N','B','Q','K','B','N','R'],
   ['P','P','P','P','P','P','P','P'],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   ['p','p','p','p','p','p','p','p'],
   ['r','n','b','q','k','b','n','r']
]);
});

// it('should check the color of a Piece based on the case of the letter', function(){
//   var chess = new Chess();
//
//   assert.equal(chess.getPlayer('P'), 'black');
//   assert.equal(chess.getPlayer('K'), 'black');
//   assert.equal(chess.getPlayer('Q'), 'black');
//   assert.equal(chess.getPlayer('B'), 'black');
//   assert.equal(chess.getPlayer('p'), 'white');
//   assert.equal(chess.getPlayer('k'), 'white');
//   assert.equal(chess.getPlayer('q'), 'white');
//   assert.equal(chess.getPlayer('b'), 'white');
// });

// it('should move a piece to a new destination', function(){
//   var chess = new Chess();
//
//
//   assert.deepEqual(chess.move(1,0,3,0),
//   [
//    ['R','N','B','Q','K','B','N','R'],
//    [' ','P','P','P','P','P','P','P'],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    ['P',' ',' ',' ',' ',' ',' ',' '],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    ['p','p','p','p','p','p','p','p'],
//    ['r','n','b','q','k','b','n','r']
// ]);

/*
  assert.deepEqual(chess.move(6,0,4,0), [
   ['R','N','B','Q','K','B','N','R'],
   [' ','P','P','P','P','P','P','P'],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   ['P',' ',' ',' ',' ',' ',' ',' '],
   ['p',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ','p','p','p','p','p','p','p'],
   ['r','n','b','q','k','b','n','r']
]);

  assert.deepEqual(chess.move(0,1,2,2), [
   ['R',' ','B','Q','K','B','N','R'],
   [' ','P','P','P','P','P','P','P'],
   [' ',' ','N',' ',' ',' ',' ',' '],
   ['P',' ',' ',' ',' ',' ',' ',' '],
   ['p',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ','p','p','p','p','p','p','p'],
   ['r','n','b','q','k','b','n','r']
]);
});*/

describe('should test the Catalan Opening moves', function(){
  it('should return the intial starting chess board', function(){
    var chess = new Chess();
    assert.deepEqual(chess.board, [
     ['R','N','B','Q','K','B','N','R'],
     ['P','P','P','P','P','P','P','P'],
     [' ',' ',' ',' ',' ',' ',' ',' '],
     [' ',' ',' ',' ',' ',' ',' ',' '],
     [' ',' ',' ',' ',' ',' ',' ',' '],
     [' ',' ',' ',' ',' ',' ',' ',' '],
     ['p','p','p','p','p','p','p','p'],
     ['r','n','b','q','k','b','n','r']
  ]);
  });

  it('should move the lower queens pawn up 2 spaces', function(){
    var chess = new Chess();
    //opening.moves.move1Lower();

    assert.deepEqual(chess.opening(), this.board)

  });
});

it('should display the board', function(){
  var chess = new Chess();
  console.log(chess.display(this.board));
});

// it('should display the piece name and color', function(){
//   assert.equal
// });

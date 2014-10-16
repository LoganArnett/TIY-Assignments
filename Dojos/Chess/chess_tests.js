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

it('should check the color of a Piece based on the case of the letter', function(){
  var chess = new Chess();

  assert.equal(chess.getPlayer('P'), 'black');
  assert.equal(chess.getPlayer('K'), 'black');
  assert.equal(chess.getPlayer('Q'), 'black');
  assert.equal(chess.getPlayer('B'), 'black');
  assert.equal(chess.getPlayer('p'), 'white');
  assert.equal(chess.getPlayer('k'), 'white');
  assert.equal(chess.getPlayer('q'), 'white');
  assert.equal(chess.getPlayer('b'), 'white');
});

it('should move a piece to a new destination', function(){
  var chess = new Chess();


  assert.deepEqual(chess.move(1,0,3,0),
  [
   ['R','N','B','Q','K','B','N','R'],
   [' ','P','P','P','P','P','P','P'],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   ['P',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   ['p','p','p','p','p','p','p','p'],
   ['r','n','b','q','k','b','n','r']
]);

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
]);*/
});

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

    assert.deepEqual(this.move1Lower, [
     ['R','N','B','Q','K','B','N','R'],
     ['P','P','P','P','P','P','P','P'],
     [' ',' ',' ',' ',' ',' ',' ',' '],
     [' ',' ',' ',' ',' ',' ',' ',' '],
     [' ',' ',' ','p',' ',' ',' ',' '],
     [' ',' ',' ',' ',' ',' ',' ',' '],
     ['p','p','p',' ','p','p','p','p'],
     ['r','n','b','q','k','b','n','r']
  ]);
  });

/*  it('should move the Upper Kings Knight up 2 spaces and over 1', function(){
       var chess = new Chess();
    moves.move1Upper();

    assert.deepEqual(chessBoard, [
     ['R','N','B','Q','K','B',' ','R'],
     ['P','P','P','P','P','P','P','P'],
     [' ',' ',' ',' ',' ','N',' ',' '],
     [' ',' ',' ',' ',' ',' ',' ',' '],
     [' ',' ',' ','p',' ',' ',' ',' '],
     [' ',' ',' ',' ',' ',' ',' ',' '],
     ['p','p','p',' ','p','p','p','p'],
     ['r','n','b','q','k','b','n','r']
  ]);
  });

  it('should move the lower bishops pawn up 2 spaces', function(){
     var chess = new Chess();
    moves.move2Lower();

    assert.deepEqual(chessBoard, [
     ['R','N','B','Q','K','B',' ','R'],
     ['P','P','P','P','P','P','P','P'],
     [' ',' ',' ',' ',' ','N',' ',' '],
     [' ',' ',' ',' ',' ',' ',' ',' '],
     [' ',' ','p','p',' ',' ',' ',' '],
     [' ',' ',' ',' ',' ',' ',' ',' '],
     ['p','p',' ',' ','p','p','p','p'],
     ['r','n','b','q','k','b','n','r']
  ]);
  });

  it('should move the Upper Kings Pawn up 1 space', function(){
     var chess = new Chess();
    moves.move2Upper();

    assert.deepEqual(chessBoard, [
     ['R','N','B','Q','K','B',' ','R'],
     ['P','P','P','P',' ','P','P','P'],
     [' ',' ',' ',' ','P','N',' ',' '],
     [' ',' ',' ',' ',' ',' ',' ',' '],
     [' ',' ','p','p',' ',' ',' ',' '],
     [' ',' ',' ',' ',' ',' ',' ',' '],
     ['p','p',' ',' ','p','p','p','p'],
     ['r','n','b','q','k','b','n','r']
  ]);
  });

  it('should move the lower knights pawn up 1 space', function(){
     var chess = new Chess();
    moves.move3Lower();

    assert.deepEqual(chessBoard, [
     ['R','N','B','Q','K','B',' ','R'],
     ['P','P','P','P',' ','P','P','P'],
     [' ',' ',' ',' ','P','N',' ',' '],
     [' ',' ',' ',' ',' ',' ',' ',' '],
     [' ',' ','p','p',' ',' ',' ',' '],
     [' ',' ',' ',' ',' ',' ','p',' '],
     ['p','p',' ',' ','p','p',' ','p'],
     ['r','n','b','q','k','b','n','r']
  ]);
  });

  it('should move the Upper Queens pawn up 2 spaces', function(){
      var chess = new Chess();
    moves.move3Upper();

    assert.deepEqual(chessBoard, [
     ['R','N','B','Q','K','B',' ','R'],
     ['P','P','P',' ',' ','P','P','P'],
     [' ',' ',' ',' ','P','N',' ',' '],
     [' ',' ',' ','P',' ',' ',' ',' '],
     [' ',' ','p','p',' ',' ',' ',' '],
     [' ',' ',' ',' ',' ',' ','p',' '],
     ['p','p',' ',' ','p','p',' ','p'],
     ['r','n','b','q','k','b','n','r']
  ]);
  });

  it('should move the lower kings bishop over 1 space', function(){
      var chess = new Chess();
    moves.move4Lower();

    assert.deepEqual(chessBoard, [
     ['R','N','B','Q','K','B',' ','R'],
     ['P','P','P',' ',' ','P','P','P'],
     [' ',' ',' ',' ','P','N',' ',' '],
     [' ',' ',' ','P',' ',' ',' ',' '],
     [' ',' ','p','p',' ',' ',' ',' '],
     [' ',' ',' ',' ',' ',' ','p',' '],
     ['p','p',' ',' ','p','p','b','p'],
     ['r','n','b','q','k',' ','n','r']
  ]);
  });

  it('should move the Upper Kings Bishop over 1 space', function(){
      var chess = new Chess();
    moves.move4Upper();

    assert.deepEqual(chessBoard, [
     ['R','N','B','Q','K',' ',' ','R'],
     ['P','P','P',' ','B','P','P','P'],
     [' ',' ',' ',' ','P','N',' ',' '],
     [' ',' ',' ','P',' ',' ',' ',' '],
     [' ',' ','p','p',' ',' ',' ',' '],
     [' ',' ',' ',' ',' ',' ','p',' '],
     ['p','p',' ',' ','p','p','b','p'],
     ['r','n','b','q','k',' ','n','r']
  ]);
  });

  it('should move the lower kings knight up 2 spaces and over 1 space', function(){
      var chess = new Chess();
    moves.move5Lower();

    assert.deepEqual(chessBoard, [
     ['R','N','B','Q','K',' ',' ','R'],
     ['P','P','P',' ','B','P','P','P'],
     [' ',' ',' ',' ','P','N',' ',' '],
     [' ',' ',' ','P',' ',' ',' ',' '],
     [' ',' ','p','p',' ',' ',' ',' '],
     [' ',' ',' ',' ',' ','n','p',' '],
     ['p','p',' ',' ','p','p','b','p'],
     ['r','n','b','q','k',' ',' ','r']
  ]);
});*/
});

it('should display the board', function(){
  var chess = new Chess();
  console.log(chess.display(this.board));
});

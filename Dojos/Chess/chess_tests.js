var Chess = require('./chessgame.js').Chess;
var Position = require('./chessgame.js').Position;
var Piece = require('./chessgame.js').Piece;

var assert = require('chai').assert;

// describe('Position', function(){
//
// });
//
// describe('Piece', function(){
//
// });
//
// describe('Chess', function(){
//
// });

it('should check the starting Board', function(){
  var chess = new Chess();
  console.log(chess.display());

//   assert.deepEqual(chess.board, [
//    ['R','N','B','Q','K','B','N','R'],
//    ['P','P','P','P','P','P','P','P'],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    ['p','p','p','p','p','p','p','p'],
//    ['r','n','b','q','k','b','n','r']
// ]);
});

   it('should check the name of a Piece', function(){
     var chess = new Chess();

     assert.equal(chess.Q.getName(), 'Queen')
     console.log(chess.Q.getName())
     assert.equal(chess.K.getName(), 'King')
     console.log(chess.K.getName())
     assert.equal(chess.R1.getName(), 'Rook')
     console.log(chess.R1.getName())
     assert.equal(chess.P1.getName(), 'Pawn')
     console.log(chess.P1.getName())
     assert.equal(chess.P6.getName(), 'Pawn')
     console.log(chess.P6.getName())
     assert.equal(chess.q.getName(), 'Queen')
     console.log(chess.q.getName())
     assert.equal(chess.k.getName(), 'King')
     console.log(chess.k.getName())
     assert.equal(chess.n1.getName(), 'Knight')
     console.log(chess.n1.getName())
     assert.equal(chess.p1.getName(), 'Pawn')
     console.log(chess.p1.getName())
     assert.equal(chess.p6.getName(), 'Pawn')
     console.log(chess.p6.getName())
   })

   it('should check which piece is on the board at a certain coordinate', function(){
     assert.equal(self.board[0][0], 'R')
     console.log(self.board[0][0])
     assert.equal(self.board[0][3], 'Q')
     console.log(self.board[0][3])
     assert.equal(self.board[6][4], 'p')
     console.log(self.board[6][4])
     assert.equal(self.board[7][2], 'b')
     console.log(self.board[7][2])
     assert.equal(self.board[7][6], 'n')
     console.log(self.board[7][6])

   })

it('should check the color of a Piece', function(){
  var chess = new Chess();

  assert.equal(chess.Q.getColor(), 'Black')
  console.log(chess.Q.getColor())
  assert.equal(chess.K.getColor(), 'Black')
  console.log(chess.K.getColor())
  assert.equal(chess.N1.getColor(), 'Black')
  console.log(chess.N1.getColor())
  assert.equal(chess.P3.getColor(), 'Black')
  console.log(chess.P3.getColor())
  assert.equal(chess.P7.getColor(), 'Black')
  console.log(chess.P7.getColor())
  assert.equal(chess.q.getColor(), 'White')
  console.log(chess.q.getColor())
  assert.equal(chess.k.getColor(), 'White')
  console.log(chess.k.getColor())
  assert.equal(chess.b1.getColor(), 'White')
  console.log(chess.b1.getColor())
  assert.equal(chess.p2.getColor(), 'White')
  console.log(chess.p2.getColor())
  assert.equal(chess.p4.getColor(), 'White')
  console.log(chess.p4.getColor())
});

   it('should check a pieces starting position', function(){
     var chess = new Chess();

     assert.deepEqual(chess.R1.position, [ 0, 0 ])
     console.log(chess.R1.position)
     assert.deepEqual(chess.R2.position, [ 0, 7 ])
     console.log(chess.R2.position)
     assert.deepEqual(chess.P1.position, [ 1, 0 ])
     console.log(chess.P1.position)
     assert.deepEqual(chess.P5.position, [ 1, 4 ])
     console.log(chess.P5.position)
     assert.deepEqual(chess.r1.position, [ 7, 0 ])
     console.log(chess.r1.position)
     assert.deepEqual(chess.r2.position, [ 7, 7 ])
     console.log(chess.r2.position)
     assert.deepEqual(chess.p1.position, [ 6, 0 ])
     console.log(chess.p1.position)
     assert.deepEqual(chess.p5.position, [ 6, 4 ])
     console.log(chess.p5.position)

   })

   it('should check who the current player is based off of the piece', function(){
     var chess = new Chess();

     assert.equal(chess.getPlayer('p'), 'White')
     console.log(chess.getPlayer('p'))
     assert.equal(chess.getPlayer('K'), 'Black')
     console.log(chess.getPlayer('K'))
     assert.equal(chess.getPlayer('n'), 'White')
     console.log(chess.getPlayer('n'))
     assert.equal(chess.getPlayer('B'), 'Black')
     console.log(chess.getPlayer('B'))

   })

// it('should move a piece to a new destination', function(){
//   var chess = new Chess();
//   [
//    ['R','N','B','Q','K','B','N','R'],
//    ['P','P','P','P','P','P','P','P'],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    ['p','p','p','p','p','p','p','p'],
//    ['r','n','b','q','k','b','n','r']
//
// });
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

// describe('should test the Catalan Opening moves', function(){
//   it('should return the intial starting chess board', function(){
//     var chess = new Chess();
//     assert.deepEqual(chess.board, [
//      ['R','N','B','Q','K','B','N','R'],
//      ['P','P','P','P','P','P','P','P'],
//      [' ',' ',' ',' ',' ',' ',' ',' '],
//      [' ',' ',' ',' ',' ',' ',' ',' '],
//      [' ',' ',' ',' ',' ',' ',' ',' '],
//      [' ',' ',' ',' ',' ',' ',' ',' '],
//      ['p','p','p','p','p','p','p','p'],
//      ['r','n','b','q','k','b','n','r']
//   ]);
//   });
//
//   it('should move the lower queens pawn up 2 spaces', function(){
//     var chess = new Chess();
//     //opening.moves.move1Lower();
//
//     assert.deepEqual(chess.opening(), this.board)
//
//   });
// });
//
// it('should display the board', function(){
//   var chess = new Chess();
//   console.log(chess.display(self.board));
// });

// it('should display the piece name and color', function(){
//   assert.equal
// });

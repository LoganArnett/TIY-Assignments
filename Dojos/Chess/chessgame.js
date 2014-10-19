//     Assignment documentation:
//
//
// `@constructor Chess`: Setup a `board` with `Pieces` representing an initial chessboard.
//    `@method getPlayer()`
//       `@return String either "white" or "black" representing current player`
//    `@method move(piece, destination)`: Move `piece` to `destination` and replace the space where the `piece` started with an empty space '  '.
//       `@param Piece piece to move`
//       `@param Position destination to move piece to`
//         replace the original space with an empty space
//    `@method opening()`: Advance the `board` to [Catalan Opening, Closed Variation](http://j.mp/1BSJj9W)
//    `@method display()`
//       `@return String representation of board`
// `@constructor Position(x,y)`: Represent a position on a chessboard with coordinates
//    usage: `new Position(1,1)`
//    `@property Number x coordinate`
//    `@property Number y coordinate`
// `@constructor Piece(name, color)`: Represent a chesspiece on the `board` with `name` and `color` and appropriate starting position
//    usage: `new Piece('Queen', 'black')`
//    `@method getName()`
//       `@return String name of Piece, e.g. 'Queen', 'Pawn'`
//    `@method getColor()`:
//       `@return String player 'black' or 'white'`
//    `@method setPosition(position)`: Set `Piece` to `position` on board
//       `@param Position `position`
//    `@method toString()`
//       `@return String representation of Piece`
//       example: `"Q" === String(new Piece("Queen", "white"))`
//       example: `"r" === String(new Piece("Rook", "black"))`

module.exports = Chess, Position, Piece;

function Chess(){

  var gamePieces = [];

  gamePieces.push(this.Q = new Piece('Queen', 'black'));
  this.Q.position = new Position(0,4);
  gamePieces.push(this.K = new Piece('King', 'black'));
  this.K.position = new Position(0,3);
  gamePieces.push(this.B1 = new Piece('Bishop', 'black'));
  this.B1.position = new Position(0,2);
  gamePieces.push(this.B2 = new Piece('Bishop', 'black'));
  this.B2.position = new Position(0,5);
  gamePieces.push(this.N1 = new Piece('Knight', 'black'));
  this.N1.position = new Position(0,1);
  gamePieces.push(this.N2 = new Piece('Knight', 'black'));
  this.N2.position = new Position(0,6);
  gamePieces.push(this.R1 = new Piece('Rook', 'black'));
  this.R1.position = new Position(0,0);
  gamePieces.push(this.R2 = new Piece('Rook', 'black'));
  this.R2.position = new Position(0,7);
  gamePieces.push(this.P1 = new Piece('Pawn', 'black'));
  this.P1.position = new Position(1,0);
  gamePieces.push(this.P2 = new Piece('Pawn', 'black'));
  this.P2.position = new Position(1,1)
  gamePieces.push(this.P3 = new Piece('Pawn', 'black'));
  this.P3.position = new Position(1,2)
  gamePieces.push(this.P4 = new Piece('Pawn', 'black'));
  this.P4.position = new Position(1,3);
  gamePieces.push(this.P5 = new Piece('Pawn', 'black'));
  this.P5.position = new Position(1,4);
  gamePieces.push(this.P6 = new Piece('Pawn', 'black'));
  this.P6.position = new Position(1,5);
  gamePieces.push(this.P7 = new Piece('Pawn', 'black'));
  this.P7.position = new Position(1,6);
  gamePieces.push(this.P8 = new Piece('Pawn', 'black'));
  this.P8.position = new Position(1,7);
  gamePieces.push(this.q = new Piece('Queen', 'white'));
  this.q.position = new Position(7,4);
  gamePieces.push(this.k = new Piece('King', 'white'));
  this.k.position = new Position(7,3);
  gamePieces.push(this.b1 = new Piece('Bishop', 'white'));
  this.b1.position = new Position(7,2);
  gamePieces.push(this.b2 = new Piece('Bishop', 'white'));
  this.b2.position = new Position(7,5);
  gamePieces.push(this.n1 = new Piece('Knight', 'white'));
  this.n1.position = new Position(7,1);
  gamePieces.push(this.n2 = new Piece('Knight', 'white'));
  this.n2.position = new Position(7,6);
  gamePieces.push(this.r1 = new Piece('Rook', 'white'));
  this.r1.position = new Position(7,0);
  gamePieces.push(this.r2 = new Piece('Rook', 'white'));
  this.r2.position = new Position(7,7);
  gamePieces.push(this.p1 = new Piece('Pawn', 'white'));
  this.p1.position = new Position(6,0);
  gamePieces.push(this.p2 = new Piece('Pawn', 'white'));
  this.p2.position = new Position(6,1);
  gamePieces.push(this.p3 = new Piece('Pawn', 'white'));
  this.p3.position = new Position(6,2);
  gamePieces.push(this.p4 = new Piece('Pawn', 'white'));
  this.p4.position = new Position(6,3);
  gamePieces.push(this.p5 = new Piece('Pawn', 'white'));
  this.p5.position = new Position(6,4);
  gamePieces.push(this.p6 = new Piece('Pawn', 'white'));
  this.p6.position = new Position(6,5);
  gamePieces.push(this.p7 = new Piece('Pawn', 'white'));
  this.p7.position = new Position(6,6);
  gamePieces.push(this.p8 = new Piece('Pawn', 'white'));
  this.p8.position = new Position(6,7);

  this.board = [];
  for (var i = 0; i < 8; i++){
    this.board.push(new Array(8));
  }

  self = this;
  gamePieces.forEach(function(value, index){
    var x = gamePieces[index].position[0];
    var y = gamePieces[index].position[1];

    self.board[x][y] = gamePieces[index].letter
  })


}//END Chess

Chess.prototype.getPlayer = function(pieces){
   if(pieces === pieces.toLowerCase()){
      return 'white';
   }
      return 'black';
}

// Chess.prototype.move = function(piece, destination){
// //   //piece represents the coordinates for the piece called,
// //   //destination represents the space where that piece is moving to
//   destination = piece position value;
//   orig piece position value = ' ';
//
//  }


// Chess.prototype.opening = function(){
//
//       this.move(6,3,4,3);
//
//       this.move(0,6,2,5);
//
//       this.move(6,2,4,2);
//
//       this.move(1,4,2,4);
//
//       this.move(6,6,5,6);
//
//       this.move(1,3,3,3);
//
//       this.move(7,5,6,6);
//
//       this.move(0,5,1,4);
//
//       this.move(7,6,5,5);
// }



// function board(){
//    this.board = {};
// //   return [
// //    ['R','N','B','Q','K','B','N','R'],
// //    ['P','P','P','P','P','P','P','P'],
// //    [' ',' ',' ',' ',' ',' ',' ',' '],
// //    [' ',' ',' ',' ',' ',' ',' ',' '],
// //    [' ',' ',' ',' ',' ',' ',' ',' '],
// //    [' ',' ',' ',' ',' ',' ',' ',' '],
// //    ['p','p','p','p','p','p','p','p'],
// //    ['r','n','b','q','k','b','n','r']
// // ];
// }


 function Position(x,y){
   this.x = x;
   this.y = y;
   return [x,y];
}

 function Piece(name, color){
   this.name = name;
   this.color = color;
   this.letter = this.toString();
 }

Piece.prototype.getName = function(){
  return this.name;
}

Piece.prototype.getColor = function(){
  return this.color;
}

Piece.prototype.setPosition = function(position){
  //places `piece` in a position on board
  var x,y;
  this.position = position;
  position = new Position(x,y)
};


Piece.prototype.toString = function(){
  if(this.name === 'Queen'){
    if(this.color === 'black'){
      return 'Q';
    }
      return 'q';
  }
  if(this.name === 'King'){
    if(this.color === 'black'){
      return 'K';
    }
      return 'k';
  }
  if(this.name === 'Rook'){
    if(this.color === 'black'){
      return 'R';
    }
      return 'r';
  }
  if(this.name === 'Bishop'){
    if(this.color === 'black'){
      return 'B';
    }
      return 'b';
  }
  if(this.name === 'Knight'){
    if(this.color === 'black'){
      return 'N';
    }
      return 'n';
  }
  if(this.name === 'Pawn'){
  if(this.color === 'black'){
    return 'P';
  }
    return 'p';
  }

};

Chess.prototype.display = function(){
  return (this.board.join('\n') + '\n\n');
}

//initial coordinates
 // boardBegin = {
 //   R: [[0,0],[0,7]],
 //   N: [[0,1],[0,6]],
 //   B: [[0,2],[0,5]],
 //   Q: [[0,3]],
 //   K: [[0,4]],
 //   P: [[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]]
 //   r: [[7,0],[7,7]],
 //   n: [[7,1],[7,6]],
 //   b: [[7,2],[7,5]],
 //   q: [[7,3]],
 //   k: [[7,4]],
 //   p: [[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7]],
 // }
// console.log(Q);
// console.log(QB);
// console.log(Q.getName());
// console.log(Q.getColor());
// console.log(q);
// console.log(q.getName());
// console.log(q.getColor());
// console.log(K);
// var a8 = new Position(0,0);
// var b8 = new Position(0,1);
// var c8 = new Position(0,2);
// var d8 = new Position(0,3);
// var e8 = new Position(0,4);
// var f8 = new Position(0,5);
// var g8 = new Position(0,6);
// var h8 = new Position(0,7);
// var a7 = new Position(1,0);
// var b7 = new Position(1,1);
// var c7 = new Position(1,2);
// var d7 = new Position(1,3);
// var e7 = new Position(1,4);
// var f7 = new Position(1,5);
// var g7 = new Position(1,6);
// var h7 = new Position(1,7);
// var a6 = new Position(2,0);
// var b6 = new Position(2,1);
// var c6 = new Position(2,2);
// var d6 = new Position(2,3);
// var e6 = new Position(2,4);
// var f6 = new Position(2,5);
// var g6 = new Position(2,6);
// var h6 = new Position(2,7);
// var a5 = new Position(3,0);
// var b5 = new Position(3,1);
// var c5 = new Position(3,2);
// var d5 = new Position(3,3);
// var e5 = new Position(3,4);
// var f5 = new Position(3,5);
// var g5 = new Position(3,6);
// var h5 = new Position(3,7);
// var a4 = new Position(4,0);
// var b4 = new Position(4,1);
// var c4 = new Position(4,2);
// var d4 = new Position(4,3);
// var e4 = new Position(4,4);
// var f4 = new Position(4,5);
// var g4 = new Position(4,6);
// var h4 = new Position(4,7);
// var a3 = new Position(5,0);
// var b3 = new Position(5,1);
// var c3 = new Position(5,2);
// var d3 = new Position(5,3);
// var e3 = new Position(5,4);
// var f3 = new Position(5,5);
// var g3 = new Position(5,6);
// var h3 = new Position(5,7);
// var a2 = new Position(6,0);
// var b2 = new Position(6,1);
// var c2 = new Position(6,2);
// var d2 = new Position(6,3);
// var e2 = new Position(6,4);
// var f2 = new Position(6,5);
// var g2 = new Position(6,6);
// var h2 = new Position(6,7);
// var a1 = new Position(7,0);
// var b1 = new Position(7,1);
// var c1 = new Position(7,2);
// var d1 = new Position(7,3);
// var e1 = new Position(7,4);
// var f1 = new Position(7,5);
// var g1 = new Position(7,6);
// var h1 = new Position(7,7);

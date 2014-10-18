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

module.exports = Chess;

function Chess(){
  this.board = board();
  this.Q = new Piece('queen', 'black');
  this.Q.setPosition = (0,3);
  this.K = new Piece('king', 'black');
  this.K.setPosition = (0,4);
  this.R = new Piece('rook', 'black');
  this.R.setPosition = (0,0);
  this.R.setPosition = (0,7);
  this.N = new Piece('knight', 'black');
  this.N.setPosition = (0,1);
  this.N.setPosition = (0,6);
  this.B = new Piece('bishop', 'black');
  this.B.setPosition = [[0,2], [0,5]];
  // this.B.setPosition = [0,5];
  this.P = new Piece('pawn', 'black');
  this.P.setPosition = (1,0);
  this.P.setPosition = (1,1);
  this.P.setPosition = (1,2);
  this.P.setPosition = (1,3);
  this.P.setPosition = (1,4);
  this.P.setPosition = (1,5);
  this.P.setPosition = (1,6);
  this.P.setPosition = (1,7);
  this.q = new Piece('queen', 'white');
  this.k = new Piece('king', 'white');
  this.r = new Piece('rook', 'white');
  this.n = new Piece('knight', 'white');
  this.b = new Piece('bishop', 'white');
  this.p = new Piece('pawn', 'white');
  console.log(this.B.toString());
  console.log(this.B.setPosition);
  console.log(this.B);
}

// Chess.prototype.getPlayer = function(pieces){
//    if(pieces === pieces.toLowerCase()){
//       return 'white';
//    }
//       return 'black';
// }

Chess.prototype.move = function(piece, destination){
//   //piece represents the coordinates for the piece called,
//   //destination represents the space where that piece is moving to
  destination = piece.setPosition;
  piece.setPosition = ' ';
  // this.board[c][d] = this.board[a][b];
  // this.board[a][b] = ' ';
  // return this.board;
 }


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

Chess.prototype.display = function(){
  return (this.board.join('\n') + '\n\n');
}

function board(){
//   return [
//    ['R','N','B','Q','K','B','N','R'],
//    ['P','P','P','P','P','P','P','P'],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    [' ',' ',' ',' ',' ',' ',' ',' '],
//    ['p','p','p','p','p','p','p','p'],
//    ['r','n','b','q','k','b','n','r']
// ];
}

 function Position(x,y){
   this.x = x;
   this.y = y;
   
 }

 function Piece(name, color){
   this.name = name;
   this.color = color;
   this.setPosition;
   this.toString;
 }

// var Q = new Piece('Queen', 'Black');
// var K = new Piece('King', 'Black');
// var R = new Piece('Rook', 'Black');
// var N = new Piece('Knight', 'Black');
// var B = new Piece('Bihsop', 'Black');
// var P = new Piece('Pawn', 'Black');
// var q = new Piece('queen', 'white');
// var k = new Piece('king', 'white');
// var r = new Piece('rook', 'white');
// var n = new Piece('knight', 'white');
// var b = new Piece('bishop', 'white');
// var p = new Piece('pawn', 'white');


Piece.prototype.getName = function(){
  return this.name;
}

Piece.prototype.getColor = function(){
  return this.color;
}

Piece.prototype.setPosition = function(position){
  //places `piece` in a position on board
  this.board[x][y] = position
}

Piece.prototype.toString = function(){
  if(this.name === 'queen'){
    if(this.color === 'black'){
      return 'Q';
    }
      return 'q';
  }
  if(this.name === 'king'){
    if(this.color === 'black'){
      return 'K';
    }
      return 'k';
  }
  if(this.name === 'rook'){
    if(this.color === 'black'){
      return 'R';
    }
      return 'r';
  }
  if(this.name === 'bishop'){
    if(this.color === 'black'){
      return 'B';
    }
      return 'b';
  }
  if(this.name === 'knight'){
    if(this.color === 'black'){
      return 'N';
    }
      return 'n';
  }
  if(this.name === 'pawn'){
  if(this.color === 'black'){
    return 'P';
  }
    return 'p';
  }

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

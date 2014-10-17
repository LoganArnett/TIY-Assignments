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
// ```javascript
// R,N,B,Q,K,B,N,R
// P,P,P,P,P,P,P,P
//  , , , , , , ,
//  , , , , , , ,
//  , , , , , , ,
//  , , , , , , ,
// p,p,p,p,p,p,p,p
// r,n,b,q,k,b,n,r
// ```
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
  var Q = new Piece('Queen', 'Black');
  var K = new Piece('King', 'Black');
  var R = new Piece('Rook', 'Black');
  var N = new Piece('Knight', 'Black');
  var B = new Piece('Bihsop', 'Black');
  var P = new Piece('Pawn', 'Black');
  var q = new Piece('queen', 'white');
  var k = new Piece('king', 'white');
  var r = new Piece('rook', 'white');
  var n = new Piece('knight', 'white');
  var b = new Piece('bishop', 'white');
  var p = new Piece('pawn', 'white');
}

// Chess.prototype.getPlayer = function(pieces){
//    if(pieces === pieces.toLowerCase()){
//       return 'white';
//    }
//       return 'black';
// }

// Chess.prototype.move = function(a,b,c,d){
//   //{a,b} represent the coordinates for the piece called,
//   //{c,d} represent the space where that piece is moving to
//   this.board[c][d] = this.board[a][b];
//   this.board[a][b] = ' ';
//   return this.board;
// }


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

function board(x, y){
  return [
   ['R','N','B','Q','K','B','N','R'],
   ['P','P','P','P','P','P','P','P'],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   ['p','p','p','p','p','p','p','p'],
   ['r','n','b','q','k','b','n','r']
];
}

 function Piece(name, color){
   this.name = name;
   this.color = color;
 }

var Q = new Piece('Queen', 'Black');
var K = new Piece('King', 'Black');
var R = new Piece('Rook', 'Black');
var N = new Piece('Knight', 'Black');
var B = new Piece('Bihsop', 'Black');
var P = new Piece('Pawn', 'Black');
var q = new Piece('queen', 'white');
var k = new Piece('king', 'white');
var r = new Piece('rook', 'white');
var n = new Piece('knight', 'white');
var b = new Piece('bishop', 'white');
var p = new Piece('pawn', 'white');


Piece.prototype.getName = function(){
  return this.name;
}

Piece.prototype.getColor = function(){
  return this.color;
}

function Position(x,y){
  this.x = x;
  this.y = y;
}

//initial coordinates
 boardBegin = {
   R: [[0,0],[0,7]],
   N: [[0,1],[0,6]],
   B: [[0,2],[0,5]],
   Q: [[0,3]],
   K: [[0,4]],
   P: [[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]],
   r: [[7,0],[7,7]],
   n: [[7,1],[7,6]],
   b: [[7,2],[7,5]],
   q: [[7,3]],
   k: [[7,4]],
   p: [[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7]],
 }
// console.log(Q);
// console.log(QB);
// console.log(Q.getName());
// console.log(Q.getColor());
// console.log(q);
// console.log(q.getName());
// console.log(q.getColor());
// console.log(K);

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
//       `@param Position position`
//    `@method toString()`
//       `@return String representation of Piece`
//       example: `"Q" === String(new Piece("Queen", "white"))`
//       example: `"r" === String(new Piece("Rook", "black"))`

module.exports = Chess;

function Chess(){
  this.board = board();
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
var QB = new Position(0,3);
var q = new Piece('queen', 'white');
var K = new Position(0,4);
// var Q = new Position(0,3);

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

console.log(Q);
console.log(QB);
console.log(Q.getName());
console.log(Q.getColor());
// console.log(q);
// console.log(q.getName());
// console.log(q.getColor());
// console.log(K);





Chess.prototype.getPlayer = function(pieces){
  if(pieces === pieces.toLowerCase()){
     return 'white';
  }
     return 'black';
}

Chess.prototype.move = function(a,b,c,d){
  //{a,b} represent the coordinates for the piece called,
  //{c,d} represent the space where that piece is moving to
  this.board[c][d] = this.board[a][b];
  this.board[a][b] = ' ';
  return this.board;
}


Chess.prototype.opening = function(){
     //console.log(this.move(6,3,4,3));
    //return {
    //var moves = {
    //move1Lower: function(){
      this.move(6,3,4,3);
   //},
    //move1Upper: function(){
      this.move(0,6,2,5);
   //},
    //move2Lower: function(){
      this.move(6,2,4,2);
  //},
    //move2Upper: function(){
      this.move(1,4,2,4);
  //},
    //move3Lower: function(){
      this.move(6,6,5,6);
  //},
    //move3Upper: function(){
      this.move(1,3,3,3);
  //},
    //move4Lower: function(){
      this.move(7,5,6,6);
  //},
    //move4Upper: function(){
      this.move(0,5,1,4);
  //},
    //move5Lower: function(){
      this.move(7,6,5,5);
  //}
        //}
 //}
}

Chess.prototype.display = function(){
  return (this.board.join('\n') + '\n\n');
}

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
var q = new Piece('queen', 'white');

Piece.prototype.getName = function(){
  return this.name;
}

Piece.prototype.getColor = function(){
  return this.color;
}

console.log(Q);
console.log(Q.getName());
console.log(Q.getColor());
console.log(q);
console.log(q.getName());
console.log(q.getColor());

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

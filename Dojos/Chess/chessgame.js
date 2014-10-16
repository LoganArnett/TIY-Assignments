module.exports = Chess;


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

board.prototype.Pieces = function(x, y){

}

Chess.prototype.getPlayer = function(piece){
  if(piece === piece.toLowerCase()){
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

function Chess(){
  this.board = board();
}

Chess.prototype.display = function(){
  return (this.board.join('\n') + '\n\n');
}

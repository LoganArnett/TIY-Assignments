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

Chess.prototype.opening = function(){

    var moves = {
    move1Lower: function(){
      this.move(6,3,4,3);
   },
    move1Upper: function(){
      this.move(0,6,2,5);
   },
    move2Lower: function(){
      this.move(6,2,4,2);
  },
    move2Upper: function(){
      this.move(1,4,2,4);
  },
    move3Lower: function(){
      this.move(6,6,5,6);
  },
    move3Upper: function(){
      this.move(1,3,3,3);
  },
    move4Lower: function(){
      this.move(7,5,6,6);
  },
    move4Upper: function(){
      this.move(0,5,1,4);
  },
    move5Lower: function(){
      this.move(7,6,5,5);
  }
 }
}

Chess.prototype.display = function(){
  return (this.board.join('\n') + '\n\n');
}

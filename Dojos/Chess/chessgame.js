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
};

Chess.prototype.getPlayer = function(piece){
  if(piece === piece.toLowerCase()){
     return 'white';
  }
     return 'black';
}

Chess.prototype.move = function(piece, destination){
     
}

function Chess(){
  this.board = board();
};

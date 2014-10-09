var assert = require('chai').assert

  var chessBoard = [
   ['R','N','B','Q','K','B','N','R'],
   ['P','P','P','P','P','P','P','P'],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   ['p','p','p','p','p','p','p','p'],
   ['r','n','b','q','k','b','n','r']
];

  var move1 = [
   ['R','N','B','Q','K','B','N','R'],
   ['P','P','P','P','P','P','P','P'],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ','p',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   ['p','p','p',' ','p','p','p','p'],
   ['r','n','b','q','k','b','n','r']
];

// Move lowerCase Queen's Pawn forward 2 spaces
chessBoard[4][3] = chessBoard[6][3];
chessBoard[6][3] = ' ';
//console.log(chessBoard.join('\n') + '\n\n');


// Move upperCase Kings's Knight forward and to its right
chessBoard[2][5] = chessBoard[0][6];
chessBoard[0][6] = ' ';
//console.log(chessBoard.join('\n') + '\n\n');

// Move lowerCase Queen's Bishops Pawn forward 2 spaces
chessBoard[4][2] = chessBoard[6][2];
chessBoard[6][2] = ' ';
//console.log(chessBoard.join('\n') + '\n\n');

//Move upperCase Kings Pawn forward 1 space
chessBoard[2][4] = chessBoard[1][4];
chessBoard[1][4] = ' ';
//console.log(chessBoard.join('\n') + '\n\n');

//Move lowerCase Kings Knights Pawn forward 1 space
chessBoard[5][6] = chessBoard[6][6];
chessBoard[6][6] = ' ';
//console.log(chessBoard.join('\n') + '\n\n');

//Move upperCase Queens Pawn foraward 2 spaces
chessBoard[3][3] = chessBoard[1][3];
chessBoard[1][3] = ' ';
//console.log(chessBoard.join('\n') + '\n\n');

//Move lowerCase Kings Bishop 1 space to its right
chessBoard[6][6] = chessBoard[7][5];
chessBoard[7][5] = ' ';
//console.log(chessBoard.join('\n') + '\n\n');

//Move upperCase Kings Bishop 1 space to its right
chessBoard[1][4] = chessBoard[0][5];
chessBoard[0][5] = ' ';
//console.log(chessBoard.join('\n') + '\n\n');

//Move lowerCase Kings Knight up to its left
chessBoard[5][5] = chessBoard[7][6];
chessBoard[7][6] = ' ';
//console.log(chessBoard.join('\n') + '\n\n');

var chessBoard = ('TIY-Assigments/chessBoard.js');

 var assert = require('chai').assert;

 it('should display the initial board', function(){
   assert.deepEqual(chessBoard, [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r']
 ];
 )
 })

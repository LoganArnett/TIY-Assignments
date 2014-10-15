

var assert = require('chai').assert

var catOpen = {
  catalan: function(move){
    return (chessBoard.join('\n') + '\n\n');
  }
}

/*describe('catalan() should return a new board with the 1st move', function(){
  it('should move the Queens Pawn forward 2 spaces', function(){
    assert.equal(catOpen.catalan(move1Lower), 'R,N,B,Q,K,B,N,R\nP,P,P,P,P,P,P,P\n , , , , , , , \n , , , , , , , \n , , ,p, , , , \n , , , , , , , \np,p,p, ,p,p,p,p\nr,n,b,q,k,b,n,r\n\n');
  })
})*/
/*describe('catalan() should return a new board with the 2nd move', function(){
  it('should move upperCase Kings's Knight forward and to its right', function(){
    assert.equal(catOpen.catalan(move1Upper), 'R,N,B,Q,K,B, ,R\nP,P,P,P,P,P,P,P\n , , , , ,N, , \n , , , , , , , \n , , ,p, , , , \n , , , , , , , \np,p,p, ,p,p,p,p\nr,n,b,q,k,b,n,r\n\n');
  })
})*/
/*describe('catalan() should return a new board with the 3rd move', function(){
  it('should move lowerCase Queen's Bishops Pawn forward 2 spaces', function(){
    assert.equal(catOpen.catalan(move2Lower), 'R,N,B,Q,K,B, ,R\nP,P,P,P,P,P,P,P\n , , , , ,N, , \n , , , , , , , \n , ,p,p, , , , \n , , , , , , , \np,p, , ,p,p,p,p\nr,n,b,q,k,b,n,r\n\n');
  })
})*/
/*describe('catalan() should return a new board with the 4th move', function(){
  it('should move upperCase Kings Pawn forward 1 space', function(){
    assert.equal(catOpen.catalan(move2Upper), 'R,N,B,Q,K,B, ,R\nP,P,P,P,P,P,P,P\n , , , , ,N, , \n , , , , , , , \n , ,p,p, , , , \n , , , , , , , \np,p, , ,p,p,p,p\nr,n,b,q,k,b,n,r\n\n');
  })
})*/
/*describe('catalan() should return a new board with the 5th move', function(){
  it('should move lowerCase Kings Knights Pawn forward 1 space', function(){
    assert.equal(catOpen.catalan(move3Lower), 'R,N,B,Q,K,B, ,R\nP,P,P,P,P,P,P,P\n , , , , ,N, , \n , , , , , , , \n , ,p,p, , , , \n , , , , , , , \np,p, , ,p,p,p,p\nr,n,b,q,k,b,n,r\n\n');
  })
})*/
/*describe('catalan() should return a new board with the 6th move', function(){
  it('should move lowerCase Kings Bishop 1 space to its right', function(){
    assert.equal(catOpen.catalan(move3Upper), 'R,N,B,Q,K,B, ,R\nP,P,P,P,P,P,P,P\n , , , , ,N, , \n , , , , , , , \n , ,p,p, , , , \n , , , , , , , \np,p, , ,p,p,p,p\nr,n,b,q,k,b,n,r\n\n');
  })
})*/
/*describe('catalan() should return a new board with the 7th move', function(){
  it('should move the upperCase Queens Pawn forward 2 spaces', function(){
    assert.equal(catOpen.catalan(move4Lower), 'R,N,B,Q,K,B, ,R\nP,P,P,P,P,P,P,P\n , , , , ,N, , \n , , , , , , , \n , ,p,p, , , , \n , , , , , , , \np,p, , ,p,p,p,p\nr,n,b,q,k,b,n,r\n\n');
  })
})*/
/*describe('catalan() should return a new board with the 8th move', function(){
  it('should move upperCase Kings Bishop 1 space to its right', function(){
    assert.equal(catOpen.catalan(move4Lower), 'R,N,B,Q,K,B, ,R\nP,P,P,P,P,P,P,P\n , , , , ,N, , \n , , , , , , , \n , ,p,p, , , , \n , , , , , , , \np,p, , ,p,p,p,p\nr,n,b,q,k,b,n,r\n\n');
  })
})*/
/*describe('catalan() should return a new board with the 9th move', function(){
  it('should move lowerCase Kings Knight up to its left', function(){
    assert.equal(catOpen.catalan(move4Lower), 'R,N,B,Q,K,B, ,R\nP,P,P,P,P,P,P,P\n , , , , ,N, , \n , , , , , , , \n , ,p,p, , , , \n , , , , , , , \np,p, , ,p,p,p,p\nr,n,b,q,k,b,n,r\n\n');
  })
})*/

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

  var moves = {
    move1Lower: function(){
  chessBoard[4][3] = chessBoard[6][3],
  chessBoard[6][3] = ' '
},
    move1Upper: function(){
  chessBoard[2][5] = chessBoard[0][6],
  chessBoard[0][6] = ' '
},
  move2Lower: function(){
    chessBoard[4][2] = chessBoard[6][2],
    chessBoard[6][2] = ' '
  },
  move2Upper: function(){
    chessBoard[2][4] = chessBoard[1][4],
    chessBoard[1][4] = ' '
  },
  move3Lower: function(){
    chessBoard[5][6] = chessBoard[6][6],
    chessBoard[6][6] = ' '
  },
  move3Upper: function(){
    chessBoard[3][3] = chessBoard[1][3],
    chessBoard[1][3] = ' '
  },

  move4Lower: function(){
    chessBoard[6][6] = chessBoard[7][5],
    chessBoard[7][5] = ' '
  },

  move4Upper: function(){
    chessBoard[1][4] = chessBoard[0][5],
    chessBoard[0][5] = ' '
  },

  move5Lower: function(){
    chessBoard[5][5] = chessBoard[7][6],
    chessBoard[7][6] = ' '
},
};


it('should return the intial starting chess board', function(){
  assert.deepEqual(chessBoard, [
   ['R','N','B','Q','K','B','N','R'],
   ['P','P','P','P','P','P','P','P'],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   ['p','p','p','p','p','p','p','p'],
   ['r','n','b','q','k','b','n','r']
]);
});

it('should move the lower queens pawn up 2 spaces', function(){
  moves.move1Lower();

  assert.deepEqual(chessBoard, [
   ['R','N','B','Q','K','B','N','R'],
   ['P','P','P','P','P','P','P','P'],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ','p',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   ['p','p','p',' ','p','p','p','p'],
   ['r','n','b','q','k','b','n','r']
]);
});

it('should move the Upper Kings Knight up 2 spaces and over 1', function(){
  moves.move1Upper();

  assert.deepEqual(chessBoard, [
   ['R','N','B','Q','K','B',' ','R'],
   ['P','P','P','P','P','P','P','P'],
   [' ',' ',' ',' ',' ','N',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ',' ','p',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   ['p','p','p',' ','p','p','p','p'],
   ['r','n','b','q','k','b','n','r']
]);
});

it('should move the lower bishops pawn up 2 spaces', function(){
  moves.move2Lower();

  assert.deepEqual(chessBoard, [
   ['R','N','B','Q','K','B',' ','R'],
   ['P','P','P','P','P','P','P','P'],
   [' ',' ',' ',' ',' ','N',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ','p','p',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   ['p','p',' ',' ','p','p','p','p'],
   ['r','n','b','q','k','b','n','r']
]);
});

it('should move the Upper Kings Pawn up 1 space', function(){
  moves.move2Upper();

  assert.deepEqual(chessBoard, [
   ['R','N','B','Q','K','B',' ','R'],
   ['P','P','P','P',' ','P','P','P'],
   [' ',' ',' ',' ','P','N',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ','p','p',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   ['p','p',' ',' ','p','p','p','p'],
   ['r','n','b','q','k','b','n','r']
]);
});

it('should move the lower knights pawn up 1 space', function(){
  moves.move3Lower();

  assert.deepEqual(chessBoard, [
   ['R','N','B','Q','K','B',' ','R'],
   ['P','P','P','P',' ','P','P','P'],
   [' ',' ',' ',' ','P','N',' ',' '],
   [' ',' ',' ',' ',' ',' ',' ',' '],
   [' ',' ','p','p',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ','p',' '],
   ['p','p',' ',' ','p','p',' ','p'],
   ['r','n','b','q','k','b','n','r']
]);
});

it('should move the Upper Queens pawn up 2 spaces', function(){
  moves.move3Upper();

  assert.deepEqual(chessBoard, [
   ['R','N','B','Q','K','B',' ','R'],
   ['P','P','P',' ',' ','P','P','P'],
   [' ',' ',' ',' ','P','N',' ',' '],
   [' ',' ',' ','P',' ',' ',' ',' '],
   [' ',' ','p','p',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ','p',' '],
   ['p','p',' ',' ','p','p',' ','p'],
   ['r','n','b','q','k','b','n','r']
]);
});

it('should move the lower kings bishop over 1 space', function(){
  moves.move4Lower();

  assert.deepEqual(chessBoard, [
   ['R','N','B','Q','K','B',' ','R'],
   ['P','P','P',' ',' ','P','P','P'],
   [' ',' ',' ',' ','P','N',' ',' '],
   [' ',' ',' ','P',' ',' ',' ',' '],
   [' ',' ','p','p',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ','p',' '],
   ['p','p',' ',' ','p','p','b','p'],
   ['r','n','b','q','k',' ','n','r']
]);
});

it('should move the Upper Kings Bishop over 1 space', function(){
  moves.move4Upper();

  assert.deepEqual(chessBoard, [
   ['R','N','B','Q','K',' ',' ','R'],
   ['P','P','P',' ','B','P','P','P'],
   [' ',' ',' ',' ','P','N',' ',' '],
   [' ',' ',' ','P',' ',' ',' ',' '],
   [' ',' ','p','p',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ',' ','p',' '],
   ['p','p',' ',' ','p','p','b','p'],
   ['r','n','b','q','k',' ','n','r']
]);
});

it('should move the lower kings knight up 2 spaces and over 1 space', function(){
  moves.move5Lower();

  assert.deepEqual(chessBoard, [
   ['R','N','B','Q','K',' ',' ','R'],
   ['P','P','P',' ','B','P','P','P'],
   [' ',' ',' ',' ','P','N',' ',' '],
   [' ',' ',' ','P',' ',' ',' ',' '],
   [' ',' ','p','p',' ',' ',' ',' '],
   [' ',' ',' ',' ',' ','n','p',' '],
   ['p','p',' ',' ','p','p','b','p'],
   ['r','n','b','q','k',' ',' ','r']
]);
});

/*function catalan(x,y){
  if(chessBoard[x][y] === chessBoard[6][3]){
    chessBoard[4][3] = chessBoard[6][3];
    chessBoard[6][3] = ' ';
    return (chessBoard.join('\n') + '\n\n');
  }
  if(chessBoard[x][y] === chessBoard[0][6]){
    chessBoard[2][5] = chessBoard[0][6];
    chessBoard[0][6] = ' ';
    return (chessBoard.join('\n') + '\n\n');
  }
  if(chessBoard[x][y] === chessBoard[6][2]){
    chessBoard[4][2] = chessBoard[6][2];
    chessBoard[6][2] = ' ';
    return (chessBoard.join('\n') + '\n\n');
  }
  if(chessBoard[x][y] === chessBoard[1][4]){
    chessBoard[2][4] = chessBoard[1][4];
    chessBoard[1][4] = ' ';
    return (chessBoard.join('\n') + '\n\n');
  }
  if(chessBoard[x][y] === chessBoard[6][6]){
    chessBoard[5][6] = chessBoard[6][6];
    chessBoard[6][6] = ' ';
    return (chessBoard.join('\n') + '\n\n');
  }
  if(chessBoard[x][y] === chessBoard[1][3]){
    chessBoard[3][3] = chessBoard[1][3];
    chessBoard[1][3] = ' ';
    return (chessBoard.join('\n') + '\n\n');
  }
  if(chessBoard[x][y] === chessBoard[7][5]){
    chessBoard[6][6] = chessBoard[7][5];
    chessBoard[7][5] = ' ';
    return (chessBoard.join('\n') + '\n\n');
  }
  if(chessBoard[x][y] === chessBoard[0][5]){
    chessBoard[1][4] = chessBoard[0][5];
    chessBoard[0][5] = ' ';
    return (chessBoard.join('\n') + '\n\n');
  }
  if(chessBoard[x][y] === chessBoard[7][6]){
    chessBoard[5][5] = chessBoard[7][6];
    chessBoard[7][6] = ' ';
    return (chessBoard.join('\n') + '\n\n');
  }
}

console.log(catalan(6,3));
console.log(catalan(0,6));
console.log(catalan(6,2));
console.log(catalan(1,4));
console.log(catalan(6,6));
console.log(catalan(1,3));
console.log(catalan(7,5));
console.log(catalan(0,5));
console.log(catalan(7,6));*/
/*
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
//console.log(chessBoard.join('\n') + '\n\n');*/

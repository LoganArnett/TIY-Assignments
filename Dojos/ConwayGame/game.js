/**
 * Conway's Game of Life
 */

var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('chai').assert;
/*
var privates = {
  board: undefined,
  newBoard: function(){
      return [
            [ false, false,  false ],
            [ false, false,  false ],
            [ false, false,  false ],
           ];
        },
  rules: function(cell, neighbors){
    var cellsFate;
    var neighAlive = 0;
    neighbors.forEach(function(neighbor){ //Replaced for Loops
    //for (i = 0; i < neighbors.length; i++)
      if (neighbor){
          neighAlive++;
      }
  /*    alive = neighbors.filter(function(neighbor){
        return neighbor;
      });

      /* Rule #1: Any live cell with fewer than two live
      * neighbours dies, as if caused by under-population.

      if (cell === true) {
        if (neighAlive < 2) {
          cellsFate = false;
      }

      /* Rule #2: Any live cell with two or three live
      * neighbours lives on to the next generation.


        else if (neighAlive === 2 || neighAlive === 3) {
          cellsFate = true;
      }

      /* Rule #3: Any live cell with more than three live
       * neighbours dies, as if by overcrowding.

         else if (neighAlive > 3) {
          cellsFate = false;
      }
    }
      /* Rule #4: Any dead cell with exactly three live
       * neighbours becomes a live cell, as if by reproduction.

      if (cell === false) {
        if (neighAlive === 3) {
          cellsFate = true;
      }
      else {
        cellsFate = false;
      }
    }
    return cellsFate;
    });
  },
  neighborsOf: function(x,y){
    var neighbors;

    if (x === 0 && y === 0) {
      neighbors = [board[0][1], board[1][0], board[1][1]]
    };
    if (x === 1 && y === 0){
      neighbors = [board[0][0], board[0][1], board[1][1], board[2][0], board[2][1]]
    };
    if (x === 2 && y === 0){
      neighbors = [board[1][1], board[1][0], board[2][1]]
    };
    if (x === 0 && y === 1){
      neighbors = [board[0][0], board[1][0], board[1][1], board[1][2], board[0][2]]
    };
    if (x === 1 && y === 1){
      neighbors = [board[0][0], board[1][0], board[2][0], board[0][1], board[2][1],
      board[0][2], board[1][2], board[2][2]]
    };
    if (x === 2 && y === 1){
      neighbors = [board[2][0], board[1][0], board[1][1], board[1][2], board[2][2]]
    };
    if (x === 0 && y === 2){
      neighbors = [board[0][1], board[1][1], board[1][2]]
    };
     if (x === 1 && y === 2){
       neighbors = [board[0][1], board[0][2], board[1][1], board[2][1], board[2][2]]
     };
    if (x === 2 && y === 2){
      neighbors = [board[1][1], board[1][2], board[2][1]]
    };
    return neighbors;
  },
  tick: function(){ /* accepts nothing, alters `game.board`
     if(this.board[0][1] && this.board[1][1] && this.board[2][1]){
       this.board[0][1] = this.board[2][1] = false;
       this.board[1][0] = this.board[1][2] = true;
     }
     else if (this.board[1][0] && this.board[1][1] && this.board[2][1]){
       this.board[1][0] = this.board[1][2] = false;
       this.board[0][1] = this.board[2][1] = true;

     }
     //game.board = this.newBoard;
     //return this.newBoard();
   },
}*/
module.exports = Game;

  function Game(){
    this.board = board();
  }

  function board(){
      return  [ [ false, false,  false ],
                [ false, false,  false ],
                [ false, false,  false ],
  ];
}
/**
* @param Number x coordinate
* @param Number y coordinate
* @return boolean if cell at {x,y} is alive
*/
Game.prototype.isAlive = function(x,y){

},
/**
* turns cell at {x,y} on to a living cell
* @param Number x coordinate
* @param Number y coordinate
* @return undefined
*/
Game.prototype.giveLife = function(x,y){

}
/**
* turns cell at {x,y} off to a dead cell
* @param Number x coordinate
* @param Number y coordinate
* @return undefined
*/
Game.prototype.takeLife = function(x,y){

}

/**
 * update the board by applying the rules to each cell
 */
Game.prototype.tick = function(){
  //Start with a fresh board
  //Apply rules to each cell in that board
  //Record result in the new board
  //Update the current board to match the new board

}

Game.prototype.neighborsOf = function(){

}
Game.prototype.rules = function(){

}
    /**
     * @param Number x coordinate
     * @param Number y coordinate
     * @return boolean representation of a cell

     getCell: function(){

     }

    /**
     * WARNING: This is VOODOO MAGIC...
     *
     * GIVEN:
     *   this.board === [
     *      [ false, true,  false ],
     *      [ false, true,  false ],
     *      [ false, true,  false ],
     *   ];
     *
     * EXPECT:
     *   +---+---+---+
     *   |   | X |   |
     *   +---+---+---+
     *   |   | X |   |
     *   +---+---+---+
     *   |   | X |   |
     *   +---+---+---+
     */
    Game.prototype.display = function(){
        var spacer = '+---+---+---+\n';

        return spacer +
            // Apply `renderRow` to each `row` in `board`...
            this.board.map(function renderRow(row){
                return '| ' +
                    // Apply `renderCell` to each `cell` in `row`...
                    row.map(function renderCell(cell){
                        // return 'X' if `cell` is TRUTHY otherwise return ' '
                        return cell && 'X' || ' ';
                    }).join(' | ') // Place ' | ' between each `cell`...
                + ' |\n';
            }).join(spacer) // Place `spacer` between each `row`...
        + spacer;
    } // END display
// END game

/*
function test(actual, expected, success){
    if (success === undefined) success = 'Wait Really? It worked? Holy Shit it WORKED!!!';
    assert.strictEqual(actual, expected);
    console.log(success);
}
/*
/**
 * Return a nested array representing an initially empty 3x3 board.
 *
 * @return Array of Array of Boolean
 */
/*
board = [
        [ false,
          false,
          false],
                [ false,
                  false,
                  false],
                       [ false,
                         false,
                         false]
    ];

/** neighborsOf Function:
 * if given coordinates (x, y),
 * find their neighbors on the board based on the
 * value of x && y.
 */
 //allows variable neighbors to be in the global scope, possible errors with this version
//var neighbors;
/*
function neighborsOf(board, x, y){
    var neighbors;

    if (x === 0 && y === 0) {
      neighbors = [board[0][1], board[1][0], board[1][1]]
    };
    if (x === 1 && y === 0){
      neighbors = [board[0][0], board[0][1], board[1][1], board[2][0], board[2][1]]
    };
    if (x === 2 && y === 0){
      neighbors = [board[1][1], board[1][0], board[2][1]]
    };
    if (x === 0 && y === 1){
      neighbors = [board[0][0], board[1][0], board[1][1], board[1][2], board[0][2]]
    };
    if (x === 1 && y === 1){
      neighbors = [board[0][0], board[1][0], board[2][0], board[0][1], board[2][1],
      board[0][2], board[1][2], board[2][2]]
    };
    if (x === 2 && y === 1){
      neighbors = [board[2][0], board[1][0], board[1][1], board[1][2], board[2][2]]
    };
    if (x === 0 && y === 2){
      neighbors = [board[0][1], board[1][1], board[1][2]]
    };
     if (x === 1 && y === 2){
       neighbors = [board[0][1], board[0][2], board[1][1], board[2][1], board[2][2]]
     };
    if (x === 2 && y === 2){
      neighbors = [board[1][1], board[1][2], board[2][1]]
    };
    return neighbors;
  }

  describe("neighborsOf(), which assigns the neighbors of a cell given a board and a cells specific coordinates", function(){
    it ('should return 3 neighbors for 0,0', function(){
      assert.deepEqual(neighborsOf(board, 0, 0), [false,false,false]);
    })
    it ('"EXPECT" to be an Array for 0,0', function(){
      expect(neighborsOf(board,0,0)).to.be.an('Array');
    })
    it ('should return 5 neighbors for 0,1', function(){
      assert.deepEqual(neighborsOf(board, 0, 1), [false,false,false,false,false]);
    })
    it ('"EXPECT" to be an Array for 0,1', function(){
      expect(neighborsOf(board,0,1)).to.be.an('Array');
    })
    it ('should return 8 neighbors for 1,1', function(){
      assert.deepEqual(neighborsOf(board, 1, 1), [false,false,false,false,false,false,false,false]);
    })
    it ('"SHOULD" be an Array for 1,1', function(){
      neighborsOf(board,1,1).should.be.an('Array');
    })
    it ('should return that neighborsOf is a Function', function(){
      assert.isFunction(neighborsOf);//chai testing
    })
    it ('should "expect" neighbors to not equal true', function(){
      expect(neighborsOf).to.not.equal(true);
    })

  })



   //var cellsFate(global scope)
function conway(cell, neighbors) {
  var cellsFate;
  var neighAlive = 0;
  neighbors.forEach(function(neighbor){ //Replaced for Loops
  //for (i = 0; i < neighbors.length; i++) {
    if (neighbor){
        neighAlive++;
    }
/*    alive = neighbors.filter(function(neighbor){
      return neighbor;
    });*/

    /* Rule #1: Any live cell with fewer than two live
    * neighbours dies, as if caused by under-population.

    if (cell === true) {
      if (neighAlive < 2) {
        cellsFate = false;
    }

    /* Rule #2: Any live cell with two or three live
    * neighbours lives on to the next generation.


      else if (neighAlive === 2 || neighAlive === 3) {
        cellsFate = true;
    }

    /* Rule #3: Any live cell with more than three live
     * neighbours dies, as if by overcrowding.

       else if (neighAlive > 3) {
        cellsFate = false;
    }
  }
    /* Rule #4: Any dead cell with exactly three live
     * neighbours becomes a live cell, as if by reproduction.

    if (cell === false) {
      if (neighAlive === 3) {
        cellsFate = true;
    }
    else {
      cellsFate = false;
    }
  }
});
    return cellsFate;
  }
describe("conway(), which takes a cell and its neighbors as inputs and returns a boolean", function(){
    it ("should return a boolean based on the 4 rules for 0,0", function(){
      assert.strictEqual(conway(board[0][0], actual), false);
    })
    it ("'SHOULD' include a boolean based on the 4 rules for 0,0", function(){
      conway(board[0][0], actual).should.be.a('boolean');
    })
    it ("should return that it .isBoolean for 0,0", function(){
      assert.isBoolean(conway(board[0][0], actual), false);//chai testing
    })
    it ("should return a boolean based on the 4 rules for 0,1", function(){
      assert.strictEqual(conway(board[0][1], actual), false);
    })
    it ("should return that it .isBoolean for 0,1", function(){
      assert.isBoolean(conway(board[0][1], actual), false);//chai testing
    })
    it ("should return a boolean based on the 4 rules for 0,2", function(){
      assert.strictEqual(conway(board[0][2], actual), false);
    })
    it ("should return that it .isBoolean for 0,2", function(){
      assert.isBoolean(conway(board[0][2], actual), false);//chai testing
    })
    it ("should return a boolean based on the 4 rules for 1,0", function(){
      assert.strictEqual(conway(board[1][0], actual), false);
    })
    it ("should return that it .isBoolean for 1,0", function(){
      assert.isBoolean(conway(board[1][0], actual), false);//chai testing
    })
    it ("should return a boolean based on the 4 rules for 1,1", function(){
      assert.strictEqual(conway(board[1][1], actual), false);
    })
    it ("should return that it .isBoolean for 1,1", function(){
      assert.isBoolean(conway(board[1][1], actual), false);//chai testing
    })
})

//neighbors.forEach(conway);

//tick Function for newBoards to be produced
function tick(board){
  var newBoard = [ ];//A new empty array
  board.forEach(function(value, index){//Replaced both for Loops
    value.forEach(function(x, y){       //
  //for (var j = 0; j < board.length; j++) {
     //for (var k = 0; k < board[j].length; k++) {
      newBoard.push(conway(board[index][y], neighborsOf(board, index, y)));//replace original board values with a new board of pushed values
    });
  });
  /*.splice takes the newBoard and splices into new pieces
  that will return as 3 seperate Arrays to recreate the
  next board in the sequence

  var new1 = newBoard.splice(0,3);//first array
  var new2 = newBoard.splice(0,3);//second array
  board = [new1, new2, newBoard];//The new board is stored back in the original board variable
  return board;
}

describe("tick(), which takes a board of boolean values and returns a new board of boolean values", function(){
  it ("should return a new board for the null case", function(){
    assert.deepEqual(tick(board), [[false,false,false],[false,false,false],[false,false,false]]);
  })
  it ("should return that the new board is an Array of Arrays", function(){
    assert.isArray(tick(board));//chai testing
  })
  it ('should "expect" tick to be an Array for board', function(){
    expect(tick(board)).to.be.an('Array');
  })
  it ("should return a new board for starting board with 1 live cell", function(){
    assert.deepEqual(tick(board2), [[false,false,false],[false,false,false],[false,false,false]]);
  })
  it ("should return that the new board is an Array of Arrays", function(){
    assert.isArray(tick(board2));//chai testing
  })
  it ('should "expect" tick to be an Array for board2', function(){
    expect(tick(board2)).to.be.an('Array');
  })
  it ("should return a new board for starting board with 2 live cells", function(){
    assert.deepEqual(tick(board3), [[false,false,false],[false,false,false],[false,false,false]]);
  })
  it ("should return that the new board is an Array of Arrays", function(){
    assert.isArray(tick(board3));//chai testing
  })
  it ('should "expect" tick to be an Array for board3', function(){
    expect(tick(board3)).to.be.an('Array');
  })
  it ("should return a new board for starting board with 3 live cells", function(){
    assert.deepEqual(tick(board5), [[false,false,false],[true,true,true],[false,false,false]]);
  })
  it ("should return that the new board is an Array of Arrays", function(){
    assert.isArray(tick(board5));//chai testing
  })
  it ('should "expect" tick to be an Array for board5', function(){
    expect(tick(board5)).to.be.an('Array');
  })
})

//Setting neighborsOf actual variables for testing
  var actual  = neighborsOf(board, 0, 0)
  var actual2 = neighborsOf(board, 1, 0)
  var actual3 = neighborsOf(board, 2, 0)
  var actual4 = neighborsOf(board, 0, 1)
  var actual5 = neighborsOf(board, 1, 1)
  var actual6 = neighborsOf(board, 2, 1)
  var actual7 = neighborsOf(board, 0, 2)
  var actual8 = neighborsOf(board, 1, 2)
  var actual9 = neighborsOf(board, 2, 2)

//Setting conway variables for testing, board represents
// the (x, y coordinates) and actual pulls up the neighborsOf
  var con1 = conway(board[0][0], actual)
  var con2 = conway(board[1][0], actual2)
  var con3 = conway(board[2][0], actual3)
  var con4 = conway(board[0][1], actual4)
  var con5 = conway(board[1][1], actual5)
  var con6 = conway(board[2][1], actual6)
  var con7 = conway(board[0][2], actual7)
  var con8 = conway(board[1][2], actual8)
  var con9 = conway(board[2][2], actual9)

//Creating alternate boards for tick testing
  var board2 = [[false,
                 false,
                 true],
                     [false,
                      false,
                      false],
                            [false,
                             false,
                             false]
              ]
  var board3 = [[false,
                 false,
                 true],
                     [false,
                      true,
                      false],
                            [false,
                             false,
                             false]
              ]
  var board4 = [[true,
                 false,
                 false],
                     [true,
                      false,
                      false],
                            [false,
                             false,
                             false]
              ]
  var board5 = [[false,
                 true,
                 false],
                     [false,
                      true,
                      false],
                            [false,
                             true,
                             false]
              ]
  var board6 = [[false,
                 false,
                 false],
                     [false,
                      false,
                      false],
                            [false,
                             false,
                             false]
              ]

Sweet test from Ari with printout of the rotations
function tick_test(board) {
  var after = tick(board)
  console.log("-----------------------");
  console.log(board);
  console.log("-----------------------");
  console.log(after);
  console.log("-----------------------");
}


//test(tick(board), console.log(tick(board)));
//test(tick(board2), console.log(tick(board2)));
//test(tick(board3), console.log(tick(board3)));
//test(tick(board4), console.log(tick(board4)));
//test(tick(board5), console.log(tick(board5)));
//tick_test(board5);


Testing the conway function for accuracy
  Conway Test Round 2: Completed Successful rotation
test(con1, false, 'Testing x=0 and y=0 which should return a Dead cell of False')
test(con2, true, 'Testing x=1 and y=0 which should return a Live cell of True');
test(con3, false, 'Testing x=2 and y=0 which should return a Dead cell of False');
test(con4, false, 'Testing x=0 and y=1 which should return a Live cell of True');
test(con5, true, 'Testing x=1 and y=1 which should return a Live cell of True');
test(con6, false, 'Testing x=2 and y=1 which should return a Live cell of True');
test(con7, false, 'Testing x=0 and y=2 which should return a Dead cell of False');
test(con8, true, 'Testing x=1 and y=2 which should return a Live cell of True');
test(con9, false, 'Testing x=2 and y=2 which should return a Dead cell of False');


  Conway Test Round 1
test(con1, false, 'Testing x=0 and y=0 which should return a Dead cell of False')
test(con2, false, 'Testing x=1 and y=0 which should return a Dead cell of False');
test(con3, false, 'Testing x=2 and y=0 which should return a Dead cell of False');
test(con4, true, 'Testing x=0 and y=1 which should return a Live cell of True');
test(con5, true, 'Testing x=1 and y=1 which should return a Live cell of True');
test(con6, true, 'Testing x=2 and y=1 which should return a Live cell of True');
test(con7, false, 'Testing x=0 and y=2 which should return a Dead cell of False');
test(con8, false, 'Testing x=1 and y=2 which should return a Dead cell of False');
test(con9, false, 'Testing x=2 and y=2 which should return a Dead cell of False');




/*Testing the neighborsOf function to ensure the neighbors are correct
test(actual[0], board[0][1] );
test(actual[1], board[1][0], 'Neighbor Test of (0,0)');
test(actual[2], board[1][1], 'Neighbor Test of (0,0)');
test(actual2[0], board[0][0], 'Neighbor Test of (1,0)');
test(actual2[1], board[0][1], 'Neighbor Test of (1,0)');
test(actual2[2], board[1][1], 'Neighbor Test of (1,0)');
test(actual2[3], board[2][0], 'Neighbor Test of (1,0)');
test(actual2[4], board[2][1], 'Neighbor Test of (1,0)');
test(actual3[0], board[1][1], 'Neighbor Test of (2,0)');
test(actual3[1], board[1][0], 'Neighbor Test of (2,0)');
test(actual3[2], board[2][1], 'Neighbor Test of (2,0)');
test(actual4[0], board[0][0], 'Neighbor Test of (0,1)');
test(actual4[1], board[1][0], 'Neighbor Test of (0,1)');
test(actual4[2], board[1][1], 'Neighbor Test of (0,1)');
test(actual4[3], board[1][2], 'Neighbor Test of (0,1)');
test(actual4[4], board[0][2], 'Neighbor Test of (0,1)');
test(actual5[0], board[0][0], 'Neighbor Test of (1,1)');
test(actual5[1], board[1][0], 'Neighbor Test of (1,1)');
test(actual5[2], board[2][0], 'Neighbor Test of (1,1)');
test(actual5[3], board[0][1], 'Neighbor Test of (1,1)');
test(actual5[4], board[2][1], 'Neighbor Test of (1,1)');
test(actual5[5], board[0][2], 'Neighbor Test of (1,1)');
test(actual5[6], board[1][2], 'Neighbor Test of (1,1)');
test(actual5[7], board[2][2], 'Neighbor Test of (1,1)');
test(actual6[0], board[2][0], 'Neighbor Test of (2,1)');
test(actual6[1], board[1][0], 'Neighbor Test of (2,1)');
test(actual6[2], board[1][1], 'Neighbor Test of (2,1)');
test(actual6[3], board[1][2], 'Neighbor Test of (2,1)');
test(actual6[4], board[2][2], 'Neighbor Test of (2,1)');
test(actual7[0], board[0][1], 'Neighbor Test of (0,2)');
test(actual7[1], board[1][1], 'Neighbor Test of (0,2)');
test(actual7[2], board[1][2], 'Neighbor Test of (0,2)');
test(actual8[0], board[0][1], 'Neighbor Test of (1,2)');
test(actual8[1], board[0][2], 'Neighbor Test of (1,2)');
test(actual8[2], board[1][1], 'Neighbor Test of (1,2)');
test(actual8[3], board[2][1], 'Neighbor Test of (1,2)');
test(actual8[4], board[2][2], 'Neighbor Test of (1,2)');
test(actual9[0], board[1][1], 'Neighbor Test of (2,2)');
test(actual9[1], board[1][2], 'Neighbor Test of (2,2)');
test(actual9[2], board[2][1], 'Neighbor Test of (2,2)');
*/

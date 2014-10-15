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
    neighbors.forEach(function(neighbor){
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
*/
module.exports = Game;

  function Game(){
    this.board = newBoard();
  }

  function newBoard(){
      return  [ [ false, true, false ],
                [ false, true, false ],
                [ false, true, false ],
  ];
}
/**
* @param Number x coordinate
* @param Number y coordinate
* @return boolean if cell at {x,y} is alive
*/
Game.prototype.isAlive = function(x,y){
  if(this.board[x][y]){
    return true;
  }
  else{
    return false;
  }
},
/**
* turns cell at {x,y} on to a living cell
* @param Number x coordinate
* @param Number y coordinate
* @return undefined
*/
Game.prototype.giveLife = function(x,y){
   if(this.board[x][y] === false){
     return true;
   }
},
/**
* turns cell at {x,y} off to a dead cell
* @param Number x coordinate
* @param Number y coordinate
* @return undefined
*/
Game.prototype.takeLife = function(x,y){
   if(this.board[x][y] === true){
     return false;
   }
   else {
     return false;
   }
},

/**
 * update the board by applying the rules to each cell
 */
Game.prototype.tick = function(){
  //Start with a fresh board
  //Apply rules to each cell in that board
  //Record result in the new board
  //Update the current board to match the new board

  //Board.forEach(function(value, index){
    //value.forEach(function(x, y){
var Board = newBoard();
  for (var j = 0; j < Board.length; j++) {
     for (var k = 0; k < Board[j].length; k++) {
       console.log(Board);
      Board.push(this.rules(j, k, Board))//replace original board values with a new board of pushed values
    };
  };
  /*.splice takes the newBoard and splices into new pieces
  that will return as 3 seperate Arrays to recreate the
  next board in the sequence*/
  console.log(Board);
  var new1 = Board.splice(0,3);//first array
  var new2 = Board.splice(0,3);//second array
  board = [new1, new2, Board];//The new board is stored back in the original board variable*/
  this.board = Board;
  return this.board;
},

Game.prototype.neighborsOf = function(x, y){
  var neighbors;

  if (x === 0 && y === 0) {
    neighbors = [this.board[0][1], this.board[1][0], this.board[1][1]]
  };
  if (x === 1 && y === 0){
    neighbors = [this.board[0][0], this.board[0][1], this.board[1][1], this.board[2][0], this.board[2][1]]
  };
  if (x === 2 && y === 0){
    neighbors = [this.board[1][1], this.board[1][0], this.board[2][1]]
  };
  if (x === 0 && y === 1){
    neighbors = [this.board[0][0], this.board[1][0], this.board[1][1], this.board[1][2], this.board[0][2]]
  };
  if (x === 1 && y === 1){
    neighbors = [this.board[0][0], this.board[1][0], this.board[2][0], this.board[0][1], this.board[2][1],
    this.board[0][2], this.board[1][2], this.board[2][2]]
  };
  if (x === 2 && y === 1){
    neighbors = [this.board[2][0], this.board[1][0], this.board[1][1], this.board[1][2], this.board[2][2]]
  };
  if (x === 0 && y === 2){
    neighbors = [this.board[0][1], this.board[1][1], this.board[1][2]]
  };
   if (x === 1 && y === 2){
     neighbors = [this.board[0][1], this.board[0][2], this.board[1][1], this.board[2][1], this.board[2][2]]
   };
  if (x === 2 && y === 2){
    neighbors = [this.board[1][1], this.board[1][2], this.board[2][1]]
  };
  return neighbors;
},

Game.prototype.rules = function(){
  var cellsFate;
  var neighAlive = 0;
  this.neighborsOf.neighbors.forEach(function(neighbor){
    if (neighbor){
        neighAlive++;
    }

    /*Rule #1: Any live cell with fewer than two live
    * neighbours dies, as if caused by under-population.
    */
    if (cell === true) {
      if (neighAlive < 2) {
        cellsFate = false;
    }

    /* Rule #2: Any live cell with two or three live
    * neighbours lives on to the next generation.
    */

      else if (neighAlive === 2 || neighAlive === 3) {
        cellsFate = true;
    }

    /* Rule #3: Any live cell with more than three live
     * neighbours dies, as if by overcrowding.
    */
       else if (neighAlive > 3) {
        cellsFate = false;
    }
  }
    /* Rule #4: Any dead cell with exactly three live
     * neighbours becomes a live cell, as if by reproduction.
     */
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
    }; // END display
// END game

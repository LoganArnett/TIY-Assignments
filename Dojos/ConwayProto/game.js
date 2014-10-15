
module.exports = Game; {

   function newBoard(){
}

/**
* @param Number x coordinate
* @param Number y coordinate
* @return Boolean if cell at {x,y} is alive
*/
newBoard.prototype.isAlive = function(x, y){
  //return true of this.board[x][y] is "alive"
   return Boolean(this[x + ',' + y]);
};

/**
* @param Number x coordinate
* @param Number y coordinate
* @return undefined
*/
newBoard.prototype.giveLife = function(x, y){
  //make the cell at {x,y} "alive"
    this[x + ',' + y] = true;
};

newBoard.prototype.takeLife = function(x, y){
  //make the cell at {x,y} "dead"
  delete this[x + ',' + y];
};
   function Game(){
    this.board = newBoard();
  }


/**
* @param Number x coordinate
* @param Number y coordinate
* @return boolean if cell at {x,y} is alive
*/
Game.prototype.isAlive = function(x,y){
  return this.board[x][y];
},
/**
* turns cell at {x,y} on to a living cell
* @param Number x coordinate
* @param Number y coordinate
* @return undefined
*/
Game.prototype.giveLife = function(x,y){
   this.board[x][y] = true;
},
/**
* turns cell at {x,y} off to a dead cell
* @param Number x coordinate
* @param Number y coordinate
* @return undefined
*/
Game.prototype.takeLife = function(x,y){
   this.board[x][y] = false;
},

/**
 * update the board by applying the rules to each cell
 */
Game.prototype.tick = function(){
/*this.board = Board.map(function(row,x){
   return row.map(function(cell, y){
   return self.rules(cell, self.neighborsOf(x,y));
 });
});
*/
//Start with a fresh board
var Board = new Board();
var self = this;
  //Apply rules to each cell in that board
 Board.forEach(function(row, x){
   Board.forEach(function(cell, y){
     //Record result in the NEW board. . .
     Board[x][y] = self.rules(self.board[x][y], self.neighborsOf(x,y));
      });
    });
    //Update the current board to match the new board
    this.board = Board;
  },

/**
 * @param Boolean cell
 * @param Number neighbors representing live neighbors of `cell`
 * @return Boolean: state of the given cell for the next `tick`
 */
Game.prototype.rules = function(cell, neighbors){
  //Survival Rule
  if(cell && neighbors > 1 && neighbors < 4){
    return true;
  }
  //Reproduction Rule
  if(!cell && neighbors === 3){
    return true;
  }
  //Overpopulation and Overpopulation
  return false;
},

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Number of Live neighbors
 */
Game.prototype.neighborsOf = function(x, y){
  var neighbors = 0, diffs = [-1, 0, +1];
  var self = this;

    diffs.forEach(function(dX){
      diffs.forEach(function(dY){
        if(dX == 0 && dY == 0) return;

        if(self.board[x + dX] && self.board[x + dX][y + dY]){
          neighbors++;
        }
      });
    });
    return neighbors;
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
}// END game

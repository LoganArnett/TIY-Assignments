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
      return  [ [ false, false,  false ],
                [ false, true,  false ],
                [ false, false,  false ],
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

},
/**
* turns cell at {x,y} off to a dead cell
* @param Number x coordinate
* @param Number y coordinate
* @return undefined
*/
Game.prototype.takeLife = function(x,y){

},

/**
 * update the board by applying the rules to each cell
 */
Game.prototype.tick = function(){
  //Start with a fresh board
  //Apply rules to each cell in that board
  //Record result in the new board
  //Update the current board to match the new board

},

Game.prototype.neighborsOf = function(){

},

Game.prototype.rules = function(){

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

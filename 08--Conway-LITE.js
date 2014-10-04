/**
 * Conway's Game of Life (LITE)
 *
 * @link http://en.wikipedia.org/wiki/Conway's_Game_of_Life
 *
 * Consider a finite 3x3 board of cells:
 *
 *     0   1   2
 *   +---+---+---+
 * 0 |0,0|1,0|2,0|
 *   +---+---+---+
 * 1 |0,1|1,1|2,1|
 *   +---+---+---+
 * 2 |0,2|1,2|2,2|
 *   +---+---+---+
 *
 * Represented as:
 *
 * board = [
 *   [ false, false, false ],
 *   [ false, false, false ],
 *   [ false, false, false ],
 * ]
 *
 * Where each Boolean value represents the state of a `cell`, either
 * alive (`true`) or dead (`false`). Each cell can be accessed with
 * the index operators (`[n]`), e.g. `board[0][1]`, `board[2][2]`.
 *
 * Write a function called `conway` that...
 *
 * - GIVEN the state of a `cell` and a list of neighboring cells...
 * - THEN returns the state of the `cell` with the rules applied.
 *
 * Write a function called `neighborsOf` that...
 *
 * - GIVEN a `board` and `row` and `col` coordinates...
 * - THEN returns a list of the neighboring cells.
 *
 * Write a function called `tick` that...
 *
 * - GIVEN a `board`...
 * - THEN returns a NEW `board` representing the next generation.
 *
 * Use the provided `board` function to produce the initially empty
 * board, and test the following starting positions:
 *
 * Initially Empty Board
 * =====================
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   |   |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Just One Cell
 * =============
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Two Cells in Any Arrangement
 * ============================
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 |   |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X | X | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 *     0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+
 * 0 | X |   |   |    0 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 |   |   |   |
 *   +---+---+---+      +---+---+---+
 * 2 |   |   |   |    2 |   |   |   |
 *   +---+---+---+      +---+---+---+
 *
 * Three Cells in a Line
 * =====================
 *       start              tick 1             tick 2
 *     0   1   2          0   1   2          0   1   2
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 0 |   | X |   |    0 |   |   |   |    0 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 1 |   | X |   | >> 1 | X | X | X | >> 1 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 * 2 |   | X |   |    2 |   |   |   |    2 |   | X |   |
 *   +---+---+---+      +---+---+---+      +---+---+---+
 *
 * You may test more starting position, if you like, of course.
 */

var assert = require('assert');

/**
 * Log `success` if `actual` is STRICTLY equal to `expected`
 *
 * @param ANY actual
 * @param ANY expected
 * @param String success
 */
function test(actual, expected, success){
    if (success === undefined) success = 'Wait Really? It worked? Holy Shit it WORKED!!!';
    assert.strictEqual(actual, expected);
    console.log(success);
}

/**
 * Return a nested array representing an initially empty 3x3 board.
 *
 * @return Array of Array of Boolean
 */
board = [
        [ false,
          false,
          false],
                [ true,
                  true,
                  true],
                       [ false,
                         false,
                         false]
    ];

var cellsFate;
function conway(cell, neighbors) {
  var neighAlive = 0;
  for (i = 0; i < neighbors.length; i++) {
    if (neighbors[i] === true)
      neighAlive++;
    }

    /* Rule #1: Any live cell with fewer than two live
    * neighbours dies, as if caused by under-population.
    */
    if (cell === true) {
      if (neighAlive < 2) {
        cellsFate = false;
    }

    /* Rule #2: Any live cell with two or three live
    * neighbours lives on to the next generation.
    */

      if (neighAlive === 2 || neighAlive === 3) {
        cellsFate = true;
    }

    /* Rule #3: Any live cell with more than three live
     * neighbours dies, as if by overcrowding.
     */
      if (neighAlive > 3) {
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
    return cellsFate
  }



/** neighborsOf Function:
 * if given coordinates (x, y),
 * find their neighbors on the board based on the
 * value of x && y.
 */
var neighbors;
function neighborsOf(board, x, y){

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

//Testing the conway function for accuracy
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
test(actual[0], board[0][1], 'Neighbor Test of (0,0)');
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

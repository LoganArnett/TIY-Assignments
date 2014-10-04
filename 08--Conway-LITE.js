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
        [ true, false, false],
        [ false, true, false],
        [ false, false, false],
    ]

function conway(cell, neighborsOf){


   return "State of cell based on neighbors and 4 rules"
 }
/** neighborsOf Function:
 * if given coordinates (x, y),
 * find their neighbors on the board based on the
 * value of x && y.
 */
var neighbors;
function neighborsOf(board, x, y){

    if (x === 0 && y === 0){
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
  var actual  = neighborsOf(board, 0, 0);
  var actual2 = neighborsOf(board, 1, 0);
  var actual3 = neighborsOf(board, 2, 0);
  var actual4 = neighborsOf(board, 0, 1);
  var actual5 = neighborsOf(board, 1, 1);
  var actual6 = neighborsOf(board, 2, 1);
  var actual7 = neighborsOf(board, 0, 2);
  var actual8 = neighborsOf(board, 1, 2);
  var actual9 = neighborsOf(board, 2, 2);

//Testing the neighborsOf function to ensure the neighbors are correct
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



  /*Rule #1
  if (neighbors < 2 && cell == true){
    return cell = false;
  }

  //Rule #2
  if (neighbors == 2 || neighbors == 3 && cell = true){
    return cell = true;
  }

  //Rule #3
  if (neighbors > 3 && cell == true){
    return cell = false;
  }

  //Rule #4
  if (neighbors ===3 && cell == false){
    return cell = true;
  }
*/

//console.log(neighborsOf(2,1));

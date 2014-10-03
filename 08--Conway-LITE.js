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
    if (success === undefined) success = 'pass!';

    assert.strictEqual(actual, expected);

    console.log(success);
}

/**
 * Return a nested array representing an initially empty 3x3 board.
 *
 * @return Array of Array of Boolean
 */
function board(){
    return [
        [ false,
          false,
          false],
                [ false,
                  true,
                  false],
                       [ false,
                         false,
                         false],
    ];
}

var coordBoard = board();

console.log(coordBoard[1][1]);

function conway(cell, neighborsOf){
  var neighbors = 0;

   return "State of cell based on neighbors and 4 rules"
 }

function neighborsOf(x, y){
  var count = 0;
    if (x === 0 && y === 0){
      neighbors = [0,1], [1,0], [1,1];
      count++;
    }
    if (x === 1 && y === 0){
      neighbors = [0,0], [0,1], [1,1], [2,0], [2,1];
      count++;
    }
    if (x === 2 && y === 0){
      neighbors = [1,1], [1,0], [2,1];
      count++;
    }
    if (x === 0 && y === 1){
      neighbors = [(0,0), (1,0), (1,1), (1,2), (0,2)];
      count++;
    }
    if (x === 1 && y === 1){
      neighbors = [[0,0], [1,0], [2,0], [0,1], [2,1], [0,2], [1,2], [2,2]];
      count++;
    }
    if (x === 2 && y === 1){
      neighbors = [[2,0], [1,0], [1,1], [1,2], [2,2]];
      count++;
    }
    if (x === 0 && y === 2){
      neighbors = [0,1], [1,1], [1,2];
      count++;
    }
    if (x === 1 && y === 2){
      neighbors = [0,1], [0,2], [1,1], [2,1], [2,2];
      count++;
    }
    if (x === 2 && y === 2){
      neighbors = [1,1], [1,2], [2,1];
      count++;
    }
    return neighbors;

  }

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

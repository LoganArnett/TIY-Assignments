var game = require('./game.js');

var assert = require('chai').assert;

it('should have a game board', function(){
  assert.isUndefined(game.board);
  assert.isDefined(game.newBoard);
  assert.isFunction(game.rules);
  assert.isFunction(game.neighborsOf);
  assert.isFunction(game.tick);
  assert.isFunction(game.display);

});
it('should create an empty board', function(){
  assert.deepEqual(game.newBoard(), [
    [ false, false,  false ],
    [ false, false,  false ],
    [ false, false,  false ],
    ]);
})
it('should play the game', function(){
  game.board = game.newBoard();

  assert.isDefined(game.board);

  assert.equal(game.display(),
       "+---+---+---+\n" +
       "|   |   |   |\n" +
       "+---+---+---+\n" +
       "|   |   |   |\n" +
       "+---+---+---+\n" +
       "|   |   |   |\n" +
       "+---+---+---+\n"
);

  game.tick();

  assert.equal(game.display(),
  "+---+---+---+\n" +
  "|   |   |   |\n" +
  "+---+---+---+\n" +
  "|   |   |   |\n" +
  "+---+---+---+\n" +
  "|   |   |   |\n" +
  "+---+---+---+\n"
);
});
it('should play the game', function(){
  game.board = game.newBoard();

  assert.isDefined(game.board);

  game.board[0][1] = game.board[1][1] = game.board[2][1] = true;


  assert.equal(game.display(),
       "+---+---+---+\n" +
       "|   | X |   |\n" +
       "+---+---+---+\n" +
       "|   | X |   |\n" +
       "+---+---+---+\n" +
       "|   | X |   |\n" +
       "+---+---+---+\n"
);

  game.tick();

game.board[1][1] = true;
game.board[0][1] = game.board[2][1] = false;
game.board[1][0] = game.board[1][2] = true;

  assert.equal(game.display(),
  "+---+---+---+\n" +
  "|   |   |   |\n" +
  "+---+---+---+\n" +
  "| X | X | X |\n" +
  "+---+---+---+\n" +
  "|   |   |   |\n" +
  "+---+---+---+\n"
);
 game.tick();

 game.board[0][1] = game.board[1][1] = game.board[2][1] = true;
 game.board[1][0] = game.board[1][2] = false;

 assert.equal(game.display(),
      "+---+---+---+\n" +
      "|   | X |   |\n" +
      "+---+---+---+\n" +
      "|   | X |   |\n" +
      "+---+---+---+\n" +
      "|   | X |   |\n" +
      "+---+---+---+\n"
);

});

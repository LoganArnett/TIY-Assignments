var Chess = require('./classchess.js').Chess;
var Position = require("./classchess.js").Position;
var Piece = require("./classchess.js").Piece;

var assert = require('chai').assert;

describe('Position', function(){
    it('should have a function Position()', function(){
        assert.isFunction(Position, "STEPID!!");
    });
    it('should have an x and y coordinates', function(){
        var aPosition

        aPosition = new Position(2,3);
        assert.strictEqual(aPosition.x, 2);
        assert.strictEqual(aPosition.y, 3);

        aPosition = new Position(4,4);
        assert.strictEqual(aPosition.x, 4);
        assert.strictEqual(aPosition.y, 4);
    });
});

describe('Piece', function(){
    it('should have a function Piece()', function(){
        assert.isFunction(Piece, "NOOOOOOOO!!!!");
    });
});

describe('Chess', function(){
    it('should have a function Chess()', function(){
        assert.isFunction(Chess, 'Maybe?');
    });
});

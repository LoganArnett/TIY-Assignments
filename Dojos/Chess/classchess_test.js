var chai = require('chai'),
    assert = chai.assert,
    expect = chai.expect;

var chess = require('./classchess.js');


describe('The Chess Constructor', function(){
    var game;

    it('should be a function', function(){
        expect(chess.Chess).to.be.a('function');
    });

    beforeEach(function(){
        game = new chess.Chess;
    });

    it('with an initial starting position', function(){
        assert.equal(game.display(), [
            "    a   b   c   d   e   f   g   h",
            "  +---+---+---+---+---+---+---+---+",
            "1 | r | n | b | q | k | b | n | r |",
            "  +---+---+---+---+---+---+---+---+",
            "2 | p | p | p | p | p | p | p | p |",
            "  +---+---+---+---+---+---+---+---+",
            "3 |   |   |   |   |   |   |   |   |",
            "  +---+---+---+---+---+---+---+---+",
            "4 |   |   |   |   |   |   |   |   |",
            "  +---+---+---+---+---+---+---+---+",
            "5 |   |   |   |   |   |   |   |   |",
            "  +---+---+---+---+---+---+---+---+",
            "6 |   |   |   |   |   |   |   |   |",
            "  +---+---+---+---+---+---+---+---+",
            "7 | P | P | P | P | P | P | P | P |",
            "  +---+---+---+---+---+---+---+---+",
            "8 | R | N | B | Q | K | B | N | R |",
            "  +---+---+---+---+---+---+---+---+"
        ].join("\n"));
    }); // END describe initial starting position
    it('should have pieces on the `board`', function(){
        var blackQRook = game.pieceAt(1,'a');

        expect(blackQRook.getName()).to.equal('Rook');
        expect(blackQRook.getColor()).to.equal('Black');
        expect(blackQRook.position).to.deep.equal({x: 1, y: 'a'});
    });
});

describe('The Piece Constructor', function(){
    it('should be a function', function(){
        expect(chess.Piece).to.be.a('function');
    });

    it('should store `name` and `color`', function(){
        var queen = new chess.Piece('Queen', 'black');

        expect(queen.getName()).to.equal('Queen');
        expect(queen.getColor()).to.equal('black');

        var king = new chess.Piece('King', 'white');

        expect(king.getName()).to.equal('King');
        expect(king.getColor()).to.equal('white');
    });

    it('should store its Position', function(){
        var position = new chess.Position(0,0);

        var rook = new chess.Piece('Rook', 'Black');
        rook.setPosition(position);

        expect(rook.position).to.equal(position);
    });
});

describe('The Position Constructor', function(){
    it('should be a function', function(){
        expect(chess.Position).to.be.a('function');
    });

    it("should remember it's {x,y} coordinates", function(){
        var pos1 = new chess.Position(1,2);

        expect(pos1.x).to.equal(1);
        expect(pos1.y).to.equal(2);

        var pos2 = new chess.Position(2,3);

        expect(pos2.x).to.equal(2);
        expect(pos2.y).to.equal(3);
    });
});


// describe('Position', function(){
//     it('should have a function Position()', function(){
//         assert.isFunction(Position, "STEPID!!");
//     });
//     it('should have an x and y coordinates', function(){
//         var aPosition
//
//         aPosition = new Position(2,3);
//         assert.strictEqual(aPosition.x, 2);
//         assert.strictEqual(aPosition.y, 3);
//
//         aPosition = new Position(4,4);
//         assert.strictEqual(aPosition.x, 4);
//         assert.strictEqual(aPosition.y, 4);
//     });
// });
//
// describe('Piece', function(){
//     it('should have a function Piece()', function(){
//         assert.isFunction(Piece, "NOOOOOOOO!!!!");
//     });
// });
//
// describe('Chess', function(){
//     it('should have a function Chess()', function(){
//         assert.isFunction(Chess, 'Maybe?');
//     });
// });

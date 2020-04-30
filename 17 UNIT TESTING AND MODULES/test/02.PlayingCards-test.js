const expect = require("chai").expect;
const Card = require("../02.PlayingCards");


let card;
beforeEach("create instance of Card", () => card = Card("2", "D"));

const sturationData = [['A', 'S', "A♠"], ['10', 'H', "10♥"]];

describe("Test of factory Function() for playng cards", () => {
    it("Check for object as output", () => {
        expect(typeof Card === 'function').to.equal(true);
    });
    it("Check for valid face or suit", () => {
        expect(card.toString()).to.equal("2♦");
    });
    it("Check for invalid face or suit", () => {
        expect(() => Card("1", "D").toString()).to.throw(TypeError);
    });

    // Saturation test
    sturationData.forEach(triple => {
        it("Check for valid face or suit", () => {
            expect(Card(triple[0], triple[1]).toString()).to.equal(triple[2]);
        });
    })
    it("Check for invalid face or suit", () => {
        expect(() => Card("1", "C").toString()).to.throw(TypeError);
    });
})
const expect = require("chai").expect;
const  printDeckOfCards  = require("../03.DeckOfCards");
printDeckOfCards(["AS"])

describe("Test of printing plaing cards function", () => {
    it("Check for normal work", () => {
        expect(printDeckOfCards(["2H"])).to.eq("2♥");
    });
    it("Check for invalid face of card", () => {
        expect(printDeckOfCards(["1H"])).to.eq("Invalid card: 1H");
    });
    it("Check for invalid suit of card", () => {
        expect(printDeckOfCards(["2Z"])).to.eq("Invalid card: 2Z");
    });
    it("Check for ono-capital letter for suit of card", () => {
        expect(printDeckOfCards(["ad"])).to.eq("Invalid card: ad");
    });
})
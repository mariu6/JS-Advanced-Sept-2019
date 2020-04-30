const lookupChar = require("../03.CharLookup");
let expect = require("chai").expect;

// describe("lookupChar", function () {
//     it("should return undefined with a non-string first parameter", function () {
//         expect(lookupChar(13,0)).to.equal(undefined, "the function did not return the correct result!")
//     });
//     it("should return undefined with a non-number second parameter", function () {
//         expect(lookupChar("Peter","George")).to.equal(undefined, "the function did not return the correct result!")
//     });
//     it("should return incorrect index with an incorrect index value", function () {
//         expect(lookupChar("Peter",3.12)).to.equal(undefined, "the function did not return the correct result!")
//     });
//     it("should return incorrect index with too big index value", function () {
//         expect(lookupChar("Peter",13)).to.equal("Incorrect index", "the function did not return the correct value!")
//     });
//     it("should return incorrect index with a negative index value", function () {
//         expect(lookupChar("Peter",-1)).to.equal("Incorrect index", "the function did not return the correct value!")
//     });
//     it("should return incorrect index with an index value equal to string length", function () {
//         expect(lookupChar("Peter",5)).to.equal("Incorrect index", "the function did not return the correct value!")
//     });
//     it("should return correct value with correct parameters", function () {
//         expect(lookupChar("Peter",3)).to.equal("e", "the function did not return the correct value!")
//     });
//     it("should return correct value with correct parameters", function () {
//         expect(lookupChar("George",0)).to.equal("G", "the function did not return the correct value!")
//     });
// })


describe("char lookup function test", function () {
    it("1 /6 Invalid index input", function () {
        const test = lookupChar("abcd", 1.1)
        expect(test).to.eq(undefined);
    });
    it("2 /6 Invalid index input", function () {
        const test = lookupChar("abcd", "1")
        expect(test).to.eq(undefined);
    });
    it("3 /6 Invalid index input", function () {
        const test = lookupChar("abcd", -1)
        expect(test).to.eq("Incorrect index");
    });
    it("4 /6 Invalid index input", function () {
        const test = lookupChar("abcd", 1000)
        expect(test).to.eq("Incorrect index");
    });
    it("5 /6 Expected behaviour", function () {
        const test = lookupChar("abcd", 1)
        expect(test).to.eq("b");
    });
    it("6 /6 Invalid string input", function () {
        const test = lookupChar(123, 1)
        expect(test).to.eq(undefined);
    });
})

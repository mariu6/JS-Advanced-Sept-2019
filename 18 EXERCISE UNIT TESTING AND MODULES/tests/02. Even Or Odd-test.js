const isOddOrEven = require("../02. Even Or Odd");
let { expect } = require("chai");
// let { assert } = require("chai");

// describe("isOddOrEvenFunction", function () {
//     it('Pass number to return undefined', function () {
//         let actual = isOddOrEven(2);  //undefuned
//         assert.equal(actual, undefined);
//     })
//     it('Pass string with even length', function () {
//         let actual = isOddOrEven("toni");  //even
//         assert.equal(actual, "even");
//     })
//     it('Pass string with odd length', function () {
//         let actual = isOddOrEven("ton");  //odd
//         assert.equal(actual, "odd");
//     })
// })

describe("'even' or 'odd' returning function", function() {
    it("returns 'undefined' when called with empty or non-string value", function() {
        expect(isOddOrEven()).to.eq(undefined);
    });
    it("returns 'odd' when called with string with odd length", function() {
        expect(isOddOrEven("a")).to.eq("odd");
    });
    it("returns 'even' when called with string with even length", function() {
        expect(isOddOrEven("ab")).to.eq("even");
    });
})
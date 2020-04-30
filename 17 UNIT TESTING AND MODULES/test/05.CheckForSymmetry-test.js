const isSymmetric = require("../05.CheckForSymmetry");
let { expect } = require("chai");
let { assert } = require("chai");

// describe("Symmetry testing", function () {
//     it("01. True for even symmetry", function () {
//         let actual = isSymmetric([1, 2, 2, 1]);
//         expect(actual).to.equal(true, undefined);
//     })
//     it("02. True for odd symmetry", function () {
//         let actual = isSymmetric([1, 2, 3, 2, 1]);
//         expect(actual).to.equal(true, undefined);
//     })
//     // it("02. Is input an array of the same elements?", function () {
//     //     let actual = isSymmetric(["1", "lemon", 3, true, 3, "lemon", "1"]);
//     //     expect(actual).to.equal(true, undefined);
//     // })
//     it("02. False for non-symmetry", function () {   // Not needed, but for the judge (minimum 5 tests)
//         let actual = isSymmetric([1, 2, 3, 4, 5]);
//         expect(actual).to.equal(false, undefined);
//     })
//     // it("02. Single element", function () {
//     //     let actual = isSymmetric([1]);
//     //     expect(actual).to.equal(true, undefined);
//     // })
//     it("03. Is input an array?", function () {
//         let actual = isSymmetric(1, 2, 3, 2, 1);
//         expect(actual).to.equal(false, undefined);
//     })
//     // it("00. Empty element", function () {
//     //     let actual = isSymmetric([]);
//     //     expect(actual).to.equal(true, undefined);
//     // })
//     it("04. Is input an array of the same elements?", function () {
//         let actual = isSymmetric(["1", "2", 3, 2, 1]);
//         expect(actual).to.equal(false, undefined);
//     })
// })

describe("Test of function for finding of symetric arrays", () => {
    it("Test if the input is empty", () => {
        expect(isSymmetric()).to.eq(false);
    });
    it("Test if the input is not array", () => {
        expect(isSymmetric("ara")).to.eq(false);
    });
    it("Test if the input is mixed type array", () => {
        expect(isSymmetric(["1",2,1])).to.eq(false);
    });
    it("Test if the function is doing it's job", () => {
        expect(isSymmetric([1,2,1])).to.eq(true);
    });
    it("Test if the function is doing it's job", () => {
        expect(isSymmetric([2,2,1])).to.eq(false);
    });
    it("Test if the function is working with even length of array", () => {
        expect(isSymmetric([1,2,2,1])).to.eq(true);
    });
    it("Test if the function is working with even length of array", () => {
        expect(isSymmetric([1,2,1,1])).to.eq(false);
    });
})
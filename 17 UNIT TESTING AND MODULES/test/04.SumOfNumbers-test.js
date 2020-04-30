const sum = require("../04.SumOfNumbers");
let { expect } = require("chai");
let { assert } = require("chai");

// describe("Sum testing", function () {
//     it("02.03.04. sum two elements", function () {
//         let actual = sum([1,1]); 
//         expect(actual).to.equal(2, undefined);
//     })
//     it("02.03.04.sum single element", function () {
//         let actual = sum([1]); 
//         expect(actual).to.equal(1, undefined);
//     })
//     it("02.03.04.sum multiple elements", function () {
//         let actual = sum([1,1,1,1]); 
//         expect(actual).to.equal(4, undefined);
//     })
//     // it("02.03. sum empty array", function () {
//     //     let actual = sum([]); 
//     //     expect(actual).to.equal(0, undefined);
//     // })
// })
// // 01. - Иска минимум 3 функционални теста. 02.03.04. искат поне един елемент в масива.

describe("Test od summing function", () => {
    it("Check if the function is doing it's job", ()=> {
        expect(sum([1,1])).to.eq(2);
    });
    it("Check if the input is single element", ()=> {
        expect(sum([1])).to.eq(1);
    });
    it("Check if the input is 5 elements", ()=> {
        expect(sum([1,1,1,1,1])).to.eq(5);
    });
    it("Check if the input is empty array", ()=> {
        expect(sum([])).to.eq(0);
    });
    it("Check if the input is a string", ()=> {
        expect(isNaN(sum("nana"))).to.eq(true);
    });
})
const mathEnforcer = require("../04.MathEnforcer");
let { expect } = require("chai");

// describe("mathEnforcer", function () {    // функция дескрайб за обекта с пропъртита - функции
// describe("addFive", function () {     // функция дескрайб за всяко проперти: функция
//     it("should return undefined with a non-number parameter", function () {
//         expect(mathEnforcer.addFive("one")).to.equal(undefined);
//     })
//     it("should return correct result with a non-number parameter", function () {
//         expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.01);
//     })
//     it("should return correct result with a non-number parameter", function () {
//         expect(mathEnforcer.addFive(-1)).to.equal(4);
//     })
// })

// describe("subtractTen", function () {
//     it("should return undefined with a non-number parameter", function () {
//         expect(mathEnforcer.subtractTen("eleven")).to.equal(undefined);
//     })
//     it("should return correct result with a non-number parameter", function () {
//         expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.01);
//     })
//     it("should return correct result with a non-number parameter", function () {
//         expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
//     })
// })

//     describe("sum", function () {
//         it("should return undefined with a non-number parameter", function () {
//             expect(mathEnforcer.sum("one",1)).to.equal(undefined);
//             expect(mathEnforcer.sum(1,"one")).to.equal(undefined);
//         })
//         it("should return correct result with a non-number parameter", function () {
//             expect(mathEnforcer.sum(1,1.01)).to.be.closeTo(2.01, 0.01);
//         })
//         it("should return correct result with a non-number parameter", function () {
//             expect(mathEnforcer.sum(1,1)).to.equal(2);
//             expect(mathEnforcer.sum(-1,-1.1)).to.be.closeTo(-2.1, 0.01);
//             expect(mathEnforcer.sum(-1.1,-1)).to.be.closeTo(-2.1, 0.01);
//         })
//     })
// })
// //За всяка функция тествам: дали е число, как смята с положителни, отрицателни, дробни.

describe("Math enforser(num)", function () {
    describe("addFive tests", function () {
        it("Parameter is NOT a number, should return undefined", function () {
            expect(mathEnforcer.addFive("a")).to.eq(undefined);
            // expect(mathEnforcer.addFive(undefined)).to.eq(undefined);
        });
        it("normal behaviour", function () {
            // expect(mathEnforcer.addFive(0)).to.eq(5);
            expect(mathEnforcer.addFive(-5.5)).to.eq(-0.5);
            expect(mathEnforcer.addFive(0.5)).to.be.closeTo(5.5, 0.01);
        });
    });
    describe("subtractTen(num)", function () {
        it("Parameter is NOT a number, should return undefined", function () {
            expect(mathEnforcer.subtractTen("a")).to.eq(undefined);
            expect(mathEnforcer.subtractTen(undefined)).to.eq(undefined);
        });
        it("normal behaviour", function () {
            // expect(mathEnforcer.subtractTen(0)).to.eq(-10);
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
            expect(mathEnforcer.subtractTen(-10.5)).to.be.closeTo(-20.5, 0.01);
        });
    });
    describe("sum(num1, num2)", function () {
        it("Any parameter is NOT a number, should return undefined", function () {
            expect(mathEnforcer.sum("a", 1)).to.eq(undefined);
            expect(mathEnforcer.sum(1, "a")).to.eq(undefined);
        });
        it("normal behaviour", function () {
            // expect(mathEnforcer.sum(1, 1)).to.eq(2);
            expect(mathEnforcer.sum(-1.5, -1)).to.eq(-2.5);
            expect(mathEnforcer.sum(1, 1.5)).to.be.closeTo(2.5, 0.01);
        });
    });
})

const createCalculator = require("../07.Add_Subtract");
let {expect} = require("chai");




// describe("Create calculator tests suite", () => {

//     var calc;                                   // judge ги иска вътре...
//     beforeEach(() => {
//         calc = createCalculator();
//     })
    
//     const adTests = [
//         [1, 1],
//         ["1", 1],
//         [[1], 1],
//         [-1, -1]
//     ]
    
//     const subTests = [
//         [1, -1],
//         ["1", -1],
//         [[1], -1],
//         [-1, 1]
//     ]
    
    

//     adTests.forEach(x => it(`add${x[0]} => ${x[1]}`, () => {
//         expect(calc.add(x[0])).to.equal(undefined);
//         expect(calc.get()).to.equal(x[1]);
//     }))
//     it("add {} => NaN", () => {
//         expect(calc.add({})).to.equal(undefined);                 // Needs .deep.
//         expect(calc.get()).to.deep.equal(NaN);
//     })
//     subTests.forEach(x => it(`add${x[0]} => ${x[1]}`, () => {
//         expect(calc.subtract(x[0])).to.equal(undefined);
//         expect(calc.get()).to.equal(x[1]);
//     }))

//     // it("add 1 => 1", () => {
//     //     expect(calc.add(1)).to.equal(undefined);
//     //     expect(calc.get()).to.equal(1);
//     // })
//     // it("add '1' => 1", () => {
//     //     expect(calc.add('1')).to.equal(undefined);
//     //     expect(calc.get()).to.equal(1);
//     // })
//     // it("add [1] => 1", () => {
//     //     expect(calc.add([1])).to.equal(undefined);
//     //     expect(calc.get()).to.equal(1);
//     // })
//     // it("add {} => 1", () => {
//     //     expect(calc.add({})).to.equal(undefined);
//     //     expect(calc.get()).to.equal(true);
//     // })
//     // it("substract 1 => -1", () => {
//     //     expect(calc.add(1)).to.equal(undefined);
//     //     expect(calc.get()).to.equal(1);
//     // })

// })

describe("calculator test", ()=> {

    let calc;
    beforeEach(() => calc = createCalculator());

    it("type is object", () => {
        expect(typeof calc).to.eq("object");
    })
    it("get", () => {
        expect(calc.get()).to.eq(0);
    });
    it("add 1", () => {
        calc.add(1);
        expect(calc.get()).to.eq(1);
    });
    it("add '1'", () => {
        calc.add('1');
        expect(calc.get()).to.eq(1);
    });
    it("subtract", () => {
        calc.subtract(1);
        expect(calc.get()).to.eq(-1);
    })

})







module.exports = require('chai');







const { expext } = require('chai');
const createCalculator = rquire('../calcul-test');

var calc;
beforeEach(() => {
    calc = createCalculator();
})

const adTests = [
    [1, 1],
    ["1", 1],
    [[1], 1],
    [-1, -1]
]

const subTests = [
    [1, -1],
    ["1", -1],
    [[1], -1],
    [-1, 1]
]



describe("Create calculator tests suite", () => {
    adTests.forEach(x => it(`add${x[0]} => ${x[1]}`, () => {
        expect(calc.add(x[0])).to.equal(undefined);
        expect(calc.get()).to.equal(x[1]);
    }))
    it("add {} => 1", () => {
        expect(calc.add({})).to.equal(undefined);                 // към края на лекцията, недовършен код
        expect(calc.get()).to.equal(true);
    })
    subTests.forEach(x => it(`add${x[0]} => ${x[1]}`, () => {
        expect(calc.add(x[0])).to.equal(undefined);
        expect(calc.get()).to.equal(x[1]);
    }))

    // it("add 1 => 1", () => {
    //     expect(calc.add(1)).to.equal(undefined);
    //     expect(calc.get()).to.equal(1);
    // })
    // it("add '1' => 1", () => {
    //     expect(calc.add('1')).to.equal(undefined);
    //     expect(calc.get()).to.equal(1);
    // })
    // it("add [1] => 1", () => {
    //     expect(calc.add([1])).to.equal(undefined);
    //     expect(calc.get()).to.equal(1);
    // })
    // it("add {} => 1", () => {
    //     expect(calc.add({})).to.equal(undefined);
    //     expect(calc.get()).to.equal(true);
    // })
    // it("substract 1 => -1", () => {
    //     expect(calc.add(1)).to.equal(undefined);
    //     expect(calc.get()).to.equal(1);
    // })



    // beforeEach(() => {                         // Ako judge gi iska vatre
    //     calc = createCalculator();
    // })

})










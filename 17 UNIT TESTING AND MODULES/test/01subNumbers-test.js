// const { expect } = require("chai");
// const sum = require("../01.SubSum");    // ./ за същата директория, ../ за горната


// // проверка   дали въобще съществува function sum()
// describe("Sub sum lab task", () => {
//     it("Sub sum is a function", () => {
//         expect(typeof sum).to.equal("function");
//     })

//     // проверка   дали събира
//     it("Sub sum is adding up", () => {
//         expect(sum([1, 1])).to.equal(2);
//     })

//     // проверка   дали събира в рейндж от индекс до края
//     it("Sub sum is adding up from index to end of arr", () => {
//         expect(sum([1, 1, 1], 1)).to.equal(2);
//     })

//     // проверка   дали събира в рейндж с индекси за начало и край
//     it("Sub sum is adding up from index to end index", () => {
//         expect(sum([1, 1, 1, 1], 1, 2)).to.equal(2);
//     })

//     // проверка   дали събира в рейндж с индекси за начало и край
//     // ако индекса за край е по-голям от размера на масива
//     it("Sub sum is adding up if end is greater than arr.length", () => {
//         expect(sum([1, 1, 1, 1], 1, 10)).to.equal(3);
//     })

//     // проверка   дали събира в рейндж с индекси за начало и край
//     // ако индекса за начало е по-малък от 0
//     it("Sub sum is adding up if start is lower than 0", () => {
//         expect(sum([1, 1], -1, 1)).to.equal(2);
//     })

//     // проверка   дали събира само масив от числа, при различни данни в масива да дава NaN
//     it("Sub sum is adding up if arr is only numbers", () => {
//         expect(isNaN(sum(1, -1, 1))).to.equal(true);
//     })
// })

// // test saturation - допълнителни тестове, които ще ни покажат дали нашият код и тестове са правилни

// describe("Sub sum computes [10, 20, 30, 40, 50, 60], 3, 300	 => 150", () => {
//     it("Sub sum is adding up if start is lower than 0", () => {
//         expect(sum([10, 20, 30, 40, 50, 60], 3, 300)).to.equal(150);
//     })
//     it("Sub sum computes [1.1, 2.2, 3.3, 4.4, 5.5], -3, 1 => 3.3", () => {
//         expect(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)).to.equal(3.3);   //3.3000000000000003 възложителя казва как да го оправим
//     })
//     it("Sub sum computes [10, 'twenty', 30, 40], 0, 2 => NaN", () => {
//         expect(isNaN(sum([10, 'twenty', 30, 40], 0, 2))).to.equal(true);
//     })
//     it("Sub sum computes []], 1, 2 => 0", () => {
//         expect(sum([], 1, 2)).to.equal(0);
//     })
//     it("Sub sum computes 'text', 0, 2 => NaN", () => {
//         expect(isNaN(sum('text', 0, 2))).to.equal(true);
//     })
//     // it("Sub sum computes ", () => {
//     //     expect(sum()).to.equal();
//     // })
// })   

const { expect } = require("chai");
const sum = require("../01.SubSum");
describe("Sub sum test ", () => {
    it("Check for existance of function", () => {
        expect(typeof sum).to.equal("function");
    });
    it("Check for existance of array", () => {
        expect((Number.isNaN(sum(1,0,1)))).to.equal(true);
    });
    it("Check if start is 0 or grater", () => {
        expect(sum([1],-1,1)).to.equal(1);
    });
    it("Check if start is inside array or grater", () => {
        expect(sum([1,1],0,3)).to.equal(2);
    });

    //saturation tests:
    it("Check if examples are correct", () => {
        expect(sum([10, 20, 30, 40, 50, 60], 3, 300)).to.equal(150);
    });
    it("Check if examples are correct", () => {
        expect(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)).to.equal(3.3000000000000003);
    });
    it("Check if examples are correct", () => {
        expect(Number.isNaN(sum([10, 'twenty', 30, 40], 0, 2))).to.equal(true);
    });
    it("Check if examples are correct", () => {
        expect(sum([], 1, 2)).to.equal(0);
    });
    it("Check if examples are correct", () => {
        expect(Number.isNaN(sum('text', 0, 2))).to.equal(true);
    });
})







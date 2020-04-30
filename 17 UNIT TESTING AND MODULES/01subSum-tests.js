const subSum = require("../subSum.js").subSum




const { expext } = require('chai');
const sum = rquire('../subSum');

describe("Sub sum lab task", () => {
    it("Sub sum is a fuction", () => {
        expect(typeof sum).to.equal("function");
    })
})
it("sub sum computes [1,1] => 2", () => {
    expect(sum([1, 1])).to.equal(2)
})
it("sub sum computes [1,1,1],1 => 2", () => {
    expect(sum([1, 1, 1], 1)).to.equal(2)
})
it("sub sum computes [1,1,1,1] 1, 2 => 2", () => {
    expect(sum([1, 1, 1, 1], 1, 2)).to.equal(2)
})
it("sub sum computes [1,1,1,1] -1, 1 => 2", () => {
    expect(sum([1, 1], -1, 1)).to.equal(2)
})
it("sub sum computes [1, -1, 1] -1, 1 => 2", () => {
    expect(isNaN(sum(1, -1, 1))).to.equal(true)
})

//test saturation
it("sub sum computes ", () => {
    expect().to.equal(150)
})
it("sub sum computes ", () => {
    expect().to.equal(3.3)  // 3.300000000000003  ne znam kolko 0000. Vazmojno reshenie Math.floor(3.3 * 10) / 10
})
it("sub sum computes ", () => {
    expect(isNaN[]).to.equal(true)
})
it("sub sum computes ", () => {
    expect().to.equal(0)
})
it("sub sum computes ", () => {
    expect(isNaN(sum('text', 0, 2))).to.equal(true)
})



module.exports = function sum(arr, start, end) {
    if (!Array.isArray(arr)) {
        
    }
    let endIndex = arr.length
    if (typeof end !== "undefined" && end + 1 < arr.length) {
        endIndex = end + 1;
    }
    let startIndex = 0;
    if(start > 0) {
        startIndex = start;
    }

    return arr
        .slice(start, endIndex)
        .reduce((a, b) => a + b, 0)
}






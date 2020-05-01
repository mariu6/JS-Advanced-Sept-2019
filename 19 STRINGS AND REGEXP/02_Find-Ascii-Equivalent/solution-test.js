let main = require("./solution");
let { expect } = require("chai");

describe("text transform to ascii eq", () => {
    it("prints Error with non Camel or Pascal convention", () => {
        expect(main("83 111 John Adams 102 116 85 Roger 110 105"))
        .to.eq("74 111 104 110\n65 100 97 109 115\n82 111 103 101 114\nSoftUni");
    })
})

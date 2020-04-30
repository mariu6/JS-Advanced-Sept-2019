const { expect } = require('chai');
const rgbToHexColor = require('../06.rgbToHex');

// describe("RGB to HEX", () => {
//     it("non integer returns undefined", () => {
//         expect(rgbToHexColor(1.1, 1, 1)).to.equal(undefined);
//         expect(rgbToHexColor(-1, 1, 1)).to.equal(undefined);
//         expect(rgbToHexColor(256, 1, 1)).to.equal(undefined);
//     })
//     it("Lt than 0 returns undefined", () => {
//         expect(rgbToHexColor(1, 1.1, 1)).to.equal(undefined);
//         expect(rgbToHexColor(1, -1, 1)).to.equal(undefined);
//         expect(rgbToHexColor(1, 256, 1)).to.equal(undefined);
//     })
//     it("Gt than 255 returns undefined", () => {
//         expect(rgbToHexColor(1, 1, 1.1)).to.equal(undefined);
//         expect(rgbToHexColor(1, 1, -1)).to.equal(undefined);
//         expect(rgbToHexColor(1, 1, 256)).to.equal(undefined);
//     })
//     it("{0,0,0} => #000000", () => {
//         expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
//     })
//     it("{255,255,255} => #FFFFFF", () => {
//         expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
//     })
//     it("{255, 0, 0} => #FF0000", () => {
//         expect(rgbToHexColor(255, 0, 0)).to.equal("#FF0000");
//     })
//     it("{0, 255, 0} => #00FF00", () => {
//         expect(rgbToHexColor(0, 255, 0)).to.equal("#00FF00");
//     })
//     it("{0, 0, 255} => #0000FF", () => {
//         expect(rgbToHexColor(0, 0, 255)).to.equal("#0000FF");
//     })
//     it("missing arguments returns undefined", () => {
//         expect(rgbToHexColor(1, 1)).to.equal(undefined);
//     })
//     it("missing arguments returns undefined", () => {
//         expect(rgbToHexColor(1)).to.equal(undefined);
//     })
//     it("missing arguments returns undefined", () => {
//         expect(rgbToHexColor()).to.equal(undefined);
//     })
// })

describe("RGBtoHEX functionality", () => {
    it("test 7/ of 8:  missing arguments return undefined", () => {
        expect(rgbToHexColor()).to.eq(undefined);
    });
    it("proper works, 0 => #000000", () => {
        expect(rgbToHexColor(0,0,0)).to.eq("#000000");
    });
    it("proper works, F => #FFFFFF", () => {
        expect(rgbToHexColor(255,255,255)).to.eq("#FFFFFF");
    });
    it("checks for each color", () => {
        expect(rgbToHexColor(255,0,0)).to.eq("#FF0000");
        expect(rgbToHexColor(0,255,0)).to.eq("#00FF00");
        expect(rgbToHexColor(0,0,255)).to.eq("#0000FF");
    });
    it("checks for out of range and float numbers", () => {
        expect(rgbToHexColor(0,0,1.1)).to.eq(undefined);
        expect(rgbToHexColor(0,0,-1)).to.eq(undefined);
        expect(rgbToHexColor(0,0,256)).to.eq(undefined);
    });
})






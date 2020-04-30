const { expext } = require('chai');
const sum = rquire('../rgbToHex');

describe("RGB to HEX", () => {
    it("non integer returns undefined", () => {
        expect(rgbToHex(1.1, 1, 1)).to.equal(undefined);
        expect(rgbToHex(1, 1.1, 1)).to.equal(undefined);
        expect(rgbToHex(1, 1, 1.1)).to.equal(undefined);
    })
    it("Lt than 0 returns undefined", () => {
        expect(rgbToHex(-1, 1, 1)).to.equal(undefined);
        expect(rgbToHex(1, -1, 1)).to.equal(undefined);
        expect(rgbToHex(1, 1, -1)).to.equal(undefined);
    })
    it("Gt than 255 returns undefined", () => {
        expect(rgbToHex(256, 1, 1)).to.equal(undefined);
        expect(rgbToHex(1, 256, 1)).to.equal(undefined);
        expect(rgbToHex(1, 1, 256)).to.equal(undefined);
    })
    it("{0,0,0} => #000000", () => {
        expect(rgbToHex(0, 0, 0)).to.equal("#000000");
    })
    it("{255,255,255} => #FFFFFF", () => {
        expect(rgbToHex(0, 0, 0)).to.equal("#FFFFFF");
    })
})





function isNotValidColor(color) {
    return !Number.isInteger(color) || (color < 0) || (color > 255)
}

module.exports = function rgbToHexColor(red, green, blue) {
    if ([red, green, blue].filter(isNotValidColor).length > 0) {
        return undefined;
    }

    return "#" + ((1 << 24) + (red << 16) + (green << 8) + blue)
    .toString(16)
    .slice(1)
    .toUppercase();   /// RGB TO HEX formula

    // return "#" + 
    // ("0" + red.toString(16).toUpperCase()).slice(-2) +
    // ("0" + green.toString(16).toUpperCase()).slice(-2) +
    // ("0" + blue.toString(16).toUpperCase()).slice(-2)
}
const rgbToHexColor = function (red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))    // ако не е цяло чусло или е извън обхват
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

module.exports = rgbToHexColor;

// console.log(rgbToHexColor(0, 0));
console.log(rgbToHexColor(0,0,1.1))

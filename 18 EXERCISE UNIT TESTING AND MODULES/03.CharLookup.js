function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

// console.log(lookupChar("0123456789", 5));
// console.log(lookupChar("0123456789", -1));
// console.log(lookupChar("0123456789", 11));
// console.log(lookupChar("0123456789", 1.1));
// console.log(lookupChar("0123456789", "5"));
// console.log(lookupChar(01234567, 5));
// console.log(lookupChar(01234567, "5"));
// console.log(lookupChar("", 0));
// console.log(lookupChar("", ));
// console.log(lookupChar(12,));

module.exports = lookupChar;


console.log(lookupChar())
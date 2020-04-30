function isSymmetric(arr) {
    if (!Array.isArray(arr))
    return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

module.exports = isSymmetric;

// ще викаме с един масив и ще проверяваме дали е равна на себе си отзад напред; ЙСОН-и
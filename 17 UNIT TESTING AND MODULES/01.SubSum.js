// module.exports = function sum(arr, start, end) {
//     if (!Array.isArray(arr)) {
//         return NaN;
//     }
//     let endIndex = arr.length;    // ако няма end или ако е много голям, да кара до края на масива
//     if (typeof end !== "undefined" && end + 1 < arr.length) {  // ако съществува и е в рейнджа на масива
//         endIndex = end + 1;             // да си го вземе (+1 защото slice не взима последния елемент)
//     }
//     let startIndex = 0;
//     if (start > 0) {
//         startIndex = start;
//     }

//     arr = arr
//         .slice(startIndex, endIndex)
//         .reduce((a, b) => a + b, 0)
//     arr = Math.floor(arr * 1000) / 1000;
//     return arr;
// }

// console.log(module.exports([1, 2, 3, 4, 5], 3, 4));


function sum(arr, first, last) {

    if (!(Array.isArray(arr))) {
        return NaN;
    }
    first = Math.max(0, first);
    return arr.slice(first, last + 1).reduce((a, b) => a + Number(b), 0);
}

module.exports = sum;
console.log(sum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(module.exports([10, 'twenty', 30, 40], 0, 2));
console.log(sum('text', 0, 2));
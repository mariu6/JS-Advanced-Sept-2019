// function oddNumbers(array) {
//     let out = array.filter((_,x) => x % 2 !== 0).map(x => x*2).reverse();
//     console.log(out.join(' '));
// }

// oddNumbers([10, 15, 20, 25]);
// oddNumbers([3, 0, 10, 4, 7, 3]);

function odd(arr) {
    return arr.filter((_,i) => i % 2 !== 0).map(x => x*2).reverse().join(" ");
}
console.log(odd([3, 0, 10, 4, 7, 3]));
console.log(odd([10, 15, 20, 25]));
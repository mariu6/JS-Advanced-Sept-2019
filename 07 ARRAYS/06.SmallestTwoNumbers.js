// function smallestTwo(array) {
//     let out = array.sort((a,b) => a -b).slice(0,2);
//     console.log(out.join(' '));
// }

// smallestTwo([30, 15, 50, 5]);
// smallestTwo([3, 0, 10, 4, 7, 3]);


function small2(arr) {
    return arr.slice().sort((a, b) => a - b).slice(0, 2).join(" ");
}   // първият slice() e, за да не модифицираме arr.
//  програмата работи и само с един елемент в arr
console.log(small2([3, 0, 10, 4, 7, 3]));
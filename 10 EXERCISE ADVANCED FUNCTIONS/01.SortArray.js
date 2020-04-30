// function solve(arr, type) {
//      type === 'asc'
//         ? arr.sort((a, b) => a - b)
//         : arr.sort((a, b) => b - a)
//         return(arr);
// }
// console.log(solve([3,1,2,10], 'asc'));



function sort(...args) {
        return args[1] === "asc" ? [...args[0]].sort((a, b) => a - b) : [...args[0]].sort((a, b) => b - a)
}

console.log(sort([14, 7, 17, 6, 8], 'desc'))
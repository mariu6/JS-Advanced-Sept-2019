// function extract(array) {
//     let out = [array[0]];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] >= out[out.length-1]) {
//             out.push(array[i]);
//         }
//     }
//     console.log(out.join('\n'));
// }

// extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);

// Mihaela Mileva 
// function main(input) {
//     let result = input.slice(0, 1);                      // Единствената разлика от моето решение
//     for (let i = 1; i < input.length; i++) {
//         if (input[i] >= result[result.length - 1]) {
//             result.push(input[i]);
//         }
//     }
//     return result.join('\n')
// }

function main(input) {     // greedy algorithm
    let result = input.reduce((acc, curr, index, arr) => {
        if (curr >= Math.max(...acc)) {
            acc.push(curr);
        }
        return acc;
    }, [])
    return result.join('\n')
}
console.log(main([1, 3, 8, 4, 10, 12, 3, 2, 24]));


function main1(array) {
    let out = [];
    array.map(x => x >= (out[out.length-1] || array[0]) ? out.push(x) : x);
// Ако х 
    return out.join("\n");
}

console.log(main1([1, 3, 8, 4, 10, 12, 3, 2, 24]));

// 01:31

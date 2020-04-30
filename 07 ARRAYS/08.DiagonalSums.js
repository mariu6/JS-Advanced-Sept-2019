// function diag(array2d) {
//     let out = [];
//     out.push(array2d.map((x, i) => x[i]).reduce((a, b) => a + b));
//     out.push(array2d.map((x, i) => x[(x.length - 1) - i]).reduce((a, b) => a + b));
//     console.log(out.join(' '));
// }

// diag([[20, 40],
// [10, 60]]);


// function diagonals(arr2d) {
//     let out = [];
//     out.push(arr2d.map((x, i) => x[i]).reduce((a, b) => a + b));  // главен диагонал
//     out.push(arr2d.reverse().map((x, i) => x[i]).reduce((a, b) => a + b)); // обръщам редовете и пак главен диагонал
//     return out.join(" ");
// }

// console.log(diagonals([[3, 5, 17],
// [-1, 7, 14],
// [1, -8, 89]]));

// решение на Чаов => агрегираме в масив с два елемента result[0] и [1]. 
function solve(data) {
    return data.reduce((result, row, i, arr) => {  // ползваме пълната функционалност на .reduce()
        result[0] += row[i];
        result[1] += row[(arr.length - 1) - i];
        return result;
    }, [0, 0]).join(" ");
}
console.log(solve([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]));
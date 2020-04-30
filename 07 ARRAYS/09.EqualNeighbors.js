
// function eqNeighbors(array2d) {
//     let out = [];
//     for (let i = 1; i < array2d.length; i++) {
//         for (let j = 0; j < array2d[i].length; j++) {
//             out.push(array2d[i][j] === array2d[i - 1][j]);
//         }
//     }
//     for (let i = 0; i < array2d.length; i++) {
//         for (let j = 1; j < array2d[i].length; j++) {
//             out.push(array2d[i][j] === array2d[i][j - 1]);
//         }
//     }
//     console.log(out.filter(v => v).length);
// }

// eqNeighbors([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '9', '7', '5', '4']]);

// eqNeighbors([['test', 'yes', 'yo', 'ho'],
// ['well', 'done', 'yo', '6'],
// ['not', 'done', 'yet', '5']]);

// eqNeighbors([['2', '2', '5', '7', '4'],
// ['4', '0', '5', '3', '4'],
// ['2', '5', '5', '4', '2']]);


// function eqNeighbors(array2d) {
//     console.log(array2d);
//     function swap2DArray(array2D) {
//         let swap2D = [];
//         for (let i = 0; i < array2D[0].length; i++) {
//             swap2D.push(array2D.map(x => x[i]))
//         }
//         console.log(swap2D);
//         return swap2D;
//     }

//     function findEquals(arr2D) {
//         return arr2D.map(y => {
//             y = y.map((x, i) => y[i] === y[i - 1])
//                 .filter(v => v)
//                 console.log(y);
//             return y.length;
//         }).filter(v => v).length;
//     }
//     console.log(findEquals(swap2DArray(array2d)));
//     console.log(findEquals(array2d));
//     let out = findEquals(swap2DArray(array2d)) + findEquals(array2d);
//     console.log(out);
// }

// let a = [1,2,3,0,0,1]
// let v = a.map((_, i) => a[i] === a[i - 1]);
// console.log(a, v.filter(v => v).length);



function solve(arr) {
    function intersect(a, b) { // вертикална проверка
        return a.filter((element, index) => b[index] === element).length;
    }
    function swap2DArray(array2D) {   // замяна на редове с колони
        let swap2D = [];
        for (let i = 0; i < array2D[0].length; i++) {
            swap2D.push(array2D.map(x => x[i]))
        }
        // console.log(swap2D);
        return swap2D;
    }

    let result = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        result += intersect(arr[i], arr[i + 1]);
    }
    arr = swap2DArray(arr)
    for (let i = 0; i < arr.length - 1; i++) {
        result += intersect(arr[i], arr[i + 1]);
    }
    return result;
}


console.log(solve([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]));
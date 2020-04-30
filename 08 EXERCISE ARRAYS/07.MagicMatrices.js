// function magic(array2d) {
//     let out = true;
//     for (let i = 1; i < array2d.length; i++) {
//         if (array2d[i].reduce((a, b) => a + b) !== array2d[i - 1].reduce((a, b) => a + b)) {
//             out += false;
//         }

//     }
//     console.log(out === true ? out : false);
// }

// magic([[4, 5, 6],
// [6, 5, 4],
// [5, 5, 5]]);

// magic([[1, 0, 0],
// [0, 0, 1],
// [0, 1, 0]]);

// // Mihaela Mileva 
// function main(input) {
//     let sum = input[0].reduce((a, b) => a + b);
//     let isMagic = true;
//     for (let i = 0; i < input.length; i++) {
//         let sumRows = input[i].reduce((a, b) => a + b); //сумата на редовете
//         let sumCols = input.map(x => x[i]).reduce((a,b) => a+b);  
//         // ЗАВЪРТАНЕ НА МАСИВА КОЛОНИ-РЕДОВЕ  input.map(x => x[i])    и после сумата на редовете;
//        if (sumRows !== sumCols || sumRows !== sum || sumCols !== sum) {
//            isMagic = false;
//        }
//     }
//     return isMagic;
// }

// function main(input) {
//     let sum = input[0].reduce((a, b) => a + b);              // взимам един елемент (сумата на първия ред)        [4,5,6] = 15

//     // acc - акумулатор, cur - елемента в момента, ind - номера на елемента в момента, matrix - оригиналния импут
//     let cols = input.reduce((acc, cur, ind, matrix) => {     // взимам обърната матрица, като за всеки ред(елемент) на инпут правя redue  [4,5,6] => {
//         acc[ind] = matrix.map(x => x[ind]);                  // акумулатора с индекса си (спрямо броя редове в матрицата) чете и слага в acc [x[0][0], x[1][0], x[2][0]] 
//         return acc;                                          // и така от колоните на input(сега matrix) прави редове(елементи) в новата матрица cols 
//     }, []);                                                  // изходящият формат на cols е [acc[0], acc[1], acc[2]]

//     let row = [...input];                                    // хоризонталните редове нямат нужда обръщане, за да се намери сбора от елементите на ред
//     return row.every(r => r.reduce((a, b) => a + b) === sum) && cols.every(c => c.reduce((a, b) => a + b) === sum);  // return true или false
//     // правя проверка с every дали всички елементи са равни на sum. Ако някой не е , every ще върне false. Същото с колоните и ги сравнявам с &&
// }

// console.log(main([[4, 5, 6],
// [6, 5, 4],
// [5, 5, 5]]));

// main([[1, 0, 0],
// [0, 0, 1],
// [0, 1, 0]]); 


function main1(arr2d) {
    let sum = arr2d[0].reduce((a, b) => a + b);
    let sumRows = arr2d.map(x => x.reduce((a, b) => a + b));
    let sumCols = arr2d.map((_, i) => arr2d.map(x => x[i]).reduce((a, b) => a + b)); // ЗАВЪРТАНЕ НА МАТРИЦАТА И редюс
    // console.log(sum);
    // console.log(sumRows);
    // console.log(sumCols);
    return sumRows.every(x => x === sum) && sumCols.every(x => x === sum)
}

console.log(main1([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));

console.log(main1([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]));


//152
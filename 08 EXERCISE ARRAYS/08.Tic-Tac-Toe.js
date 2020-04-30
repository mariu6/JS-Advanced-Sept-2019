// function main(input) {

//     function isLine(matrix) {
//         // console.log(matrix);
//         let haveLine = matrix.map(x => x.every(v => v === ('X' || "0")));
//         let cols = matrix.reduce((acc, cur, ind, matr) => {     // взимам обърната матрица, като за всеки ред(елемент) на инпут правя redue  [4,5,6] => {
//             acc[ind] = matr.map(x => x[ind]);                  // акумулатора с индекса си (спрямо броя редове в матрицата) чете и слага в acc [x[0][0], x[1][0], x[2][0]] 
//             return acc;                                          // и така от колоните на input(сега matrix) прави редове(елементи) в новата матрица cols 
//         }, []);
//         // console.log(cols);
//         cols = cols.map(x => x.every(v => v == ('X' || 0)))
//         // console.log(cols);
//         let diagonals = matrix.map((x,i) => x[i] == ('X' || 0));
//         console.log(diagonals);
//         console.log(haveLine);
//         haveLine.concat([...cols],[...diagonals]); 
//         console.log(haveLine);
//         console.log((haveLine.includes(true)));
//         return (haveLine.includes(true));
//     }


//     let array2d = Array(3).fill().map(() => Array(3).fill(false));   // създаване на двумерен масив
//     // console.log(array2d);
//     let i = 0;
//     input.slice(0, 9).forEach((e) => {
//         e = e.split(' ');
//         if (array2d[e[0]][e[1]]) {
//             console.log("This place is already taken. Please choose another!");
//         } else {
//             array2d[e[0]][e[1]] = i % 2 === 0 ? 'X' : 0;
//             i++;
//         }
//         if (isLine(array2d)) {
//             console.log(`Player ${!i % 2 === 0 ? 'X' : 0} wins!`);
//             console.log(array2d);
//             return;
//         }
//         // console.log(array2d);
//     });
// }

// main(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
// main(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
// main(["0 1", "0 0", "0 2",  "2 0", "1 1", "1 0", "1 2", "2 2", "2 1", "0 0"]);






// let array = [1, 2, 3, 4, 5];
// array = array.filter((_,i) => !(i % 2 === 0)).map(x => x * 2).reverse().join(' ');
// console.log(array);

// let arr = [ [4, 5, 6],
//             [6, 5, 4],
//             [5, 5, 5] ];

// arr.forEach(printRow);

// function printRow(row) {
//     console.log(row);
//     row.forEach(printNumber);
// }

// function printNumber(num) {
//     console.log(num);
// };

// function printRotatedArr(array) {
//     return arr.reduce((a, b, i, row) => {
//         a[i] = row.map(x => x[i]); 
//         return a;
//     }, []);
// }

// console.log(printRotatedArr(arr));

function main1(input) {
    input = input.map(x => x.split(" ").map(Number));                           // създавам си двумерен масив с входните данни
    let desk = Array(3).fill().map(() => Array(3).fill(false));     // създавам си 3х3 матрица и я пълня с false
    let player = "X";

    for (let i = 0; i < input.length; i++) {
        if (desk.flat().every(x => x !== false)) {                  // ако дъската е пълна, край на играта
            console.log(`The game ended! Nobody wins :(`);
            printDesk(desk);
            return;
        }
        if (desk[input[i][0]][input[i][1]] !== false) {             // ако полето е вече заето, грачът играе отново
            console.log("This place is already taken. Please choose another!");
        } else {
            desk[input[i][0]][input[i][1]] = player;
            checkForWinner(desk, player);
            player = player === "X" ? "O" : "X";
        }
    }

    function checkForWinner(desk, player) {
        let row = desk.map(row => row.every(x => x === "O")).some(line => line === true) || desk.map(row => row.every(x => x === "X")).some(line => line === true);
        let mainDiagonal = desk.map((x, i) => x[i]).every(x => x === "O") || desk.map((x, i) => x[i]).every(x => x === "X");
        let swapDesk = desk.map((_, i) => desk.map(x => x[i]));
        let col = swapDesk.map(col => col.every(y => y === "O")).some(line => line === true) || swapDesk.map(col => col.every(y => y === "X")).some(column => column === true);
        let secondaryDiagonal =  desk.map((x, i) => x[x.length - 1 - i]).every(x => x === "O") || desk.map((x, i) => x[x.length - 1 - i]).every(x => x === "X");
        if ([row, mainDiagonal, col, secondaryDiagonal].includes(true)) {
            console.log(`Player ${player} wins!`);
            printDesk(desk);
            return input = [];
        }
    }

    function printDesk(desk) {
        return desk.map(row => console.log(row.join("\t")));
    }
}

// main1(["0 1", "2 1", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "0 0", "0 0"]);
// main1(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
// main1(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
// main1(["0 1", "0 0", "0 2",  "2 0", "1 1", "1 0", "1 2", "2 2", "2 1", "0 0"]);
// main1(["0 1","0 0","0 2","2 0","1 0","1 2","1 1","2 1","2 2","0 0"]);

main1(["2 0", "0 0", "2 1", "1 1", "1 0", "2 2", "2 0", "2 1", "2 2"]);
// main1(["2 2", "0 0", "2 1", "0 1", "1 0", "0 2", "2 0", "2 1", "2 2"]);
// main1(["0 1","0 0","0 2","2 0","1 0","1 2","1 1","2 1","2 2","0 0","2 2","0 0","2 2","0 0"]);
// main1(["0 1","0 0","0 2","2 0","1 0","1 2","1 1","2 1","2 2","0 0","2 2","0 0","2 2","0 0"]);

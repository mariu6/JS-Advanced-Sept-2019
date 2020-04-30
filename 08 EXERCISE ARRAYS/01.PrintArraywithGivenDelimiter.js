// @ts-check

// function print(array) {
//     let out = array.slice(0, array.length - 1);
//     console.log(out.join(`${array[array.length - 1]}`));
// }
// print(['One', 'Two', 'Three', 'Four', 'Five', '-']);

// print(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']);

function print1(arr) {
    let delimiter = arr.pop();
    return arr.join(delimiter);
}

console.log(print1(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']));


// let numbers = [];

// // Оптимизирана рекурсия на Фибоначи
// function fib(n) {
//     if (numbers[n]) {
//         return numbers[n];
//     }

//     if (n === 1 || n === 2) {
//         return 1;
//     }
//     let result = fib(n-1) + fib(n-2);
//     numbers[n] = result;
//     return result;
// }

// console.log(fib(50));

// // Рекурсия на Фибоначи
// function fib1(n) {
//     if (n === 1 || n === 2) {
//         return 1;
//     }
//     return fib(n-1) + fib(n-2);
// }

// console.log(fib1(25));


// // намиране на най-дълга под-редица от възходящи числа (с прескачане)
// function solve(array) {
//     let solutions = [];
//     let prev = [];
//     let maxSolution = 0;
//     let maxSolutionIndex = 0;

//     for (let current = 0; current < array.length; current++) {
//         let solution = 1;
//         let prevIndex = -1;
//         let currentNumber = array[current];

//         // първия път пропуска, защото solIndex = current = 0
//         for (let solIndex = 0; solIndex < current; solIndex++) {
//             let prevNumber = array[solIndex];
//             let prevSolution = solutions[solIndex];

//             if (currentNumber > prevNumber && solution <= prevSolution) {
//                 solution = prevSolution + 1;
//                 prevIndex = solIndex;
//             }
//         }
//         solutions[current] = solution;
//         prev[current] = prevIndex;

//         if (solution > maxSolution) {  // > изважда първата най-дълга редица, а >= ще презапише последната редица
//             maxSolution = solution;
//             maxSolutionIndex = current;
//         }
//     }
//     console.log(maxSolution);
//     // console.log(maxSolutionIndex);
//     // console.log(solutions);

//     let index = maxSolutionIndex;
//     let result = [];

//     while(index != -1) {
//         let currentNumber = array[index];
//                 result.push(currentNumber);
//         index = prev[index];
//     }
//     result.reverse();
//     console.log(result.join(" "));
// }

// solve([3, 14, 5, 12, 15, 7, 8, 9, 11, 10, 1]);

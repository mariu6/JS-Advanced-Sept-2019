function mathOps(...input) {
    let operator = input.pop();
    let result = input.reduce((a, b) => `${a} ${operator} ${b}`);
    let res = eval(result);
    console.log(res);
}
mathOps(5, 6, '+');

// Lector's code: 
function solve(x, y, operator) {
    console.log(eval(`${x} ${operator} ${y}`));
}
solve(5, 6, '+');
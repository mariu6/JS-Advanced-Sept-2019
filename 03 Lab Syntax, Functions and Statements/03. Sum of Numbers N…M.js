function sum(...input) {
    let sum = input.map(Number).reduce((a, b) => a + b);
    console.log(sum);
}
sum('1', '5');
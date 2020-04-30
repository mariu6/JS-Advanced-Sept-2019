function stringLength(...input) {
    let sum = input.join("").length;
    let average = Math.floor(sum / input.length);
    console.log(sum);
    console.log(average);
}
stringLength('chocolate', 'ice cream', 'cake');

// Lector's code: 
function solve(...params) {
    let sum = params.reduce((a, b) => a + b.length,0);
    let avrg = Math.floor(sum / params.length);
    console.log(`${sum}\n${avrg}`);
}
solve('chocolate', 'ice cream', 'cake');
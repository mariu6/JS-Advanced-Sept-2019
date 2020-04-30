function printN(array) {
    let step = array.pop()
    let out = array.filter((_,x) => x % step === 0);
    console.log(out.join(`\n`));
}

printN(['5', '20', '31', '4', '20', '2']);
printN(['dsa','asd', 'test', 'tset', '2']);


// Mihaela Mileva
function main(input) {
    let step = +input.pop();
    return input.filter((el, index) => {
        return index % step === 0;
    }).join('\n');
}
console.log(main(['5', '20', '31', '4', '20', '2']));
console.log(main(['dsa','asd', 'test', 'tset', '2']));

function printNthEl(array) {
    let n = array.pop();
    return array.filter((x,i) => i % n === 0).join("\n");
}
console.log(printNthEl(['5', '20', '31', '4', '20', '2']));
console.log(printNthEl(['dsa','asd', 'test', 'tset', '2']));
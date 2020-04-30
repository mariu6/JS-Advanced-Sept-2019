// function rotate(array) {
//     let rotations = Number(array.pop());
//     for (let i = 0; i < rotations; i++) {
//         let buff = array.pop();
//         array.unshift(buff);
//     }
//     console.log(array.join(' '));
// }
// rotate(['1', '2', '3', '4', '2']);
// rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);

// Mihaela Mileva
// function main(input) {
// let step = +input.pop() % input.length;

// for (let i = 0; i < step; i++) {
//     let el = input.pop();
//     input.unshift(el);
// }
// return input.join(' ');
// }


function main(input) {
    let step = +input.pop() % input.length;

    return input.reduceRight((acc, curr) => {      // reduceRight за да започне от последния елемент наобратно
        if (step) {       // става и с while(step)
            // УСЛОВИЕ ЗА ПРИКЛЮЧВАНЕ - Дължината на масива или ако не влиза в if-a(step == false <-> 0), ще връща непроменен масив и като го изцикли ще излезе.
            // acc = [curr, ...acc.slice(0, input.length - 1)];
            acc.unshift(acc.pop());
            step--;
        }
        return acc;
    }, [...input]).join(' ');                     //  НАЧАЛНА СТОЙНОСТ за reduce е [...input], за да имаме какво да обработваме още от първата итерация
}
console.log(main(['1', '2', '3', '4', '2']));
console.log(main(['Banana', 'Orange', 'Coconut', 'Apple', '15']));


function rotate(array) {
    let step = array.pop() % array.length;   // за да не въртим 100 пъти масив от 4 елемента :D
    while (step) {
        array.unshift(array.pop());
        step--;
    }
    return array.join(" ");
}

console.log(rotate(['1', '2', '3', '4', '2']));
console.log(rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']));
// function numbers(num) {
//     num = num.toString();               // num = num + "";  num = String(num);
//     num = num.split('').map(Number);
//     let sum = num.reduce((a, b) => a + b);
//     let first = num.shift();
//     let pull = num.filter(x => x === first);
//     console.log(pull.toString() === num.toString());
//     console.log(sum);
// }
// numbers(2222222);

// function equality(number) {
//     let arrNum = number.toString().split("").map(Number);
//     if (arrNum[0] * arrNum.length === sum(arrNum)) {   // ако първият елемент, умножен по дължината на масива е равен на сумата на елементите
//         console.log(true);                             // тогава числото е с еднакви цифри? Ми, не е...
//     } else {
//         console.log(false);
//     }
//     console.log(sum(arrNum));
//     function sum(array) {
//         return array.reduce((a, b) => a + b);
//     }
// }
// equality(22132222);

function iron(number) {     
    let arr = String(number).split("").map(Number);         // правя от номера масив от числа
    let sum = arr.reduce((a,b) => a + b);                   // намирам сумата на елементите
    let equal = arr.filter((x) => x*arr.length === sum);    // сравнявам всяко число умножено по общия брой дали дава сумата
    console.log(equal.length === arr.length);               // печатам дали са еднакви числата
    console.log(sum);                                       // печатам сумата
}
iron(231222);
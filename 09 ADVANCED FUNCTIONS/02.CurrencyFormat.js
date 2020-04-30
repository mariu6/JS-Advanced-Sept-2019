// function currencyFormatter(separator, symbol, symbolFirst, value) {
//     let result = Math.trunc(value) + separator;
//     result += value.toFixed(2).substr(-2, 2);
//     if (symbolFirst) return symbol + ' ' + result;
//     else return result + ' ' + symbol;
// }

// function result(formatter) {                             // влиза във функцията, а форматтер е горната функция   
//     return function(value) {                             // влиза във функцията, която ще бъде върната като изход за задачата
//         return formatter(',', '$', true, value);         // връща функция форматер(4) value е 5345 - подадената на входа стойност
//     }
// }


// let dollarFormatter = result(currencyFormatter);          // $форматер е резулт с аргумент - функцията къренсиформатер. Отива на ред 8
// console.log(dollarFormatter(5345));   // $ 5345,00           Извикваме функцията $форматер(5345) ()отива на ред 15
// console.log(dollarFormatter(3.1429)); // $ 3,14
// console.log(dollarFormatter(2.709));  // $ 2,71


// Чаов решение:
// function currencyFormatter(separator, symbol, symbolFirst, value) {
//     let result = Math.trunc(value) + separator;
//     result += value.toFixed(2).substr(-2, 2);
//     if (symbolFirst) return symbol + ' ' + result;
//     else return result + ' ' + symbol;
// }

// let dollarFormatter = currencyFormatter.bind(undefined, ",", "$", true, value = 5);  // сложих value да е равно на 5, иначе не тръгва...

// console.log(currencyFormatter(",", "лв", false, 10), dollarFormatter(10));


function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

// console.log(currencyFormatter(",","$",true, 15));

function result(formatter) {
    return function (value) {
        return formatter(",", "$", true, value);
    }
}

let dollarFormatter = result(currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71



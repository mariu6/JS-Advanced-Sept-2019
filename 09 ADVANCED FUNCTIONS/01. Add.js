// function solve(num) {
//     return function (addend) {
//         return num + addend;
//     }
// }

// let add = solve(5);
// console.log(add(3));







// // let nestedArray = [1,[2,3]];
// // console.log(nestedArray);
// // let p = JSON.stringify(nestedArray);
// // console.log(p);
// // console.log(JSON.parse(p));







// Function.prototype.curry = function () {

//     function toArray(x) {
//         return Array.prototype.slice.call(x);
//     }

//     if (arguments.length < 1) {
//         return this;
//     }
//     let _method = this,
//         args = toArray(arguments);

//     return function () {
//         return _method.apply(this, args.concat(toArray(arguments)));
//     }
// }


// function sumNumbers(x, y) {
//     return x + y;
// }

// const addTo5 = sumNumbers.curry(5);

// console.log(addTo5(10));   // 15



function solution(num) {
    return function (a) {
        return  a + num;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));


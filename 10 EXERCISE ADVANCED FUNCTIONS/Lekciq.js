function solve(a) {     // higher-order function - функцията над тази, която връщаме.
    return function (b) {    // тази функция е без име ;)
        return a * b;
    }
}

let multiplyer = solve(5);   // така извикваме функцията солв
multiplyer(3);      // това също е функция

// HOFunct се използва, когато искаме да преизползваме някаква логика 

// Предикат - функция, която връща true / false. 
// Всяка ламбда функция се нарича предикат

let arr = [1, 2, 3, 4];
arr.every(el => el > 2);   // дали всички елементи на масива са по-големи от 2
// false

// Обяснение на Къринг:

function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        }
    }
}

console.log(multiply(1)(2)(3));   // 6
// извиквам първата функция с (1), после добавям другите стойности в отделни скоби

console.log(multiply(1)(2)());   // NaN  поради липсата на трети елемент, function aко липсват и скобите

// Closure - познава променливи в своята функция, както и в тези от по-висок ред. 
// Ако променлива е декларирана във външната функция , но след функцията май не я вижда?

// IIFE - изпълнява се при декларирането си, не се хойства

const increment1 = (function () {   // трябва да я присвоим на променлива, за да се изпълни при извикването на променливата
    let counter = 1;
    return function () {          // не знам защо я слагаме тази функция...
        console.log(++counter);   //Каунтера може да се манипулира само вътре във функцията;
    }
})()

increment1();  // 2
increment1();  // 3  При всяко извикване се изпълнява отново, увеличавайки брояча.

const increment2 = (function () {   // трябва да я присвоим на променлива, за да се изпълни при извикването на променливата
    let counter = 10;
    return console.log(++counter);
})()   // 11    Не може да се извиква с increment2() или increment2;


const increment3 = (function() {
    let counter = 1;

    return function (addend) {
        counter += addend;
        console.log(counter);
    }
})();

increment3(2);  // 3
increment3(2);  // 5 
increment3(2);  // 7   увеличава се с (2) спрямо предходното при всяко извикване


// callback функция - която получава резултати от външни (REST) заявки


// MOCK testing  JS DOM GLOBAL 

//function.bind - 
//call
//apply 


function solve(a) {
    let x = 100;        
    return function (b) {
        return x + a/b;
    }
}
let divider = solve(5); // a = 5
console.log(divider(3)) // b = 3, x + (a / b) = 101.6666666666666667
console.log(solve.x);  // няма достъп отвън до променливи, затворени в клоужър на функция
console.log(solve(5)(3));  // също е 101.66666666666667

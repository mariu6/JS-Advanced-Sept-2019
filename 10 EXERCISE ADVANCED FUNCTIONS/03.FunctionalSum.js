
// iffie на Кирил

let add =    // ДА НЕ СЕ СЛАГА В ДЖЪДЖ ТОЗИ РЕД, само функцията
(function() {      // 1. higher order function
    let sum = 0;              // 2. closure, initialazing sum = 0


    return  function add(num) {  // 3. отива да вземе първата променлива num = 1  

        sum += num;             // 6. събира с променливата (1)    10. събира с (6)   14. събира

        // със стрингосването на add изчистваме числото (тест с махането му показа кода като текст)
        add.toString = function() {   // 7. за да върне числото, а не като масив    11. отново   15. ---
            return sum;
        }
        return add;      // 8. Вр а add.     Не е рекурсия    12. връща add     16. --- 
    }                              // 4. спирка тук 
} ())

console.log(add(1)(6)(-3).toString());   // 5. взима първия аргумент(1)  9. взима втория (6)  13. взима (-3) 17. Отпечатва резултата!!! Curriyng





// iffie

// function add(num) {
//     let sum = num;

//     if (function add(num)) {
//         return function add(num) {
//             sum += num;
//             add.toString = function () {
//                 return sum;
//             }
//             return add;
//         }
//     } else {
//         return add;

//     }

// }

// console.log(add(2).toString());





// Първите два реда от програмата са само за входна точка и инициализиране на add и sum. Носи името add заради условието.
// loop-а е между  < return  function add(num) >  и  < return add; >
// 


// function add(...args) {
//     if (args.length >= 4) {
//       return args.reduce((acc, curr) => {
//         return (acc = acc + curr);
//       }, 0);
//     } else {
//       // Bind the arguments you have to this function, and return it:
//       return add.bind(null, ...args)
//     }
//   }
// console.log(add(1)(6)(-3)(-4).toString());



// function add(...input) {
//     let sum = input.reduce((a,b) => a+b);

//     return sum;
// }

// console.log(add(1,2,3));

// function common(x, y) {
//     let z = Math.min(x, y);
//     for (let i = z; i >= 1; i--) {
//         if (x % i === 0 && y % i === 0) {
//             console.log(i);
//             return;
//         }
//     }
// }

// common(27, 18);

// function solve(x, y) {  // (18,27)                            
//     while (y) {         // (27)     докато y е различно от 0 
//         let temp = y;   // (temp = 27)     буфера става y
//         y = x % y;      // (y = 18 % 27, няма деление, y = 18) y е равно на остатъка от модулното деление
//         x = temp;       // (x = 27)      x приема стойността на y отпреди делението
//     }                   // и завъртаме отново, този път х=27, у=18
// console.log(x);
// }
// solve(18, 27);

function solve(...input) {
    let sortedArr = input.sort((a, b) => a - b);
    let out = sortedArr.reduce((a, b) => {
        while (a != 0) {    //      докато a е различно от 0 
            let temp = a;   //      буфера става a
            a = b % a;      //      a е равно на остатъка от модулното деление
            b = temp;       //      b приема стойността на a отпреди делението
        }                   //      и завъртаме отново
        return b;
    });
    console.log(out);
}
solve(2154, 456, 324, 3);

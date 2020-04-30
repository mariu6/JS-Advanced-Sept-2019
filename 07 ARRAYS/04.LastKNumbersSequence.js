function sequence(y, z) {
    let x = [];
    // if (x.length - y < 0) x.length = 0;
    if (x.length === 0) x[0] = 1;
    for (let i = 0; i < (y - 1); i++) {
        let buff = 0;
        for (let j = 0; j < z; j++) {
            if (i-j >=0) {
                buff += x[i - j];
            }
        }
        x.push(buff);
    }
    console.log(x.join(' '));
}
sequence(8, 2);

function sumKofN(n, k) {
  let out = [1];
  for (let i = 1; i < n; i++) {
    out[i] = out.slice(-k).reduce((a, b) => a + b);
  }
  return out.join(" ");
}
console.log(sumKofN(8,2));


// function recurtionSum(n) {
//   if (n === 1) return 1;
//   return recurtionSum(n - 1) + n;
// }
// console.log(recurtionSum(4));


// function factorialByChaov(n) {
//   return n < 2 ? 1 : n * factorialByChaov(n - 1);
// }
// console.log(factorialByChaov(7));    // 5040

// function factorialByChaov1(n) {
//   const factorialCache = {    // кеширане на определен брой решения, за оптимизиране на пресмятането
//     0: 1,
//     1: 1,
//     2: 2,
//     3: 6,
//     4: 24,
//     5: 120,
//     6: 720,
//     7: 5040,
//     8: 40320,
//     9: 362880,
//     10: 3628800
//   }  // ако е по-малко от 2, факториел е 1, ако е по-голямо - вземи директно стойността от кеша или върти рекурсия, докато стигнеш до кеша!
//   return n < 2 ? 1 : factorialCache[n] || (factorialCache[n] = n * factorialByChaov(n - 1));
// }
// console.log(factorialByChaov1(7));    // 5040

// // recursion x! (from x to 1)
// function factorial(x) {
//   if (x < 0) return;
//   if (x === 0) return 1;
//   return x * factorial(x - 1);
// }
// console.log(factorial(3));
// // 6

// // recursion sum from x to y
// function sum(x, y) {
//   if (x < 0) return;
//   if (x > y) return 0;  // 0 because it's sum
//   return x + sum(x + 1, y);  // y is not changing
// }
// console.log(sum(3, 5));
// // 12

// // recursion x! (from x to y)
// function factorialXY(x, y) {  // факториел (от х - до у)
//   if (x < 0) return;      // ако (х < 0) - излез от програмата
//   if (x === (y + 1)) return 1;   // ако (х = y + 1),  значи си ударил дъното на рекурсията, върни 1
//   return x * factorial(x - 1, y);  // връщай рекурсия, докато (х = у + 1)
// }
// console.log(factorialXY(3, 2));
//   // 6
// function bigEl(array2d) {
// let out = [].concat(...array2d).sort((a,b) => b - a).slice(0,1);
// console.log(out[0]);
// }
// bigEl([[20, 50, 10], [8, 33, 145]]);

function biggest(arr2d) {     // три варианта
    return Math.max(...arr2d.flat());
    // return Math.max(...arr2d.reduce((a,b) => [...a, ...b], []));
    // return Math.max(...arr2d.reduce((a,b) => a.concat(b), []));
}   //  агригираме всеки масив b в нов масив a

console.log(biggest([[20, 50, 10],[8, 33, 145]]));
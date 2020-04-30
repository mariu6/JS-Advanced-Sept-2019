// function thomascook(array) {
//     let number = Number(array.shift());
//     let operations = {
//         chop: (num) => { return (num / 2) },
//         dice: (num) => { return (Math.sqrt(num)) },
//         spice: (num) => { return (++num) },
//         bake: (num) => { return (num *= 3) },
//         fillet: (num) => { return (num *= 0.8) }
//     }
//     for (let i = 0; i < array.length; i++) {
//         number = operations[array[i]](number);
//         console.log(number);
//     }
// }
// thomascook(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);

// thomascook(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);

function thomascook(array) {                 // 10/01/2020
    let num = Number(array.shift());
    let operations = {
        chop: () => { return (num / 2) },
        dice: () => { return (Math.sqrt(num)) },
        spice: () => { return (++num) },
        bake: () => { return (num *= 3) },
        fillet: () => { return (num *= 0.8) }
    }
    // for (let i = 0; i < array.length; i++) {
    //     num = operations[array[i]]();
    //     console.log(num);
    // }
    array.map(x => {
        num = operations[x]();
        console.log(num);
    })
}
thomascook(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
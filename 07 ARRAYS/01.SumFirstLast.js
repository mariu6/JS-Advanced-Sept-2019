// function firstLast(array) {
//     let out = Number(array[0]) + Number(array[array.length - 1]);

//     console.log(out);
// }
// firstLast(['20', '30', '40']);



function main(array) {
    function firstLast(array) {
        return Number(array[0]) + Number(array[array.length - 1])
    }
    return firstLast(array);
}


console.log(main(['20', '30', '40']));
console.log(main(['2']));
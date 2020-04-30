// function even(array) {
//     let out = array.filter((_, i) => i % 2 === 0)    // i за индекс, _ за празно място
//     console.log(out.join(' '));
// }

// even(['20', '30', '40']);


function main(array) {
    function evenlements(array) {
        return array.filter((x,i) => i % 2 === 0).join(" "); // i за индекс, x или _ за празно мяст
    }
    return evenlements(array)
}

console.log(main(['20', '30', '40']));

// function uniq(input) {
//     let nestedArrays = input.map(JSON.parse);
//     let uniqueArrays = [];

//     for (const arr of nestedArrays) {
//         let sorted = arr.sort((a, b) => b - a);
//         uniqueArrays.push(sorted);
//     }
//     let obj = {};
//     for (const line of uniqueArrays) {
//         obj[line.join('')] = line;
//     }
//     console.log(obj);
//     let toPrint = Object.entries(obj).map(x => x[1]).sort((a,b) => a.length - b.length);
//     let arrs = (Object.values(toPrint));
//     console.log(arrs[0]);
//     console.log(arrs[1]);
// }
// uniq([
//     "[-3, -2, -1, 0, 1, 2, 3, 4]",
//     "[10, 1, -17, 0, 2, 13]",
//     "[4, -3, 3, -2, 2, -1, 1, 0]"]);

// uniq([
//     '[7.14, 7.180, 7.339, 80.099]',
//     '[7.339, 80.0990, 7.140000, 7.18]',
//     '[7.339, 7.180, 7.14, 80.099]']);


function unique(stream) {
    let input = [...new Set(stream.map(JSON.parse).map(x => x.map(Number).sort((a, b) => a - b).toString()))]
        .map(x => x.split(",").sort((a,b) => b - a)).sort((a,b) => a.length - b.length);
    input.map(x => console.log(`[${x.join(", ")}]`));
}

unique([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);
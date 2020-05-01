function main(input) {
    let sum = Array.from(input).filter(x => x !== '0').length.toString().split('').map(Number).reduce((a, b) => a + b);
    // console.log(sum);
    input = input.slice(sum, input.length - sum);
    // console.log(input);
    let segments = [];
    for (let i = 0; i < input.length; i += 8) {
        segments.push(input.slice(i, i + 8));
    }
    let out = segments.map((x, i) => parseInt(segments[i], 2));

    out = out.map(x => String.fromCharCode(x));
    console.log(out.join(''));
    document.querySelector("#resultOutput").innerText = out.join('');
}

// main('0100011011010111100100100000011011100110000101101101011001010010000001101001011100110010')

// //ot Neta
// function solve() {
//     //TODO...
//     let input = document.getElementById("input").value;
//     //console.log(input.length)
//     let sum = calculateSum(input);
//     input = splitInput(input, sum);
//     let result = splitGroups(input);
//     showResult(result)
//     function showResult(result) {
//         document.getElementById('resultOutput').innerHTML = result;
//     }
//     // console.log(input.length)
//     function splitGroups(input) {
//         let matched = input.match(/.{1,8}/g);
//         let result = "";
//         let temp = "";
//         matched.forEach(e => {
//             temp = String.fromCharCode(binaryToString(e));
//             //debugger
//             let test = /[A-Za-z ]+/g;
//             if (temp.match(test)) {
//                 result += String.fromCharCode(binaryToString(e));
//             }
//             console.log(temp)
//         });
//         console.log(temp)
//         return result;
//     }
//     function binaryToString(element) {
//         return parseInt(+element, 2);
//     }
//     function splitInput(input, sum) {
//         let result = input.substring(sum);
//         result = result.substring(0, result.length - sum);
//         return result;
//     }
//     function calculateSum(input) {
//         while (input.toString().length > 1) {
//             input = spreadSum(input);
//         }
//         return input;
//     }
//     function spreadSum(num) {
//         return Array.from(num.toString()).map(Number).reduce((a, b) => a + b);
//     }
// }
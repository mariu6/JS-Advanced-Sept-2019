let arr = [1, 2, 3, 4];
let num = 5;
console.log(arr.slice());          // [ 1, 2, 3, 4 ]
console.log([...arr]);             // [ 1, 2, 3, 4 ]
console.log([...arr, num]);        // [ 1, 2, 3, 4, 5 ]
console.log([num, ...arr]);        // [ 5, 1, 2, 3, 4 ] 
let arr2 = ['a'];
console.log([...arr2, ...arr]);    //  [ 'a', 1, 2, 3, 4 ] 


// function editElemets(commands) {
//     let out = [];
//     for (let i = 0; i < commands.length; i++) {
//         if (commands[i] === 'add') {
//             out.push(i + 1);
//         } else {
//             out.pop();
//         }
//     }
//     if (out.length > 0) {
//         console.log(out.join('\n'));
//     } else {
//         console.log('Empty');
//     }
// }

// editElemets(['add','add', 'add','add']);
// editElemets(['add', 'add', 'remove', 'add', 'add']);
// editElemets(['remove', 'remove', 'remove']);


// Mihaela Mileva

// function main(input) {
//     let num = 1;
//     let result = [];
//     for (let i = 0; i < input.length; i++) {
//         if (input[i] === 'add') {
//            result.push(num); 
//         } else {
//             result.pop()
//         }
//         num++;
//     }
// return result.length === 0 ? "Empty" : console.log(result.join('\n'));
// }


// function main(input) {
//     let commands = {
//         counter: 1,
//         add: (arr, num) => [...arr, num],                   // кръщаваме пропъртитата на командите от входящия масив
//         remove: (arr) => [...arr.slice(0, arr.length - 1)]   // съответно add за добавяне и remove за изваждане
//     };

//     let result = input.reduce((acc, curr) => {
//         acc = commands[curr](acc, commands.counter);  // подаваме 2 параметъра, защото за add ни трябват 2 параметъра
//         // commands[curr] e пропърти от обекта commands, но е също така и името на командата 
//         commands.counter++;
//         return acc;
//     }, [])
//     // слагаме [], защото reduce връща един елемент, а на нас ни трябват няколко, затова ще ги сложи в масив
//     // console.log(result.length === 0 ? "Empty" : result.join('\n'));
//     return result.length === 0 ? "Empty" : result.join('\n');
// }
// console.log(main(['add', 'add', 'remove', 'add', 'add']));



function main1(arr) {
    let out = arr.reduce((a,b,i,arr) => {
        if (arr[i] === "add") {
            a.push(i+1);
        } else {
            a.pop();
        }
    return a;
},[]).join ("\n")
return out? out : "Empty";
}
console.log(main1(['add', 'add', 'remove', 'add', 'add'])); 
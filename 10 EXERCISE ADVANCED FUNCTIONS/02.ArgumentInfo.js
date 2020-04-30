// function result(...input) {
//     Object.entries(input.reduce((previous, current) => {
//         let typeOfArg = typeof current;
//         console.log(`${typeOfArg}: ${current}`);
//         if (!previous.hasOwnProperty(typeOfArg)) {
//             previous[typeOfArg] = 0;
//         }
//         previous[typeOfArg]++;

//         return previous;                               // задължително се връща при reduce
//     }, {}))                                            //,{} да акумулира към обект, искаме да върне обект
//         .map(([type, count]) => console.log(`${type} = ${count}`));
// }

// result('cat', 42, function () { console.log('Hello world!'); }, 24);

// // // result({ name: 'bob' }, 3.333, 9.999);

// function result(...input) {
//     let [output, typesOfArgs] = input.reduce((previous, current) => {
//         let [output, argumentTypes] = previous;
//         let typeOfArg = typeof current;
//         output.push(`${typeOfArg}: ${current}`);

//         if (!argumentTypes.hasOwnProperty(typeOfArg)) {
//             argumentTypes[typeOfArg] = 0;
//         }
//         argumentTypes[typeOfArg]++;
//          return previous;
//     },   [[], {}]);

//     console.log(output.join('\n') + '\n' + Object.entries(typesOfArgs)
//     .sort((a,b)=>b[1]-a[1])
//     .map(([type, count])=>`${type} = ${count}`)
//     .join('\n'));
// }
// // result('cat', 42, function () { console.log('Hello world!'); });

// // console.log(result('cat', 42, function () { console.log('Hello world!'); }));
// // Mock the console

// var oldConsole = console.log;
// var output = [];
// console.log = function (input) {
//     output.push(input);
// };
// result('cat', 42, function () { console.log('Hello world!'); });

// console.log = oldConsole;

// var expectedOutput = [
//     'string: cat',
//     'number: 42',
//     "function: function () { console.log('Hello world!'); }",
//     'string = 1',
//     'number = 1',
//     'function = 1'
// ];

// expect(output.length).to.equal(expectedOutput.length, "Incorrect number of arguments parsed.");
// for (var i = 0; i < output.length; i++) {
//     var current = output[i];
//     expect(current).to.contains(expectedOutput[i], "Incorrect arguments in output.");
// }


function objLike(...args) {
    let out = args.map(x => {
        return x = `${typeof x}: ${x}`;
    });
    let obj = {};
    args.map(x => {
        if (!obj[typeof x]) {
            obj[typeof x] = 0;
        }
        return obj[typeof x]++;
    });
    Object.entries(obj).sort((a, b) => b[1] - a[1]).map(x => out.push(`${x[0]} = ${x[1]}`));
    return out.join("\n");
}
console.log(objLike('cat', 42, function () { console.log('Hello world!'); }));


function result(...input) {
    Object.entries(input.reduce((previous, current) => {
        let typeOfArg = typeof current;
        console.log(`${typeOfArg}: ${current}`);
        if (!previous.hasOwnProperty(typeOfArg)) {
            previous[typeOfArg] = 0;
        }
        previous[typeOfArg]++;

        return previous;                               // задължително се връща при reduce
    }, {}))                                            //,{} да акумулира към обект, искаме да върне обект
        .sort((a, b) => b[1] - a[1])
        .map(([type, count]) => console.log(`${type} = ${count}`));  // не е сортирано б - а
}
result('cat', 42, function () { console.log('Hello world!'); }, 24);


function trick() {
    console.log(arguments);
    console.log(Object.values(arguments));
}

trick('cat', 42, function () { console.log('Hello world!'); }, 24);  
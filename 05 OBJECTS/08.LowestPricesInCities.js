// function lowestPrices(input) {
//     class TownName {                                      // Create class constructor
//         constructor(productName, productTotalIncome) {    // with properties of objects
//             this.productName;
//             this.productPrice;
//         }
//     }

//     let array = input.map(x => x.split(' | '));
//     // console.log(array);

//     let towns = [];
//     array.map(x => {
//         if (!towns.hasOwnProperty(x[0])) {                          //create object with the name of the town
//             towns[x[0]] = new TownName(x[1], Number(x[2]));         // if not excisting name, create new object
//         }
//         towns[x[0]][x[1]] = x[2];                                   // add propertyes with values 
//     })
//     // console.log(Object.entries(towns));
//     // console.log(Object.entries(towns)[0][1]);

//     let out = {}                                                    // Init. new object for export
//     for (let i = 0; i < Object.entries(towns).length; i++) {        // iterate trough towns
//         // console.log(Object.entries(Object.entries(towns)[i][1]));
//         Object.entries(Object.entries(towns)[i][1]).map(x => {      // array with the cars and prices.
//             if (!out.hasOwnProperty(x[0])) {                        // if there is no such item (car)
//                 out[x[0]] = [x[1], Object.entries(towns)[i][0]];    // create property array with [price, town]
//             }
//             if (Number(out[x[0]][0]) > Number(x[1])) {              // check if the new price is lower han the existing
//                 out[x[0]] = [x[1], Object.entries(towns)[i][0]];    // assign new array value [price, town]
//             }
//             // console.log(out);
//             // console.log();
//             return x;
//         })
//     }
//     // console.log(out);
//     console.log(Object.entries(out).map(x => `${x[0]} -> ${x[1][0]} (${x[1][1]})`).join('\n'));
// }

// lowestPrices(['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10']);

// lowestPrices(['Sofia City | Audi | 100000',
//     'Sofia City | BMW | 100000',
//     'Sofia City | Mitsubishi | 10000',
//     'Sofia City | Mercedes | 10000',
//     'Sofia City | NoOffenseToCarLovers | 0',
//     'Mexico City | Audi | 1000',
//     'Mexico City | BMW | 99999',
//     'New York City | Mitsubishi | 10000',
//     'New York City | Mitsubishi | 1000',
//     'Mexico City | Audi | 100000',
//     'Washington City | Mercedes | 1000']);



// function lowestPrices1(array) {
//     array = array.map(line => line.split(" | "));       // processing of input data
//     console.log(array);
//     let items = {};
//     array.map(x => {
//         if (!items.hasOwnProperty(x[1])) {
//             items[x[1]] = [];
//         }
//         items[x[1]].push({ [x[0]]: x[2] });
//     });
//     console.log(items);
//     for (const item in items) {
//         if (items.hasOwnProperty(item)) {
//             // console.log(Object.values(items[item]).map(Object.values).sort((a, b) => Number(a[0]) - Number(b[0]))[0]);
//             let sortedValues = Object.values(items[item])
//                 .map(Object.entries)
//                 .sort((a, b) => Number(a[0]) - Number(b[0]))[0];
//             console.log(`${item} -> ${sortedValues[0][1]} (${sortedValues[0][0]})`);
//         }
//     }
// }


// lowestPrices1(['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10']);

// lowestPrices1(['Sofia City | Audi | 100000',
//     'Sofia City | BMW | 100000000',
//     'Sofia City | Mitsubishi | 10000',
//     'Sofia City | Mercedes | 10000',
//     'Sofia City | NoOffenseToCarLovers | 0',
//     'Mexico City | Audi | 1000',
//     'Mexico City | BMW | 99999',
//     'New York City | Mitsubishi | 10000',
//     'New York City | Mitsubishi | 1000',
//     'Mexico City | Audi | 100000',
// 'Washington City | Mercedes | 1000']);


// 100 / 100
function lowestPrices2(array) {
    array = array.map(line => line.split(" | "));       // processing input data to array
    // console.log(array);
    let items = {};                             // making comftable object of objects
    array.map(x => {
        let [town, item, price] = [...x];
        if (!items.hasOwnProperty(item)) {
            items[item] = {};
        }
        items[item][town] = Number(price);
    });
    // console.log(items);
    for (const key in items) {                  // sorting and printing
        if (items.hasOwnProperty(key)) {        // line-by-line, keeping the name for the print purpose
           items[key] = Object.entries(items[key]).sort((a,b) => a[1]- b[1])[0]; // turning the value-object to array and sorting by second values (the objects values); 
           console.log(`${key} -> ${items[key][1]} (${items[key][0]})`);     // printing the -line- to the console
        }
    }
    // console.log(items);
}


// lowestPrices2(['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10']);

lowestPrices2(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']);


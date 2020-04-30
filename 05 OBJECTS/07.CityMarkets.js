// function markets(array) {
//     class TownName {                                      // Create class constructor
//         constructor(productName, productTotalIncome) {    // with properties of objects
//             this.productName;                   
//             this.productTotalIncome;
//         }
//     }

//     let data = array.map(x => x.split(' -> '));         // array with sity, item, numbers
//     // console.log(data);
//     let out = [];                                       // out array for the data
//     data.forEach(element => {                           // for each element [town, item, numbers] of the data array
//         let income = element[2].split(' : ').reduce((a,b) => a * b);    // calculate the income from numbers
//         if (!out.hasOwnProperty(element[0])) {                          //create object with the name of the town
//             out[element[0]] = new TownName(element[1], income);         // if not excisting name, create new object
//         }
//         out[element[0]][element[1]] = income;                           // if has object, assign income to item
//     });
//     // console.log(out);         // array of objects Town: TownName {properties:values}
//     for (let i = 0; i < Object.keys(out).length; i++) {                 // printing of out
//         console.log(`Town - ${Object.keys(out)[i]}`);                   // the town name from object keys
//         let arrToPrint = Object.entries(Object.values(out)[i]);         // array of the entries for each [i] town

//         console.log(arrToPrint.map(x => `$$$${x[0]} : ${x[1]}`).join('\n')); // printing of the array - formatted
//     }
// }

// markets(['Sofia -> Laptops HP -> 200 : 2000',
// 'Sofia -> Raspberry -> 200000 : 1500',
// 'Sofia -> Audi Q7 -> 200 : 100000',
// 'Montana -> Portokals -> 200000 : 1',
// 'Montana -> Qgodas -> 20000 : 0.2',
// 'Montana -> Chereshas -> 1000 : 0.3']);



function markets1(array) {
    class Town {
        constructor(name, amountOfSales, priceForOneUnit) {
            this.name = name;
            this.productTotalIncome = Number(amountOfSales) * Number(priceForOneUnit);
        }
    }
    let out = {};
    array = array.map(line => {
        line = line.split(" -> ");
        line[2] = line[2].split(" : ");
        return line.flat();
    })
    // console.log(array);
    array.map(x => {
        let [town, name, amountOfSales, priceForOneUnit] = [...x];
        if (!out.hasOwnProperty(town)) {
            out[town] = [];
        }
        out[town].push(new Town(name, amountOfSales, priceForOneUnit));
    })
    // console.log(out);
    Object.keys(out).map(x => {
        console.log(`Town - ${x}`);
        out[x].map(y => {
            console.log(`$$$${y.name} : ${y.productTotalIncome}`);
        })
    })
}

markets1(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3']);
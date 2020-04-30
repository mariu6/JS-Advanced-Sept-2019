// function catalog(array) {
//     const alfaSort = (a, b) => a.localeCompare(b)
//     let catalogue = {};
//     for (const line of array) {
//         let [name, price] = line.split(' : ');
//         price = Number(price);
//         let initial = name[0];

//         if (!catalogue.hasOwnProperty(initial)) {
//             catalogue[initial] = {};
//         }

//         let products = catalogue[initial];
//         products[name] = price;
//     }

//     let sortedInitials = Object.keys(catalogue).sort(alfaSort);

//     for (const initial of sortedInitials) {
//         let products = catalogue[initial]
//         let sortedProducts = Object.keys(catalogue[initial]).sort(alfaSort);
//         console.log(initial);
//         for (const p of sortedProducts) {
//             console.log(`  ${p}: ${products[p]}`);
//         }
//     }
// }

// catalog(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10']);



function catalog1(array) {
    array.sort((a, b) => a.localeCompare(b));
    out = {};
    array.map(x => {
        let [name, value] = x.split(" : ");
        if (!out.hasOwnProperty(name[0])) {
            out[name[0]] = {};
        }
        out[name[0]][name] = Number(value);
        return x;
    })
    Object.keys(out).map(letter => {
        console.log(letter);
        Object.keys(out[letter]).map(x => console.log(`  ${x}: ${out[letter][x]}`));
    })
}

catalog1(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
// function carRegister(array) {
//     let catalogue = {};
//     for (const line of array) {
//         let [brand, model, producedCars] = line.split(" | ");
//         producedCars = Number(producedCars);

//         if (!catalogue.hasOwnProperty(brand)) {
//             catalogue[brand] = {};
//         }

//         if (!catalogue[brand].hasOwnProperty(model)) {
//             catalogue[brand][model] = 0;
//         }

//         catalogue[brand][model] += producedCars;
//     }

//     for (const brand of Object.keys(catalogue)) {
//         console.log(brand);
//         for (const model of Object.entries(catalogue[brand])) {
//             console.log(`###${model[0]} -> ${model[1]}`);
//         }

//     }
// }

// carRegister(['Audi | Q7 | 1000',
//     'Audi | Q6 | 100',
//     'BMW | X5 | 1000',
//     'BMW | X6 | 100',
//     'Citroen | C4 | 123',
//     'Volga | GAZ-24 | 1000000',
//     'Lada | Niva | 1000000',
//     'Lada | Jigula | 1000000',
//     'Citroen | C4 | 22',
//     'Citroen | C5 | 10'])
//// brand / model / number

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


function carRegister1(array) {
    out = {};
    array.map(x => {
        let [make, name, value] = x.split(" | ");
        if (!out.hasOwnProperty(make)) {
            out[make] = {};
        }
        if (!out[make].hasOwnProperty([name])) {
            out[make][name] = 0;
        }
        out[make][name] += Number(value);
        return x;
    })
    Object.keys(out).map(make => {
        console.log(make);
        Object.keys(out[make]).map(x => console.log(`###${x} -> ${out[make][x]}`));
    })
}

// carRegister1(['Audi | Q7 | 1000',
//     'Audi | Q6 | 100',
//     'BMW | X5 | 1000',
//     'BMW | X6 | 100',
//     'Citroen | C4 | 123',
//     'Volga | GAZ-24 | 1000000',
//     'Lada | Niva | 1000000',
//     'Lada | Jigula | 1000000',
//     'Citroen | C4 | 22',
//     'Citroen | C5 | 10'])
//   //   brand |model| number

  carRegister1(['Mercedes-Benz | 50PS | 123',
  'Mini | Clubman | 20000',
  'Mini | Convertible | 1000',
//   'Mercedes-Benz | 60PS | 3000',
//   'Hyunday | Elantra GT | 20000',
//   'Mini | Countryman | 100',
//   'Mercedes-Benz | W210 | 100',
  'Mini | Clubman | 1000',
  'Mercedes-Benz | W163 | 200'])
  

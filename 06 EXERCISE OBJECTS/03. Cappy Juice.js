// function juice(array) {
//     let juices = {};
//     let bottles = {};

//     array.forEach(line => {
//         let [name, quantity] = line.split(' => ');
//         quantity = Number(quantity);
//         if (!juices.hasOwnProperty(name)) {
//             juices[name] = 0;
//         }
//         juices[name] += quantity;

//         if (juices[name] >= 1000) {
//             bottles[name] = Math.trunc(juices[name] / 1000);
//         }
//     });
//     Object.entries(bottles).map(x => console.log(`${x[0]} => ${x[1]}`));
// }

// juice(['Orange => 2000',
// 'Peach => 1432',
// 'Banana => 450',
// 'Peach => 600',
// 'Strawberry => 549']);


function juice1(array) {
    obj = {};
    out = {};
    array.map(element => {
        element = element.split(" => ");
        if (!obj.hasOwnProperty(element[0])) {
            obj[element[0]] = 0;
        }
        obj[element[0]] += Number(element[1]); 
        if (obj[element[0]] >= 1000) {
            out[element[0]] = Math.floor(obj[element[0]] / 1000);
        }
        return element;
    });
    Object.entries(out).map(x => console.log(`${x[0]} => ${x[1]}`));
}

juice1(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);

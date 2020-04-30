function populis(array) {
    let object = {};
    array = array.map(x => x.split(' <-> ')).map(x => {
        x[1] = Number(x[1]);
        if (!object.hasOwnProperty(x[0])) {
            object[x[0]] = 0;
        }
        object[x[0]] += x[1];
        return x;
    });
    let out = Object.keys(object).map(x => `${x} : ${object[x]}`);
    console.log(out.join('\n'));
}
populis(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])


function populis1(array) {
    let out = {};
    array = array.map(x => x.split(" <-> ")).map(x => {
        if (!out.hasOwnProperty(x[0])) {
            out[x[0]] = 0;
        }
        out[x[0]] += Number(x[1]);
    })
    Object.keys(out).map(x => console.log(`${x} : ${out[x]}`));
}

populis1(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])
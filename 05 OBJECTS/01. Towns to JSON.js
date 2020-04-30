function towns(input) {
    let deserialize = (data) => data.split("|").filter(x => x !== "").map(x => x.trim());
    let parseIfNumber = (line) => line.map(z => z == Number(z) ? Math.round(z * 100) / 100 : z)
    let keys = deserialize(input.shift());
    // console.log(keys);
    let values = input.map(deserialize).map(parseIfNumber);
    // console.log(values);
    let result = (values.map(x => {
        x = x.reduce((a, b, i) => {
            a[keys[i]] = b;
            return a;
        }, {})
        return x;
    }));
    console.log(JSON.stringify(result));
}


towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

towns(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']) 
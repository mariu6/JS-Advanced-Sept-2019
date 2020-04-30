function game(arrObj, arr) {
    let processed = arrObj.map(x => Object.values(x));
    // console.log(processed);
    let object = {};
    // Object creation
    processed.map(x => {
        if (!object.hasOwnProperty(x[0])) {
            object[x[0]] = {}
        }
        if (!object[x[0]].hasOwnProperty(x[1])) {
            object[x[0]][x[1]] = {};
            object[x[0]][x[1]]['army'] = 0;
        }
        object[x[0]][x[1]]['army'] += x[2];
        object[x[0]]['totalWins'] = 0;
        object[x[0]][x[1]]['wins'] = 0;
        object[x[0]]['totalLosses'] = 0;
        object[x[0]][x[1]]['losses'] = 0;
    })
    // console.log(object);
    console.log();
    // Battle!
    arr.map(x => {
        if (!(object[x[0]][x[1]]['army'] === object[x[2]][x[3]]['army']) && !(x[0] === x[2])) {
            if (object[x[0]][x[1]]['army'] > object[x[2]][x[3]]['army']) {
                object[x[0]][x[1]]['army'] = Math.floor(1.1 * object[x[0]][x[1]]['army']);
                object[x[0]][x[1]]['wins']++;
                object[x[0]]['totalWins']++;
                object[x[2]][x[3]]['army'] = Math.floor(0.9 * object[x[2]][x[3]]['army']);
                object[x[2]][x[3]]['losses']++;
                object[x[2]]['totalLosses']++;
            } else {
                object[x[0]][x[1]]['army'] = Math.floor(0.9 * object[x[0]][x[1]]['army']);
                object[x[0]][x[1]]['losses']++;
                object[x[0]]['totalLosses']++;
                object[x[2]][x[3]]['army'] = Math.floor(1.1 * object[x[2]][x[3]]['army']);
                object[x[2]][x[3]]['wins']++;
                object[x[2]]['totalWins']++;
            }
        }
    })
    // console.log(object);
    // Sort
    let out = Object.entries(object)
    .sort((a,b) => b[1]['totalWins'] - a[1]['totalWins'] || a[1]['totalLosses'] - b[1]['totalLosses'] || (a[0]).localeCompare(b[0]))
    // console.log(out[0]);
    let toPrint = Object.entries(out[0][1])
    .sort((a,b) => (b[1]['army']?b[1]['army']:0) - (a[1]['army']?a[1]['army']:0));
    // console.log(toPrint);
    console.log(`Winner: ${out[0][0]}`);
    toPrint.map(x => {
        if (typeof (x[1]) == 'object') {
            console.log(`/\\general: ${x[0]}`);
            Object.keys(x[1]).map(prop => console.log(`---${prop}: ${x[1][prop]}`))
        }
    })
}


game([
    { kingdom: 'Maiden Way', general: 'Merek', army: 5000 },
    { kingdom: 'Stonegate', general: 'Ulric', army: 4900 },
    { kingdom: 'Stonegate', general: 'Doran', army: 70000 },
    { kingdom: 'YorkenShire', general: 'Quinn', army: 0 },
    { kingdom: 'YorkenShire', general: 'Quinn', army: 2000 },
    { kingdom: 'Maiden Way', general: 'Berinon', army: 100000 }
], [
    ['YorkenShire', 'Quinn', 'Stonegate', 'Ulric'],
    ['Stonegate', 'Ulric', 'Stonegate', 'Doran'],
    ['Stonegate', 'Doran', 'Maiden Way', 'Merek'],
    ['Stonegate', 'Ulric', 'Maiden Way', 'Merek'],
    ['Maiden Way', 'Berinon', 'Stonegate', 'Ulric']
])
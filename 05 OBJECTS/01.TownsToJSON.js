
function towns(input) {
    const isNotEmptyString = x => x !== "";
    const trimMyStrings = x => x.trim();
    const parseIfNumber = x => (Number(x) || Number(x) == 0) ? Math.round(Number(x) * 100) / 100 : x;

    function deserializeStringToArrayOfValues(str) {    // to geto only the values from the table
        return str
            .split("|")                       // split by |
            .filter(isNotEmptyString)         // clean form empty strings before and after |
            .map(trimMyStrings)              // clean all imputs from spaces before and after
            .map(parseIfNumber);  // проверявам дали е число(ако не, ще ми върне NaN)
        // първо го правя число, после го фиксирам, после пак го правя на число 
    }

    let keys = deserializeStringToArrayOfValues(input[0]);
    let result = input
        .slice(1)                 // взимаме от първия индекс нататък
        .map(deserializeStringToArrayOfValues)      // и извличаме данните от входящата форматирана таблица
        .map(x => x.reduce((res, val, i) => {
            res[keys[i]] = val;
            return res;
        }, {}))
    result = JSON.stringify(result).toString();
    // let test = result.split('.');
    // for (let i = 1; i < test.length; i++) {
    //     if (typeof (test[i][1]) !== Number) {
    //         test[i] = test[i].splice(1, 0, '0');
    //     }
    // }
    // console.log(test);

    console.log(result);
}

towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

towns(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 0 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);


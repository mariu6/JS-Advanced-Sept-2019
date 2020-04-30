// в презентация 10 се каза, че трябва табулацията да е с \t за да мине джъдж! 00:36:40
// 90 / 100
function arenaTier(array) {
    array = array.map(x => x.split(" -> "));
    // console.log(array);
    let obj = {};
    array.map(x => {
        // print to console
        if (x[0] === 'Ave Cesar') {
            for (const x of arraySortedByTotal(obj)) {
                console.log(`${x[0]}: ${x[1]} skill`);

                arrayOfSortedSkills(obj[x[0]]).map(y => {
                    console.log(`- ${y[0]} <!> ${y[1]}`);
                })
            }
            return;
        }
        // fight!
        else if (x.length === 1) {
            x = x[0].split(" vs ");
            if (obj[x[0]] && obj[x[1]]) {   // check if fighters exist in the obj
                if (obj[x[0]].hasOwnProperty( Object.keys( obj[x[1]]) )) {         // check for common skills 
                    Object.values(obj[x[0]]).reduce((a, b) => a + b) < Object.values(obj[x[1]]).reduce((a, b) => a + b)
                        ? delete obj[x[0]]
                        : delete obj[x[1]];
                }
            }
        } else {
            // object creation
            if (!obj.hasOwnProperty(x[0])) {
                obj[x[0]] = {};
            }
            if (!obj[x[0]].hasOwnProperty(x[1])) {
                obj[x[0]][x[1]] = 0;
            }
            if (obj[x[0]][x[1]] <= Number(x[2])) {
                obj[x[0]][x[1]] = Number(x[2]);
            }
            // console.log(obj);
        }
    });

    function arraySortedByTotal(obj) {
        return Object.entries(obj).map(x => {
            return [x[0], Object.values(x[1]).reduce((a, b) => a + b, 0)];
        }).sort((a, b) => b[1] - a[1] || (a[0]).localeCompare(b[0]));
    }

    function arrayOfSortedSkills(subObj) {
        return Object.entries(subObj).sort((a, b) => b[1] - a[1] || (a[0]).localeCompare(b[0]))
    }
}

arenaTier(['Gladius -> Shield -> 250',
    'Gladius vs Gladius',
    'Ave Cesar'])
arenaTier([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'])


// arenaTier([
//     'Pesho -> Duck -> 400',
//     'Pesho -> Duck -> 200',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Pesho vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Gosho',
//     'Ave Cesar'])
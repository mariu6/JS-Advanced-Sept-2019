function sysComponents(array) {
    const alfaSort = (a, b) => a.localeCompare(b);

    let catalogue = {};
    for (const line of array) {
        let [systemName, componentName, subcomponentName] = line.split(" | ");

        if (!catalogue.hasOwnProperty(systemName)) {
            catalogue[systemName] = {};
        }

        if (!catalogue[systemName].hasOwnProperty(componentName)) {
            catalogue[systemName][componentName] = [];
        }
        catalogue[systemName][componentName].push(subcomponentName);
    }

    let sortedData = Object.entries(catalogue);
    sortedData.sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length || alfaSort(a[0],b[0]));
    sortedData.map(x => x[1] = Object.entries(x[1]).sort((a, b) => b[1].length - a[1].length));

    for (const system of sortedData) {
        console.log(system[0]);
        for (const line of system[1]) {
            console.log(`|||${line[0]}`);
            line[1].map(x => console.log(`||||||${x}`));
        }
    }
}

sysComponents(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C404',
    'Lambda | CoreC | C405',
    'Lambda | CoreC | C406',
    'Lambda | CoreC | C407',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);



// function sysComponents1(array) {
//     array = array.map(x => x.split(" | "));
//     // console.log(array);
//     let obj = {};
//     array.map(x => {
//         if (!obj.hasOwnProperty(x[0])) {
//             obj[x[0]] = {};
//         }
//         if (!obj[x[0]].hasOwnProperty(x[1])) {
//             obj[x[0]][x[1]] = [];
//         }
//         obj[x[0]][x[1]].push(x[2]);
//     });
//     obj = sortObjectByAmountOfComponents(obj);
//     obj = sortObjectByAmountOfSubcomponents(obj);
//     // console.log(obj);
//     Object.entries(obj).map(x => {
//         console.log(x[0]);
//         Object.keys(x[1]).map(y => {
//             console.log(`|||${y}`);
//             Object.values(x[1][y]).map(z => console.log(`||||||${z}`))
//         })
//     })

//     function sortObjectByAmountOfComponents(objectToSort) {
//         return Object.keys(objectToSort)
//             .sort((a, b) => Object.keys(objectToSort[b]).length - Object.keys(objectToSort[a]).length || a.localeCompare(b))
//             .reduce((newObj, curr) => {
//                 objectToSort[curr] = sortObjectByAmountOfSubcomponents(objectToSort[curr])
//                 newObj[curr] = objectToSort[curr];
//                 return newObj;
//             }, {});
//     }

//     function sortObjectByAmountOfSubcomponents(objectToSort) {
//         return Object.keys(objectToSort)
//             .sort((a, b) => Object.keys(objectToSort[b]).length - Object.keys(objectToSort[a]).length)
//             .reduce((newObj, curr) => {
//                 newObj[curr] = objectToSort[curr];
//                 return newObj;
//             }, {});
//     }
// }



// sysComponents1(['SULS | Main Site | Home Page',
//     'SULS | Main Site | Login Page',
//     'SULS | Main Site | Register Page',
//     'SULS | Judge Site | Login Page',
//     'SULS | Judge Site | Submittion Page',
//     'Lambda | CoreA | A23',
//     'SULS | Digital Site | Login Page',
//     'Lambda | CoreB | B24',
//     'Lambda | CoreA | A24',
//     'Lambda | CoreA | A25',
//     'Lambda | CoreC | C4',
//     'Indice | Session | Default Storage',
//     'Indice | Session | Default Security']);
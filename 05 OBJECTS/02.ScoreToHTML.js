// function toHTML(json) {
//     const symbol = {
//         "&": '&amp;',
//         "<": '&lt;',
//         ">": '&gt;',
//         "\"" : '&quot;',
//         "\'" : '&#39;'
//     };
//     let parsed = JSON.parse(json)
//     let names = parsed.map(x => Object.values(x))
//                     .map(x => x[0].split("").map(y => symbol[y] ? symbol[y] : y).join(""));
// let scores = parsed.map(x => Object.values(x)).map(x => x[1]);
//     console.log('<table>');
//     console.log(`  <tr><th>name</th><th>score</th></tr>`);
//     // parsed.map(x => console.log(`  <tr><td>${Object.values(x)[0]}</td><td>${Object.values(x)[1]}</td></tr>`));
//     for (let i = 0; i < names.length; i++) {
//         console.log(`  <tr><td>${names[i]}</td><td>${scores[i]}</td></tr>`);        
//     }
//     // names.map(x => console.log(`<tr><td>${x}</td><td>479</td></tr>`));
//     console.log('</table>');
// }

// // toHTML(['[{"name":"Pesho","score":479}, {"name":"Gosho","score":205}]']);

// // toHTML(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']);


// toHTML(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);



function htmlProducer(array) {
    const symbol = {
        "&": '&amp;',
        "<": '&lt;',
        ">": '&gt;',
        "\"": '&quot;',
        "\'": '&#39;'
    };
    // console.log(array);
    let input = JSON.parse(array);
    console.log(input);

    // function symbolCecker(input) {
        input = input.map(obj => {
            Object.keys(obj).map(property => {
                property.split("").map(x => x === symbol[x] ? symbol[x] : x);
                obj[property].toString().split("").map(x => x === symbol[x] ? symbol[x] : x);
                return property;
            })
            return obj;
        })
    // }
        console.log(input);
    console.log("<table>");
    let tr = "<tr>";
    let endTr = "</tr>";
    let str = "";
    Object.keys(input[0]).map(x => {
        
        str += `<th>${x}</th>`;
        return x;
    })
    console.log("   " + tr + str + endTr);
    input.map(x => {
        str = "";
        Object.keys(x).map(y => {
            Object.keys(symbol).map(z => x[y] = x[y].toString().replace(z, symbol[z]));
            str += `<td>${x[y]}</td>`;
            return x;
        })
        console.log("   " + tr + str + endTr);
    })
    console.log("</table>");
}


htmlProducer([`[{"name":"<div>a && 'b'</div>","score":111},{"name":"Jichka Jochkova","score":-50}]`]);


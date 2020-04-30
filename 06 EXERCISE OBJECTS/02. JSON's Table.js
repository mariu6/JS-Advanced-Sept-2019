// function table(input) {
//     let obj = input.map(line => JSON.parse(line));
//     console.log('<table>');
//     for (let i = 0; i < obj.length; i++) {
//         console.log('   <tr>');
//         Object.keys(obj[i]).map(x => console.log(`       <td>${obj[i][x]}</td>`));
//         console.log('   </tr>');
//     }
//     console.log('</table>');
// }

// table(['{"name":"Pesho","position":"Promenliva","salary":100000}',
//     '{"name":"Teo","position":"Lecturer","salary":1000}',
//     '{"name":"Georgi","position":"Lecturer","salary":1000}']);


function table1(stream) {
    const symbol = {
        "&": '&amp;',
        "<": '&lt;',
        ">": '&gt;',
        "\"": '&quot;',
        "\'": '&#39;'
    };
    data = stream.map(JSON.parse);
    console.log("<table>");
    data.map(x => {
        let lineOfContent = Object.values(x)
            .map(y => y.toString().split("").map(z => symbol[z]? symbol[z]: z).join(""))  // проверка за спец. знаци
            .reduce((a, b) => a + `       <td>${b}</td>\n       `, "");                  // редовете на таблицата
        console.log(`       <tr>\n       ${lineOfContent}</tr>`);
        return x;
    })
    console.log("</table>");
}


table1(['{"name":"<p>Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);
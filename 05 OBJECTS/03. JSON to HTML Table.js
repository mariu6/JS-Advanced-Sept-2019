// function fromJSONToHTMLTable(input) {
//     // let table = document.createElement("table");
//     // let trow = document.createElement("tr");
//     // let thead = document.createElement("th");
//     // let td = document.createElement("td");

//     const symbol = {
//         "&": '&amp;',
//         "<": '&lt;',
//         ">": '&gt;',
//         "\"": '&quot;',
//         "\'": '&#39;'
//     };

//     obj = JSON.parse(input);   // parse the JSON input
//     // console.log(obj);     // Receive Array of Objects

//     // HEADER
//     // Taking the names of the first object for the header of the table.
//     let header = Object.keys(obj[0]);
//     // console.log(header);  // array of the names in the header
//     let headerOutput = '';
//     header.map(x => headerOutput += `<th>${x}</th>`);
//     // PRINT FIRST PART
//     console.log('<table>');
//     console.log(`  <tr>${headerOutput}</tr>`);


//     //BODY
//     let rowData = [];
//     for (let i = 0; i < obj.length; i++) {
//         // console.log(obj[i], i);
//         // console.log(Object.values(obj[i]),i);
//         rowData[i] = Object.values(obj[i]).map((x) => {    // checking the text values for special chars;
//                 if (typeof (x) === 'string') {
//                     return x.split("").map(y => symbol[y] ? symbol[y] : y).join("");  // Don't forget to RETURN
//                 } else {
//                     return x;
//                 }
//             });
//         // console.log(obj[i], i);
//         rowDataOutput = '';
//         rowData[i].map(x => rowDataOutput += `<td>${x}</td>`)
//         console.log(`  <tr>${rowDataOutput}</tr>`);
//     }

//     // let rowData = obj.map(x => Object.values(x))    // check and escape the tag symbols (anti-hacker) in the names 
//     //     .map(x => x[0].split("").map(y => symbol[y] ? symbol[y] : y).join(""));
//     // console.log(rowData);  // The data array for the First vertical column of the table

//     // let scores = obj.map(x => Object.values(x)).map(x => x[1]);



//     // obj.map(x => console.log(`  <tr><td>${Object.values(x)[0]}</td><td>${Object.values(x)[1]}</td></tr>`));
//     // for (let i = 0; i < rowData.length; i++) {
//     //     let namesOutput = '';
//     //     rowData.map(x => namesOutput += `<td>${x}</td>`);
//     //     console.log(`  <tr>${namesOutput}</tr>`);
//     // }
//     // names.map(x => console.log(`<tr><td>${x}</td><td>479</td></tr>`));
//     console.log('</table>');
// }



// // fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);

// fromJSONToHTMLTable(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);



function fromJSONToHTMLTable(json) {
    const symbol = {
        "&": '&amp;',
        "<": '&lt;',
        ">": '&gt;',
        "\"": '&quot;',
        "\'": '&#39;'
    };

    let parsedData = JSON.parse(json);
    let title = Object.keys(parsedData[0]).reduce((a, b) => a + `<th>${b}</th>`, "");   // заглавен ред в таблицата
    console.log("<table>");
    console.log(`   <tr>${title}</tr>`);
    parsedData.map(x => {
        let lineOfContent = Object.values(x)
            .map(y => y.toString().split("").map(z => symbol[z]? symbol[z]: z).join(""))  // проверка за спец. знаци
            .reduce((a, b) => a + `<td>${b}</td>`, "");                  // редовете на таблицата
        console.log(`   <tr>${lineOfContent}</tr>`);
        return x;
    })
    console.log("</table>");
}

fromJSONToHTMLTable(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);


// <table>
//    <tr><th>Name</th><th>Price</th></tr>
//    <tr><td>Tomatoes &amp; Chips</td><td>2.35</td></tr>
//    <tr><td>J&amp;B Chocolate</td><td>0.96</td></tr>
// </table>

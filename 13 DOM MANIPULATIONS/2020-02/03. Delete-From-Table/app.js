function deleteByEmail() {
    const input = document.querySelector("body > label > input[type=text]").value;
    const table = document.getElementById("customers").children[1].children;  // get the body of the table
    const result = document.getElementById("result");   // 
    let coll = Array.from(table).map(x => (x.children)[1]);
    let collection = Array.from(table).map(x => (x.children)[1].innerText);  // get the emails from the table
    // console.log(collection, input);

    if (collection.includes(input)) {
        // console.log(collection.indexOf(input));
        document.getElementById("customers").deleteRow(collection.indexOf(input)+1);   // deleteRow(index)
        result.innerHTML = "Deleted.";
    } else {
        result.innerHTML = "Not found.";
    }
} 
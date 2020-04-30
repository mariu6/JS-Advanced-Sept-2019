function solve() {
    let selectMenuTo = document.getElementById("selectMenuTo");
    let optionBin = document.createElement("option");
    let optionHex = document.createElement("option");
    optionBin.setAttribute("value", "binary");
    optionBin.innerText= "Binary";
    optionHex.setAttribute("value", "hexadecimal");
    optionHex.innerText= "Hexadecimal";
    selectMenuTo.appendChild(optionBin);
    selectMenuTo.appendChild(optionHex);
    let result = document.getElementById("result");

    document.querySelector("#container > button").addEventListener("click", function() {
        let num = Number(document.getElementById("input").value);

        if (selectMenuTo.value === "binary") {
            result.value = num.toString(2);
        } else if(selectMenuTo.value === "hexadecimal") {
            result.value = num.toString(16).toUpperCase();
        }
        console.log(num);
        console.log(num.toString(2));
        console.log(num.toString(16));
    })
}
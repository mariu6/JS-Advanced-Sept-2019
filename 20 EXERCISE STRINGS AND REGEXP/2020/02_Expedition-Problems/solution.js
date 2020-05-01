function solve() {
    let str = document.getElementById("string").value;
    let txt = document.getElementById("text").value;
    let iDresult = document.getElementById("result");
    let message = (txt.match(`${str}(.+)${str}`)[1]);
    // console.log(message);
    const regex = /(east|north).*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gmi;

    let result;
    let e;
    let n;
    while ((result = regex.exec(txt)) !== null) {
        if (result[1].toLocaleLowerCase() === "east") {
            e = `${result[2]}.${result[3]} E`;
        } else {
            n = `${result[2]}.${result[3]} N`;
        }
    }

    let pN = document.createElement("p");
    pN.innerHTML = n;
    iDresult.appendChild(pN);

    let pE = document.createElement("p");
    pE.innerHTML = e;
    iDresult.appendChild(pE);

    let pM = document.createElement("p");
    pM.innerHTML = `Message: ${message}`;
    iDresult.appendChild(pM);
}    
// С фетч от файла

// function solve() {
//     const textAreaTop = document.querySelector("#exercise > textarea:nth-child(2)");
//     const btnGenerate = document.querySelector("#exercise > button:nth-child(3)");
//     const table = document.querySelector("#exercise > div > div > div > div > table > tbody");
//     const textAreaBottom = document.querySelector("#exercise > textarea:nth-child(5)");
//     const btnBuy = document.querySelector("#exercise > button:nth-child(6)");

//     fetch('./furniture.json')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             textAreaTop.value = JSON.stringify(data, undefined, 4);


//             btnGenerate.addEventListener("click", function () {
//                 data.map(obj => {
//                     let tr = document.createElement("tr");
//                     Object.values(obj).map(x => {
//                         let td = document.createElement("td");
//                         // console.log(x.slice(0, 5));
//                         if (x.slice(0, 5) === "https") {
//                             let img = document.createElement("img");
//                             img.setAttribute("src", x);
//                             td.appendChild(img);
//                         } else {
//                             let p = document.createElement("p");
//                             p.innerHTML = x;
//                             td.appendChild(p);
//                         }
//                         tr.appendChild(td);
//                     })
//                     // checkBoxes
//                     let tdCheckBox = document.createElement("td");
//                     let input = document.createElement("input");
//                     input.type = "checkbox";
//                     tdCheckBox.appendChild(input);
//                     tr.appendChild(tdCheckBox);

//                     table.appendChild(tr);
//                 })
//             })

//             btnBuy.addEventListener("click", function () {
//                 let listItems = [];
//                 let totalPrice = 0;
//                 let decorFactor = [];
//                 Array.from(document.querySelectorAll("#exercise input[type=checkbox]")).map((checkBox, i) => {
//                     if (checkBox.checked === true) {
//                         listItems.push(data[i - 1].name);
//                         totalPrice += Number(data[i - 1].price);
//                         decorFactor.push(Number(data[i - 1].decFactor));
//                     }
//                 })

//                 textAreaBottom.value = `Bought furniture: ${listItems.join(", ")}\n`;
//                 textAreaBottom.value += `Total price: ${totalPrice.toFixed(2)}\n`;
//                 textAreaBottom.value += `Average decoration factor: ${decorFactor.reduce((a, b) => a + b) / decorFactor.length}`
//             })

//         })
//         .catch(err => console.error(err));
// }


function solve() {
    const textAreaTop = document.querySelector("#exercise > textarea:nth-child(2)");
    const btnGenerate = document.querySelector("#exercise > button:nth-child(3)");
    const table = document.querySelector("#exercise > div > div > div > div > table > tbody");
    const textAreaBottom = document.querySelector("#exercise > textarea:nth-child(5)");
    const btnBuy = document.querySelector("#exercise > button:nth-child(6)");


    btnGenerate.addEventListener("click", function () {
        let data = JSON.parse(textAreaTop.value);
        data.map(obj => {
            let tr = document.createElement("tr");

            let tdImg = document.createElement("td");
            let img = document.createElement("img");
            img.setAttribute("src", obj["img"]);
            tdImg.appendChild(img);
            tr.appendChild(tdImg);

            let tdName = document.createElement("td");
            let pName = document.createElement("p");
            pName.innerHTML = obj["name"];
            tdName.appendChild(pName);
            tr.appendChild(tdName);

            let tdPrice = document.createElement("td");
            let pPrice = document.createElement("p");
            pPrice.innerHTML = obj["price"];
            tdPrice.appendChild(pPrice);
            tr.appendChild(tdPrice);

            let tdFactor = document.createElement("td");
            let pFactor = document.createElement("p");
            pFactor.innerHTML = obj["decFactor"];
            tdFactor.appendChild(pFactor);
            tr.appendChild(tdFactor);

            // checkBoxes
            let tdCheckBox = document.createElement("td");
            let input = document.createElement("input");
            input.type = "checkbox";
            tdCheckBox.appendChild(input);
            tr.appendChild(tdCheckBox);

            table.appendChild(tr);
        })

        btnBuy.addEventListener("click", function () {
            let listItems = [];
            let totalPrice = 0;
            let decorFactor = [];
            Array.from(document.querySelectorAll("#exercise input[type=checkbox]")).map((checkBox, i) => {
                if (checkBox.checked === true) {
                    listItems.push(data[i - 1].name);
                    totalPrice += Number(data[i - 1].price);
                    decorFactor.push(Number(data[i - 1].decFactor));
                }
            })

            textAreaBottom.value = `Bought furniture: ${listItems.join(", ")}\n`;
            textAreaBottom.value += `Total price: ${totalPrice.toFixed(2)}\n`;
            textAreaBottom.value += `Average decoration factor: ${decorFactor.reduce((a, b) => a + b) / decorFactor.length}`
        })
    })

}
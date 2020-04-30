function solve() {
    let inputArea = document.getElementById("expressionOutput");
    let outputArea = document.getElementById("resultOutput");
    let clearBtn = document.querySelector("#calculator > div.top > button");
    let toArea = "";
    const operands = {
        "/": (a, b) => a / b,
        "x": (a, b) => a * b,
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    }

    Array.from(document.querySelector("#calculator > div.keys").children)
        .map(x => x.addEventListener("click", function (evt) {
            console.log(evt.target.value);
            if (evt.target.innerText === "=") {
                let operand = toArea.match(/[\/\+\-x]+/);
                let result = toArea.split(/[\/\+\-x]+/).map(Number);
                console.log(result, operand);
                let out = operands[operand[0]](result[0], result[1]);
                console.log(out);
                if (result[1]) {     
                    outputArea.innerText = out;
                } else {
                    outputArea.innerText = "NaN";
                }
            } else {
                toArea += (evt.target.innerText);
                let operand = toArea.match(/[\/\+\-x]+/);
                let result = toArea.split(/[\/\+\-x]+/);
                inputArea.innerText = result.join(` ${operand} `);
            }
        }))

    clearBtn.addEventListener("click", function () {
        toArea = "";
        inputArea.innerText = "";
        outputArea.innerText = "";
    })
} 
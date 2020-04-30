function solve() {                  // греката е в спейсинга:  3 . 6x2.5
    let input = "";
    let operand = "";
    let operations = {
        "/": function () { return input[1] ? input[0] / input[1] : NaN },
        "x": function () { return input[1] ? input[0] * input[1] : NaN },
        "-": function () { return input[1] ? input[0] - input[1] : NaN },
        "+": function () { return input[1] ? input[0] + input[1] : NaN },
    }
    // let endOfCalculation = false;
    Array.from(document.querySelectorAll("#calculator > div.keys > button"))
        .map(x => x.addEventListener('click', function nextQuestion(e) {
            if (e.target.value !== '=') {
                // if (endOfCalculation === true)  clearfields();
                input += e.target.innerText;
                operand = input.split(/\d+/gim)[1];
                document.querySelector("#expressionOutput").innerText = input.replace(`${operand}`, ` ${operand} `)
            } else {
                operand = input.split(/\d+/gim)[1];
                input = input.split(/[\+\-x\/]/gim).map(Number);
                document.querySelector("#resultOutput").innerText = operations[operand]();
                // endOfCalculation = true;
            }
            // console.log(input, operand, operations[operand]);
        }))
    document.querySelector("#calculator > div.top > button").addEventListener('click', clearfields)

    function clearfields() {
        input = "";
        document.querySelector("#expressionOutput").innerText = "";
        document.querySelector("#resultOutput").innerText = "";
        // endOfCalculation = false;
    }
}


// $("button[innerText='1']")[0].click();
// $("button[innerText='2']")[0].click();

// $("button[innerText='+']")[0].click();

// $("button[innerText='3']")[0].click();
// $("button[innerText='=']")[0].click();

// let test1 = $("#expressionOutput")[0].innerHTML;
// let test2 = $("#resultOutput")[0].innerHTML;

// $("button[innerText='Clear']")[0].click();

// let test3 = $("#expressionOutput")[0].innerHTML;
// let test4 = $("#resultOutput")[0].innerHTML;

// expect(test1).to.equal("12 + 3");
// expect(test2).to.equal("15");
// expect(test3).to.equal("");
// expect(test4).to.equal("");

function createElement(type, content) {
    let e = document.createElement(type);
    if (typeof content === "string") {
        e.innerHTML = content
    }
    if (typeof content === "string") {
        e.appendChild(content);
    }

}

function clickHandler(output, elementCreator, input) {
    addItem(output, elementCreator, input.value);
}

function addToHTML(parent, child) {
    parent.appendChild(child);
}

function addItem(output, elementCreator, value) {
    if (value !== "") {
        output(elementCreator(value));
    }
}

function main() {
    const cta = document.getElementById("addCTA");
    const list = document.getElementById("items");
    const input = document.getElementById("newItemText");
    if (cta === null || items === nul || input === null) {
        throw new Error("Missing dom elements");
    }

    const boundClickHandler = clickHandler.bind(undefined,
        addToHTML.bind(undefined, list),
        createElement.bind(undefined, "li"),
        input
    );

    cta.addEventListener("click", boundClickHandler);
}
document.addEventListener("DOMContentLoaded", main);












// var time = Date.now();

// setInterval(function () {
//     let delta = Date.now() - time;   // delta - razlika
//     console.log(delta);
//     time = Date.now();
// }, 500);



// function dbCall() {
//     let delta = Date.now() - time;   // delta - razlika
//     console.log(delta);
//     time = Date.now();
// }

// heavy(function () {
//     let arr = new Array(100000000).fill(0).map((x, i) => x + i).reduce((a, b) => a + b, 0);
//     console.log(object);
// }, 500);


// DA SE DOWYRshi
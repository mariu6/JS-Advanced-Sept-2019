
function createElement(type, content) {
    let e = document.createElement(type);
    if (typeof content === "string") {
        e.innerHTML = content
    }
    if (typeof content === "string") {
        e.appendChild(content);
    }
    return e;
}

function clickHandler(output, elementCreator, input) {
    addItem(output, elementCreator, input.value);
    return;
}

function addToHTML(parent, child) {
    parent.appendChild(child);
}

function addItem(output, elementCreator, value) {
    if (value !== "") {
        return output(elementCreator(value));
    }
    return;
}

function findChildIndexByRef(children, child) {
    Array.prototype.findIndex.call(
        children,
        x => x === child
    )
}

function removeItem(output, elementLocator, element) {
    return output(elementLocator(element));
}

function removeFromHTMLByIndex(parent, index) {
    return parent.removeChild(parent.children[index]);
}

function listClickHandler(e) {
    // console.log(e.currentTarget);
    // console.log(e.target);
    if (e.target.nodeName === "A") {
        return removeItem(
            removeFromHTMLByIndex.bind(undefined, e.currentTarget),
            findChildIndexByRef.bind(undefined, e.currentTarget),
            e.target.parentNode
        )
    }
    return;
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
        (value => {
            let li = createElement("li");
            let a = createElement("a");
            a.setAttribute("href", "javascript:;");
            a.appendChild(document.createTextNode(`[DELETE]`));
            li.appendChild(document.createTextNode(`${value}`));
            li.appendChild(a);

            return li;
        },
            input
        ));

    cta.addEventListener("click", boundClickHandler);
    list.addEventListener("click", listClickHandler);

}

document.addEventListener("DOMContentLoaded", main);





function addItem() {
    function main() {
        let input = document.getElementById("newText");
        let add = document.querySelector("body > main > input[type=button]:nth-child(3)");
        let ul = document.getElementById("items");
        let i = 0;
        // console.log(input);
        // console.log(add);
        // console.log(ul);

        add.addEventListener("click", function () {
            i++;
            let line = input.value;                                 //вземам стойността в инпут полето 
            let li = document.createElement("li");
            let a = document.createElement('a');
            a.setAttribute('href', '#');                            // 'javascript:;'
            // li.setAttribute('id', `${i}`);
            a.appendChild(document.createTextNode(`[Delete]`));
            li.appendChild(document.createTextNode(`${line} `));
            li.innerHTML = line;
            ul.appendChild(li);
            li.appendChild(a);
            input.value = "";
            return li;
        });
        ul.addEventListener("click", function (e) {
            let liDelete = e.target.parentNode;
            liDelete.parentElement.removeChild(liDelete);
        })
    }
    document.addEventListener("DOMContentLoaded", main);     // 1. Да знаем, че контентът е напълно зареден. 
}
addItem()









// function createElement(type, content) {
//     let e = document.createElement(type);
//     if (typeof content === "string") {
//         e.innerHTML = content
//     }
//     if (typeof content === "string") {
//         e.appendChild(content);
//     }
//     return e;
// }

// function ctaClickHandler(output, elementCreator, input) {
//     return addItem(output, elementCreator, input.value);

// }

// function addToHTML(parent, child) {
//     return parent.appendChild(child);
// }

// function addItem(output, elementCreator, value) {
//     if (value !== "") {
//         return output(elementCreator(value));
//     }
//     return;
// }

// function findChildIndexByRef(children, child) {
//     return Array.prototype.findIndex.call(
//         children,
//         x => x === child
//     )
// }

// function removeItem(output, elementLocator, element) {
//     return output(elementLocator(element));
// }

// function removeFromHTMLByIndex(parent, index) {
//     return parent.removeChild(parent.children[index]);
// }

// function listClickHandler(e) {
//     // console.log(e.currentTarget);
//     // console.log(e.target);
//     if (e.targed.nodeName === "A") {
//         return removeItem(
//             removeFromHTMLByIndex.bind(undefined, e.currentTarget),
//             findChildIndexByRef.bind(undefined, e.currentTarget),
//             e.target.parentNode
//         )
//     }
//     return;
// }

// function main() {
//     const cta = document.getElementById("addCTA");
//     const list = document.getElementById("items");
//     const input = document.getElementById("newItemText");
//     if (cta === null || items === nul || input === null) {
//         throw new Error("Missing dom elements");
//     }

//     const boundClickHandler = clickHandler.bind(undefined,
//         addToHTML.bind(undefined, list),
//         value => {
//             let li = createElement("li");
//             let a = createElement("a");
//             a.setAttribute("href", "javascript:;");
//             a.appendChild(document.createTextNode(`[DELETE]`));
//             li.appendChild(document.createTextNode(`${value}`));
//             li.appendChild(a);

//             return li;
//         },
//             input
//         );

//     cta.addEventListener("click", boundClickHandler);
//     list.addEventListener("click", listClickHandler);

// }

// document.addEventListener("DOMContentLoaded", main);



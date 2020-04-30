function addItem() {
    function main() {
        let input = document.getElementById("newItemText");
        let add = document.getElementById("addCTA");
        let ul = document.getElementById("items");
        
        add.addEventListener("click", function () {
            let li = document.createElement("li");
            li.innerHTML = input.value;
            ul.appendChild(li);
            console.log(input.value);
            input.value = "";
            return li;
        });

    }
    document.addEventListener("DOMContentLoaded", main);     // 1. Да знаем, че контентът е напълно зареден. 
}
addItem()






// function addItem() {
// // 'Мръсни' функции (Според Мартин), които имат досег с DOM-a
//     function createElement(type, content) {   // създаване на елемент, в нашия случай "li" - list item
//         let e = document.createElement(type);
//         if (typeof content === "string") {
//             e.innerHTML = content;
//         }
//         // if (typeof content === "object") {
//         //     e.appendChild(content);
//         // }
//         return e;
//     }

//     // отдолу в boundClickHandler се вижда, че (output = AddToHTML, elementCreator = createElement, input = input)
//     function clickHandler(output, elementCreator, input) {  /// отдолу в boundClickHandler се вижда, чеoutput = AddToHTML,  
//         addItem(output, elementCreator, input.value);
//     }

//     function addToHTML(parent, child) {         // функция за добавяне в HTML , приема прент и чайлд като аргументи
//         parent.appendChild(child);
//     }


// // 'Чисти' функции
//     function addItem(output, elementCreator, value) {
//         if (value !== "") {
//             output(elementCreator(value));
//         }
//     }

//     function main() {
//         const cta = document.getElementById("addCTA");              // id на бутона ADD
//         const list = document.getElementById("items");
//         const input = document.getElementById("newItemText");        // стринг, който се въвежда в полето
//         // if (cta === null || list === null || input === null) {
//         //     throw new Error("Missing dom elements");
//         // }

//         const boundClickHandler = clickHandler.bind(undefined,
//             addToHTML.bind(undefined, list),
//             createElement.bind(undefined, "li"),
//             input);

//         cta.addEventListener("click", boundClickHandler);
//     }
//     document.addEventListener("DOMContentLoaded", main);     // 1. Да знаем, че контентът е напълно зареден. 
// }
// addItem()


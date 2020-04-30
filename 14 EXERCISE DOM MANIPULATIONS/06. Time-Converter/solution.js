function attachEventsListeners() {    // работи, но джъджа не го приема
    const params = {
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
        seconds: document.getElementById("seconds")
    }

    const converterObj = { days: 86400, hours: 3600, minutes: 60, seconds: 1 };
    function handler(e) {
        if (params[e.target.id.slice(0, length - 3)]) {
            let source = [e.target.id.slice(0, length - 3), Number(params[e.target.id.slice(0, length - 3)].value)];
            // console.log(source);
            let base = source[1] * converterObj[source[0]];
            // console.log(base);
            Object.entries(params).map(x => x[1].value = base / converterObj[x[0]]);
        }
    }
    document.addEventListener("click", handler);
}


// function attachEventsListeners() {

//     function updateDOMInputValue(element, value) {
//         return element.value = value;          // за изписване на новата стойност в полето. Извиква се за всяко поле поотделно.
//     }

//     function updateDOM(elements, values) {
//         return elements.map((x, i) => updateDOMInputValue(x, values[i]));     // минава през всички елементи и ги изпраща за ъпдейтване на полетата.
//     }

//     function convert(ratios, value) {
//         return ratios.map(x => value * x);          // за всеки елемент: минава през таблицата за конвертиране и пресмята value по избрания критерий.
//     }

//     const convertionTable = {                       // Таблица за конвертиране. Ключовете са всъщност стойностите от ui.buttons.
//         days: [1, 24, 1440, 86400],                 // предполага, че целта е да се отделят презентацията от бизнес-логиката.
//         hours: [1 / 24, 1, 60, 3600],
//         minutes: [1 / 1440, 1 / 60, 1, 60],
//         seconds: [1 / 86400, 1 / 3600, 1 / 60, 1]
//     }

//     const ui = {
//         buttons: {                  // отделяне на презентацията от бизнес-логиката?
//             daysBtn: "days",
//             hoursBtn: "hours",
//             minutesBtn: "minutes",
//             secondsBtn: "seconds"
//         },
//         inputs: {       
//             days: undefined,
//             hours: undefined,
//             minutes: undefined,
//             seconds: undefined
//         }
//     }

//     function clickHandler(buttons, inputs, e) {
//         if (typeof buttons[e.target.id] === "string") {
//             updateDOM(Object.values(inputs), convert(convertionTable[buttons[e.target.id]], Number(ui.inputs[buttons[e.target.id]].value)));

//         }
//     }


//     Object.keys(ui.inputs).forEach(x => ui.inputs[x] = document.getElementById(x));  // пълнене на ui.inputs с елементи като стойности на ключовете - дни, часове и т.н.

//     if (Object.values(ui.inputs).filter(x => x === null).length > 0) {  // след запълване на обекта ui.inputs - проверка дали всички елементи в DOMa са налични.
//         throw new Error("Missing DOM element(s)!");
//     }

//     document.addEventListener("click", clickHandler.bind(undefined, ui.buttons, ui.inputs));     

// }
// function solve() {
//     let input = JSON.parse(document.getElementById("array").value);
//     console.log(input);

//     let stringMap = {
//         "!": "1",
//         "%": "2",
//         "#": "3",
//         "$": "4"
//     }
//     let key = input[0];
//     let encMessage = input[1];
//     console.log(key)
//     console.log(encMessage);

//     let regExp = new RegExp(` *(${key})( +)([!%$#A-Z]+)[ .,$]`, "gmi");
//     if (encMessage == null) return;
//     let decParts = encMessage.match(regExp).map(x => x.trim());
//     decParts = decParts.map(x => x.split(" "));
//     decParts.map((x, i) => {
//         if (x[1].toUpperCase() !== x[1] || x[1].length < 8) {
//             decParts.splice(i, 1);
//         }
//         return x;
//     })
//     let decPartsCopy = decParts.join(" ");

//     console.log(decParts);
//     let newParts = decParts.map(x => {
//         x[1] = replace(x[1], stringMap);
//         return x.join(" ");
//     })
//     decPartsCopy = decPartsCopy.split(" ").map(x => x.split(","));
//     console.log(decPartsCopy);
//     newParts = newParts.map(x => x.split(" "));
//     for (let i = 0; i < decParts.length; i++) {
//         console.log(decParts[i][1], newParts[i][1]);
//         encMessage = encMessage.replace(decPartsCopy[i][1], newParts[i][1]);
//     }

//     console.log(newParts);
//     console.log(encMessage);
//     encMessage = encMessage.match(/(.*?((.{5,45}[\!\?\.] *)|(, \w* )))/igm);
//     console.log(encMessage);
//     function replace(word, stringMap) {
//         if(word==null) return;
//         let out = Array.from(word).map(x => x.replace(x, stringMap[x] ? stringMap[x] : x));
//         return out.join("").toLowerCase();
//     }

//     // let result = `Result: ${encMessage[0]}`;
//     // let p = document.createElement("p");
//     // console.log(result);
//     // document.getElementById("result").appendChild(p).innerHTML = result;
//     for (let i = 0; i < encMessage.length; i++) {
//         p = document.createElement("p");
//         document.getElementById("result").appendChild(p).innerHTML = encMessage[i];
//     }

// }

// solve(["specialKey",
//     "In this text the specialKey HELLOWORLD! is correct, but the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while SpeCIaLkeY SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!"]
// )

// solve(["enCode",
//     "Some messages are just not encoded what can you do? RE - ENCODE THEMNOW! - he said. Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%."])


function solve() {
    let array = JSON.parse(document.getElementById('array').value);         // взима и парсва от входния масив 
    let result = document.getElementById('result');                         // инициализира изхода
    const specialKey = array.shift();                                       // отрязва първия елемент за ключ
 
    let regex = new RegExp(`(\\s|^)(${specialKey}\\s+)([A-Z!#$%]{8,})(\\.|,|\\s|$)`, 'gi');  // регекс за ключа с шифрованата дума

    array.map(str => {                                                      // взима останалия елемент от масива array[0] = str
        while ((match = regex.exec(str)) !== null) {                        // докато намира съвпадение по ключа,
            let encodeMessage = match[3];                                   // да взима 3 елеент - шифрованата дума
            if (encodeMessage.toUpperCase() !== encodeMessage) {            // проверява дали е само с главни букви
                continue;                                                   // ако не е, пропуска тази дума
            }
            let decodeMessage = decodeMessageFunc(encodeMessage);           // изпраща думата на функцията за декодиране
            let message = match[1] + match[2] + decodeMessage + match[4];   // match[1] и [4] са кепч. групите на интервалите  
            str = str.replace(match[0], message);          // подменя в текста (ключа и думата) с (ключа и декодираната дума)
        }
 
        let pElement = document.createElement('p');                         // създава таг <p>
        pElement.textContent = str;                                         // подава съдържание 
        result.appendChild(pElement);                                       // добавя новия елемент в HTML-a
    });
 
    function decodeMessageFunc(encodeMessage) {                             // функция за декодиране приема думата
        const symbols = ['!', '%', '#', '$'];                               // масив със символите
        const newSymbols = ['1', '2', '3', '4'];                            // масив с числата, съвпадат по индекс
        symbols.forEach((symbol, index) => {                                // за всеки символ от масива newSymbols 
            while (encodeMessage.includes(symbol)) {                        // докато намира такъв символ в думата
                encodeMessage = encodeMessage.replace(symbol, newSymbols[index]);   // да го подменя със съответстващото число
            }
        });
        return encodeMessage.toLowerCase()                                  // да върне декодираната дума, с малки букви
    }
}
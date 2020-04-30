function solve() {

    const selectMenuTo = document.getElementById('selectMenuTo');                         // взимаме елемент - падащо меню,в което трябва да добавим опции (виж най-отдолу на кода appendCh())

    document.querySelector("#container > button").addEventListener('click', convert);     // слушател, закачен на бутона. Селектора сме взели от хром 

    function convert() {
        let number = Number(document.getElementById('input').value);     // взимаме валю-то на подаденото число по id, от стринг го превръщаме в число 
        // console.log(selectMenuTo.value);                              // при клик се вижда в конзолата стойността на избраната опция от менюто, т.е. става 'selected'
        let result;                                                      // undefined за момента, 

        if (selectMenuTo.value === 'binary') {                           // проверка какво е избрано от менюто
            result = decimalToBinary(number);                            // връща резултат - стринг с двоично число
        } else if (selectMenuTo.value === 'hexadecimal') {
            result = decimalToHexadecimal(number);                      // връща стринг с шестнасетично число
        }
        // When the [Convert it] button is clicked, the expected result should appear in the [Result] input field.
        appendResult(result)
    }

    function appendResult(result) {
        document.getElementById('result').value = result;                    // използваме .value защото е поле
    }

    // Create functions to convert decimal to binary and decimal to hexadecimal
    function decimalToBinary(number) {                             // функц за превръщане в двоична бройна система 
        return (number >>> 0).toString(2);                         // готова функция. .toString(2) е за двоична, (8) за осмична и т.н.
    }

    function decimalToHexadecimal(number) {                         // аналогично за шеснайсетична бройна система
        return (number >>> 0).toString(16).toUpperCase();           // трябва да е с главни букви - от условието
    }

   // Create 'To' options: binary, Hexadecimal
    function createSelectMenuOptions() {                        // функц за създаване на опции в дропдаун меню
        let binaryOption = document.createElement('option');       // създаваме нов елемент, който е с таг <option> - за дропдаун меню
        binaryOption.textContent = 'Binary';                       // слагаме текст в него <option>Binary</option>
        binaryOption.value = 'binary';                             // слагаме пропърти(?!), за да можем да го идентифицираме. Става <option value="binary">Binary</option>   

        let hexadecimalOption = document.createElement('option');       // създаваме още един нов елемент, който е с таг <option> - за дропдаун меню, за хекса
        hexadecimalOption.textContent = 'Hexadecimal';
        hexadecimalOption.value = 'hexadecimal';


        selectMenuTo.appendChild(binaryOption);                 // вкарваме създадения елемент в HTML-a
        selectMenuTo.appendChild(hexadecimalOption);            // вкарваме и този     елемент в HTML-a

    }

    createSelectMenuOptions()                                   // Извикване на функцията за добавяне на опции в дропдаун менюто, за да се покажат със зареждане на страницата
} 
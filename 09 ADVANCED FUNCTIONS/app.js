
import { MOCK } from "./MOCK_DATA.js";
// във файла там има export const MOCK = {.........}...
// import {MOCK} from "https://softuni.bg/downloads/svn/js-core/Sept-2019/JS-Advanced/04.%20JS-Advanced-Advanced-Functions/MOCK_DATA.json";

/* Имаме данни (data), които трябва да представим в табличен вид в документа document.
Правим IIFE функция (function (data, document) { ..... }(MOCK, document)) и започваме...
За целта първо си вадим ключовете от data, като ги взимаме от един от елементите (избрахме първия)
После построихме стрингов файл със таблицата и елементите в нея, които взехме чрез мачване на ентритата на обекта.
Визуализирахме каквото сме направили чрез << document.getElementById("app").innerHTML = r; >> - последния ред на кода.
Направихме нещо като partial application с функция за генериране на тагове - createTag и на база на нея bind-нахме 
няколко функции за различните тагове renderTable, renderTd... Кодът се скъси и стана по-семантичен.
Обаче имаме картинки, до момента построеното вече не ни върши работа...

*/
(function (data, document) {
    const keys = Object.keys(data[0])      // взимаме ключовете чрез първия елемент [0]



    // функция за изписване (генериране) на тагове с отделни отварящ и затварящ таг
    function createTag(tag, content) {
        return `<${tag}>
    ${Array.isArray(content) ? content.join("") : content}
</${tag}>`;   // ако съдържанието на клетката е масив, да го джойнне (залепи стринговете в масива) 
    } // Подреждането на стринга на три реда ще се отрази в HTML-а с подреждане на кода на три реда за всеки елемент

    // функция за изписване на единични тагове (напр. <img />)
    function createSingleTag(tag, prop, val) {        // може да имаме линк, картинка и т.н. с различни prop, затова не го хардкодваме. Но ако prop е повече от едно, имаме проблем...
        return `<${tag} ${prop} = "${val}"/>`;
    }


    // Currying с .bind()
    const renderTable = createTag.bind(undefined, "table");  // хардкодваме първия параметър(tag) към функцията createTag(TAG, content)
    const renderThead = createTag.bind(undefined, "thead");  // целта е да направим кода по-четим, да не се повтарят много html елементи за всяко извикване на createTag
    const renderTbody = createTag.bind(undefined, "tbody");
    const renderTr = createTag.bind(undefined, "tr");    //  tr - редове
    const renderTh = createTag.bind(undefined, "th");    //  th - хедър
    const renderTd = createTag.bind(undefined, "td");    // data cells
    const renderUl = createTag.bind(undefined, "ul");    // unordered list
    const renderLi = createTag.bind(undefined, "li");    // list


    // На база на типа на контента преценява какво да прави в клетката (картинка, текст)
    function chooseContentType(map, defaultWrapper, type, content) {    // defaultWrapper е callback функция на renderTd/Th/Tr...
        if (typeof map[type] === "function") {              // ако намерим в мапа, който подадем [типа] който сме избрали и
            return defaultWrapper(map[type](type, content));     // ако е функция, да го извикаме със съдържанието 
        }
        return defaultWrapper(content);    // 
    }

    // за обслужване на defaultTd, за обхващане на различните типове данни ЗА ПРЕДСТАВЯНЕ вътре в клетките
    const fieldsMap = {
        avatar: (_, x) => createSingleTag("img", "src", x),       // x е content
        friends: (_, list) => renderUl(list.map(f => renderLi(`${f.first_name} ${f.last_name}`))),
        email: (_, x) => `<a href = "mailto:${x}">${x}</a>`       // мейлът става линк и отваря дефолтния мейл клиент на компютъра
    }



    // за обслужване на defaultTh, за обхващане на различните типове данни ЗА СОРТИРАНЕ
    const headingsMap = ["id", "first_name", "last_name", "email", "gender", "ip_address"]
        .reduce((a, b) => {
            a[b] = (type, content) => `<a class = "filter" data-sortby = "${type}">${content}</a>`     // за да може да се клика на таба и да се извиква сортировката 02:37:10
            return a;
        }, {});




    // вместо да пишем renderTd с 4 аргумента, ще създадем bind функция
    const defaultTd = chooseContentType.bind(
        undefined,
        fieldsMap, renderTd
    )


    // за сортиране на редовете ще използваме горната функция th
    const defaultTh = chooseContentType.bind(
        undefined,
        headingsMap, renderTh
    )

    // за превод на Български език 
    const dict = {
        id: "Идент.",
        email: "Мейл",
        gender: "Пол",
        ip_address: "IP",
        first_name: "Име",
        avatar: "Картинка",
        friends: "Приятели",
        last_name: "Фамилия"
    }



    //строим стринга на таблицата, като добавяме към стринга r - първо тхедър->тр->тх-та, после тбоди->тр->тд-та.
    function main(data) {
        return renderTable(
            renderThead(renderTr(keys.map(key => defaultTh(key, dict[key])))) +                           // извикването на dict[key] превежда на български. За оригинал - само [key]
            renderTbody(data.map(row => renderTr(keys.map(cell => defaultTd(cell, row[cell])))))
            // + събира двата стринга на хеда и бодито на таблицата
        )

        // .join("") ako излизат данни със запетая в страницата

    }

    function addToHTML(data) {
        document.getElementById("app").innerHTML = main(data);    // вкарване в HTML кода
    }
    addToHTML(data);


    // функцията за сортиране по различни критерии
    function sortBy(key, a, b) {
        if (typeof a[key] === "number") {
            return a[key] - b[key];
        }
        return a[key].localeCompare(b[key]);
    }

    function clickHandler(data, evt) {
        if (evt.target.classList.contains("filter")) {

            addToHTML(data.sort(sortBy.bind(undefined, evt.target.dataset.sortby)));   // на основната функция подаваме пресортираните data
        }
    }


    document.addEventListener("click",clickHandler.bind(undefined, data), true);
    //document.getElementById("app").innerHTML = JSON.stringify(MOCK);  // vizualizirane w chrome
}(MOCK.slice(0, 20), document))


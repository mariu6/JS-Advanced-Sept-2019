function solve() {
    let input = document.getElementById("string").value.split(",");
    let result = document.getElementById("result");
    let outCriteria = input.pop().trim();
    let string = input.join(" , ");
    let output = {
        "all": `Mr/Ms, ${getNames(string)}, your flight number ${getFlightNumber(string)} is from ${getFlight(string)}. Have a nice flight with ${getCompany(string)}.`,
        "name": `Mr/Ms, ${getNames(string)}, have a nice flight!`,
        "flight": `Your flight number ${getFlightNumber(string)} is from ${getFlight(string)}.`,
        "company": `Have a nice flight with ${getCompany(string)}.`
    }
    result.innerHTML = output[outCriteria];
    // console.log(getNames(string));
    // console.log(getFlight(string));
    // console.log(getFlightNumber(string));
    // console.log(getCompany(string));
    // console.log(outCriteria);

    function getNames(string) {
        let names = string.match(/( )([A-Z][A-Za-z]*)-(([A-Z][A-Za-z]*) |(([A-Z][A-Za-z]*).-([A-Z][A-Za-z]*)) )/gm)[0];
        return replaceChar(names.trim(), "-", " ");
    }
    function getFlight(string) {
        let flights = string.match(/ [A-Z]{3}\/[A-Z]{3} /gm)[0];
        return replaceChar(flights.trim(), "/", " to ");
    }
    function getFlightNumber(string) {
        let number = string.match(/ [A-Z]{1,3}[0-9]{1,5} /gm)[0];
        return number.trim();
    }
    function getCompany(string) {
        let company = string.match(/- ([A-Z][A-Za-z]*)\*([A-Z][A-Za-z]*) /gm)[0];
        return replaceChar(company.slice(2, -1), "*", " ");
    }
    function replaceChar(string, from, to) {
        while (string.includes(from)) {
            string = string.replace(from, to);
        }
        return string;
    }
}   
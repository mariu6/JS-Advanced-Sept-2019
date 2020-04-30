
// function solve(data, criteria) {     // входна точка в програмата   
    
//     function filterByProp(prop, value, element) {
//         return element[prop] === value;       // true, false
//     }
    
//     function splitParams(criteria) {
//         return criteria.split('-');
//     }
    
//     function formatEmployee(el, i) {                                            // first clas function??
//         return `${i}. ${el.first_name} ${el.last_name} - ${el.email}`;          // ${el.first_name}  и ${el["first_name"]} са едно и също - вземане на стойностите за ключа от обекта 
//     }
    
//     // console.log(JSON.parse(data));
//     return criteria === 'all'        // ако критерият за филтриране е 'all'
//         ? JSON.parse(data)           // парсни данните  => получаваме масив от обекти с данните на служителите key: value,
//             .map(formatEmployee)     // форматирай всеки един от тях според функцията formatEmployee
//             .join('\n')              // всеки елемент на нов ред
//         : JSON.parse(data)                  // ако критерият за филтриране е различен от 'all'
//             .filter(filterByProp.bind(undefined, ...splitParams(criteria)))  // филтрирай (true, false) според функцията filterByProp, кърната с splitParams
//             .map(formatEmployee)     // форматирай всеки един от тях според функцията formatEmployee
//             .join('\n')              // вадим от масива и ги рапределяме на нов ред
// }

// console.log(
//     solve(`[{"id": "1", "first_name": "Ardine" , "last_name": "Bassam", "email": "abassam0@cnn.com", "gender": "Female"}, 
//     {"id": "2", "first_name": "Kizzee", "last_name": "Jost", "email": "kjost1@forbes.com", "gender": "Female"},  
// {"id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male"}]`, 'gender-Female'));


// console.log(
//     solve(`[{
//             "id": "1",
//             "first_name": "Kaylee",
//             "last_name": "Johnson",
//             "email": "k0@cnn.com",
//             "gender": "Female"
//           }, {
//             "id": "2",
//             "first_name": "Kizzee",
//             "last_name": "Johnson",
//             "email": "kjost1@forbes.com",
//             "gender": "Female"
//           }, {
//             "id": "3",
//             "first_name": "Evanne",
//             "last_name": "Maldin",
//             "email": "emaldin2@hostgator.com",
//             "gender": "Male"
//           }, {
//             "id": "4",
//             "first_name": "Evanne",
//             "last_name": "Johnson",
//             "email": "ev2@hostgator.com",
//             "gender": "Male"
//           }]`,
//         'last_name-Johnson'));



function filter(stream, criteria) {
    let employees = JSON.parse(stream);
    criteria = criteria.split("-");
    employees = employees.filter((x) => x[criteria[0]] === criteria[1]);
    // console.log(employees);
    let number = 0;
    let out = function () {
         employees.map(x => console.log(`${number++}. ${x.first_name} ${x.last_name} - ${x.email}`));
    }
    return out();
}

filter(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'all');








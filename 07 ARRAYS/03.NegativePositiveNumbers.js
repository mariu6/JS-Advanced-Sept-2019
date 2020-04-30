// function negPosNums(array) {
//     let out = [];
//     array.map(x => x < 0 ? out.unshift(x) :out.push(x));
//     console.log(out.join('\n'));
// }
// negPosNums([7, -2, 8, 9]);


// function main(array) {    // премахване на if/else или тернарен оператор. Ползване на обект като мап
//     const objMap = {
//         true: "unshift",  // ако b < 0 (true), тогава  ще отговаря на стойността от objMap["true"], което е "unshift"
//         false: "push"    // ако b > 0 (false), тогава ще имаме стойността на objMap["false"], което е "push"
//     }
//     function negPosNumbs(arr) {
//         return arr.reduce((result, b) => result[objMap[b < 0]](b) && result, []).join("\n");
//         //  ще имаме result.unshift(b)   или  result.push(b)       '&& result' означава 'return result;'
//                                                 // правилото за &&(и) връща left-most-false или right-most-true 
//     }
//     return negPosNumbs(array)
// }

// console.log(main([7, -2, 8, 9]));


// // && (logical AND) -  returns the leftmost "false" value
// let val = true && 'yes' && -5 && null && false;
// console.log(val); // null   -  първата фолси стойност

// let val1 = true && 'no' && 5 && 25 && 'yes';
// console.log(val1); // 'yes' - всички са труе, затова връща последната стойност


// // || (logical OR) - returns the leftmost "true" value

// let value = false || 0 || '' || 5 || 'hi' || true;
// console.log(value); // 5
// let value1 = false || '' || null || NaN || undefined;
// console.log(value1); // undefined


function solve (data, criteria){
    let parsed= JSON.parse(data);
    let[criteriaName,criteriaValue]=criteria.split('-');
 
    let objToPrint={};
    let counter=0;
   
    Object.entries(parsed)
    .forEach(obj=>{
        let currValue=obj[1];
        let equalKey=Object.keys(currValue).filter(x=>x===criteriaName);
        let equalValue=Object.values(currValue).filter(y=>y===criteriaValue);
        if((equalKey.length>0 && equalValue.length>0) || criteria== 'all'){
            let newObj={};
            for(let name in currValue){
                if(name==='first_name'){
                    newObj[name]=currValue[name];
                }
                if(name==='last_name'){
                    newObj[name]=currValue[name];
                }
                if(name==='email'){
                    newObj[name]=currValue[name];
                }
            }
            objToPrint[counter++]=newObj;
        }
    })
   
    Object.entries(objToPrint)
    .forEach(line=>{
        let result='';
        let seqNum=line[0];
        result+= seqNum +'.';
        let valuesOfObject=line[1];
        Object.entries(valuesOfObject)
        .forEach(line=>{
           
            let [key,value]=line;
            if(key==='email'){
                result+=' -';
            }
            result+=' '+value;
        })
        console.log(result);
    })
}
 
solve(
    `[{
        "id": "1",
        "first_name": "Kaylee",
        "last_name": "Johnson",
        "email": "k0@cnn.com",
        "gender": "Female"
      }, {
        "id": "2",
        "first_name": "Kizzee",
        "last_name": "Johnson",
        "email": "kjost1@forbes.com",
        "gender": "Female"
      }, {
        "id": "3",
        "first_name": "Evanne",
        "last_name": "Maldin",
        "email": "emaldin2@hostgator.com",
        "gender": "Male"
      }, {
        "id": "4",
        "first_name": "Evanne",
        "last_name": "Johnson",
        "email": "ev2@hostgator.com",
        "gender": "Male"
      }]`,
     'last_name-Johnson'
   
)
// solve(
//     `[{
//         "id": "1",
//         "first_name": "Ardine",
//         "last_name": "Bassam",
//         "email": "abassam0@cnn.com",
//         "gender": "Female"
//       }, {
//         "id": "2",
//         "first_name": "Kizzee",
//         "last_name": "Jost",
//         "email": "kjost1@forbes.com",
//         "gender": "Female"
//       },  
//     {
//         "id": "3",
//         "first_name": "Evanne",
//         "last_name": "Maldin",
//         "email": "emaldin2@hostgator.com",
//         "gender": "Male"
//       }]`,
//     'gender-Female'
//     )
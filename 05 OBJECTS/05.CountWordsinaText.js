// function wordsCounter(str) {
//     let data = str[0].match(/\w+/gim);
//     let obj = {};
//     for (let i = 0; i < data.length; i++) {
//         if (typeof (obj[data[i]]) === "undefined") {
//             obj[data[i]] = 0;                        // деклариране, ако тази дума я няма
//         }
//         obj[data[i]]++;                              // добавяне на стойност
//     }
//     console.log(JSON.stringify(obj));
// }

function wordsCounter(str) {
    console.log(JSON.stringify(str[0]                //log out the stringify (taking only the string from the array)
        .match(/\w+/gim)                            // match the words into array
        .reduce((a, b) => {                         // reduce (a - object, b- word)
            if (typeof (a[b]) === "undefined") {    // if there is no property b of object a
                a[b] = 0;                           // create property b with value 0
            }
            a[b]++;                                 // add value to the property b of object a
            return a;                               // return object a
        }, {})));                                   // execute, output in object {}
}
wordsCounter(["Far too slow, you're far too slow."]);
wordsCounter(['JS devs use Node.js for server-side JS.-- JS for devs']); 


function wordsCounter1(array) {
    let out = {}; 
    array = array[0].match(/\w+/gm);
    array.map(x => {
        if (!out.hasOwnProperty(x)) {      // тук ползвам hasOwnProperty()
            out[x] = 0;
        }
        out[x]++;
        return x;
    })
    console.log(JSON.stringify(out));
}

wordsCounter1(["Far too slow, you're far too slow."]);
wordsCounter1(['JS devs use Node.js for server-side JS.-- JS for devs']); 


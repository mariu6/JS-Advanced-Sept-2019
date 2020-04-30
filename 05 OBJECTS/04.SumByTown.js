function sumTown(array) {
    let obj = {};                                   // Create empty object
    for (let i = 0; i < array.length; i += 2) {     // generate object from array input
        array[i + 1] = Number(array[i + 1]);        // change the type of numbers from string to number
        if (!obj.hasOwnProperty(array[i])) {        // if such property don't exsist
            obj[array[i]] = 0;                      // create property with number value 0 (because I expect the other value to be number)
        }
        obj[array[i]] += array[i + 1];              // add value to the (new or exsisting) property 
    }
    objectJSON = JSON.stringify(obj);               // stringify object for export
    console.log(objectJSON);                        // log to the console the stringified object
}

sumTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);


function sumTown1(array) {
    let outObj = {};
    for (let i = 0; i < array.length; i+=2) {
        array[i+1]= Number(array[i+1]);
        if (!outObj.hasOwnProperty(array[i])) {
            outObj[array[i]] = 0;
        }        
        outObj[array[i]] += array[i+1];
    }
    console.log(JSON.stringify(outObj));
}

sumTown1(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
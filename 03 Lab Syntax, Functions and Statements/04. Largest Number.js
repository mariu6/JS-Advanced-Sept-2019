function largestNumber(...params) {
    let number = Math.max(...params);
    // console.log(`The largest number is ${params.sort((a,b) => a - b).pop()}.`);
    console.log(`The largest number is ${number}.`);
}

largestNumber(-3, -5, -22.5);

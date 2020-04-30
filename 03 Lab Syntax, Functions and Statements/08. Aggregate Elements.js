function aggregateElements(array) {
    const add = ((x,y) => x + y);
    const addInverse = (x,y) => x +(1 / y);
    const concat = (x,y) => x + y.toString();

    console.log(array.reduce(add, 0));
    console.log(array.reduce(addInverse, 0));
    console.log(array.reduce(concat, ""));
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);  
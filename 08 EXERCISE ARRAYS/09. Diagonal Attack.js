function diag(array2D) {
    array2D = array2D.map(x => x.split(" ").map(Number));

    if (hasEqualDiagonals(array2D)[0]) {
        replace(array2D, hasEqualDiagonals(array2D)[1]);
        printArr2D(array2D);
    } else {
        printArr2D(array2D);
    }

    function replace(arr2D, diag) {
        return arr2D.map((x, i) => {
            x.map((y, j) => {
                if (i !== j && (arr2D.length - 1 - i) !== j) {
                    x[j] = diag;
                }
            })
        });
    }

    function hasEqualDiagonals(arr2D) {
        let d1 = arr2D.reduce((a, b, i, arr2D) => { return a + b[i] }, 0);
        let d2 = arr2D.reduce((a, b, i, arr2D) => a + b[arr2D.length - 1 - i], 0);
        return d1 === d2 ? [true, d1] : [false, d1];
    }

    function printArr2D(arr2D) {
        return arr2D.map(row => console.log(row.join(" ")));
    }
}


diag([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);

// diag([ '1 1 1', '1 1 1', '1 1 0' ])
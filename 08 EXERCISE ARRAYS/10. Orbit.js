function orbit(input) {
    let array2D = Array(input[0]).fill().map(() => Array(input[1]).fill(1));
    array2D = array2D.map((x, i) => x.map((y, j) => {
        return x[j] +=  Math.max(Math.abs(i - input[2]), Math.abs(j - input[3]));
    }));
    array2D.map(x => console.log(x.join(" ").trim()));
}

orbit([4, 4, 0, 0]);
orbit([ 5, 5, 2, 2 ]);
orbit([ 3, 3, 2, 2 ])
function circle(input) {
    if (typeof(input) === 'number') {
        console.log(((input**2)*Math.PI).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
    }
}
circle(5);
circle('name');

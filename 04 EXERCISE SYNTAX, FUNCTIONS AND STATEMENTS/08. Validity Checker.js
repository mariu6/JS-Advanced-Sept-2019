function checker(array) {
    let [x1,y1,x2,y2] = [...array];
    let p1 = Math.sqrt(x1**2 + y1**2);
    let p2 = Math.sqrt(x2**2 + y2**2);
    let z = Math.sqrt((x1-x2)**2 + (y1-y2)**2);

    function print(dist) {
        if (Math.floor(dist) === dist) {
            return "valid";
        } else {
            return "invalid";
        }
    }
    console.log(`{${x1}, ${y1}} to {0, 0} is ${print(p1)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${print(p2)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${print(z)}`);
}
checker([3, 0, 0, 4]);
/*{3, 0} to {0, 0} is valid
{0, 4} to {0, 0} is valid
{3, 0} to {0, 4} is valid */

checker([2, 1, 1, 1]);
/*{2, 1} to {0, 0} is invalid
{1, 1} to {0, 0} is invalid
{2, 1} to {1, 1} is valid*/


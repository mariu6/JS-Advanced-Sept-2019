// function fruit(fruits, weight, price) {
//     let weightInKg = weight / 1000;
//     let sum = weightInKg * price;
//     console.log(`I need $${sum.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruits}.`);
// }
// fruit('orange', 2500, 1.8);



function solve(...input) {
    let sum = (input[1]*input[2]/1000).toFixed(2);
    console.log(`I need $${sum} to buy ${(input[1]/1000).toFixed(2)} kilograms ${input[0]}.`);
}

solve('orange', 2500, 1.80);


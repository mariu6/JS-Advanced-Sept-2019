//@ts-check

function coffee(array) {
    const typesOfCoffee = {
        "caffeine" : 0.8,
        "decaf": 0.9
    }
    let income = 0;

    for (let currentOrder of array) {
        let price = 0;
        currentOrder = currentOrder.split(", ");

        let coins = Number(currentOrder[0]);
        let typeOfDrink = currentOrder[1];

        if (typeOfDrink === "coffee") {
            price += typesOfCoffee[currentOrder[2]];
        } else {
            price += 0.8;
        }

        if (currentOrder.includes('milk')) {
            price += Number((price*0.1).toFixed(1));
        }
        let shugars = Number(currentOrder.pop());
   
        if (shugars) {
            price += 0.1;
        }

        if (coins >= price) {
            console.log(`You ordered ${typeOfDrink}. Price: $${price.toFixed(2)} Change: $${(coins - price).toFixed(2)}`);
            income += price;
        } else {
            console.log(`Not enough money for ${typeOfDrink}. Need $${(price - coins).toFixed(2)} more.`);
        }
    }
    console.log(`Income Report: $${income.toFixed(2)}`);
}

coffee(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);

// coffee(['8.00, coffee, decaf, 4', '1.00, tea, 2']);
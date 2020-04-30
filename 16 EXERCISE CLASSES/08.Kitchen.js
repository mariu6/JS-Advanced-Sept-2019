class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.productsInStock = {};
        this.actionsHistory = [];
        this.menu = {};
    }

    loadProducts(productArray) {
        productArray.map(x => {
            let [productName, productQuantity, productPrice] = x.split(" ");
            if (this.budget - productPrice >= 0) {
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = 0;
                }
                this.productsInStock[productName] += productQuantity;
                this.budget -= productPrice;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        })
        return this.actionsHistory.join("\n");
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = [neededProducts, price];
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?"`
        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }

    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`
        } else {
            return Object.keys(this.menu).map(meal => {
                return `${meal} - $ ${this.menu[meal][1]}`
            }).join("\n").trim();
        }
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        } else {
            let haveProducts = true;
            this.menu[meal][0].map(item => {
                let [product, quantity] = item.split(" ");
                if (!this.productsInStock.hasOwnProperty(product) || this.productsInStock.product < quantity) {
                    haveProducts = false;   
                }
                return haveProducts;
            });

            if (haveProducts === true) {
                this.menu[meal][0].map((product, quantity) => {
                    this.productsInStock[product] -= quantity;
                })
                this.budget += this.menu[meal][1];
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal][1]}.`
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
    }
}


let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
// Successfully loaded 10 Banana
// Successfully loaded 20 Banana
// Successfully loaded 50 Strawberries
// Successfully loaded 10 Yogurt
// There was not enough money to load 500 Yogurt
// Successfully loaded 5 Honey

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// Great idea! Now with the frozenYogurt we have 1 meals on the menu, other ideas?
// Great idea! Now with the Pizza we have 2 meals on the menu, other ideas?

console.log(kitchen.showTheMenu());
// frozenYogurt - $ 9.99
// Pizza - $ 15.55


console.log(kitchen.makeTheOrder("Pizza"));
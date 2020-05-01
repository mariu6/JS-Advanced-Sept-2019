class ChristmasDinner {
    constructor(budget) {
        this._budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = [];
    }
    get budget() {
        return this._budget;
    }

    set budget(_budget) {
        if (this._budget < 0) {
            throw new Error("The budget cannot be a negative number")
        }
        return this._budget;
    }

    shopping(product) {

        let prod = product[0];
        let price = product[1];
  
        if (price > this.budget) {
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(prod);
        this.budget -= price;
        // console.log(this.budget);
        return `You have successfully bought ${prod}!`;

    }

    recipes(recipe) {
        let recipeName = recipe.recipeName;
        let productList = recipe.productsList;
        // console.log(recipeName, productList);
        let fin = productList.map(product => {
            return this.products.filter(prod => prod === product)[0]
        })
        if (fin.length === productList.length) {
            this.dishes[recipeName] = productList;
            return `${recipeName} has been successfully cooked!`;
        } else {
            throw new Error("We do not have this product");
        }
        // console.log(this.dishes);
    }

    inviteGuests(name, dish) {
        let resName = this.guests.includes(name);
        let resDish = Object.keys(this.dishes).includes(dish);
        if (!resDish) {
            throw new Error("We do not have this dish");
        }
        if (resName) {
            throw new Error("This guest has already been invited");
        } else {
            this.guests.push({[name]:dish});
            return `You have successfully invited ${name}!`;
        }
    }

    showAttendance() {
        let result = '';
        // console.log(this.dishes)
        // console.log(this.guests);
        this.guests.map(name => {
        // console.log(name);
        let [guest] = Object.entries(name);
        // console.log(guest);
        let products = Object.values(this.dishes[guest[1]]).join(", ");
        result += `${guest[0]} will eat ${guest[1]}, which consists of ${products}\n`;
    })
        // console.log(result);
        result = result.trim();
        return result;
    }
}
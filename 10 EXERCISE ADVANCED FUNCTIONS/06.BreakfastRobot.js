
let manager = (function () {
    let stock = {
        "protein": 0,
        "carbohydrate": 0,
        "fat": 0,
        "flavour": 0
    }

    let library = {
        "apple": { "carbohydrate": 1, "flavour": 2 },
        "lemonade": { "carbohydrate": 10, "flavour": 20 },
        "burger": { "carbohydrate": 5, "fat": 7, "flavour": 3 },
        "eggs": { "protein": 5, "fat": 1, "flavour": 1 },
        "turkey": { "protein": 10, "carbohydrate": 10, "fat": 10, "flavour": 10 }
    }

    return function solution(input) {
        // console.log("5", input);


        let instructions = input.split(" ");
        // console.log(instructions);

        if (instructions[0] === "restock") {
            return restock(instructions[1], instructions[2]);
        } else if (instructions[0] === "report") {
            return report();
        } else {
            return production(instructions[1], instructions[2]);
        }

        function restock(microelement, quantity) {
            stock[microelement] += Number(quantity);
            return "Success";
        }

        function report() {
            return Object.entries(stock).map(x => `${x[0]}=${x[1]}`).join(" ");
        }

        function production(menuItem, quantity) {
            let inReturn = '';
            let i = 0;
            while (i < Number(quantity)) {
                Object.keys(library[menuItem]).map(x => {
                    if ((stock[x] - Number(library[menuItem][x])) >= 0) {
                        stock[x] -= Number(library[menuItem][x]);
                    } else {
                        inReturn = `Error: not enough ${x} in stock`;
                        i = Number(quantity);
                    }
                });
                i++;
                return inReturn? inReturn: "Succsess";
            }

        }
    }
}())


// console.log(manager("restock flavour 50"));
// console.log(manager("report"));
// console.log(manager("restock protein 50"));  
// console.log(manager("prepare lemonade 4"));

// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));

let input = [
    'prepare turkey 1',
'restock protein 10',
'prepare turkey 1',
'restock carbohydrate 10',
'prepare turkey 1',
'restock fat 10',
'prepare turkey 1',
'restock flavour 10',
'prepare turkey 1',
'report',
]
input.map(x => console.log(manager(x)));

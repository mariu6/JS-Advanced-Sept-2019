class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`
        }
        let foundGrade = Object.keys(this.kids).find(curr => Number(curr) === grade);
        if (foundGrade) {
            let exists = false;
            Object.values(this.kids[foundGrade]).forEach(value => {
                let thisName = value.split('-')[0];
                if (name === thisName) {
                    exists = true;
                }
            })
            if (!exists) {
                this.kids[grade].push(`${name}-${budget}`);
            }
            else {
                return `${name} is already in the list for this ${this.destination} vacation.`
            }
        }
        else {
            this.kids[grade] = [];
            this.kids[grade].push(`${name}-${budget}`);
        }
        return this.kids[grade];
    }
    
    removeChild(name, grade) {
        let foundGrade = Object.keys(this.kids).find(x => Number(x) === grade);
        if (foundGrade) {

            let foundKid = this.kids[foundGrade].find(curr => curr.split('-')[0] === name);
            if (foundKid) {
                let ind = this.kids[grade].indexOf(foundKid);
                this.kids[grade].splice(ind, 1);
                return this.kids[grade];
            }
        }
        return `We couldn't find ${name} in ${grade} grade.`;

    }

    get numberOfChildren() {
        return Object.entries(this.kids).length;
    }

    toString() {
        let result = '';
        let num = 0;
        Object.values(this.kids).forEach(arr => {
            arr.forEach(kid => num++);
        });
        if (num > 0) {
            Object.entries(this.kids).sort((a, b) => {
                a[0] - b[0];
            })
            result += `${this.organizer} will take ${num} children on trip to ${this.destination}\n`

            Object.entries(this.kids).forEach(gradeKVP => {
                let seq = 0;
                if (gradeKVP[1].length > 0) {
                    result += `Grade: ${gradeKVP[0]}\n`;
                    gradeKVP[1].forEach(currName => {
                        result += `${++seq}. ${currName}\n`
                    })
                }
                // result += '\n';
            })
        }
        else {
            result += `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
        return result;
    }
}


// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Lilly', 6, 2100));
// console.log(vacation.registerChild('Pesho', 6, 2400));
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Tanya', 5, 6000));
// console.log(vacation.registerChild('Mitko', 10, 1590));

// [ 'Gosho-2000' ]
// [ 'Lilly-2100' ]
// [ 'Lilly-2100', 'Pesho-2400' ]
// Gosho is already in the list for this San diego vacation.
// [ 'Gosho-2000', 'Tanya-6000' ]
// Mitko's money is not enough to go on vacation to San diego.
// testing toString method

// const Vacation = result;

let vacation = new Vacation('Miss. Elizabeth', 'The bahamas', 400);
vacation.registerChild('Gosho', 12, 3400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Pesho', 12, 400);
vacation.registerChild('Skaro', 11, 400);
vacation.registerChild('Gosho', 11, 3444);

let output = vacation.toString();
// expect(output).to.equal("Miss. Elizabeth will take 4 children on trip to The bahamas\nGrade: 11\n1. Skaro-400\n2. Gosho-3444\nGrade: 12\n1. Gosho-3400\n2. Pesho-400\n");
console.log(output);

// Unexpected error: 
// expected 'Miss. Elizabeth will take 4 children on trip to The bahamas\nGrade: 11\n1. Skaro-400\n2. Gosho-3444\n\nGrade: 12\n1. Gosho-3400\n2. Pesho-400\n\n' 
// to equal 'Miss. Elizabeth will take 4 children on trip to The bahamas\nGrade: 11\n1. Skaro-400\n2. Gosho-3444\nGrade: 12\n1. Gosho-3400\n2. Pesho-400\n'


// Unexpected error: 
// expected 'Miss. Elizabeth will take 4 children on trip to The bahamas\nGrade: 111. Skaro-400\n2. Gosho-3444\n\nGrade: 121. Gosho-3400\n2. Pesho-400\n\n' 
// to equal 'Miss. Elizabeth will take 4 children on trip to The bahamas\nGrade: 11\n1. Skaro-400\n2. Gosho-3444\nGrade: 12\n1. Gosho-3400\n2. Pesho-400\n'
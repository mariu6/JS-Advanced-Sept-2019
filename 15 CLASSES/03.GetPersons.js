function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`.toString();
        }
    }

    let anna = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
    let softUni = new Person("SoftUni");
    let stephan = new Person("Stephan", "Johnson", 25);
    let gabriel = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com");
    return [anna, softUni, stephan, gabriel];
}

// let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
// let str = p.toString();
// console.log(str);

// let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
// person.toString();

console.log(getPersons());
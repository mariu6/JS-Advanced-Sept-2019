class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }
    unite(otherRat) {
        if(otherRat instanceof Rat) this["unitedRats"].push(otherRat);
    }
    getRats() {
        return this.unitedRats;
    }
    toString () {
        return this.name + "\n" + this.unitedRats.map(x => `##${x}`).join("");
    }
}


let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter
 
console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());
// [ Rat { name: 'George', unitedRats: [] },
//  Rat { name: 'Alex', unitedRats: [] } ]

console.log(firstRat.toString());
// Peter
// ##George
// ##Alex



// let Rat = result;
let rat2 = new Rat("Viktor");
let rat3 = new Rat("Vichi");
let rat4 = "fake rat";

rat2.unite(rat4);
// expect(rat2.getRats().length).to.be.equal(0,    "'Rat.unite()' function does not work properly");
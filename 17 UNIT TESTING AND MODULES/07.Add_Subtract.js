function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

module.exports = createCalculator;
let bom =createCalculator();
// bom.add(4)
console.log(bom.add({}))
// bom.subtract("1")
console.log(bom.get());
console.log(bom.add(1));
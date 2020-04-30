class List {
    _size;
    constructor() {
        this.collection = [];
        this.size = 0;
    }
    add(element) {
        this.collection.push(element);
        this.size++;
        return this.collection.sort((a, b) => a - b);
    }
    remove(index) {
        if (index >= 0 && index < this.collection.length) {
            this.collection.splice(index, 1);
            this.size = Math.max(0, --this.size);
        }
        return this.collection;
    }
    get(index) {
        return this.collection[index];
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

console.log(list.size);
console.log(list.hasOwnProperty("collection"));
console.log(list.hasOwnProperty("size"));
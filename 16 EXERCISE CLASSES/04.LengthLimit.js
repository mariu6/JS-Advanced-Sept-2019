// class Stringer {
//     constructor(innerString, innerLength) {
//         this.innerString = innerString;
//         this.innerLength = Number(innerLength);
//     }
//     increase(length) {
//         this.innerLength += length;
//     }
//     decrease(length) {
//         this.innerLength = Math.max(0, this.innerLength - length);
//     }
//     toString() {
//         return (this.innerLength < this.innerString.length)
//             ? this.innerString.substring(0, this.innerLength) + "..."
//             : this.innerString;
//     }
// }


// Конструктор функция
function Stringer(innerString, innerLength) {
    this.innerString = innerString;
    this.innerLength = innerLength;
}

Stringer.prototype.increase = function (length) {
    this.innerLength += length;
}
Stringer.prototype.decrease = function (length) {
    this.innerLength = Math.max(0, this.innerLength - length);
}
Stringer.prototype.toString = function () {
    return (this.innerLength < this.innerString.length)
                ? this.innerString.substring(0, this.innerLength) + "..."
                : this.innerString;
}



let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test

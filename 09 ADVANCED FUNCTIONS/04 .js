// function solution() {
//     let currentText = '';

//     function append(string) {
//         return currentText += string;
//     }

//     function removeStart(n) {
//         return currentText = currentText.substring(n);   // връща от n нататък
//     }

//     function removeEnd(n) {
//        return currentText = currentText.substring(0,currentText.length - n);   // връща от 0 до n
//     }

//     function print() {
//        return console.log(currentText);
//     }

//     return {
//         append, removeStart, removeEnd, print      // return pattern
//     }
// }


// let firstZeroTest = solution();

// firstZeroTest.append('hello');
// firstZeroTest.append('again');
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4);  
// firstZeroTest.print();    //loa

// let secondZeroTest = solution();

// secondZeroTest.append('123');
// secondZeroTest.append('45');
// secondZeroTest.removeStart(2);
// secondZeroTest.removeEnd(1);
// secondZeroTest.print();  //34


function solution() {
    let string = "";
    return {
        append: (str) => string += str,
        removeStart: (num) => string = string.split("").splice(num).join(""),
        removeEnd: (num) => string = string.split("").splice(0, string.length - num).join(""),
        print: () => console.log(string)
    }
}




let firstZeroTest = solution();

firstZeroTest.append('hello'); 
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

// firstZeroTest.append('123');
// firstZeroTest.append('45');
// firstZeroTest.removeStart(2);
// firstZeroTest.removeEnd(1);
// firstZeroTest.print();
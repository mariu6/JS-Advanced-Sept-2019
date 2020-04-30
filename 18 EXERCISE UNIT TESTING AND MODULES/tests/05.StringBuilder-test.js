const StringBuilder = require("../05.StringBuilder");
let { expect } = require("chai");



// describe("StringBuilder functional test", function () {
//     // init
//     it("Zero01. Is instantiated with args", function () {
//         expect(new StringBuilder("a")).to.be.a.instanceOf(StringBuilder);
//     });
//     it("01. Is instantiated without args", function () {
//         expect(new StringBuilder()).to.be.a.instanceOf(StringBuilder);
//     });

//     //append()
//     it("09. append(!string) will throw an Error", function () {
//         let instance = new StringBuilder();
//         expect(() => instance.append(1)).to.throw("Argument must be string");
//     });
//     it("03. append(string) will be pushed to the end of array", function () {
//         let instance = new StringBuilder();
//         instance.append("ab");
//         expect(instance._stringArray).to.deep.equal(["a", "b"]);
//     });
//     it("02. append(string) will be pushed to the end of array", function () {
//         let instance = new StringBuilder("ab");
//         instance.append("cd");
//         expect(instance._stringArray).to.deep.equal(["a", "b", "c", "d"]);
//     });

//     //prepend()  - и трите минават като четвърта проверка...
//     // it("04. prepend(!string) will throw an Error", function () {
//     //     let instance = new StringBuilder("234");
//     //     expect(() => instance.prepend(01)).to.throw("Argument must be string");
//     // });
//     // it("04. prepend(string) will be pushed to the beginning of array", function () {
//     //     let instance = new StringBuilder();
//     //     instance.prepend("a")
//     //     expect(instance._stringArray).to.deep.equal(["a"]);
//     // });
//     it("04. prepend(string) will be pushed to the beginning of array", function () {
//         let instance = new StringBuilder("a");
//         instance.prepend("cb");
//         expect(instance._stringArray).to.deep.equal(["c", "b", "a"]);
//     });
//     it("10. append() is a function (can be done with any of them)", function () {
//         expect(StringBuilder.prototype.append).to.be.a('function');
//     });

//     // insertAt(string, index) само последната проверка мина
//     // it("00. insertAt(!string, index) will throw an Error", function () {
//     //     let instance = new StringBuilder("abc");
//     //     expect(() => instance.insertAt(123, 2)).to.throw("Argument must be string");
//     // });
//     // it("00. insertAt(string, index) will be pushed to the end of array", function () {
//     //     let instance = new StringBuilder("12");
//     //     instance.insertAt("0", 0);
//     //     expect(instance._stringArray).to.deep.equal(["0", "1","2"]);
//     // });
//     // it("00. insertAt(string, index) will be pushed to the end of array", function () {
//     //     let instance = new StringBuilder("01");
//     //     instance.insertAt("2", 2);
//     //     expect(instance._stringArray).to.deep.equal(["0", "1", "2"]);
//     // });
//     // it("00. insertAt(string, index) will be pushed to the end of array", function () {
//     //     let instance = new StringBuilder("013");
//     //     instance.insertAt("2", 2);
//     //     expect(instance._stringArray[3]).to.deep.equal(["3"]);
//     // });
//     it("05. insertAt(string, index) will be pushed to the index of array", function () {
//         let instance = new StringBuilder("014");
//         instance.insertAt("23", 2);
//         expect(instance._stringArray).to.deep.equal(["0", "1", "2", "3", "4"]);
//     });

//     // remove(startIndex, length)
//     it("06. remove(startIndex, length)  will be removed from the index and length of array", function () {
//         let instance = new StringBuilder("01234");
//         instance.remove(1, 2);
//         expect(instance._stringArray).to.deep.equal(["0", "3", "4"]);
//     });

//     // toString()
//     it("07-08. toString()  will print one string from the elements of array", function () {
//         let instance = new StringBuilder("01234");
//         expect(instance.toString()).to.equal("01234");
//     });
// }); 




// describe("StringBuilder", function () {
//     it("Can be instantiated without anything", function () {
//         let expected = new StringBuilder();
//         expect(expected).to.be.a("object");    // дали класът инстанцира {обект}.
//         // може да се тества с каквото и да е. Като фейлне, ще покаже какво се очаква да бъде, за да мине ;)
//     });
//     it("Can be instantiated with a passed in string ", function () {
//         let expected = new StringBuilder("test");          // инициализираме с четири символа
//         expect(expected._stringArray).to.have.lengthOf(4);  // дали има един елемент в масива
//     });
//     it("Functions attached to instance", function () {
//         let expected = new StringBuilder();
//         expect(expected).to.have.property("append");
//         expect(expected).to.have.property("prepend");
//         expect(expected).to.have.property("insertAt");
//         expect(expected).to.have.property("remove");
//         expect(expected).to.have.property("toString");
//     });
//     it("append(string) - not string", function () {
//         let expected = new StringBuilder("test");          // инициализираме с четири символа, 
//         expect(() => expected.append(1)).to.throw("Argument must be string");   // добавяме число вместо стринг
//     });
//     it("append(string) - the last symbol to equal the last element of array", function () {
//         let expected = new StringBuilder("Te");
//         expected.append("Demo")                     // с функцията апенд() добавяме 4-буквен стринг
//         expect(expected._stringArray[expected._stringArray.length - 1]).to.equal("o");   // дали последният елемент в стринга съвпада с о
//     });
//     // it("append(string) - the new array to equal the array and appended string", function () {
//     //     let expected = new StringBuilder("Te");
//     //     expected.append("o")                     // с функцията апенд() добавяме 4-буквен стринг
//     //     expect(expected._stringArray).to.deep.equal(['T', 'e', 'o']);   // дали последният елемент в стринга съвпада с о
//     // });
//     // it("prepend(string) - not string", function () {
//     //     let expected = new StringBuilder("Test");          
//     //     expect(() => expected.prepend(1)).to.throw("Argument must be string");   // добавяме число вместо стринг
//     // });
//     it("prepend(string) - the first symbol to equal the first element of array", function () {
//         let expected = new StringBuilder("Tеst");
//         expected.prepend("Demo")                    // с функцията апенд() добавяме 4-буквен стринг
//         expect(expected._stringArray[0]).to.equal("D");   // дали последният елемент в стринга съвпада с о
//     });
//     it("insertAt(string, index) - the new symbol to equal the second element of array", function () {
//         let expected = new StringBuilder("Te");
//         expected.insertAt("D", 1)
//         expect(expected._stringArray).to.deep.equal(['T', 'D', 'e']);
//     });
//     // it("insertAt(string, index) - the new symbol to equal the second element of array", function () {
//     //     let expected = new StringBuilder("Te");
//     //     expected.insertAt("D", 1)
//     //     expect(expected._stringArray[1]).to.equal('D');
//     // });
//     // it("insertAt(string, index) - the new symbol to equal the second element of array", function () {
//     //     let expected = new StringBuilder("Te");    
//     //     expect(() => expected.insertAt(1, 1)).to.throw("Argument must be string");
//     // });
//     it("remove(startIndex, length)  -  remove elements", function () {
//         let expected = new StringBuilder("Test");
//         expected.remove(1, 1)
//         expect(expected._stringArray[1]).to.equal('s');
//     });
//     it("toString()  -  join elements", function () {
//         let expected = new StringBuilder("Test");
//         expect(expected.toString()).to.equal('Test');
//     });
//     it("Argument must be a string  -  or throw error", function () {
//         let expected = new StringBuilder("test"); 
//         expect(() => new StringBuilder(21)).to.throw("Argument must be string");  // throw иска ()=> funct(a,b...)
//         expect(() => expected.insertAt(1, 1)).to.throw("Argument must be string"); 
//         expect(() => expected.insertAt()).to.throw("Argument must be string");
//         expect(() => expected.prepend(1)).to.throw("Argument must be string");
//         expect(() => expected.prepend()).to.throw("Argument must be string");
//         expect(() => expected.append(1)).to.throw("Argument must be string");
//         expect(() => expected.append()).to.throw("Argument must be string");
//     });
// });



// const StringBuilder = require ('../5-String Builder.js');
// let expect = require("chai").expect;
// let assert = require("chai").assert;

// describe('StringBuilder', function(){
//     let StBu;
//     this.beforeEach(function(){
//         StBu = new StringBuilder('');
//     });

//     it('should have the correct function properties', function () {
//         assert.isFunction(StringBuilder.prototype.append);
//         assert.isFunction(StringBuilder.prototype.prepend);
//         assert.isFunction(StringBuilder.prototype.insertAt);
//         assert.isFunction(StringBuilder.prototype.remove);
//         assert.isFunction(StringBuilder.prototype.toString);
//     });

//     describe('constructor tests', function(){

//         it('should initialized without parameters', function(){
//             let actual = '';
//             let expected = StBu.toString()
//             expect(actual.toString()).to.equal(expected);
//         });

//         it('should initialized with correct parameters', function(){
//             let actual = new StringBuilder('js');
//             let expected = 'js'
//             expect(actual.toString()).to.equal(expected);
//         });

//     });



//     describe('prepend tests', function(){

//         it('throw error', function(){
//             let actual = function () {StBu.prepend({a:1})};
//             let expected = 'Argument must be string';
//             assert.throws(actual, expected);
//         });

//     });


//     describe('several tests', function(){
//         it('should insertAt with correct parameters', function(){
//             StBu.append('>last');
//             StBu.prepend('first=');
//             StBu.insertAt('midle', 4);
//             StBu.remove(4, 5);
//             let actual = 'first=>last';
//             let expected = StBu.toString();

//             assert.equal(actual, expected);
//         });
//     });

// });



describe("String builder", function () {
    let test;
    beforeEach(function () {
        test = new StringBuilder("test");       // без лет, конст и т.н.
    })

    it(" /10 Runs correctly with and without string", function () {
        expect(test).to.be.a("object");        
        let empty = new StringBuilder();
        expect(empty.toString()).to.eq("");
        expect(test.toString()).to.eq("test");
    });
    it(" /10 Runs correctly with and without string", function () {
        let empty = new StringBuilder();
        expect(empty._stringArray).to.eql([]);
        expect(test._stringArray).to.have.lengthOf(4);
        expect(test._stringArray).to.eql(["t","e","s","t"]);
        expect(test._stringArray).to.be.a("array");
    });
    it(" /10 appends string", function () {
        test.append("ov")
        expect(test.toString()).to.eq("testov");
        expect(test.toString()).to.have.lengthOf(6);
        expect(test._stringArray).to.eql(["t","e","s","t","o","v"]);
    });
    it(" /10 prepends string", function () {
        test.prepend("ov")
        expect(test.toString()).to.eq("ovtest");
        expect(test.toString()).to.have.lengthOf(6);
        expect(test._stringArray).to.eql(["o","v","t","e","s","t"]);
    });
    it(" /10 insertAt(string, startIndex) ", function () {
        test.insertAt("11", 2)
        expect(test.toString()).to.eq("te11st");
        expect(test.toString()).to.have.lengthOf(6);
        expect(test._stringArray).to.eql(["t","e","1","1","s","t"]);
    });
    it(" /10 remove(startIndex, length) ", function () {
        test.remove(1, 1) 
        expect(test.toString()).to.eq("tst");
        expect(test.toString()).to.have.lengthOf(3);
        expect(test._stringArray).to.eql(["t","s","t"]);    
    });
    it(" /10 remove(startIndex, length) ", function () {
        test.remove(0, 10) 
        expect(test.toString()).to.eq("");
        expect(test.toString()).to.have.lengthOf(0);
        expect(test._stringArray).to.eql([]);    
    });
    it("2 /10 exception", function () {
        expect(() => new StringBuilder(1)).to.throw("Argument must be string");
        expect(() => test.append(1)).to.throw("Argument must be string");
        expect(() => test.append()).to.throw("Argument must be string");
        expect(() => test.prepend(1)).to.throw("Argument must be string");
        expect(() => test.prepend()).to.throw("Argument must be string");
        expect(() => test.insertAt(1, 1)).to.throw("Argument must be string");
        expect(() => test.insertAt()).to.throw("Argument must be string");
    });
    it("Saturation test - all methods", function () {
        test.append("123");
        test.prepend("321");
        test.insertAt("11", 2);
        test.remove(0, 10);
        expect(test.toString()).to.eq("23")
    });
    it("10. append() is a function (can be done with any of them)", function () {
                expect(StringBuilder.prototype.append).to.be.a('function');
            });
})




const PaymentPackage = require("../06.PaymentPackage");
let { expect } = require("chai");
let { assert } = require("chai");

// describe("PaymentPackage", function () {
//     // initiation with missing / wrong param   Error:...
//     it("01. Can't be instantiated with one parameter - a string name ", function () {
//         expect(() => new PaymentPackage(10)).to.throw("Name must be a non-empty string");
//     });
//     it("02. Can't be instantiated with one parameter - a number value", function () {
//         expect(() => new PaymentPackage("ada")).to.throw("Value must be a non-negative number");
//     });
//     it("03. VAT can be only positive ", function () {
//         let asa = new PaymentPackage("ada", 10);
//         expect(() => asa.VAT = -1).to.throw("VAT must be a non-negative number");
//     });
//     it("04. Active can be only boolean", function () {
//         let asa = new PaymentPackage("ada", 10);
//         expect(() => asa.active = null).to.throw("Active status must be a boolean");
//     });


//     // it("00. Instace name can be set", function() {
//     //     let asa = new PaymentPackage("ada", 1);
//     //     asa.name = "ara"; 
//     //     expect(asa._name).to.equal("ara");
//     // });
//     // it("00. Instace value can be set", function() {
//     //     let asa = new PaymentPackage("ada", 1);
//     //     asa.value = 2; 
//     //     expect(asa._value).to.equal(2);
//     // });
//     // it("00. Instace VAT can be set", function() {
//     //     let asa = new PaymentPackage("ada", 1);
//     //     asa.VAT = 18; 
//     //     expect(asa._VAT).to.equal(18);
//     // });
//     // it("00. Instace active can be set", function() {
//     //     let asa = new PaymentPackage("ada", 1);
//     //     asa.active = false; 
//     //     expect(asa.active).to.equal(false);
//     // });

//     // it("00. Instace name can't be set empty", function() {
//     //     let asa = new PaymentPackage("ada", 1);
//     //     expect(() => asa.name = "").to.throw("Name must be a non-empty string");
//     // });
//     // it("00. Instace value can't be set negative", function () {
//     //     let asa = new PaymentPackage("ada", 1);
//     //     expect(() => asa.value = -1).to.throw("Value must be a non-negative number");
//     // });
//     // it("00. try ", function () {
//     //     let asa = new PaymentPackage("ada", 1);
//     //     expect(asa.toString()).to.include("Package: ada");
//     // });


//     // check of calculations
//     // it("00. Correct VAT calculation", function () {
//     //     let asa = new PaymentPackage("ada", 10);
//     //     expect(asa.toString()).to.include("- Value (excl. VAT): 10");
//     // });
//     it("05,09. Correct VAT calculation", function () {
//         let asa = new PaymentPackage('HR Services', 1500);
//         asa.name = "New HR Services";
//         asa.value = 7000;
//         expect(asa.toString()).to.include("Package: New HR Services");
//         expect(asa.toString()).to.include("- Value (excl. VAT): 7000");
//         expect(asa.toString()).to.include("- Value (VAT 20%): 8400");
//     });
//     // it("05,09. Correct VAT calculation", function () {
//     //     let asa = new PaymentPackage('HR Services', 100);
//     //     asa.name = "New HR Services";
//     //     asa.VAT = 30;
//     //     expect(asa.toString()).to.include("- Value (VAT 30%): 130");
//     // });


//     // Normal initiation
//     it("08. Can be instantiated with two parameters - a string name and number value", function () {
//         let asa = new PaymentPackage("ada", 10);
//         expect(asa).to.be.instanceof(PaymentPackage);
//     });
//     // it("00. Check", function () {
//     //     let asa = new PaymentPackage("ada", 10);
//     //     expect(asa._VAT).to.equal(20);
//     // });
//     // it("00. Check", function () {
//     //     let asa = new PaymentPackage("ada", 10);
//     //     expect(asa).to.have.property("active");
//     // });

//     it("10. Change of active to false", function () {
//         let asa = new PaymentPackage("ada", 10);
//         asa.active = false;
//         expect(asa.toString()).to.include("(inactive)");
//     });

//     it("check if create new instance", () => {
//                 let obj = new PaymentPackage('a', 1)
//                 expect(obj).to.be.an.instanceof(PaymentPackage);
//                 expect(obj._name).to.equal('a')
//                 expect(obj._value).to.equal(1)
//                 expect(obj._VAT).to.equal(20)
//                 expect(obj._active).to.be.a('boolean')
//             });

// });





// describe("class PaymentPackage", () => {
//     it("check if create new instance", () => {
//         let obj = new PaymentPackage('a', 1)
//         expect(obj).to.be.an.instanceof(PaymentPackage);
//         expect(obj._name).to.equal('a')
//         expect(obj._value).to.equal(1)
//         expect(obj._VAT).to.equal(20)
//         expect(obj._active).to.be.a('boolean')
//     });
//     it("check for a input with one param", () => {
//         expect(() =>(new PaymentPackage('a')).to.throw('Value must be a non-negative number'))
//         expect(() =>(new PaymentPackage('a', 'a')).to.throw('Value must be a non-negative number'))
//         expect(() =>(new PaymentPackage('a', -1)).to.throw('Value must be a non-negative number'))
//         expect(() =>(new PaymentPackage(1)).to.throw('Name must be a non-empty string'))  
//         expect(() =>(new PaymentPackage('', 1)).to.throw('Name must be a non-empty string'))  
//     });
//      it("check all METHODS", () => {
//         let obj = new PaymentPackage('a', 10)
//         expect(obj).to.have.property('name');
//         expect(obj).to.have.property('value');
//         expect(obj).to.have.property('VAT');
//         expect(obj).to.have.property('active');
//         expect(obj).to.have.property('toString');  
//      });
//     it("check name method", () => {
//             expect(() =>(new PaymentPackage.name('')).to.throw('Name must be a non-empty string'))
//             expect(() =>(new PaymentPackage.name(1)).to.throw('Name must be a non-empty string'))
//             expect(() =>(new PaymentPackage.name(true)).to.throw('Name must be a non-empty string'))
//     });
// it("check value method", () => {
//     expect(() => (new PaymentPackage.value('')).to.throw('Value must be a non-negative number'))
//     expect(() => (new PaymentPackage.value(-1)).to.throw('Value must be a non-negative number'))
//     expect(() => (new PaymentPackage.value(true)).to.throw('Value must be a non-negative number'))
// });
//     it("check VAT method", () => {
//         expect(() =>(new PaymentPackage.VAT('')).to.throw('VAT must be a non-negative number'))
//         expect(() =>(new PaymentPackage.VAT(-1)).to.throw('VAT must be a non-negative number'))
//         expect(() =>(new PaymentPackage.VAT(true)).to.throw('VAT must be a non-negative number'))
//     });
//     it("check active method", () => {
//         expect(() =>(new PaymentPackage.active('')).to.throw('Active status must be a boolean'))
//         expect(() =>(new PaymentPackage.active(1)).to.throw('Active status must be a boolean'))
//     });
//     it("check toString with changes", () => {
//      let obj = new PaymentPackage('a', 100)
//      obj.active = false
//      obj.VAT = 30
//      expect(obj.toString()).to.equal('Package: a (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 30%): 130');  
//     });
//     it("check toString without changes", () => {
//         let obj = new PaymentPackage('a', 100)
//         expect(obj.toString()).to.equal('Package: a\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120');  
//     });

// });





// 100 / 100

// describe("PaymentPackage", function(){
//     it("constructor with 2 params", function() {
//         let actual = new PaymentPackage("str", 5);

//         assert.equal("str", actual.name);
//         assert.equal(5, actual.value);
//         assert.equal(20, actual.VAT);
//         assert.equal(true, actual.active)
//     });

//     it("constructor with valid params", function() {
//         var actual = new PaymentPackage("str", 5);
//         assert.equal(actual.value, 5);
//         assert.equal(actual.name, "str");
//         assert.equal(actual.VAT, 20);
//         assert.equal(actual.active, true);
//     });

//     it("constructor with 1 params", function() {
//         assert.throws(() => new PaymentPackage("str"), Error, 'Value must be a non-negative number');
//     });

//     it("constructor with 1 params", function() {
//         assert.throws(() => new PaymentPackage(5), Error, 'Name must be a non-empty string');
//     });

//     it("constructor with no params", function() {
//         assert.throws(() => new PaymentPackage(), Error, 'Name must be a non-empty string');
//     });

//     it("name get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         assert.equal("str", actual.name);

//         actual.name = "new";
//         assert.equal("new", actual.name);
//     });

//     it("non-string name get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         assert.equal("str", actual.name);

//         assert.throws(() => actual.name = true, Error, 'Name must be a non-empty string');
//     });

//     it("empty name get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         assert.equal("str", actual.name);

//         assert.throws(() => actual.name = "", Error, 'Name must be a non-empty string');
//     });

//     it("value get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         assert.equal(5, actual.value);

//         actual.value = 10;
//         assert.equal(10, actual.value);
//     });

//     it("negative value get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         assert.equal("str", actual.name);

//         assert.throws(() => actual.value = -5, Error, 'Value must be a non-negative number');
//     });

//     it("non-number value get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         assert.equal("str", actual.name);

//         assert.throws(() => actual.value = "aa", Error, 'Value must be a non-negative number');
//     });

//     it("zero value get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         actual.value = 0;

//         assert.equal(actual.value, 0);
//     });

//     it("non-number VAL get/set", function() {
//         let actual = new PaymentPackage("str", 5);

//         assert.throws(() => actual.VAT = "a", Error, 'VAT must be a non-negative number');
//     });

//     it("negative VAL get/set", function() {
//         let actual = new PaymentPackage("str", 5);

//         assert.throws(() => actual.VAT = -5, Error, 'VAT must be a non-negative number');
//     });

//     it("zero VAL get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         actual.VAT = 0;

//         assert.equal(actual.VAT, 0);
//     });

//     it("boolean active get/set", function() {
//         let actual = new PaymentPackage("str", 5);
//         actual.active = false;
//         assert.equal(actual.active, false);
//     });

//     it("non-boolean active get/set", function() {
//         let actual = new PaymentPackage("str", 5);

//         assert.throws(() => actual.active = 5, Error, 'Active status must be a boolean');
//     });

//     it("toString() with active", function() {
//         let actual = new PaymentPackage("str", 5);

//         assert.equal(actual.toString(), "Package: str\n- Value (excl. VAT): 5\n- Value (VAT 20%): 6");
//     });

//     it("toString() with inactive", function() {
//         let actual = new PaymentPackage("str", 5);
//         actual.active = false;

//         assert.equal(actual.toString(), "Package: str (inactive)\n- Value (excl. VAT): 5\n- Value (VAT 20%): 6");
//     });
// });



describe("Payment package", function () {
    let test;
    beforeEach(function () {
        test = new PaymentPackage("test", 1);
    })

    it("•5,8,9/10	Can be instantiated with two parameters - a string name and number value", function () {
        expect(test).to.be.a("object");
        // expect(PaymentPackage.prototype.toString).to.be.a("function");
        expect(test.toString()).to.eq('Package: test\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2');
    });
    it("•	Accessor name - used to get and set the value of name", function () {
        expect(test.name).to.eq("test");
        test.name = "test1";
        expect(test.name).to.eq("test1");
    });
    it("•	Accessor value - used to get and set the value of value", function () {
        expect(test.value).to.eq(1);
        test.value = 2;
        expect(test.value).to.eq(2);
        test.value = 0;
        expect(test.value).to.eq(0);
    });
    it("•	Accessor VAT - used to get and set the value of VAT", function () {
        expect(test.VAT).to.eq(20);
        test.VAT = 2;
        expect(test.VAT).to.eq(2);
        test.VAT = 0;
        expect(test.VAT).to.eq(0);
    });
    it("•	Accessor active - used to get and set the value of active", function () {
        expect(test.active).to.eq(true);
        test.active = false;
        expect(test.active).to.eq(false);
    });
    it("If the package is not active, append the label '(inactive)' to the printed name", function () {
        test.active = false;
        expect(test.toString()).to.eq('Package: test (inactive)\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2');
    });
    it("If any of the requirements aren’t met, the operation must throw an error.", function () {
        expect(() => test.name = 1).to.throw("Name must be a non-empty string");
        expect(() => test.name = "").to.throw("Name must be a non-empty string");
        expect(() => test.value = "1").to.throw("Value must be a non-negative number");
        expect(() => test.value = -1).to.throw("Value must be a non-negative number");
        expect(() => test.VAT = "1").to.throw("VAT must be a non-negative number");
        expect(() => test.VAT = -1).to.throw("VAT must be a non-negative number");
        expect(() => test.active = "str").to.throw("Active status must be a boolean");
    });
})

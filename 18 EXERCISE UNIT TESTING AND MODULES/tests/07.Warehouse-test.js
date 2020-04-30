const Warehouse = require("../07.Warehouse");
let { expect } = require("chai");

// describe('TESTOVE ZA WAREHOUSE', () => {
//      let sklad;
//     beforeEach(() => {
//      sklad = new Warehouse(20)
//     })

//      it('test konstruktor', () => {
//       expect(sklad.capacity).to.equal(20)
//       expect(sklad.availableProducts).to.deep.equal({ Food: {}, Drink: {} })
//      })
//      it('capacity tests', () => {
//       const skl = () => new Warehouse(-1)
//       expect(skl).to.throw('Invalid given warehouse space')
//      })
//      it('capacity tests', () => {
//         sklad.addProduct('Food', 'oriz', 5)
//         expect(sklad.occupiedCapacity()).to.deep.equal(5);
//        })
//        it('capacity tests', () => {
//         sklad.addProduct('Food', 'oriz', 5)
//         expect(sklad.revision()).to.deep.equal("Product type - [Food]\n- oriz 5\nProduct type - [Drink]");
//        })
//      it('capacity test FOR RIGHT ONE', () => {
//       const skl = new Warehouse(10)
//       expect(skl._capacity).to.equal(10)
//      })
//      it('If quantity is TOO LITTLE', () => {
//       sk = new Warehouse(2)
//       const msg = () => sk.addProduct('Food', 'pile', 'ads')
//       expect(msg).to.throw('There is not enough space or the warehouse is already full')

//      })
//      it('If quantity is TOO LITTLE 2222', () => {
//       sk = new Warehouse(2)
//       const msg = () => sk.addProduct('Food', 'pile', 20)
//       expect(msg).to.throw('There is not enough space or the warehouse is already full')
//      })
//      it('If quantity is TOO LITTLE 2222', () => {
//         sk = new Warehouse(2)
//         const msg = () => sk.addProduct('Food', 'pile', 20)
//         expect(msg).to.throw('There is not enough space or the warehouse is already full')
//        })
//      it('ADD 1 prod Correctly', () => {
//       sklad.addProduct('Food', 'oriz', 5)
//       let exp = sklad.availableProducts['Food'];
//       expect(exp).to.deep.equal({ oriz: 5 })
//      })
//      it('ADD MORE prod Correctly', () => {
//       sklad.addProduct('Food', 'oriz', 5)
//       sklad.addProduct('Food', 'oriz', 5)
//       sklad.addProduct('Food', 'kartofi', 5)
//       let exp = sklad.availableProducts['Food'];
//       expect(exp).to.deep.equal({ "oriz": 10, "kartofi":5})
//      })
//     });



// 90 / 100
describe("Warehouse", function () {
  let test;
  beforeEach(function () {
    test = new Warehouse(20);
  })

  it("1,2/11 capacity", function () {
    expect(test.capacity).to.equal(20);
    test.capacity = 30;
    expect(test.capacity).to.equal(30);
  })
  it("3,7,8/11 revision", function () {
    expect(test.revision()).to.equal("The warehouse is empty");
    test.addProduct("Food", "ribs", 10);
    test.addProduct("Drink", "soda", 10);
    expect(test.revision()).to.deep.equal("Product type - [Food]\n- ribs 10\nProduct type - [Drink]\n- soda 10");
  });
  it("4,9,10/11 errors", function () {
    expect(() => test.addProduct("Food", "ribs")).to.throw("There is not enough space or the warehouse is already full");
    // expect(() => test.addProduct("Food", "ribs",500)).to.throw("There is not enough space or the warehouse is already full");
    // expect(() => test.addProduct("food", "ribs", 10)).to.throw("Cannot read property 'hasOwnProperty' of undefined");
    expect(() => test.scrapeAProduct("Food", 4)).to.throw("Food do not exists");
  });
  it("5/11 orderProducts(type)", function () {
    test.addProduct("Drink", "soda", 1);
    test.addProduct("Food", "bara", 3);
    test.addProduct("Food", "mara", 2);
    test.addProduct("Drink", "moda", 2);
    expect(test.orderProducts("Drink")).to.deep.equal({ moda: 2, soda: 1 });
    expect(test.revision()).to.deep.equal('Product type - [Food]\n- bara 3\n- mara 2\nProduct type - [Drink]\n- moda 2\n- soda 1');
    expect(test.orderProducts("Food")).to.deep.equal({ bara: 3, mara: 2 });
    expect(test.revision()).to.deep.equal('Product type - [Food]\n- bara 3\n- mara 2\nProduct type - [Drink]\n- moda 2\n- soda 1');
  });
  it("11/11 normal operation", function () {
    expect(test).to.be.a("object");
    expect(test).to.have.property("_capacity");
    expect(test).to.have.property("availableProducts");
  });

  it("/11 scrapeProduct", function () {
    test.addProduct("Food", "ribs", 10);
    test.addProduct("Drink", "soda", 1);
    expect(test.scrapeAProduct("ribs", 15)).to.deep.equal({ ribs: 0 });
    expect(test.occupiedCapacity()).to.equal(1);
    expect(test.revision()).to.deep.equal('Product type - [Food]\n- ribs 0\nProduct type - [Drink]\n- soda 1');
    expect(test.scrapeAProduct("soda", 15)).to.deep.equal({ soda: 0 });
    expect(test.occupiedCapacity()).to.equal(0);
    expect(test.revision()).to.equal("The warehouse is empty");
  });

  it("-/11 errors during instantiation", function () {
    expect(() => new Warehouse(undefined)).to.throw("Invalid given warehouse space");
    expect(() => new Warehouse(0)).to.throw("Invalid given warehouse space");
    expect(() => new Warehouse(-10)).to.throw("Invalid given warehouse space");
  });
  it("- /11 methods", function () {
    expect(Warehouse.prototype.revision).to.be.a("function");
    expect(Warehouse.prototype.scrapeAProduct).to.be.a("function");
    expect(Warehouse.prototype.occupiedCapacity).to.be.a("function");
    expect(Warehouse.prototype.orderProducts).to.be.a("function");
    expect(Warehouse.prototype.addProduct).to.be.a("function");
    expect(Warehouse.prototype.constructor).to.be.a("function");
  })
  it("-/11 addProduct", function () {
    expect(() => test.capacity="a").to.throw("Invalid given warehouse space")
    expect(test.capacity).to.equal(20);
    expect(test.availableProducts).to.deep.equal({ Food: {}, Drink: {} });
    expect(test.addProduct("Food", "ribs", 10)).to.deep.equal({ ribs: 10 });
    expect(test.revision()).to.deep.equal('Product type - [Food]\n- ribs 10\nProduct type - [Drink]');
  })
  it('throw error for non existing type', function () {
    test.addProduct('Food', 'banana', 4);
    test.addProduct('Food', 'apple', 1);
    expect(() => test.scrapeAProduct('tomato', 1)).to.throw('tomato do not exists');
  })
})




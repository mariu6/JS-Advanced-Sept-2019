let Parser = require("./solution.js");
let assert = require("chai").assert;
let expect = require("chai").expect;



describe("MyTests", () => {
    let obj = {};
    let objToPrint = "id|name|position\n0|Nancy|architect\n1|John|developer\n2|Kate|HR";
    let datata = [{ Nancy: 'architect' }, { John: 'developer' }, { Kate: 'HR' }];
    let rem_data = [{ Nancy: 'architect' }, { John: 'developer' }, { Kate: 'HR', deleted: true }];
    let remData = [{ Nancy: 'architect' }, { John: 'developer' }];
    let entries = "Steven:tech-support Edd:administrator";
    let newData = [{ Nancy: 'architect' }, { John: 'developer' }, { Kate: 'HR' }, { Steven: 'tech-support' }, { Edd: 'administrator' }];
    let log = ['0: addEntries', '1: removeEntry'];

    beforeEach(function () {
        obj = new Parser('[ {"Nancy":"architect"},{"John":"developer"},{"Kate": "HR"} ]');
    })

    describe("instantiation with one parameter", () => {
        // it("1,2,14 / 14 Inistantiate with different than object", () => {
        //     expect(() => new Parser()).to.throw("Unexpected token u in JSON at position 0");
        // });
        it("1,2,5,6,7,14 / 14 Obj.print to be a function", () => {
            expect(obj.print()).to.eq(objToPrint);
            
        });
        it("3 / 14 Removed correctly logged", () => {
            obj.removeEntry("Kate");
            expect(obj.data).to.deep.eq(remData);
            // expect(obj._data).to.deep.eq(rem_data);
        });
        it("8 / 14 shows log", () => {
            obj.addEntries(entries);
            obj.removeEntry("Kate");
            expect(obj._log).to.deep.eq(log);
        });
        it("9 / 14 •	addEntries(entries) ", () => {
            expect(obj.addEntries(entries)).to.eq("Entries added!");
            expect(() => obj.addEntries(1)).to.throw("entries.split is not a function")
        });
        it("10 / 14 Removed has deleted property", () => {
            obj.removeEntry("Kate");
            // expect(obj._data[2]).to.deep.eq({ Kate: 'HR', deleted: true });
            expect(obj._data[2].deleted === true).to.eq(true);
        });
        it("11 / 14 Removed correctly logged", () => {
            // assert(obj.removeEntry("Kate"), "Removed correctly!");
            expect(obj.removeEntry("Kate")).to.eq("Removed correctly!");
            // expect(() => obj.removeEntry("Kate")).to.throw("There is no such entry!");
        });
        it("12 / 14 Remove throws exeption", () => {
            expect(() => obj.removeEntry("1")).to.throw("There is no such entry!");
            // expect(() => obj.removeEntry(1)).to.throw("There is no such entry!");
        });
        it(" / 14 shows log", () => {
            expect(Parser.prototype.print).to.be.a('function');
            expect(Parser.prototype.addEntries).to.be.a('function');
            expect(Parser.prototype.removeEntry).to.be.a('function');
        });
        // it(" / 14 •	Getter data - Returns the data array", () => {
        //     let p = new Parser('[{ "Nancy": "architect" }]');
        //     expect(p._data[0]).to.be.an("object").and.deep.eq({ Nancy: 'architect' });
        //     expect(p._data).to.be.an('array').and.deep.eq([{ Nancy: 'architect' }]);  // deep equal

        // });
        // it(" / 14 addToLog and log properties", () => {
        //     expect(obj._log).to.be.an('array').and.deep.eq([]);
        // });
        // it(" / 14 Inistantiate with different than object", () => {
        //     expect(() => new Parser('{Nancy:"architect"}')).to.throw("Unexpected token N in JSON at position 1");
        // });
        // it(" / 14 addToLog and log properties", () => {
        //     expect(obj._data).to.have.lengthOf(3);
        // });
        it(" / 14 addToLog and log properties", () => {
            expect(obj).to.have.property("_addToLog");
            expect(obj).to.have.property("_log");
            expect(obj).to.have.property("_data");
            expect(obj).to.be.an('object').that.respondsTo('addEntries');
            expect(obj).to.be.an('object').that.respondsTo('removeEntry');
            expect(obj).to.be.an('object').that.respondsTo('_addToLog');
            expect(obj).to.be.an('object').that.respondsTo('print');
        });
        //   it(" / 14 •	Getter data - Returns the data array", () => {
        //     expect(() => obj.data()).to.throw("obj.data is not a function")
        // });
        // it(" / 14 Obj.print to be a function", () => {
        //     expect(obj.print()).to.be.an("string").and.to.eq(objToPrint);
        // });
        // it(" / 14 Obj.print to be a function", () => {
        //     expect(obj.print).to.be.an("function");
        // });
        // it(" / 14 •	addEntries(entries) ", () => {
        //     expect(() => obj.addEntries(1)).to.throw('entries.split is not a function');
        // });
        // it(" / 14 •	addEntries(entries) ", () => {
        //     obj.addEntries(entries);
        //     expect(obj._log).to.have.lengthOf(1);
        // });
        // it(" / 14 •	addEntries(entries) ", () => {
        //     obj.addEntries(entries);
        //     expect(obj.data).to.deep.eq(newData);
        // });
        // it(" / 14 addToLog and log properties", () => {
        //     expect(obj).to.have.key("_addToLog", "_data", "_log");
        // });
        // it(" / 14 addToLog", () => {
        //     expect(obj._addToLog("removeEntry")).to.eq("Added to log");
        //     expect(obj._log).to.have.lengthOf(1);
        //     expect(obj._log).to.deep.equal([ '0: removeEntry' ]);
        // });
        // it(" / 14 addToLog and log properties", () => {
        //     expect(obj).to.be.an("object");
        // });
    })
});
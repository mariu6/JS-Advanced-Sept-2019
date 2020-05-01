let SkiResort = require('./solution');
let expect = require("chai").expect;

describe('SkiResort', function () {

    let myClass;
    beforeEach(() => {
        myClass = new SkiResort("Sun");
    })

    describe(" CHECK", () => {
        it("01. shuld initiate properly", () => {
            let obj = { name: 'Sun', voters: 0, hotels: [] };
            expect(myClass).to.deep.equal(obj);
        });
        it("02,03. no best hotel yet", () => {
            expect(myClass.bestHotel).to.equal("No votes yet");
        });
        it("04,06,10,12. the best hotel is", () => {
            myClass.build("Sun", 10);
            myClass.book('Sun', 5);
            myClass.leave('Sun', 3, 2);
            expect(myClass.bestHotel).to.equal("Best hotel is Sun with grade 6. Available beds: 8")
        });
        it("05. successfull built hotel", () => {
            expect(() => myClass.build("", 0)).to.throw("Invalid input");
        });
        it("07. successfull built hotel", () => {
            expect(myClass.build('Avenue', 5)).to.equal("Successfully built new hotel - Avenue")
        });
        it("08. error function book", () => {
            myClass.build("Sun", 10);
            expect(() => myClass.book('Sunny', 15)).to.throw("There is no such hotel")
        });
        it("09. error function book", () => {
            myClass.build("Sun", 10);
            expect(() => myClass.book('Sun', 15)).to.throw("There is no free space")
        });
        it("10. function book", () => {
            myClass.build("Sun", 10);
            expect(myClass.book('Sun', 5)).to.equal("Successfully booked")
        });
        it("12. error function leave", () => {
            myClass.build("Sun", 10);
            myClass.book('Sun', 5);
            expect(() =>myClass.leave('Sunny', 3, 2)).to.throw("There is no such hotel");
        });
        it("14. function leave", () => {
            myClass.build("Sun", 10);
            myClass.book('Sun', 5);
            expect(myClass.leave('Sun', 3, 2)).to.equal("3 people left Sun hotel");
        });
        it("15. empty function averageGrade", () => {
            myClass.build("Sun", 10);
            expect(myClass.averageGrade()).to.equal("No votes yet");
        });
        it("16. function averageGrade", () => {
            myClass.build("Sun", 10);
            myClass.book('Sun', 5);
            myClass.leave('Sun', 3, 2);
            expect(myClass.averageGrade()).to.equal("Average grade: 2.00");
        });
    });
});

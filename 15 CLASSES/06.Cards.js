// let result = (function () {
//     let Suits = {
//         SPADES: "\u2660",
//         HEARTS: "\u2665",
//         DIAMONDS: "\u2666",
//         CLUBS: "\u2663"
//     }
//     let arrFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

//     class Card {
//         constructor(face, suit) {
//             if (arrFace.includes(face)) {                   // проверявам дали е валидна картата (стойност от масив)
//                 this.face = face;
//             } else {
//                 throw Error("Error");
//             }
//             if (Object.values(Suits).includes(suit)) {      // проверявам дали е валидна боята (стойност от масив от стойности на обект)
//                 this.suit = suit;
//             } else {
//                 throw Error("Error");
//             }
//         }

//         set arrFace(face) {
//             if (arrFace.includes(face)) {
//                 this.face = face;
//             } else {
//                 throw Error("Error");
//             }
//         }
//         get arrFace() {
//             return face;
//         }

//         set theSuit(suit) {
//             if (Object.values(Suits).includes(suit)) {
//                 this.suit = suit;
//             } else {
//                 throw Error("Error");
//             }
//         }
//         get theSuit() {
//             return suit;
//         }
//     }


//     return {
//         Suits: Suits,
//         Card: Card
//     }
// }())

// let Card = result.Card;
// // console.log(Card);
// let Suits = result.Suits;
// // console.log(Suits);

// let card = new Card("Q", Suits.CLUBS);
// console.log(card);
// card.face = "A";
// card.suit = Suits.DIAMONDS;
// console.log(card);
// let card2 = new Card("3", 'hearts');      // throws Error
// console.log(card2);




// let result = (function () {
//     const Suits = {
//         SPADES: "♠",
//         HEARTS: "♥",
//         DIAMONDS: "♦",
//         CLUBS: "♣"
//     }
//     const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

//     class Card {
//         constructor(face, suit) {
//             if (faces.includes(face)) {
//                 this.face = face;
//             } else {
//                 throw new Error("Error!");
//             }
//             if (Object.values(Suits).includes(suit)) {
//                 this.suit = suit;
//             } else {
//                 throw new Error("Error!");
//             }
//         }
//         get Suits() {
//             return this.suit;
//         }
//         set Suits(suit) {
//             this.suit = suit;
//         }
//         get faces() {
//             return this.face;
//         }
//         set faces(face) {
//             this.face = face;
//         }
//     }

//     return {
//         Suits: Suits,
//         Card: Card
//     }
// }())


// let Card = result.Card;
// // console.log(Card);
// let Suits = result.Suits;
// // console.log(Suits);

// let card = new Card("Q", Suits.CLUBS);
// console.log(card);
// card.face = "A";
// card.suit = Suits.DIAMONDS;
// console.log(card);
// let card2 = new Card("3", 'hearts');      // throws Error
// console.log(card2);



// ПРАВИЛНА УПОТРЕБА НА ГЕТЕРИ И СЕТЕРИ 
let result = (function () {
    const Suits = { SPADES: "♠", HEARTS: "♥", DIAMONDS: "♦", CLUBS: "♣" }
    const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        _face;
        _suit;
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }
        get suit() {
            return this._suit;
        }
        set suit(valueForSuit) {
            if(Object.values(Suits).includes(valueForSuit)) {
                this._suit = valueForSuit;
            } else {
                throw new TypeError("Not valid suit!");
            }
        }
        get face() {
            return this._face;
        }
        set face(valueForFace) {
            if(faces.includes(valueForFace)) {
                this._face = valueForFace;
            } else {
                throw new TypeError("Not valid face!");
            }
        }
    }

    return {
        Suits: Suits,
        Card: Card
    }
}())


let Card = result.Card;
// console.log(Card);
let Suits = result.Suits;
// console.log(Suits);

let card = new Card("Q", Suits.CLUBS);
console.log(card);
card.face = "A";
card.suit = Suits.DIAMONDS;
console.log(card);
let card2 = new Card("3", 'hearts');      // throws Error
console.log(card2);
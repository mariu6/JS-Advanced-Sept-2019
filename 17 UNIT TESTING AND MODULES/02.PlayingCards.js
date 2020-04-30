// function Cards(face, suit) {
//     function vrfyParam(face, suit) {
//         if (!faces.hasOwnProperty(face) || !suits.hasOwnProperty(suit)) throw new TypeError('Error');
//     }
//     let faces = {
//         "2": "2",
//         "3": "3",
//         "4": "4",
//         "5": "5",
//         "6": "6",
//         "7": "7",
//         "8": "8",
//         "9": "9",
//         "10": "10",
//         "J": "J",
//         "Q": "Q",
//         "K": "K",
//         "A": "A"
//     }
//     let suits = {
//         "S": "\u2660",
//         "H": "\u2665",
//         "D": "\u2666",
//         "C": "\u2663"
//     }
//     vrfyParam(face, suit);
//     return output = faces[face] + suits[suit];
// }

// let cards = Cards("A", "S")
// console.log(cards);


function Card(face, suit) {
    const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const suits = { "S": "♠", "H": "♥", "D": "♦", "C": "♣" };
    if (face.toUpperCase() !== face || suit.toUpperCase() !== suit) {
        throw new TypeError("Face and suit must be cappital letters");
    }
    if (!faces.includes(face) || !suits.hasOwnProperty(suit)) {
        throw new TypeError("Invalid face or suit!");
    }
    return {
        toString: () => ""+face+suits[suit]
    }
}

module.exports = Card;
let pop = Card("2", "C");
console.log(pop.toString());
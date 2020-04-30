// function cards(input) {
//     let arrOutput = [];
//     function vrfyParam(face, suit) {
//         if (!faces.hasOwnProperty(face) || !suits.hasOwnProperty(suit)) {
//             console.log(`Invalid card: ${face + suit}`);
//             return false;
//         } else return true;
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

//     let arrInput = input.map((x) => {
//         let col = x.slice(x.length - 1);
//         let num = x.slice(0, x.length - 1);
//         return [num, col];
//     })

//     arrInput.map((x => {
//         if (vrfyParam(x[0], x[1])) {
//             vrfyParam(x[0], x[1]);
//             arrOutput.push(faces[x[0]] + suits[x[1]]);
//         }
//     }))

//     console.log(arrOutput.join(" "));
// }
// cards(['AS', '10D', 'KH', '2C']);
// cards(['5S', '3D', 'QD', '1C']);

function printDeckOfCards(cards) {
    let check = true;
    let result = [];
    function createCard(face, suit) {
        const faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        const suits = { "S": "\u2660", "H": "\u2665", "D": "\u2666", "C": "\u2663" };
        // if (face.toUpperCase() !== face || suit.toUpperCase() !== suit) {
        //     check = false;
        //     console.log(`Face and suit must be cappital letters: ${face+suit}`);
        //     result = [`Face and suit must be cappital letters: ${face+suit}`];
        // }
        if (!faces.includes(face) || !suits.hasOwnProperty(suit)) {
            check = false;
            console.log(`Invalid card: ${face+suit}`);
            result = [`Invalid card: ${face+suit}`];
        }
        return {
            toString: () => "" + face + suits[suit]
        }
    }

    cards.map(x => {
        let face = x.split("").slice(0, -1).join("");
        let suit = x.split("").pop();
        result.push(createCard(face, suit).toString())

    })
    if (check === true) {
        console.log(result.join(" "));
    }
    return result.join(" ");
}
module.exports = printDeckOfCards;


// module.exports = Card;
// let pop = Card("2", "C");
// console.log(pop.toString());

// console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']))
printDeckOfCards(['5S', '3D', 'QD', '1C']);
// printDeckOfCards(["AS"])

// function Cards(input) {
//     let arrOutput = [];
//     function vrfyParam(face, suit) {
//         if (!faces.hasOwnProperty(face) || !suits.hasOwnProperty(suit)) {
//             console.log(`Invalid card: ${face + suit}`);
//             return false;
//         } else return true;
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
//     let arrInput = input.map((x) => {
//         let col = x.slice(x.length - 1);
//         let num = x.slice(0, x.length - 1);
//         return [num, col];
//     })

//     arrInput.map((x => {
//         if (vrfyParam(x[0], x[1])) {
//             vrfyParam(x[0], x[1]);
//             arrOutput.push(faces[x[0]] + suits[x[1]]);
//         }
//     }))
//     console.log(arrOutput.join(" "));
// }


// module.exports = Cards;
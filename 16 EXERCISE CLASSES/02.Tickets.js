// function tickets(input, criteria) {
//     let arrayInfo = input.map(x => x.split('|'));
//     // console.log(arrayInfo);

//     class Ticket {
//         constructor(destination, price, status) {
//             this.destionation = destination,
//                 this.price = Number(price),
//                 this.status = status
//         }

//     }
//     let unsortedTickets = [];
//     arrayInfo.map(x => {
//         unsortedTickets.push(new Ticket(x[0], x[1], x[2]))
//     })
//     console.log(unsortedTickets[0]);
//     // console.log(criteria);
//     let sortedTickets = unsortedTickets.sort((a,b) => {
//         return (a[criteria])-(b[criteria])
//     });
//  return sortedTickets;
// }




// tickets(['Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination');


function tickets(array, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price); // пак работи, но не минава в джъдж, защото подавам "94,20", а той очаква "94,2"
            this.status = status;
        }
    }

    const crit = ["destination", "price", "status"];
    return array.map(x => x.split("|"))
        .sort((a, b) => Number(a[crit.indexOf(criteria)]) - Number(b[crit.indexOf(criteria)]) || a[crit.indexOf(criteria)].localeCompare(b[crit.indexOf(criteria)]))
    .map(x => new Ticket(...x));
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'));

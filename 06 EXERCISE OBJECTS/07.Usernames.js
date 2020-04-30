// function usernames(array) {
//     [...new Set(array.sort((a, b) => a.length - b.length || a.localeCompare(b)))].map(x => console.log(x));
// }

// usernames(['Ashton', 'Kutcher', 'Ariel', 'Lilly',
//     'Keyden', 'Aizen', 'Billy', 'Braston']);
// usernames(['Denise', 'Ignatius', 'Iris', 'Isacc',
//     'Indie', 'Dean', 'Donatello', 'Enfuego', 'Benjamin',
//     'Biser', 'Bounty', 'Renard', 'Rot']);


function usernames1(array) {
    [...new Set(array.sort((a,b) => a.length - b.length || a.localeCompare(b)))].map(x => console.log(x));
}

usernames1(['Ashton','Ashton', 'Kutcher', 'Ariel', 'Lilly',
    'Keyden', 'Aizen', 'Billy', 'Braston']);
usernames1(['Denise', 'Ignatius', 'Iris', 'Isacc',
    'Indie', 'Dean', 'Donatello', 'Enfuego', 'Benjamin',
    'Biser', 'Bounty', 'Renard', 'Rot']);
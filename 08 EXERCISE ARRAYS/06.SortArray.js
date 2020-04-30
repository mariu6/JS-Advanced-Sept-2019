// function sort2D(array) {
//     let out = array.sort((a,b) => a.length - b.length || a.localeCompare(b));
//     console.log(out.join('\n'));
// }

// sort2D(['alpha', 'beta', 'gamma']);


// Mihaela Mileva 
function main(input) {
    return [...input].sort((a,b) => {
        return a.length - b.length || a.localeCompare(b);
    }).join('\n');
}
console.log(main(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));

function main1(array) {
    return array.sort((a,b) => a.length - b.length || a.localeCompare(b)).join("\n")
}

console.log(main1(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
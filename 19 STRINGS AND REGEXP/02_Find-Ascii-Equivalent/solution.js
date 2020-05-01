function solve() {
  let text = document.getElementById("text").value;
  // text = "83 111 John Adams 102 116 85 Roger 110 105"
  let result = document.getElementById("result");
  let output = [];
  let numbers = text.split(" ").filter(x => x == Number(x));
  let strings = text.split(" ").filter(x => x != Number(x));
  output.push(strings.map(word => Array.from(word).map(letter => letter.charCodeAt(0))));

  output.flat().map(x => x.join(" ")).map(row => {
    let p = document.createElement("p");
    p.innerHTML = row;
    result.appendChild(p);
  })
  let p = document.createElement("p");
    p.innerHTML = (String.fromCharCode(...numbers));
    result.appendChild(p);
}


// function main(string) {
//   let output = [];
//   let numbers = string.split(" ").filter(x => x == Number(x));
//   let strings = string.split(" ").filter(x => x != Number(x));
//   output.push(strings.map(word => Array.from(word).map(letter => letter.charCodeAt(0))));
//   return output.flat().map(x => x.join(" ")).join("\n") + "\n" + (String.fromCharCode(...numbers));
// }
// module.exports = main;




function solve() {
  let text = document.querySelector("#input").textContent.split(".");
  console.log(text);
  let p = document.createElement("p");
  
  text.map((x, i) => {
    p.textContent += x + ".";
    if ((i+1) % 3 === 0) {
      document.querySelector("#output").appendChild(p);
      p = document.createElement("p");   // създавам нов елемент, иначе ще променям стария по референция ;)
    }
  })
  document.querySelector("#output").appendChild(p);  // дисплейваме артъка
}
function solve() {
  let input = document.getElementById("input");    // взимаме си текста от страницата HTML
  let output = document.getElementById("output");

  if (input === null || output === null) {  //Ако апи-то не намери елемента, връща null
    return;
    // throw new ErrorEvent("....");
  }

  let sentences = input.innerHTML.split(".").filter(x=> x !== "");
  for (let i = 0; i < sentences.length; i += 3) {
    let p = document.createElement("p");
    let str = "";
    for (let j = 0; j < 3; j++) {
      if (i + j < sentences.length) {
        str += sentences[i + j] + ".";        
      }
    }
    p.innerHTML = str;
    output.appendChild(p);
  }
 
  // input.innerHTML
  //   .split(".")          // връща масив
  // .forEach(x => {
  //   let p = document.createElement("p")
  //   p.innerHTML = x + ".";        // резултатът от HTML операцията няма да е HTML елемент, затова п.инерХТМЛ се подава чрез х  01:53:00
  //   output.appendChild(p);
  // })

  // console.log(input.innerHTML
  //   .split(".")          // връща масив
  //   .map(x => {
  //     let p = document.createElement("p")
  //     p.innerHTML = x + ".";        // резултатът от HTML операцията няма да е HTML елемент, затова п.инерХТМЛ се подава чрез х  01:53:00
  //     return p;
  //   }));
} 


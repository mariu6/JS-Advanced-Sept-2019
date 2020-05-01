function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");
  let output = "";

  function transform(text) {
    return text.split(" ").map(x => x.toLocaleLowerCase())
    .map(x => x[0].toLocaleUpperCase() + x.slice(1)).join("");
  }


  if (convention !== "Camel Case" && convention !== "Pascal Case") {
    output = "Error!";
  } else if (convention === "Camel Case") {
    output = transform(text)[0].toLocaleLowerCase() + transform(text).slice(1);
  } else {
    output = transform(text);
  }
  result.innerHTML = output;
} 
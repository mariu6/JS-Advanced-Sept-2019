// function solve() {
//   let arr = [];
//   let answers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
//   Array.from(document.querySelectorAll("p.answer-text")).map((x, i) => x.addEventListener("click", function (event) {
//     arr.push(event.target.textContent);
//     i = Math.floor(i / 2);
//     document.querySelectorAll("#quizzie section")[i].classList.add("hidden");
//     if (document.querySelectorAll("#quizzie section")[i + 1]) {
//       document.querySelectorAll("#quizzie section")[i + 1].classList.remove("hidden");
//     } else {
//       results();
//     }
//     // console.log(arr.join("\n"));
//     // console.log(arr.every(function (value, index) { return value === answers[index] }));
//   }))
//   function results() {
//     let correct = arr.filter((x, i) => x === answers[i]);
//     // console.log(correct);
//     let result = (correct.length === 3) ? "You are recognized as top JavaScript fan!" : `You have ${correct.length} right answers`
//     document.querySelector("#results h1").innerHTML = result;
//     document.querySelector("#results").style.display = "block";
//   }
// }

function solve() {
  let arr = [];
  let answers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  Array.from(document.querySelectorAll("p.answer-text")).map((x, i) => x.addEventListener("click", function (event) {
    arr.push(event.target.textContent);
    i = Math.floor(i / 2);
    document.querySelectorAll("#quizzie section")[i].style.display = "none";
    if (document.querySelectorAll("#quizzie section")[i + 1]) {
      document.querySelectorAll("#quizzie section")[i + 1].style.display = "block";
    } else {
      results();
    }
    // console.log(arr.join("\n"));
    // console.log(arr.every(function (value, index) { return value === answers[index] }));
  }))
  function results() {
    let correct = arr.filter((x, i) => x === answers[i]);
    // console.log(correct);
    let result = (correct.length === 3) ? "You are recognized as top JavaScript fan!" : `You have ${correct.length} right answers`
    document.querySelector("#results h1").innerHTML = result;
    document.querySelector("#results").style.display = "block";
  }
}


let growingWord = (function () {
  const colorMap = ["#5B88BD", "#8FF897", "#A40014"];   // BGR
  // const colorMap = ["#0000FF", "#00FF00", "#FF0000"]
  let state = 0;

  return function growingWord() {
    let word = document.getElementById("exercise").children.item(2);    // за да взема чайлд елемента на парент див-а
    // let word = document.querySelector("#exercise").children.item(2);    // със querySelector е същото, само се добавя # пред името
    console.log(word);

    if (word === null) {
      return;   // или:
      throw new Error("No words for you");
    }
    let fontSize = window.getComputedStyle(word).fontSize.replace("px", "");

    if (state >= colorMap.length) {
      state = 0;
    }
    word.style.color = colorMap[state];
    state++;
    word.style.fontSize = (fontSize === "0" ? "4" : fontSize * 2) + "px";
  }
}())

growingWord();


// let growingWord = (function () {
//   let size = 1;
//   let color = ["#5b88bd", "#8ff897", "#a40014"];

//   return function growingWord() {
//     document.querySelector("#exercise > p").style.fontSize = `${size * 2}px`;
//   }
// }())

// window.addEventListener("DOMContentLoaded", growingWord())
// // growingWord();
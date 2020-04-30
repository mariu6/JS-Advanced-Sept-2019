
let growingWord = (function () {
  // const colorMap = ["#5B88BD", "#8FF897", "#A40014"];   // BGR
  const colorMap = ["#0000FF","#00FF00",  "#FF0000"]
  let state = 0;


  return function growingWord() {
    let word = document.getElementById("exercise").children.item(2);    // за да взема чайлд елемента на парент див-а
    // let word = document.querySelector("#exercise").children.item(2);    // със querySelector е същото, само се добавя # пред името


    if (word === null) {
      return;
      throw new Error("No words for you");
    }

    let fontSize = window.getComputedStyle(word).fontSize.replace("px", "");

    if (state >= colorMap.length) {
      state = 0;
    }

    word.style.color = colorMap[state];
    state++;

    word.style.fontSize = (fontSize === "0" ? "2" : fontSize * 2) + "px";
    
  }
}())

growingWord();






function growingWord() {
 
  let pElement = document.querySelector('#exercise p');
  let curSize = pElement.style.fontSize.slice(0, -2) * 2 || 2;
  let blueDiv = document.getElementById('blueDiv');
  let greenDiv = document.getElementById('greenDiv');
  let redDiv = document.getElementById('redDiv');
 
  let isBlue = blueDiv.getAttribute('active') === 'true';
  let isGreen = greenDiv.getAttribute('active') === 'true';
  let isRed = redDiv.getAttribute('active') === 'true';
 
  if (curSize === 2 || isBlue) {
    pElement.style.color = 'blue';
    blueDiv.setAttribute('active', false);
    greenDiv.setAttribute('active', true);
  } else if (isGreen) {
    pElement.style.color = 'green';
    greenDiv.setAttribute('active', false);
    redDiv.setAttribute('active', true)
  } else if (isRed) {
    pElement.style.color = 'red';
    redDiv.setAttribute('active', false)
    blueDiv.setAttribute('active', true);
  }
  pElement.style.fontSize = `${curSize}px`
}
 
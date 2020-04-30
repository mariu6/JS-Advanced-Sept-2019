// function solve() {
//   let initial = {
//     "SOFTUNI": 1,
//     "GOOGLE": 2,
//     "YOUTUBE": 4,
//     "WIKIPEDIA": 4,
//     "GMAIL": 7,
//     "STACKOVERFLOW": 6
//   }
//   document.addEventListener("click", function (evt) {
//     // console.log(evt.target);
//     // console.log((evt.target.parentNode.parentNode.innerText).split("\n")[0]);
//     if (initial[(evt.target.parentNode.parentNode.innerText).split("\n")[0]]) {
//       // console.log("oooppppsaasaaaa");
//       let x = ++initial[evt.target.parentNode.innerText];
//       evt.target.parentNode.nextElementSibling.innerHTML = `visited ${x} times`;
//     }
//   })
// }

function solve() {
  let divElements = document.getElementsByClassName('middled')[0].getElementsByTagName('div');
  for (let element of divElements) {
    element.addEventListener('click', () => {
      let pElement = element.querySelector('p');
      let textPElement = pElement.textContent;
      let timesVisit = Number(textPElement.split(' ')[1]);
      pElement.textContent = textPElement.replace(timesVisit, timesVisit+1);
    })
  }
}


function solve() {
  const template = x => `visited ${x} times`;

  const affiliatesLinksMap = {
    "Google": 2,
    "YouTube": 4,
    "Gmail": 7,
    "Wikipedia": 4,
    "SoftUni": 1,
    "stackoverflow": 6
  }

  document.addEventListener("click", (e) => {
    if (e.target !== null && e.target.parentNode !== null && e.target.parentNode.nodeName === "A") {
      e.target.parentNode.nextElementSibling.innerHTML = template(++affiliatesLinksMap[e.target.parentNode.textContent.trim()])
      // console.log(affiliatesLinksMap[e.target.parentNode.textContent.trim()]++);
    }
  })
}




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
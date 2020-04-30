// function lockedProfile() {
//     const usersData = {   //взимам си референциите на скритите полета
//         user1: document.getElementById("user1HiddenFields"),
//         user2: document.getElementById("user2HiddenFields"),
//         user3: document.getElementById("user3HiddenFields")
//     }
//     const buttons = Array.from(document.getElementsByTagName("button"));      // масив от трите бутона, за да им използвам индексите

//     function handler(e) {
//         // console.log(e.target.nodeName);
//         // usersData.user1.style.display = "block";
//         // console.log(buttons[1]);
//         // console.log(buttons.indexOf(e.target));

//         if (buttons.includes(e.target) && e.target.textContent === "Show more" && document.querySelectorAll(`.profile:nth-child(${buttons.indexOf(e.target) + 1}) > input`)[1].checked) {
//             usersData[`user${buttons.indexOf(e.target) + 1}`].style.display = "block";
//             e.target.textContent = "Hide it";
//         } else if (buttons.includes(e.target) && e.target.textContent === "Hide it" && document.querySelectorAll(`.profile:nth-child(${buttons.indexOf(e.target) + 1}) > input`)[1].checked) {
//             usersData[`user${buttons.indexOf(e.target) + 1}`].style.display = "none";
//             e.target.textContent = "Show more";
//         }

//         if (e.target.nodeName === "INPUT" && e.target.checked === true && e.target.previousElementSibling.innerHTML === "Lock") {
//             // console.log(e.target.parentNode.querySelector("button"));
//             e.target.parentNode.querySelector("button").disabled = true;
//         } else if (e.target.nodeName === "INPUT" && e.target.checked === true && e.target.previousElementSibling.innerHTML === "Unlock") {
//             e.target.parentNode.querySelector("button").disabled = false;
//         }
//     }

//     document.addEventListener("click", handler);
// }



function lockedProfile() {
    [...document.getElementsByTagName('button')].map(but => but.addEventListener('click', function (e) {
        mapper = {
            'Show more': () => ['block', 'Hide it'],
            'Hide it': () => ['none', 'Show more']
        };
        if (!e.target.parentElement.querySelector('input[type=radio]').checked) {
            e.target.parentElement.querySelector('div').style.display = mapper[e.target.textContent](e)[0];
            e.target.parentElement.querySelector('button').textContent = mapper[e.target.textContent](e)[1];
        };
    }));
}
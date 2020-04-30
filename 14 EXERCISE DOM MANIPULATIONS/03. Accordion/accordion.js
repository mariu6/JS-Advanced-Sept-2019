function toggle() {
    let button = document.getElementsByClassName("button")[0];
    let text = document.getElementById("extra");
    if (button.textContent === "More") {
        button.textContent = "Less";
        text.style.display = "block";
    } else {
        button.textContent = "More";
        text.style.display = "none";
    }
}


// function toggle() {
//     let text = document.getElementById("extra");
//     let [span] = document.getElementsByTagName("span");
//     if (span.textContent === "More") {
//         span.textContent = "Less";
//         text.style.display = "block";
//     } else {
//         span.textContent = "More";
//         text.style.display = "none";
//     }
// }
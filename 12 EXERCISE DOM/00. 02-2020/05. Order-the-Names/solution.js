function solve() {
    const inputField = document.querySelector("#exercise input");
    const button = document.querySelector("button");
    let dataCollection = document.querySelector("#exercise > div > ol").children;

    button.addEventListener("click", function () {
        if (inputField.value !== "") {
            let name = inputField.value.split("").reduce((a, b, index) => index === 0 ? b.toUpperCase() : a + b.toLowerCase(), "");
            dataCollection[name[0].charCodeAt(0) - 65].innerText === "" ?
                dataCollection[name[0].charCodeAt(0) - 65].innerText = name :
                dataCollection[name[0].charCodeAt(0) - 65].innerText += `, ${name}`;
        }
    })
} 
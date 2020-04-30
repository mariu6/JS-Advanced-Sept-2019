function validate() {
    let input = document.getElementById("email");

    input.addEventListener("change", handler);

    function handler() {
        console.log(input.value);
        if (!input.value.match(/\w+\@\w+\.\w+/gim)) {
            input.setAttribute("class", "error");
        } else {
            input.removeAttribute("class", "error");
        }
    }
} 
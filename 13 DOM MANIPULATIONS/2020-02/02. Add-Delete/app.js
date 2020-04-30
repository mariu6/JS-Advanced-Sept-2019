function addItem() {
    const input = document.getElementById("newText");
    const ul = document.getElementById("items");
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = "#";                 // "javaScript:;";
    a.innerHTML = "[Delete]"
    li.innerHTML = `${input.value} `;
    li.appendChild(a)
    ul.appendChild(li);
    input.value = "";

    li.addEventListener("click", eventHandler)

    function eventHandler(e) {
        li.remove(e.currentTarget);
    }
}
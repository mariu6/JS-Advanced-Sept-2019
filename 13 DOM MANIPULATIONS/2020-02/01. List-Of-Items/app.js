function addItem() {
    const input = document.getElementById("newItemText");
    const ul = document.getElementById("items");
    const li = document.createElement("li");

    li.innerHTML = input.value;
    ul.appendChild(li);
    input.value = "";
}
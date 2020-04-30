function addItem() {
    const text = document.getElementById("newItemText");
    const values = document.getElementById("newItemValue");
    const menu = document.getElementById("menu");
    
    let option = document.createElement("option");
    option.value = values.value;
    option.textContent = text.value;
    menu.appendChild(option);
    text.value = "";
    values.value = "";
} 
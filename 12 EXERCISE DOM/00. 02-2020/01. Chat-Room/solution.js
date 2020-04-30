function solve() {
   let messageBox = document.getElementById("chat_input");
   let button = document.getElementById("send");
   
   button.addEventListener("click", function () {
      let messageDiv = document.createElement("div");
      messageDiv.classList.add("message", "my-message");
      let message = messageBox.value;
      messageDiv.textContent = message;
      document.getElementById("chat_messages").appendChild(messageDiv);
      messageBox.value = "";
   })
}



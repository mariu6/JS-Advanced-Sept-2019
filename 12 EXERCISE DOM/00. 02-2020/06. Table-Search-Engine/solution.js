function solve() {
   const searchField = document.getElementById("searchField");
   const searchBtn = document.getElementById("searchBtn");
   let searchResult = [];

   searchBtn.addEventListener("click", function () {
      Array.from(document.querySelector("body > table > tbody").children).map(x => x.classList.remove("select"));

      let text = searchField.value;
      Array.from(document.querySelector("body > table > tbody").children).map((x, i) => {
         return searchResult.push(x.textContent.match(text) !== null)
      })

      searchResult.map((x, i) => {
         if (x === true) {
            document.querySelector(`body > table > tbody > tr:nth-child(${i + 1})`).classList.add("select")
         }
      })
      searchResult = [];
      searchField.value = "";
   })
}
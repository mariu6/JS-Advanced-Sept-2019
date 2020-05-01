function solve() {
   const createBtn = document.querySelector("body > div > div > aside > section:nth-child(1) > form > button");
   const section = document.querySelector("body main > section");
   let author = document.getElementById("creator");
   let title = document.getElementById("title");
   let category = document.getElementById("category");
   let content = document.getElementById("content");

   function createArticle(e) {
      e.preventDefault();
      let article = document.createElement("article");
      let h1 = document.createElement("h1");
      let p = document.createElement("p");
      let strong = document.createElement("strong");
      let pCreator = document.createElement("p");
      let strongCreator = document.createElement("strong");
      let pText = document.createElement("p");
      let div = document.createElement("div");
      div.classList.add("buttons");
      let delBtn = document.createElement("button");
      delBtn.classList.add("btn");
      delBtn.classList.add("delete");
      let arcBtn = document.createElement("button");
      arcBtn.classList.add("btn");
      arcBtn.classList.add("archive");

      h1.innerHTML = title.value;
      p.innerHTML = "Category:";
      strong.innerHTML = category.value;
      pCreator.innerHTML = "Creator:";
      strongCreator.innerHTML = author.value;
      pText.innerHTML = content.value;
      delBtn.innerHTML = "Delete";
      arcBtn.innerHTML = "Archive"; 

      p.appendChild(strong);
      pCreator.appendChild(strongCreator);
      div.appendChild(delBtn);
      div.appendChild(arcBtn);
      article.appendChild(h1);
      article.appendChild(p);
      article.appendChild(pCreator);
      article.appendChild(pText);
      article.appendChild(div);
      section.appendChild(article);
   }

   createBtn.addEventListener("click", createArticle);
   document.querySelector("body > div > div > main > section").addEventListener("click", (evt) => {
      console.log(evt.target);
   })

}

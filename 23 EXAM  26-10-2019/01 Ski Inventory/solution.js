function solve() {
   // DOM Elements в обект:
   const $elements = {
      nameInput: document.querySelector("#add-new > input[type=text]:nth-child(2)"),
      quantityInput: document.querySelector("#add-new > input[type=text]:nth-child(3)"),
      priceInput: document.querySelector("#add-new > input[type=text]:nth-child(4)"),
      addBtn: document.querySelector("#add-new > button"),
      availableProductsUl: document.querySelector("#products > ul"),
      filterInput: document.querySelector("#filter"),
      filterBtn: document.querySelector("#products > div > button"),
      buyBtn: document.querySelector("#myProducts > button"),
      myProductsUl: document.querySelector("#myProducts > ul"),
      totalPrice: document.querySelector("body > h1:nth-child(4)")
   }

   let outputPrice = 0;
   // Event Listener:
   $elements.addBtn.addEventListener("click", addProduct);   // за добавяне на продукти горе
   $elements.filterBtn.addEventListener("click", filterProducts);  // за филтриране на продукти горе
   $elements.buyBtn.addEventListener("click", buyProducts);  // за филтриране на продукти горе

   // Funtion за Listener-a на add бутонa:
   function addProduct(e) {
      e.preventDefault();
      const name = $elements.nameInput.value;
      const quantity = $elements.quantityInput.value;
      const price = $elements.priceInput.value;

      // създаване на елементи
      let li = createHTMLElement("li");
      let span = createHTMLElement("span", null, name);   // null или false за несъществуващи пропъртита във функцията
      let strongQuantity = createHTMLElement("strong", null, `Available: ${quantity}`);
      let div = createHTMLElement("div");
      let strongPrice = createHTMLElement("strong", null, Number(price).toFixed(2));
      let addToClientListBtn = createHTMLElement("button", null, "Add to Client's List", null, { name: "click", func: addToClientList });


      // презаписвам дива actionsDiv, но с апенднати бутони  
      div = appendChildrenToParent([strongPrice, addToClientListBtn], div);
      li = appendChildrenToParent([span, strongQuantity, div], li);

      // закачане за дома:
      $elements.availableProductsUl.appendChild(li);
   }

   // Функция за създаване на DOM / HTML Eлементи:
   function createHTMLElement(tagName, className, textContent, attributes, event) {
      let element = document.createElement(tagName);

      if (className) {
         element.classList.add(className);
      }

      if (textContent) {
         element.textContent = textContent;
         // element.innerHTML = textContent;
      }

      // Атрибутите са масив от обекти [{key,value},{key,value}]
      if (attributes) {
         attributes.map(a => element.setAttribute(a.k, a.v));  //a.key, a.value
      }

      // event e обект. В случая event.name = "click", и ще се вика event.func
      if (event) {
         element.addEventListener(event.name, event.func);
      }

      return element;
   }

   // Функция за апендване на елементи (подадени като масив). Връща самия парент, с апенднати елементи:
   function appendChildrenToParent(children, parent) {
      children.map(c => parent.appendChild(c));   // pokazano e s forEach
      return parent;
   }

   // this-а на функцията е кликнатият бутон. Мога да изтрия неговия парент див. Може и да се сложи е и да се ползва e.target
   function addToClientList(e) {
      e.preventDefault();
      console.log(e.target);
      let name = e.target.parentNode.parentNode.querySelector("span").innerText;
      let quantity = Number(e.target.parentNode.parentNode.querySelector("strong").innerText.match(/\d+/gmi)[0]);
      let price = Number(e.target.parentNode.querySelector("strong").innerText);
      // console.log(name);
      // console.log(quantity);
      // console.log(price);
      if (quantity > 0) {
         let li = createHTMLElement("li", null, name);
         let strong = createHTMLElement("strong", null, price.toFixed(2));
         li.appendChild(strong);
         $elements.myProductsUl.appendChild(li);
         e.target.parentNode.parentNode.querySelector("strong").innerText = `Available: ${quantity - 1}`;
         outputPrice += price;
         $elements.totalPrice.innerHTML =`Total Price: ${outputPrice.toFixed(2)}`;
      }
      if (quantity <= 1) {
         e.target.parentNode.parentNode.remove();
      }

      // const questionDiv = e.target.parentNode.parentNode;
      // questionDiv.remove();   // parent.outerHTML = ""; - alternativno
   }

   function filterProducts(e) {
      let productsArray = document.querySelectorAll("#products > ul  span");
      const filterKey = $elements.filterInput.value;
      if (filterKey) {
         Array.from(productsArray).filter(product => product.innerText.toLowerCase() !== filterKey.toLowerCase()).map(product => product.parentNode.style.display = "none");
      } else {
         Array.from(productsArray).map(product => product.parentNode.style.display = "block");
      }
   }

   function buyProducts(e) {
      $elements.totalPrice.innerHTML = "Total Price: 0.00";
      $elements.myProductsUl.innerHTML = "";
   }
}
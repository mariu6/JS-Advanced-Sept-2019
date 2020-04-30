function solve() {
   let listItems = {};
   let textArea = document.querySelector("textarea");
   Array.from(document.querySelectorAll("body div.product-add > button")).map(x => x.addEventListener("click", function (e) {
      let product = e.target.closest(".product").querySelector(".product-details > .product-title").textContent;
      let price = e.target.closest(".product").querySelector(".product-line-price").textContent;
      // console.log(e.target.closest(".product"));
      // console.log(product, price);
      if (!listItems.hasOwnProperty(product)) {
         listItems[product] = 0;
      }
      listItems[product] += Number(price);
      return textArea.value += `Added ${product} for ${price} to the cart.\n`;
   }))

   const checkout = document.getElementsByClassName("checkout")[0];
   checkout.addEventListener("click", function () {
      Array.from(document.getElementsByTagName("button")).map(x => x.disabled = true);
      let list = Object.keys(listItems).join(", ");
      let totalPrice = Object.values(listItems).reduce((a, b) => a + b);
      return textArea.value += `You bought ${list} for ${totalPrice.toFixed(2)}.`
   })
}


// function solve() {
//    const addButtons = Array.from(document.getElementsByClassName('add-product'));
//    const checkoutButton = document.querySelector('.checkout');
//     const products = {
//       totalPrice: 0,
//       boughtProd: []
//    }
//     const getProductInfo = (product) => {
//       const nameProduct = product.querySelector('.product-title').textContent;
//       const priceProduct = Number(product.querySelector('.product-line-price').textContent);
//       return [nameProduct, priceProduct];
//    }
//     const addProductToShoppingCart = ([nameProduct, priceProduct]) => {
//       products.totalPrice += priceProduct;
//       products.boughtProd.push(nameProduct);
//       addInfoToTextArea(`Added ${nameProduct} for ${priceProduct.toFixed(2)} to the cart.\n`);
//    }
//     const addInfoToTextArea = (info) => { document.querySelector('textarea').value += info };
//     const disableAllButtons = () => { [...addButtons, checkoutButton].map(el => el.disabled = true) }
//     const addProduct = (ev) => { addProductToShoppingCart((getProductInfo(ev.target.parentNode.parentNode))) };
//     const finishBuyingProcess = () => {
//       addInfoToTextArea(`You bought ${[...new Set(products.boughtProd)].join(', ')} for ${products.totalPrice.toFixed(2)}.`);
//       disableAllButtons();
//    }
//     addButtons.map(el => el.addEventListener('click', addProduct));
//    checkoutButton.addEventListener('click', finishBuyingProcess);
// }
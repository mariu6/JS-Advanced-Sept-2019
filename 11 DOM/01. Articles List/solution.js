function createArticle() {


	// За имена на променливите си използваме имената на таговете, за лекота на четенето
	// създаване на елементите, които ще ни трябват. 
	let article = document.createElement("article");
	let h3 = document.createElement("h3");
	let p = document.createElement("p");

	// правим си променливи за входа от потребителя
	let input = document.getElementById("createTitle");
	let textArea = document.getElementById("createContent");

	// в HTML кода има секция   <section id="articles">. Създаваме променлива към това id, за да слагаме там артикълите
	let articles = document.getElementById("articles");

	// добрата практика е да се провери дали тези 3 елементи съществуват
	if (input === null || textArea === null || articles === null) {        // ВИНАГИ ДА СЕ ПРАВИ ПРОВЕРКА дали съществува елемента
		return;
		// throw new Error("Something is wrong...");
	}
	// проверка по условие дали и двете полета са попълнени
	if (input.value.length === 0 || textArea.value.length === 0) {
		return;
		// throw new Error("Something is wrong...");       // throw също връща и не изпълнява кода нататък
	}

	// поставяне на събрания текст от попълнените форми   като съдържание в съответните елементи
	h3.innerHTML = input.value;        // innerHTML се предпочита за стрингово съдържание, за да не изскачат тагове в текста
	p.innerHTML = textArea.value;

	// добавяне в article - по ред на въвеждане в програмата. Самият аppendChild() може да бъде навсякъде в програмата, макар да не се хойства
	article.appendChild(h3);				// otgore
	article.appendChild(p);             // pod nego
	// всичко, което се достъпва по референция е като хойстнато

	// добавяме в <section id="articles"> на страницата съдърцанието на (article) - h3 и p.
	articles.appendChild(article);


	//зачистване на полетата заедно със създаване на артикъла
	input.value = "";
	textArea.value = "";


}




// Вместо да се пише onclick в HTML-a, по-добрата практика е да се сложи ивентЛисенер . Джъдж дали обаче няма да се сърди?
document.addEventListener("DOMContentLoaded", x => {
	document.getElementById("createArticleButton")
		.addEventListener("click", createArticle);

	// ако искаме да можем да ползваме enter вместо да съвмитваме с бутона
	// комплексна имплементация, за повече бутони, с keyMap:
	const keysMap = {
		10: function (evt) { createArticle(); },     //10: ctrl+enter
		13: function () { console.log("To execute - ctrl+enter"); }
	}
	document.addEventListener("keypress", function (evt) {     // evt, защото event е запазена дума
		// console.log(evt);
		if (typeof keysMap[evt.keyCode] === "function") {	// ако в ключ-мапа[номер на натиснат бутон] уцелиш функция 
			keysMap[evt.keyCode](evt);							// изпълни тази функция
			// обект[номер на натиснат бутон] съответства на стойността, която в случая е функция. с () я извикваме и реално
			// този ред ни дава резултата от функцията	
		}
	})

	//// бърза имплементация, само за един бутон (ентер)
	// document.addEventListener("keypress", function (evt) {
	// 	if (evt.keyCode === 13) {
	// 		console.log("Uraaamaa!!!");
	// 	}
	// });
})

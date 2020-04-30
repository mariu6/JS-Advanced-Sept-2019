function createArticle() {
	let title = document.getElementById("createTitle");
	let content = document.getElementById("createContent");

	let article = document.createElement("article");
	let h3 = document.createElement("h3");
	let p = document.createElement("p");

	h3.innerHTML= title.value;  // с innerText не стана
	p.innerHTML = content.value;
	article.appendChild(h3);
	article.appendChild(p);

	if (title.value && content.value) {
		document.getElementById("articles").appendChild(article);		
	}

	title.value = "";
	content.value = "";
}
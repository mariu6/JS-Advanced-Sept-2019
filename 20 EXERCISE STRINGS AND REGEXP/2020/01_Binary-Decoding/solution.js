function solve() {
	let input = document.getElementById("input").value || "0";
	let result = document.getElementById("resultOutput");

	function red(input) {
		return Array.from(input.toString()).map(Number).reduce((a, b) => a + b, 0);
	}
	function turnToArray(input) {
		return input.slice(chunk, input.length - chunk).match(/.{1,8}/gm);
	}
	function filterUnwantedChars(text) {
		return (text.match(/[A-Z a-z]+/gm) || [""]).join("");
	}

	let sum = red(input);
	let chunk;
	do {
		chunk = red(sum);
		sum = chunk;
	} while (sum.toString().length > 1)
	// console.log(chunk);
	let arraydecodedText = turnToArray(input).map(x => String.fromCharCode(parseInt(+x, 2))).join("");
	// console.log(arraydecodedText);
	result.innerHTML = filterUnwantedChars(arraydecodedText);
}


//01:40
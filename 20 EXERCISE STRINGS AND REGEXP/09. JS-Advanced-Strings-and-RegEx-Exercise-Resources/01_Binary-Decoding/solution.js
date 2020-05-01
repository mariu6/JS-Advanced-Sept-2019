function solve() {
	let input = document.querySelector("#input").value;
	input = input.match(/[01]+/gim);
	if (input === null) return;
	input = input.join('');
	// console.log(input);
	let sum = Array.from(input)
		.filter(x => x !== '0').length
		.toString().split('').map(Number)
		.reduce((a, b) => a + b);
	sum = sum.toString().split('').map(Number)
		.reduce((a, b) => a + b);
	// console.log(sum);
	input = input.slice(sum, input.length - sum);
	// console.log(input);
	let segments = [];
	for (let i = 0; i < input.length; i += 8) {
		segments.push(input.slice(i, i + 8));
	}
	// console.log(segments);
	let out = segments.map((x, i) => parseInt(segments[i], 2));
	// console.log(out);
	out = out.map(x => String.fromCharCode(x)).join('').match(/[\s\w]+/gmi);
	if (out !== null) {
		// console.log(out.join(''));
		document.querySelector("#resultOutput").innerHTML = out.join('');
	}
}
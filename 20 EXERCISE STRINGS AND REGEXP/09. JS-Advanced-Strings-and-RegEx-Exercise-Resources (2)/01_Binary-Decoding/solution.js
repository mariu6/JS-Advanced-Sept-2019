function solve() {   //  solve(input)
	let input = document.getElementById('input').value;
	input = input.match(/[01]+/gim).join('');
	if(input===null) input = ["0"];
	console.log(input);
	let sum = calculateSum(input);
	input = splitInput(input, sum);
	let result = splitGroups(input);

	function splitGroups(text) {
		let result = [];
		let matched = text.match(/.{1,8}/gim);    //  . всичко   {1,8} - от един до осем символа
		matched.forEach(element => {
			result.push(binaryToString(element));
		});
		return result;
	}

	function binaryToString(e) {
		let arrString = String.fromCharCode(parseInt(+e, 2));
		return arrString.match(/[a-zA-Z ]/gmi);    				// output check
	}


	function splitInput(input, sum) {
		let result = input.slice(sum, (input.length - sum));
		return result;
	}

	function calculateSum(input) {

		let sum = Array.from(input).map(Number).reduce((a, b) => a + b);
		while (sum > 9) {
			sum = Array.from(sum.toString()).map(Number).reduce((a, b) => a + b);
		}
		return sum;
	}
	document.getElementById("resultOutput").innerHTML = result.join("")
	// console.log(result.join(""));
}

// solve("010011100110110111101100110011101000111010101101110011010010010000001110011011101000111010101100100011001010110111001110100010")
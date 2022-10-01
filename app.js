let inputTextOne = document.getElementById("input-text-one");
let inputTextTwo = document.getElementById("input-text-two");
let sign = document.getElementById("sign");
let answer = document.getElementById("answer");

function CalculateAnswer() {
	if (sign.value === "+") {
		answer.innerText =
			parseFloat(inputTextOne.value) + parseFloat(inputTextTwo.value);
	}
	if (sign.value === "-") {
		answer.innerText =
			parseFloat(inputTextOne.value) - parseFloat(inputTextTwo.value);
	}
	if (sign.value === "*") {
		answer.innerText =
			parseFloat(inputTextOne.value) * parseFloat(inputTextTwo.value);
	}
	if (sign.value === "/") {
		answer.innerText =
			parseFloat(inputTextOne.value) / parseFloat(inputTextTwo.value);
	}
}
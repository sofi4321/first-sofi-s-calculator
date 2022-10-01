let inputTextOne = document.getElementById("input-text-one");
let inputTextTwo = document.getElementById("input-text-two");
let sign = document.getElementById("sign");
let answer = document.getElementById("answer");

function CalculateAnswer() {
	if (sign.value === "+") {
		answer.innerText =
			parseInt(inputTextOne.value) + parseInt(inputTextTwo.value);
	}
	if (sign.value === "-") {
		answer.innerText =
			parseInt(inputTextOne.value) - parseInt(inputTextTwo.value);
	}
	if (sign.value === "*") {
		answer.innerText =
			parseInt(inputTextOne.value) * parseInt(inputTextTwo.value);
	}
	if (sign.value === "/") {
		answer.innerText =
			parseInt(inputTextOne.value) / parseInt(inputTextTwo.value);
	}
}

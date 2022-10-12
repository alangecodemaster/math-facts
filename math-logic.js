function outputNum(number){
	document.querySelector("number").innerHTML = number.value;
}

function runMath(){
	let rangeVal = document.querySelector("#range");
	clearAll();
	let counter = 0;

	while(counter < Number(rangeVal.value)){
		let numbers = chooseTwoNum();
		outputNumbers(numbers);
		counter++;
	}
}

function chooseTwoNum(){
	let numbers = [];
	let number = Math.floor(Math.random() * 10);
	let number2 = Math.floor(Math.random() * 10);
	numbers.push(number);
	numbers.push(number2);
	return numbers;
}

function outputNumbers(numArray){
	let outputHTML = `<div class="numbers">
	<div class="plus">+</div>
	<div class="top">${numArray[0]}</div>
	<div class="bottom">${numArray[1]}</div>
	</div>`;
	let mathContainer = document.querySelector(".math-container");
	mathContainer.innerHTML = mathContainer.innerHTML + outputHTML;
}

function clearAll(){
	document.querySelector(".math-container").innerHTML = "";
}


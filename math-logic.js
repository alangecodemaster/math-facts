function outputNum(number){
	document.querySelector("number").innerHTML = number.value;
}

function runMath(){
	let rangeVal = document.querySelector("#range");
	let addition = isTrue('#add');
	let subtraction = isTrue('#subt');
	let mult = isTrue('#mult')

	clearAll();

	let counter = 0;

	if(addition){
		while(counter < Number(rangeVal.value)){
			let numbers = chooseTwoNum();
			outputNumbers(numbers, '+');
			counter++;
		}
		return;
	}
	if(subtraction){
		while(counter < Number(rangeVal.value)){
			let numbers = chooseTwoNum();
			let checkedNumbers = checkNumbers(numbers);
			outputNumbers(checkedNumbers, '-');
			counter++;
		}
		return;
	}
	if(mult){
		while(counter < Number(rangeVal.value)){
			let numbers = chooseTwoNum();
			outputNumbers(numbers, 'x');
			counter++;
		}
		return;
	}
}

function chooseTwoNum(){
	let numbers = [];
	let number = Math.floor(Math.random() * 10);
	let number2 = Math.floor(Math.random() * 10) ;
	numbers.push(number);
	numbers.push(number2);
	return numbers;
}

function outputNumbers(numArray,symbol){
	let outputHTML = `<div class="numbers">
	<div class="plus">${symbol}</div>
	<div class="top">${numArray[0]}</div>
	<div class="bottom">${numArray[1]}</div>
	</div>`;
	let mathContainer = document.querySelector(".math-container");
	mathContainer.innerHTML = mathContainer.innerHTML + outputHTML;
}

function clearAll(){
	document.querySelector(".math-container").innerHTML = "";
}


function checkNumbers(numbers){
	if(numbers[0] < numbers[1]){
		return [numbers[1] + 1, numbers[1]];
	}else{
		return numbers;
	}
}

function isTrue(selector){
	if(document.querySelector(selector).checked){
		return true;
	}else{
		return false;
	}
}
let history = [];

function addToResult(value) {
	document.getElementById('result').value += value;
}

function clearResult() {
	document.getElementById('result').value = '';
}

function deleteDigit() {
	let result = document.getElementById('result').value;
	document.getElementById('result').value = result.substr(0, result.length - 1);
}

function calculate() {
	let equation = document.getElementById('result').value;
	let result = eval(equation);
	document.getElementById('result').value = result;
	history.push(equation + ' = ' + result);
	if (history.length > 10) {
		history.shift();
	}
	document.getElementById('history').innerHTML = '';
	history.forEach(function(value) {
		let li = document.createElement('li');
		let equation = document.createTextNode(value);
		li.appendChild(equation);
		document.getElementById('history').appendChild(li);
	});
}

function toggleHistory() {
	let historyList = document.getElementById('history');
	if (historyList.style.display === 'none') {
		historyList.style.display = 'block';
	} else {
		historyList.style.display = 'none';
	}
}

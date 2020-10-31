function calc(num1, operator, num2){
	switch(operator){
		case "+": return num1 + num2;
		case "-": return num1 - num2;
		case "*": return num1 * num2;
		case "/": return num1 / num2;
	}
}
console.log(calc(1,"+",2));
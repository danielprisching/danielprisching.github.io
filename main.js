function guessTheNumber(){
var inputNumber = Number(document.getElementById("number").value);
var randomNumber = Math.floor(Math.random()*10) + 1;

if (inputNumber === randomNumber) {
	alert("You have wonnered")
} else if (inputNumber%1 !== 0 || inputNumber < 1 || inputNumber > 10)  {
	alert("Please write a whole number between 0 and 10")
} else {
	alert("You have losted")

}

}
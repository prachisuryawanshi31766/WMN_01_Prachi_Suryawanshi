
/*Write a program to swap two variables without using a third
variable. */



const resultElement = document.getElementById('result');


let num1 = parseFloat(prompt("Enter First Number"));
let num2 = parseFloat(prompt("Enter Second Number"));


num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;


alert("After Swapping");

// Update the result element with the swapped values
resultElement.textContent = 'Swapped values: first number = ' + num1 + ', second number = ' + num2;

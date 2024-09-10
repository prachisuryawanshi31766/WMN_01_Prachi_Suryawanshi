/* Create a simple calculator using prompts to take inputs for two
numbers and display the result using different operators.
 */

const resultElement = document.getElementById('result');


const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));



const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division =  num1 / num2 ;

document.getElementById('add_result').textContent = addition;
document.getElementById('sub_result').textContent = subtraction;
document.getElementById('mult_result').textContent = multiplication;
document.getElementById('div_result').textContent = division;

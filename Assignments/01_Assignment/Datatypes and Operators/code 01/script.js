


let var1 = parseFloat(prompt("Enter the first number:"));
let var2 = parseFloat(prompt("Enter the second number:"));



let addition_result_h2_element = document.querySelector('.addition_result');
let subtraction_result_h2_element = document.querySelector('.subtraction_result');
let multiplication_result_h2_element = document.querySelector('.multiplication_result');
let division_result_h2_element = document.querySelector('.division_result');


addition_result_h2_element.textContent = `Addition: ${var1 + var2}`;
subtraction_result_h2_element.textContent = `Subtraction: ${var1 - var2}`;
multiplication_result_h2_element.textContent = `Multiplication: ${var1 * var2}`;
division_result_h2_element.textContent = `Division: ${var2 !== 0 ? var1 / var2 : 'Cannot divide by zero'}`;

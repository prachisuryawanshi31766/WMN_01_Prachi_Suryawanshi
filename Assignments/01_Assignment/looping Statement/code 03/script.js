/*Write a program to calculate the factorial of a number using a
while loop */


let resultElement = document.getElementById('result');

let fact=1;
let icnt=1;

let ino1 = parseFloat(prompt("Enter number to calculate factorial"));


//resultElement.textContent =("Factorial of Number :");
 
while(icnt<=ino1)
{
    fact=fact*icnt;
    icnt++;
} 

resultElement.innerHTML +="factorial of "+ino1 + "== " +fact + ' <br>';

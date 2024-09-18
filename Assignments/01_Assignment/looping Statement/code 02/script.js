
/* Write a program to print the multiplication table of a number
using a for loop.
*/

let resultElement = document.getElementById('result');

let num=1;
let icnt;

let ino1 = parseFloat(prompt("Enter number to print table"));

resultElement.textContent =("table :");

for(icnt=num;icnt<=10;icnt++)
{
    let ans= ino1 * icnt;
    resultElement.innerHTML +=  ans + ' <br>';
}







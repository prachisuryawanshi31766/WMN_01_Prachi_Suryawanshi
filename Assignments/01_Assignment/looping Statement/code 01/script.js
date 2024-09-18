
/*Write a program to print the first 10 natural numbers using a
for loop.*/

let resultElement = document.getElementById('result');

let num=1;
let icnt;


resultElement.textContent =("Natural Number 1 to 10 :");

for(icnt=num;icnt<=10;icnt++)
{
    resultElement.innerHTML +=" " +icnt + ' <br>';
} 


/*
var loop_element=document.querySelector('.result');

var ino;

for(ino=1;ino<=10;ino++)
{
    loop_element.innerHTML = loop_element.innerHTML+ " " +ino +'<br>';
}
*/

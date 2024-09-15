
/* Create a program that calculates the area of a circle using the
Math.PI constant.*/

const resultElement = document.getElementById('result');

const redius = prompt("Enter a redius: ");
const PI=3.14;
var area=PI* redius*redius;

resultElement.textContent +=(" \n Area of Circle = " +area);

/*Write a program to check if a given number is even or odd
using the modulus operator. */


const resultElement = document.getElementById('result');

const ino = prompt("Enter a number: ");

if(ino%2==0)
{
    resultElement.textContent +=(ino +" \n  is  even  number");
}
else
{
    resultElement.textContent +=(ino +" \n is  odd  number")
}


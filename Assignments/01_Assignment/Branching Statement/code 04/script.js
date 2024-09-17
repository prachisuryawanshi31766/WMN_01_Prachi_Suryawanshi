/* Create a program that prompts the user for their age and
checks if they are eligible to vote (age >= 18).*/


let resultElement = document.getElementById('result');

let age = parseInt(prompt("Enter a your age: "));

document.getElementById('age_element').textContent= "your age  is =" +age;

if(age>=18)
{
    document.getElementById('result').textContent= "then you are eligible to vote";
}

else
{
    document.getElementById('result').textContent= "then you are not eligible to vote";

}

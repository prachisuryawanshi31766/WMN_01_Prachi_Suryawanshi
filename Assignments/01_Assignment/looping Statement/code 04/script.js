/* Create a program that prints all even numbers between 1 and
50 using a for loop.*/


let resultElement = document.getElementById('result');
let ino1=50;
let icnt=1;
 
for(icnt=1; icnt<=ino1; icnt++)
{
    if(icnt%2==0)
    {
        resultElement.innerHTML +=  +icnt + ' <br>';
    }
    
} 





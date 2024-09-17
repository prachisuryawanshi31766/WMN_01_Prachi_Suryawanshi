/* Write a switch-case program that takes a day of the week as
input and prints the corresponding day name (e.g., 1 =
Monday).*/



let resultElement = document.getElementById('result');

let day = parseInt(prompt("Enter a Day number: "));

switch(day)
{
    case 1:
    resultElement.textContent ="\n Monday" ;
    break ;

    case 2:
    resultElement.textContent ="\n Tuesday" ;
    break ;

    case 3:
    resultElement.textContent ="\n wednesday";
    break ;

    case 4:
    resultElement.textContent ="\n Thursday";
    break ;

    case 5:
    resultElement.textContent ="\n Friday";
    break ;

    case 6:
    resultElement.textContent ="\n Saturday";
    break ;

    case 7:
    resultElement.textContent ="\n Sunday" ;
    break ;
}



const resultElement = document.getElementById('result');

const ino = prompt("Enter a number: ");

if(ino >0)
{
    resultElement.textContent +=(+ino +" " +" \n number is positive ");
}

else if(ino <0)
{
  resultElement.textContent +=(+ino +" " + "  number is negative ");
}

else
{
    resultElement.textContent=(+ino + " " +"\n number is zero");
}
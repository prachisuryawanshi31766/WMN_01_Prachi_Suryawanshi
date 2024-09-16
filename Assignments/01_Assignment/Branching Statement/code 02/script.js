
/*Implement a grading system that assigns grades (A, B, C, etc.)
based on a student's score using if-else conditions.*/


let resultElement = document.getElementById('result');

let score  = parseFloat(prompt("Enter any score: "));


if(score >90 && score <=100)
{
    resultElement.textContent= "This student get A grade";
}

else if(score>75 && score<=90)
{
    resultElement.textContent= "This student get B grade";
}

else if(score>60 && score<=75)
{
    resultElement.textContent= "This student get C grade";
}

else if(score>35 && score<=60)
{    
     resultElement.textContent= "This student is Pass";        
}

else 
{    
      resultElement.textContent= "This student is Fail";        
}

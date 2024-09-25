/*Write an arrow function that returns the factorial of a number. */



result_element=document.querySelector('.output_element');

const factorial= () =>{

    var ino = parseFloat(document.getElementById('num').value);
    var fact=1;
    var le;

    for( le=1; le<=ino; le++)
        {
            fact=fact*le;
    
        }

    

    output_element.textContent = +ino +" "+ "Factorial is " +" "+ fact;


}
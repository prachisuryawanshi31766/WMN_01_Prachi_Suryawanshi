
/* Create an arrow function that calculates the square of a number */

result_element=document.querySelector('.output_element');

const square= () =>{

    var ino = parseFloat(document.getElementById('num1').value);

    let ans=ino*ino;

    output_element.textContent = +ino +" " + "Square is " + " "+ans;


}

/*Write an arrow function that takes two numbers and returns the
maximum.*/


result_element = document.querySelector('.output_element');



const  maxNumber= () => {

    var ino1 = parseFloat(document.getElementById('num1').value);
    var ino2= parseFloat(document.getElementById('num2').value);

    if(ino1>ino2)
    {
        output_element.textContent = +ino1 +" " + "is maximum than" + " " +ino2;
    }

    else
    {
        output_element.textContent = +ino2 +" " + "is maximum than" + " "+ino1;
    }

	
}

/*Create a function that takes 2 numbers as a parameters
and reurns their sum*/


result_element = document.querySelector('.output_element');

function Calculate(num1,num2)
{
    return num1+num2;
}

function Sum() 
{
    ino1 = parseFloat(document.getElementById('num1').value);
    ino2 = parseFloat(document.getElementById('num2').value);

    const add = Calculate(ino1,ino2);

    document.querySelector('.output_element').textContent ="sum ="+ ino1 + " + " + ino2 + " = "+ add;

}
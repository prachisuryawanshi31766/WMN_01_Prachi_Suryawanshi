


result_Element=document.querySelector('.output_element');

const CheckNumber= () =>{

    var ino=parseFloat(document.getElementById('num').value);
    

    if(ino %2===0)
    {
        output_element.textContent= + ino + " " + " is Even Number";
    }

    else
    {
        output_element.textContent= + ino + " " + "is Odd Number";
    }
}
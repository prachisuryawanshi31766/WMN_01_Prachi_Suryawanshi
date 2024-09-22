


result_element = document.querySelector('.output_element');

function primeNumber()
{
    var ino = parseFloat(document.getElementById('number1').value);
    
    var le;
    var icnt=0;

    for(le=1;le<=ino;le++)
    {
        if(ino % le===0)
        {
            icnt++;
        }
    }

    if(icnt===2)
    {
        document.querySelector('.output_element').textContent ="This is Prime number ";

    }
    else
    {
        document.querySelector('.output_element').textContent ="This is not Prime number ";

    }


}
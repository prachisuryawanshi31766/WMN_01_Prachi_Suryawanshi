

var output_element=document .querySelector('.output_element')


//Function Defination
function  helloFunction()  //camel case
{
    //function body
    output_element.textContent="Hello ,Prachi Suryawanshi \n"
}

function greetings()
{
    //function body
    helloFunction();  //function call
    output_element.textContent=output_element.textContent + "this is function  demo"
}

greetings();

/**
 * SYNTAX:
 * 
 * 	function FUNCTION_IDENTIFIER () 
 * 	{
 * 		Function body
 * 	}
 * 
 * 	function FUNCTION_IDENTIFIER () //	Function Declarator
 * 
 */

/**
 * 
 * 		CALLER					CALLEE
 * 
 *	   greetings()	->		helloFunction() 
 *     EMPLOYER		->		EMPLOYEE
 * 
 */




/**  //documentation comment
 * 
 */
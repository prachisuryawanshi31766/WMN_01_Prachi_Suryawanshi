
var type_of_element=document.querySelector('.type_of_element');

let value1="Marshalling void "
let value2='hello '
let value3=`hello from Prachi Suryawanshi`
/*
" " , ' ',--->>  -----------Normal string
` ` ---->> ------------format String
*/


let no_of_Students=100;

type_of_element.textContent="There are "+ no_of_Students + "students in WMN"
//type_of_element.textContent=`There are ${no_of_Students} students in WMN`

/**
 * to use vriable in a string 
 * 
 * step 1:enclose that variable is curly bracket {}
 * step 2:prefix the {} with  $
 */
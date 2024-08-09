
let ino1 =100;
let ino2 =50;

var addition_result_h2_element=document.querySelector('.addition_result');
var substraction_result_h2_element=document.querySelector('.substraction_result');
var multiplication_result_h2_element=document.querySelector('.multiplication_result');
var division_result_h2_element=document.querySelector('.division_result');
var mode_result_h2_element=document.querySelector('.mode_result');

var equality_result_h2_element=document.querySelector('.equality_result');
var inequality_result_h2_element=document.querySelector('.inequality_result');
var greater_result_h2_element=document.querySelector('.greater_result');
var less_result_h2_element=document.querySelector('.less_result');
var greater_than_equal_result_h2_element=document.querySelector('.greater_than_equal_result');
var less_than_equal_result_h2_element=document.querySelector('.less_than_equal_result');


addition_result_h2_element.textContent= ino1 +ino2;
substraction_result_h2_element.textContent=ino1 -ino2;
multiplication_result_h2_element.textContent=ino1 *ino2;
division_result_h2_element.textContent= ino1 / ino2;
mode_result_h2_element.textContent=ino1 % ino2;

equality_result_h2_element.textContent=ino1 ===ino2;
inequality_result_h2_element.textContent= ino1 !==ino2;
greater_result_h2_element.textContent =ino1> ino2;
less_result_h2_element.textContent =ino1< ino2;
greater_than_equal_result_h2_element.textContent=ino1 >=ino2;
less_than_equal_result_h2_element.textContent=ino1 <=ino2;




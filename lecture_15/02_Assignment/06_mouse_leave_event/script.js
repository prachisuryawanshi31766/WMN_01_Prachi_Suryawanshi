
var mouse_leave_element=document.querySelector('.mouse_leave_handler')


mouse_leave_element.addEventListener('mouseleave' ,function()
{
    mouse_leave_element.style.border = '0px solid #000000'
    mouse_leave_element.style.backgroundColor='yellow'
})




var elmButton=document.querySelector('.double_click_handler')
var elmHeading1=document.querySelector('.double_click_heading')

elmButton.addEventListener('dblclick' ,function()
{
    	elmHeading1.textContent = 'THE BUTTON IS  DOUBLE CLICKED'
})
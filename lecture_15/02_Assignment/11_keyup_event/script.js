
var keyup_element = document.querySelector('.keyup_handler');


keyup_element.setAttribute('tabindex', '0');



keyup_element.addEventListener('keyup', function () {

    keyup_element.style.backgroundColor = '#f00000';
    keyup_element.style.border = '4px solid aqua';
});

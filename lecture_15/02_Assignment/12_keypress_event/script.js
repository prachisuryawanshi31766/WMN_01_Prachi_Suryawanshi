

var keypress_element = document.querySelector('.keypress_handler');


keypress_element.setAttribute('tabindex', '0');


keypress_element.addEventListener('keypress', function () {

    keypress_element.style.backgroundColor = 'green';
    keypress_element.style.border = '4px solid yello';
})
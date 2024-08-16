


var keydown_element = document.querySelector('.keydown_handler');

// Make the element focusable by adding a tabindex attribute
keydown_element.setAttribute('tabindex', '0');



keydown_element.addEventListener('keydown', function () {

    keydown_element.style.backgroundColor = 'aqua';
    keydown_element.style.border = '4px solid black';
});

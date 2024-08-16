
var elmButton = document.querySelector('.click_handler');
var elmHeading1 = document.querySelector('.click_heading');


elmButton.addEventListener('click', function () {
	elmHeading1.textContent = 'THE BUTTON IS CLICKED'
})
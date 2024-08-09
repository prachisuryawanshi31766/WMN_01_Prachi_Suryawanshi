
var elmButton = document.querySelector('button')
var elmHeading1 = document.querySelector('h1')

//	This is registration of event -
// Event Listner ELEMENT	Event	EventHandler | EventListner
elmButton.addEventListener('click', function () 
{
	elmHeading1.textContent = 'The button is cliked'
})

elmButton.addEventListener('dblclick', function ()
 {
	elmHeading1.textContent = 'The button is double clicked  '
})
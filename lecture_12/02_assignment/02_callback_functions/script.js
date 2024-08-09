var elmButton = document.querySelector('button')
var elmHeading1 = document.querySelector('h1')


//This is registraction of event  - event listner
//element                   event   eventhandler |eventlistner
elmButton.addEventListener('click', function () {
    elmHeading1.textContent = 'THE BUTTON IS CLICKED'
})


elmButton.addEventListener('dblclick', function () {
    elmHeading1.textContent = 'THE BUTTON IS DOUBLE CLICKED'
})


elmButton.addEventListener('mouseup' , function () {
    elmHeading1.textContent = 'MOUSE BUTTON UP '
})


elmButton.addEventListener('mousedown' , function () {
    elmHeading1.textContent = 'MOUSE BUTTON DOWN'
})


elmButton.addEventListener('mousemove' , function () {
    elmHeading1.textContent = 'MOUSE MOVED '
})


elmButton.addEventListener('wheel' , function () {
    elmHeading1.textContent = 'MOUSE WHEEL ROTATED'
})


elmButton.addEventListener('keydown' , function () {
    elmHeading1.textContent = 'KEYDOWN'
})


elmButton.addEventListener('keyup' , function () {
    elmHeading1.textContent = 'KEYUP'
})


elmButton.addEventListener('keypress',function () {
    elmHeading1.textContent = 'KEYPRESSED'
})
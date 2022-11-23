//Get a reference to the canvas
let canvas = document.querySelector('canvas')
console.log(canvas.getBoundingClientRect())

//Lets add a mouse move event
canvas.addEventListener('mousemove', showCoordinates)
//I can create the showCoordinates function
function showCoordinates(event){
    console.log(event)
    //Client x and client y are where the cursor is on your webpage

    //We can calculate where we are on the canvas by subtracting
    //the x and y of the canvasrectanle from the client x and client y
    let domRect = canvas.getBoundingClientRect()
    let x = event.clientX - domRect.left
    let y = event.clientY - domRect.top
    document.querySelector('p').innerHTML = `Coordinates within the Canvas: 
    X:${x} Y:${y}` 
}


//Get the context
let context = canvas.getContext('2d')
context.moveTo(25, 25)
context.lineTo(25, 125)
context.stroke()
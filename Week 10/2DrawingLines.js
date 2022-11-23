const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const btnDrawLine = document.getElementById("btn-draw-line")
const btnDrawManyLines = document.getElementById("draw-many-lines")
const btnClear = document.getElementById("clear")
const btnDrawCircle = document.getElementById("draw-circle")
const btnDrawAnimatedCircle = document.getElementById("draw-animated-circle")

btnDrawLine.addEventListener('click', drawLine)
btnClear.addEventListener('click', clear)
btnDrawManyLines.addEventListener('click', drawManyLines)
btnDrawCircle.addEventListener('click', drawCircle)
btnDrawAnimatedCircle.addEventListener('click', drawAnimatedCircle)

function drawLine(){
    //Begin the path
    ctx.beginPath()
    //Start drawing from a random position
    //Generate random x and y
    let x = Math.floor(Math.random() * 100)
    let y = Math.floor(Math.random() * 100)

    let x2 = Math.floor(Math.random() * 600)
    let y2 = Math.floor(Math.random() * 600)
    ctx.moveTo(x, y)
    ctx.lineTo(x2, y2)

    //Set width
    ctx.lineWidth = Math.ceil((Math.random() * 7) + 1)
    //Set color ctx.strokeStyle
    ctx.stroke();
}


function drawManyLines(){
    //Draw multile lines starting with the same point
    ctx.beginPath()
    ctx.strokeStyle = '#0000ff'
    ctx.lineWidth = 3
    ctx.clearRect(0,0,600,600)
    for(let i = 0; i < 100; i++){
        let x2 = Math.floor(Math.random() * 600)
        let y2 = Math.floor(Math.random() * 600)
        ctx.moveTo(0,0)
        ctx.lineTo(x2, y2)
        ctx.stroke()
    }
}


function drawCircle(){
    //Center of canvas
    let x = canvas.width / 2
    let y = canvas.height /2
    let radius = 50
    let start = 0
    let end = 2 * Math.PI
    //Draw the circle
    ctx.beginPath()
    //Arc method (x, y, radius, startAngle, endAngle)
    ctx.arc(x,y,radius,start,end)
    ctx.strokeStyle = '0000ff'
    ctx.stroke()
}



function Point(x,y){
    this.x = x
    this.y = y
}
function drawAnimatedCircle(){
    let p1 = new Point(canvas.width/2, canvas.height/2)
    //Determine dimensions of the canvas
    let min = Math.min(canvas.width, canvas.height)
    //p2
    let p2 = new Point(p1.x, 50)
    let radius = Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y))
    //Ready to draw the line
    
}


function clear(){
    //ClearRect method starting x and y and ending x and y
    //clears all the space inside
    ctx.clearRect(0,0,600,600)
}
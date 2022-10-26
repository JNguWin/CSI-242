//Create the fields
let container;
let box;

//Create variables to store the timers
let boxTimer;
let containerTimer;

//Create variables that store x and y positon
let xPosition;
let yPosition;
let xDirection;
let yDirection;

//Field for stop button
let btnStop;


window.addEventListener('load', function(){
    container = document.getElementById("container");
    box = document.getElementById("box");
    btnStop = document.getElementById("btn-stop")

    //Assign values to our variables
    xPosition = 0;
    yPosition = 0;
    //Set the directions 
    xDirection = 2;
    yDirection = 2;



    //setTimeout will wait 2 seconds then call the displayContainer
    setTimeout(displayContainer, 2000);
    
    btnStop.addEventListener('click', function(){
        clearInterval(boxTimer)
    });
});


function displayContainer(){
    container.style.display = "block";
    box.style.display = "block"
    
    //setInterval for our moveBox() function
    boxTimer = setInterval(moveBox, 20);
}


//This is where we actually move the div
function moveBox(){
    //We have to check to see where we are before we move the box
    if(yPosition >= 370 || yPosition < 0){
        yDirection *= -1;
        box.style.setProperty('background-color', getRandomColor())
    }
    if(xPosition >= 570 || xPosition < 0){
        xDirection *= -1;
        box.style.setProperty('background-color', getRandomColor())
    }
    //This is where we actually move the box
    //First time it runs we set the top to 2 px
    //Second time we run we set it to 4
    //Third time to 6 etc,
    xPosition += xDirection;
    yPosition += yDirection;
    box.style.top = yPosition + 'px'
    box.style.left = xPosition + 'px'
}

//Random color
function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let output = '#';
    for(let i = 0; i < 6; i++){
        output += letters[Math.floor(Math.random() * 16)];
    }
    return output
}
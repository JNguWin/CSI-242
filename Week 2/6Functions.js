//Any code not in a function runs automatically
helloWorld("John");
//Basic function - "Hoisting"
//This is a hoisted to the top of the document
//I can call it before I defined
function helloWorld(name){
    console.log("Hello World " + name);
}


//Function expression
//Create a variable and set it = to a function
//Function expressions are not hoisted
const calcVolume = function(length, width, height){
    return length * width * height;
}
let volume = calcVolume(4, 2, 7);
console.log("The volume is " + volume);

//Arrow function/Goes to
//IIFE Immediately Invokable Function Expression
(() => {
    console.log("Arrow function");
})();
//or
((input) => {
    console.log("Arrow function " + input);
})('Hello');

//Traditional
const areaTriangle = function(base, height){
    return base * height / 2;
}
//Arrow Function with 2 parameters
const areaTri = (base, height) => base * height / 2;

console.log(areaTri(5, 10));

//Arrow function with 1 parameter
const logger = input => console.log(input);

logger("Arrow function with one parameter");
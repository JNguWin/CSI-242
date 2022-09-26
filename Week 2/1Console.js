//Comments in javascript

/*
    Multi line comment
*/

// Ctrl + / to comment or uncomment 

console.log("Hello World")

//Log a number
console.log(7);

//Create and log a variable
let input = "John";
console.log(input);

//Variables can change data types
input = 10;
console.log(input);

//log boolean variables
console.log(5 < 2);
console.log(10 == 10);

//Create and log an array
let array = [1, 2, 3, 4];

//I can directly log an array
console.log(array);

//We have a data object called a mao
let map = {x: 10, y: 20};
console.log(map);

//typeof - Check the data type of a variable
console.log(typeof(input));
console.log(typeof(map));

//I'm gonna call a method that does not exist
//fakeMethod();f

//Any code in a js file that is not in a function will run automatically
myFunction();
function myFunction(){
    alert("Hello from myFunction");
}
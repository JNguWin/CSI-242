//Javascript variables can be made with 3 keywords
//let, var, and const
var text = "This is the console";
console.log(text);
//var is globally scoped, let is locally scoped
//let vs var
for(var i =0; i < 5; i++){
    console.log("Inside the var loop " + i);
}
for(let j = 0; j < 5; j++){
    console.log("Inside the let loop " + j);
}
console.log("Outsidet of the loops");
console.log("var is " + i);
//console.log("let is " + j);

//Variable names - camelCase. They can contain numbers, letters, _ or $
//const
const firstName = "John";
console.log(firstName);
//constants cannot be reassigned
//firstname = ("will");
const numbers = [0, 1, 2, 3, 4];
console.log(numbers);
//I cannot reassign numbers
//numbers = [0, 1, 2, 3, 5];
numbers[4] = 5;
console.log(numbers);

//Arrays are awesome in JavaScript
//Add to an array with push()
numbers.push(6);
console.log(numbers);
//I can also add items that are not a number to my array
numbers.push("Pizza");
console.log(numbers);

//Reference vs Value
//Numbers are value type
let x = 2;
let y = x;
console.log("x is " + x);
console.log("y is " + y);
x += 5;
console.log("x is " + x);
console.log("y is " + y);
//Reference type
let numbers2 = numbers;
console.log(numbers);
console.log(numbers2);
numbers[0] = "Hello";
console.log(numbers);
console.log(numbers2);

//Input from the user comes as a string
//Before we can do math with it we have to parse() 
//You can use parseInt() for whole numbers, parseFloat() for decimals
//Number() can do either
let input = "3.14";
console.log(input + 2);
//Here we are parsing to a number
input = Number(input + 2);
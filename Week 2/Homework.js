// //Reference vs Value ===============================================
// let text = "Hello"
// let text2 = text
// console.log(text);
// console.log(text2);

// text = "Bye"
// console.log(text);
// console.log(text2);



// let array = [10, 5, 2]
// let array2 = array
// console.log(array);
// console.log(array2);
// array[0] = 100;
// console.log(array);
// console.log(array2);



// let person = {
//     firstName: "William",
//     lastName: "Cram"
// }
// let person2 = person;
// console.log(person);
// console.log(person2);

// person2.firstName = "Mohamed";
// console.log(person);
// console.log(person2);




// //Loops============================================================
// let newArray = ["foo", "fooBar", "bar", "BarFoo"];
// //Forloop
// for(let i = 0; i < newArray.length; i++){
//     console.log("Index: " + i + " Element: " + newArray[i]);
// }

// //While
// let counter = 0;
// while(counter < newArray.length){
//     console.log("Index: " + counter + " Element: " + newArray[counter]);
//     counter++
// }

// //ForEach
// newArray.forEach((element, index) =>
// console.log("Index: " + index + " Element: " + element));


//Conditions=================================================================
// let a = 20;
// let b = "20";
// let c = null;
// let d;

// if(a == b){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// if(a === b){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// if(c === d){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// if(c == 0){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// if(c == d){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// if(d){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// if(c){
//     console.log("true");
// }
// else{
//     console.log("false");
// }




//Functions========================================================

// let input = prompt("Enter a number");
// while(input != Number){
//     input = prompt("Enter a number");
// }
// while(input == Number){
//     if(input%2 == 0){
//         console.log("userInput is even");
//     }
//     else if(input%3 == 0 || input == 1 || input == 0){
//         console.log("userInput is odd");
//     }
// }


// //Original
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min
// }

// //Function Expression
// let functionExpression = function(min, max){
//     return Math.floor(Math.random() * (max - min)) + min
// }

// //Arrow function
// let functionExpressions = (min, max) => Math.floor(Math.random() * (max - min)) + min;


// let randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;



// let array = [randomNumber(0, 99), randomNumber(0, 99), randomNumber(0, 99), randomNumber(0, 99), randomNumber(0, 99),
//     randomNumber(0, 99),randomNumber(0, 99),randomNumber(0, 99),randomNumber(0, 99),
//     randomNumber(0, 99),randomNumber(0, 99),randomNumber(0, 99),randomNumber(0, 99),randomNumber(0, 99),
//     randomNumber(0, 99),randomNumber(0, 99),randomNumber(0, 99),randomNumber(0, 99),
//     randomNumber(0, 99),randomNumber(0, 99),randomNumber(0, 99),randomNumber(0, 99),
//     randomNumber(0, 99),randomNumber(0, 99),randomNumber(0, 99)];
// for(let i = 0; i < 25; i++){
//     console.log(array[i]);
// }


// function sortFunction(array){
//     let n = array.length;
//     for(let j = 0; j < n - 1; j++){
//         for(let k = 0; k < n - j - 1; k++){
//             if(array[k] > array[k + 1]){
//                 let temp = array[k];
//                 array[k] = array[k + 1];
//                 array[k + 1] = temp;
//             }
//         }
//     }
// }





// Create a while loop to prompt the user for input.
// The while loop should continue to prompt the user until they input a number
// After you have verified that it is a number, print out:
//  "userInput is even" if userInput is even, 
//  "userInput is odd" if userInput is odd
// let input;
// do{
//     input = prompt("Enter a number")
// }while(input != parseInt(input) && input)
// if(input % 2 == 0){
//     console.log("Input is even")
// }
// else if(input % 3 == 0 || input == 1 || input ==0){
//     console.log("Input is odd")
// }



// Repeat this process using a switch statement instead of if/else
// let input;
// do{
//     input = prompt("Enter a number")
// }while(input != parseInt(input) && input)
// switch(input % 2){
//     case 0:
//         console.log("Input is even");
//         break;
//     case 1:
//         console.log("Input is odd");
//         break;
//     default:
//         console.log("Invalid Input");         
// }

let a;

if(a){
    console.log('true')
}
else{
    console.log('false');


}

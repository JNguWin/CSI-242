// h = 1;
// function f_6(){
//     var h = 137
// }
// console.log(h)
//h returns 1 in console


// h = 1;
// function f_7(){
//     windows.h = 137
// }
// f_7()
// console.log(h)
//h returns 137 after calling the function


// {
//     let g = 4.3009
//     console.log(g)
// }
// console.log(g)
//g is a block scope so if you console.log inside the block it will return
//However calling g outside the block it returns an error


// {
//     window.e = 2.71828
//     var u = 4.3
//     const p = 5
//     let pi = 3.14

// }
// console.log(e)
// console.log(u)
// console.log(p)
// console.log(pi)
//No variable and var can be defined outside the block and be return
//If it is let or const then it cannot be defined outside and cant be returned


// function fy_10(){
//     window.x = 10;
//     var y = 30;
//     {
//         x = 11;
//         {
//             let x = 12
//             if(x === 12){
//                 y = 13
//             }
//         }
//     }
//     return x + y;
// }


// console.log(fy_10())


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 4);
// console.log(fruits)
// console.log(citrus)



// Arrays
// Explain push, pop, unshift, shift and splice methods of the array
//Push - method that adds new items to the end of an array and adds to array length

//Pop - method that removes the last element of an array, returns the removed element
//and changes the original array

//Unshift - method adds new elements to the beginning of an array

//Shift - method removes the first element of the array

//Splice - method that returns selected elements in an array as a new array
//you give it a starting index and a number for how many to remove or you can put 0 and
//add in elements by inputting the values after the 0





// loop through array x and push each element to y if even
// {
//     let x = [2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let y = [];

//     for(let i = 0; i < x.length; i++){
//         if(x[i] % 2 ==0){
//             y.push(x[i])
//         }
//     }
//     console.log(x)
//     console.log(y)
// } 



// reverse the order of x using the array push/pop, shift/unshift methods
// {
//     let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//     for(let i = 1; i < 11; i++){
//         x.unshift(i)
//     }
//     for(let i = 0; i < 10; i++){
//         x.pop()
//     }
    
//     console.log(x)

// }




//splice the array above into two seperate arrays 
//["f", "o", "o"] and ["b", "a", "r"]
// {
//     let names = ["f", "o", "o", "b", "a", "r"];
//     console.log(names)
//     let foo = names.splice(0, 3)
//     console.log(foo)
//     let bar = names.splice(0, 3)
//     console.log(bar)

// }



//adding functionality to our basic reminder app
// var reminderList = [
//     {
//         title : "Water the Garden",
//         description : "Every other evening"
//     },
//     //Adding another object into the list
//     {
//         movie : "Horror",
//         details : "Very scary"
//     }
// ]

//reminderList is an array of objects [{}, {}, {}, ...]

//a. what is the output of reminderList[0].title?
//The output is "Water the garden"

//b. what is the output of reminderList[0].description?
//The output is "Every other evening"

//c. what is the output of reminderList[0].['title']?
//There is no output because it returned a syntax error that said
//the [ token before title was unexpected

//d. what is the output of reminderList[0].['description']?
//Same thing as c there is no output because it returned a syntax error that said
//the [ token before title was unexpected

// console.log(reminderList[1].details)




// var reminderList = [
//     {
//         title : "Water the Garden",
//         description : "Every other evening"
//     }
//     Adding another object into the list, add a , and then new set of brackets
//     ,{
//         movie : "Horror",
//         details : "Very scary"
//     }
// ]

// function addReminder(){
//     console.log("addReminder function");
    //e. Get two input from user using prompt() for a title and description 
    //and store them into an object with fields "title" and "description"
    // let title = prompt("What is the title?")
    // let description = prompt("What is the description")
    // let object = {title, description}

    //f. add this object to the array
    // reminderList.push(object)
    //reminderList.push({title, description})

    //This link is for a video on how to do user input
    //https://www.mikedane.com/web-development/javascript/getting-user-input/
//}

// addReminder()
// console.log(reminderList)





// var reminderList = [
//     {
//         title : "Water the Garden",
//         description : "Every other evening"
//     },
//     {
//         movie : "Horror",
//         details : "Very scary"
//     },
//     {
//         movie : "Action",
//         details : "Everything blows up"
//     }

// ]

// function removeReminder(index){
//     console.log("removeReminder function", index);
//     //g. Complete this function to remove an element in array reminderList 
//     //using the index as the starting point.
//     if(index > -1 && index < reminderList.length){
//         reminderList.splice(index, 1) //The 1 indicates that we are to remove only 1
//     }
    
// }
// console.log(reminderList)
// removeReminder(0)
// console.log(reminderList)
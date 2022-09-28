let numbers = [5, 6, 7, 8];

//for loops
for(let i = 0; i < numbers.length; i++){
    console.log("The element " + numbers[i]);
}

//While loop
let counter = 0;
while(counter < numbers.length){
    console.log("The element " + numbers[counter]);
    counter++;
}

//foreach loop
//foreach is a method
//A method is a function that runs on an object
//In this case it will run on numbers
//Callback function
//forEach takes a function as a parameter
numbers.forEach(display)

//Make a function
function display(element){
    console.log(element);
}

//forEach using arrow function
numbers.forEach((element, index) =>
    console.log("The element " + element + " The index " + index));
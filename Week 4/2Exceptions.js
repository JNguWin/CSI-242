//Exceptions are how developers talk to each other

//Call a function that does not exists
//We can wrap it in a try
try{
    //calculateArea(4, 5)
    input.indexOf("A")
}
//Every try has to have a catch
catch(error){ //exception or error works
    console.log(error)
    console.log(error.name)
    console.log(error.message)
    if(error instanceof ReferenceError){
        console.log("This is a reference error")
    }

}
//Finally - always runs no matter what
finally{
    console.log("This always runs")
}




console.log("Start sumArray()")
let numbers = [5, 6, 7, 8]
//try
try{
    let sum = sumArray(numbers, 0, 2)
    console.log("The sum is " + sum)
}
catch(error){
    console.log(error)
}

//Lets make a function that adds up all elements of an array between two indices
function sumArray(numbers, startIndex, endIndex){
    if(startIndex < 0 || startIndex > endIndex){
        throw new RangeError(startIndex + " was not in bounds of the array")
    }
    if(endIndex < 0 || endIndex > numbers.length){
        throw new RangeError(endIndex + " is not in the bounds of the array")
    }
    let sum = 0
    for(let i = startIndex; i < endIndex; i++){
        sum += numbers[i]
    }
    return sum
}


try{
    let num1 = validateInput('5')
    //We know logically if we get here that num1 has a value and it is numeric
    console.log(num1)
}
catch(exception){
    console.log(exception.message)
}


//As excercise
//Write a function that takes in a string from the user alert()
//Check that they actually typed something in
//Check that it can be converted to a number
//Throw the right exception if you cannot convert to number

function validateInput(input){
    //Checks input is empty string or null
    if(!input){
        throw new TypeError(input + " did not contain a value " + typeof(input))
    }
    if(!Number(input)){
        throw new TypeError(input + " did not contain a number " + typeof(input))
    }
    return Number(input)
}


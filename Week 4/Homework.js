/*
    TASK 1 : 
        Remove all the vowels from the following sentence : "The quick brown fox from jumped over the lazy dog"
        
        expected results: "Th qck brwn fx jmpd ovr th lzy dg"
*/

// let sentence = "The quick brown fox from jumped over the lazy dog";
// function remove(input){
//     let vowels = [ 'a', 'e', 'i', 'o', 'u',
//                'A', 'E', 'I', 'O', 'U' ];
//     let result = "";     
//     for(let i = 0; i < input.length; i++)
//     {        
//         if (!vowels.includes(input[i]))
//         {
//             result += input[i];
//         }
//     }
//     return result;
// }
// console.log(remove(sentence))




// /*
//     Task 2 :
//         Your company wants you to write an algorithm that will correctly format unformatted phone numbers.
//         Valid format for any number is x (xxx) xxx - xxxx 

//         Example input : 1 206 42523 - ( 24)
//         Expected output : 1 (206) 425 - 2324 

//         Expect to always be given the correct number of digits. Just incorrect formatting
// */

let unformattedPhoneNumber = "1 2-06 - (425 - 2 3-24)";
let formatTemplate = "x (xxx) xxx - xxxx" 
//1) we set up a template of a phone number to the correct format.

for(let i of unformattedPhoneNumber){ // runs through the string starting from the first character, in this case "1", " ", "2", "-".... so fourth...
      if(parseInt(i) + 1) formatTemplate = formatTemplate.replace("x", i); 
      // if it's a number, we replace the first instance of "x" with that number.
      // if(number + 1) because if(0) = false. 
  }
console.log(formatTemplate);


// console.log(format(unformattedPhoneNumber))



// /* Task 3 : Find the matching closing pair of parenthesis
// For this task, you are given a complex equation. Create a function "getIndexOfMatchingParenthesis" 
//that will return the matching closing parenthesis if given the index of the first opening brackets along with the string.

// let equation = "(1 + 3) * (3 + 4)"
// let openingParenthesisIndex = 0;
// let closingParenthesisIndex = getIndexOfMatchingParenthesis(openingParenthesisIndex, equation);
// console.log(closingParenthesisIndex)
// function getIndexOfMatchingParenthesis(openingParenthesisIndex, equation){
//     let closingParenthesisIndex = 0;
//     for(let i = openingParenthesisIndex; i < equation.length; i++){
//         closingParenthesisIndex = equation.indexOf(')')
//     }
//     return closingParenthesisIndex
// }



//Example 2
//expected: 33
let equation = "(1 + 3) * ( 4 - (2 / 8) * (3 + 4)) + (4/5)"
//         let openingParenthesisIndex = 10;
//         let closingParenthesisIndex = getIndexOfMatchingParenthesis(openingParenthesisIndex, equation);
//         console.log(closingParenthesisIndex)
//         //expected: 33

// So the algorithm would be:
// If we loop over a "(", add one to counter
// If we loop over a ")", subtract one from the counter.
// If counter === 0, then we know we have matched all the pairs of braces

let openingParenthesisIndex = 10;
let closingParenthesisIndex = getIndexOfMatchingParenthesis(openingParenthesisIndex, equation);
function getIndexOfMatchingParenthesis(index, equation){
    let counter = 0;
    for(var i = index; i < equation.length; i++){
        //console.log(equation[i]);
        switch(equation[i]){
            case "(" : 
                counter++;
                break;
            case ")" :
                counter--;
                break;
        }
        if(counter === 0){
            break;
        }
    }
    return i;
}
console.log(closingParenthesisIndex)





//=============Date==========================
// let timeMS = 100 * 13232334349;
// let newDate = new Date(timeMS);
// console.log(newDate)



// let timeString = "03-15-1996";
// let date = new Date(timeString)
// console.log([date.getMonth() + 1] + '/' + date.getDate()+ '/' +date.getFullYear())


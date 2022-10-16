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
function format(unformattedPhoneNumber){
    let number = []
    for(let i = 0; i < unformattedPhoneNumber.length; i++){
        number += unformattedPhoneNumber[0] = '1'
        number += unformattedPhoneNumber[1] = ' '
        number += unformattedPhoneNumber[2] = '('
        number += unformattedPhoneNumber[6] = ')'
        number += unformattedPhoneNumber[7] = ' '
        number += unformattedPhoneNumber[11] = ' '
        number += unformattedPhoneNumber[12] = '-'
        number += unformattedPhoneNumber[13] = ' '


    }
    return number
}
console.log(format(unformattedPhoneNumber))


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
// let equation = "(1 + 3) * ( 4 - (2 / 8) * (3 + 4)) + (4/5)"
// let openingParenthesisIndex = 10;
// let closingParenthesisIndex = getIndexOfMatchingParenthesis(openingParenthesisIndex, equation);
// console.log(closingParenthesisIndex)
// function getIndexOfMatchingParenthesis(openingParenthesisIndex, equation){
//     let closingParenthesisIndex = 0;
//     for(let i = openingParenthesisIndex; i < equation.length; i++){
//         closingParenthesisIndex = equation.lastIndexOf(')')
//     }
//     return closingParenthesisIndex
// }





//=============Date==========================
// let timeMS = 100 * 13232334349;
// let newDate = new Date(timeMS);
// console.log(newDate)



// let timeString = "03-15-1996";
// let date = new Date(timeString)
// console.log([date.getMonth() + 1] + '/' + date.getDate()+ '/' +date.getFullYear())


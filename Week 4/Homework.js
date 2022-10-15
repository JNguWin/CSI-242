// let sentence = "The quick brown fox from jumped over the lazy dog";
// let vowels = 'AEIOU'
// sentence = sentence.replace('a', '')
// sentence = sentence.replace('e', '')
// sentence = sentence.replace('i', '')
// sentence = sentence.replace('o', '')
// sentence = sentence.replace('u', '')
// console.log(sentence)


// let unformattedPhoneNumber = "1 2-06 - (425 - 2 3-24)";
// function format(unformattedPhoneNumber){
//     let number = []
//     for(let i = 0; i < unformattedPhoneNumber.length; i++){
//         if(isNaN(Number(unformattedPhoneNumber[i]) !== true)){
//             number.add(unformattedPhoneNumber[i])
//         }
//     }
//     return number
// }


// console.log(format(unformattedPhoneNumber))



// /* Task 3 : Find the matching closing pair of parenthesis
// For this task, you are given a complex equation. Create a function "getIndexOfMatchingParenthesis" 
//that will return the matching closing parenthesis if given the index of the first opening brackets along with the string.

let equation = "(1 + 3) * ( 4 - (2 / 8) * (3 + 4)) + (4/5)"
let openingParenthesisIndex = 10;
let closingParenthesisIndex = getIndexOfMatchingParenthesis(openingParenthesisIndex, equation);
console.log(closingParenthesisIndex)
function getIndexOfMatchingParenthesis(openingParenthesisIndex, equation){
    let closingParenthesisIndex = 0;
    for(let i = openingParenthesisIndex; i < equation.length; i++){
        closingParenthesisIndex = equation.indexOf(')')
    }
    return closingParenthesisIndex
}





//=============Date==========================
// let timeMS = 100 * 13232334349;
// let newDate = new Date(timeMS);
// console.log(newDate)



// let timeString = "03-15-1996";
// let date = new Date(timeString)
// console.log([date.getMonth() + 1] + '/' + date.getDate()+ '/' +date.getFullYear())


//function lab4(){
    //console.log("===========================================Task 1========================================================");
    /* 
        a. Select the shopping list from the DOM into a new variable.
        b. Create a new list "li" DOM/Node element
        c. Set the new list node text to equal to newItem
        d. Append the new list node the shopping list
    */
    // let newItem = "Potatoes";

    // let existingList = document.getElementById("shoppingList")
    // let newList = document.createElement('li')
    // newList.innerHTML = newItem
    // existingList.appendChild(newList)

//     console.log("===========================================Task 2========================================================");
//     /*
//         Iterate over each the elements in the shopping list and display their contents in the console. 
//     */


    // let elements = document.querySelectorAll('li')
    // let arrayList = Array.from(elements)
    // arrayList.forEach(item => {
    //     console.log(item)
    // });

   
//}
// lab4();

// console.log("===========================================Task 3========================================================");
// /*
//     Creating an add ingredient button.
    
//     a. Create a new function "addIngredient".
//         - Use prompt() to get input from user.
//         - Similiarly as we did for task 1, append contents of prompt() to the shoppigList IF it is a string
//     b. Create a new element "button"
//     c. Set it's text to say "Add"
//     d. Set it's onclick property to the function "addIngredient" 
//     e. Append this new button to the body of the page.
// */  

    // let list;
    // let btnAdd;
    // let newIngredient;
    // let newList;

    // newIngredient = prompt('Ingredient to add?')
    // btnAdd = document.getElementById("btn-add")
    // btnAdd.addEventListener('click', addIngredient)

    // function addIngredient(){
    //     list = document.getElementById("shoppingList")
    //     newList = document.createElement('li')
    //     newList.innerHTML = newIngredient
    //     list.appendChild(newList)
    // }

// console.log("===========================================Task 4========================================================");
// /*
//     Creating a clear button

//     a. Create another button that says "Remove"
//     b. Create a function named removeIngredient
//         - prompt the user which ingredient to remove by typing in the number of it's position as DISPLAYED on the html page. 
//         - Verify that user input is a number.

//         ie:

//         the html page:      Actual Index

//             1. Apples       -> index 0
//             2. Orange       -> index 1
//             3. Portatoes    -> index 2

//         - Iterate over the shoppinglist and remove if the current index = targetItemIndex

//     c. set the onclick function of the button to removeIngredient
//     d. Verify that it works

// */


    let btnRemove;
    let position;
    
    btnRemove = document.getElementById("btn-remove")
    btnRemove.addEventListener('click', removeIngredient)

    function removeIngredient(){
        position = prompt('Index to remove?')
        if(isNaN(postion)){
            alert('Enter a number')
            return;
        }
        else{
            for(let i = 0; i < list.length; i++){
                if(i == postion){
                    list[i] = list[i + 1]
                }
            }
        }
    }

// console.log("====================================Extra Credit==========================================");

// /*
//     Find the running total of an array

//     You are given an array of numbers, write a function that calculates the running total for each element in the array.

//     ex 1:
//         input   : array = [0, 1, 2, 3]
//         output  : [(0 + 0), (1 + 0), (2 + 1), (3 + 3)] -> [0, 1, 3, 6]

//     ex 2: 
//         input   : [3, 6, 10, 11]
//         output  : [(3 + 0), (6 + 3), (10 + 9), (19 + 11)] -> [3, 9, 19, 30]

// */

// let arr1 = [0, 1, 2, 3];
// let arr2 = [3, 6, 10, 11];

// /*


// */
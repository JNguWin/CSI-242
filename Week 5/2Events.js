//The load event
//It is common practice to use the load event on the window object
//to register eventListener and to get references to the document
// window.onload = functions(){
//     console.log('Hello from the window object')
// }


//Define our fields
let groceryList;
let txtGroceryItem;
let btnAdd;
let btnRemove;
let keyPressLog;

//We can think of this as the constructor 
window.addEventListener('load', function(){
    groceryList = document.getElementById('grocery-list')
    txtGroceryItem = document.getElementById('txt-grocery-item')
    btnAdd = document.getElementById('btn-add')
    btnRemove = document.getElementById('btn-remove')
    keyPressLog = document.getElementById("key-press-log")
    //Add eventListener to the input txtGroceryItem
    txtGroceryItem.addEventListener('focusin', toggleBorder)
    txtGroceryItem.addEventListener('focusout', toggleBorder)
    btnAdd.addEventListener('focusin', toggleBorder)
    btnAdd.addEventListener('focusout', toggleBorder)
    btnRemove.addEventListener('focusin', toggleBorder)
    btnRemove.addEventListener('focusout', toggleBorder)

    //We can add events to the window
    window.addEventListener('keydown', function(event){
        keyPressLog.innerHTML += `<br> ${event.key} ${event.type}`
    });
    //Similar event using arrow function for keyup
    window.addEventListener('keyup', event => {
        keyPressLog.innerHTML += `<br> ${event.key} ${event.type}`
    });
    //Now using keypress
    window.addEventListener('keypress', event => {
        keyPressLog.innerHTML += `<br> ${event.key} ${event.type}`
    });


});

//toggleBorder function
//If we take a parameter from an eventListener, that parameter contains
//the event that happened
function toggleBorder(event){
    console.log(event)
    if(event.type == 'focusin'){
        document.getElementById(event.target.id).style.border = '3px solid red'
    }
    else{
        document.getElementById(event.target.id).style.border = '1px solid black'
    }
}
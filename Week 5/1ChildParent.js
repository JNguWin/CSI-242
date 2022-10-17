//I can get a reference to my list
const groceryList = document.getElementById('grocery-list')


//the childNodes property
console.log(groceryList.childNodes)
//If I loop through groceryList.childNodes it will include all of the textNodes
//This is a loop tha goes through a nodeList and only logs the element nodes
groceryList.childNodes.forEach(node => {
    if(node.nodeType === Node.ELEMENT_NODE){
        console.log(node)
    }
});



//There is also a children property
console.log(groceryList.children)
//We cannot foreach through an HTMLCollection unless you convert it to an array
//But we can use a for loop
for(let i = 0; i < groceryList.children.length; i ++){
    console.log(groceryList.children[i])
}



//In order to associate javascript with some buttons we need a reference to the buttons
const btnAdd = document.getElementById('btn-add')
const btnRemove = document.querySelector('#btn-remove')
const txtInput = document.getElementById('txt-grocery-item')

console.log(btnAdd)
console.log(btnRemove)
console.log(txtInput)

//We need to add an event to the buttons
//This takes two parameters, the name of the event and the name of the
//method to be called
btnAdd.addEventListener('click', addElementToList)
btnRemove.addEventListener('click', removeFromList)

//Define the functions 
function addElementToList(){
    //I can access the text inside of an input with the value property
    let input = txtInput.value 
    if(!input){
        document.querySelector('.error-message').textContent = 'You did not enter a value'
        return;
    }
    document.querySelector('.error-message').textContent = ''
    //If we make it down here we know logically that input has a value
    let groceryItem = document.createElement('li')
    groceryItem.textContent = input
    groceryItem.className = 'grocery-item'
    groceryItem.id = input.toLowerCase()
    //Add it to our list
    groceryList.appendChild(groceryItem)
}



//Remove from the list
function removeFromList(){
    //Get the input
    let input = txtInput.value 
    if(!input){
        document.querySelector('.error-message').textContent = 'You did not enter a value'
        return;
    }
    //If we get down here we know that input has a value
    document.querySelector('.error-message').textContent = ''
    const originalLength = groceryList.children.length
    //Go through the list and see if input is in the list
    for(let i = 0; i < groceryList.children.length; i++){
        const element = groceryList.children[i]
        if(element.textContent === input){
            //We can remove the element
            groceryList.removeChild(element)
            //If we remove something  decrement
            i--
        }
    }
    //How could I check to see if anything got removed?
    //We could compare the currentLength with the previous length
    if(groceryList.childrend.length === originalLength){
        //We did not remove anything
        document.querySelector('.error-message').textContent = 'Item does not exist'
    }

}
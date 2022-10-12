//document.createElement
let btnSubmit = document.createElement('button')
btnSubmit.innerHTML = 'submit'
//To add an element to the page you have to append it to something
//This is not a good idea
document.body.appendChild(btnSubmit)


//Lets try and get our list
//First you need a reference to the parent
const list = document.getElementById('my-list')
console.log(list)
//Create the element with document.createElement
const liElement = document.createElement('li')
//Change anything about it you want to change
liElement.innerHTML = 'Item 1 '
liElement.style.color = 'Blue'
//Add it to the page
list.appendChild(liElement)

for(let i = 2; i < 100; i++){
    let element = document.createElement('li')
    element.innerHTML = 'Item ' + i 
    element.style.color = 'Blue'
    list.appendChild(element)
}
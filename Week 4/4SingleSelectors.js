// ul#grocerylist then hit tab to quickly create div and id/class in html


//getElementbyid - this gets you one element by id
const mainHeader = document.getElementById('main-header')
//First thing log it to see you got what you were looking for
// console.log(mainHeader)
//Add a class to an element
mainHeader.classList.add('blue-background')
//Remove a class of an element
mainHeader.classList.remove('blue-background')
mainHeader.innerHTML = 'Single Selectors Example'

//Queryselector - only gives you one element, takes css selector
//Only gives you back the first result if there are muktiple
//things with the same tag
const groceryHeader = document.querySelector('h2')
console.log(groceryHeader)


let listItem = document.querySelector('li')
console.log(listItem)
//Psuedo selectors
//Returns last list item in the grocery list
listItem = document.querySelector('li:last-child')
console.log(listItem)
//nth child
listItem = document.querySelector('li:nth-child(2)')
console.log(listItem)


//Adding things to the style 
groceryHeader.style.background = '#aaa'
groceryHeader.style.paddding = '20px'
groceryHeader.style.color = 'white'
//Makes things dissappear but still exist
//groceryHeader.style.display = 'none'


//mainheader
mainHeader.innerHTML = '<em>Grocery <span style = "color:blue">List</span></em>'

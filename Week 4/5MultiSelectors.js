//getElementsByClassName
const listItems = document.getElementsByClassName('grocery-item')
console.log(listItems)
listItems[1].innerHTML = '<em>Cookies</em>'

//getElementsByTagName
const listItems2 = document.getElementsByTagName('li')
console.log(listItems2)

//HTML Collections they can be accessed by index
//Before you can forEach through you have to make it an array
let listArray = Array.from(listItems)
listArray.forEach(item => {
    console.log(item)
})


//QuerySelectorAll - Uses CSS syntax to select multiple elements
const listItems3 = document.querySelectorAll('li')
console.log(listItems3)
listItems3.forEach(item => {
    console.log(item)
})
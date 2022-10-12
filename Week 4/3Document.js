//The document contains all of the html elements of the page
//This is not god practice do not do this
document.writeln('Writing to the document')

console.log(document)

//All of the elements as an HTMLCollection
console.log(document.all)
//Reference the head
console.log(document.head)
//We can get the other sections
console.log(document.body)
console.log(document.doctype)
console.log(document.head)
console.log(document.head)


//Get all of the forms on the page
let forms = document.forms
console.group(forms)
//My actual form is at index 0 of forms
console.log(forms[0])
//Access the attributes of my form
console.log(forms[0].id)
console.log(forms[0].className)
console.log(forms[0].action)
console.log(forms[0].method)

//We can get all the links on the page
let links = document.links
console.log(links)
//Links is an HTMLCollection
for(let i = 0; i < links.length; i++){
    links[i].innerHTML = 'This is link ' + [1 + i]
}
//We can also foreach through an HTML Collection
//First we have ot make it an array
let linkArray = Array.from(links)
linkArray.forEach(link => {
    link.innerHTML += ' Hello from forEach'
});
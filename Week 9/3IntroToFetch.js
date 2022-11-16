//Get references to the html elements
let btnGetText
let btnGetJSON
let btnGetAPI
let displayArea

window.addEventListener('load', function(){
    btnGetText = document.getElementById("btnGetText")
    btnGetJSON = document.getElementById("btnGetJSON")
    btnGetAPI = document.getElementById("btnGetAPI")
    displayArea = document.querySelector('p')

    //Add listeners for the buttons
    btnGetText.addEventListener('click', getText)
    btnGetJSON.addEventListener('click', getJSON)
    btnGetAPI.addEventListener('click', getAPI)
});

function getText(){
    //fetch(location of the data)
    //fetch returns a promise
    fetch('text.txt')
    .then(function(response){
        //This is going to run on success
        //Response contains information about the request
        console.log(response)
        //Return the response text
        return response.text()
    })
    .then(function(text){
        //Inside of here I have the text from the request
        displayArea.innerHTML = text
    })
    .catch(function(error){
        console.log(error)
    })

}

function getJSON(){
    fetch('JSONText.JSON')
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(json){
        console.log(json)
        let output = ''
        //Loop through the objects
        json.forEach(element => {
            output += `Title: ${element.title}, Year: ${element.year}</br>`
        });
        displayArea.innerHTML = output
    })
    .catch(function(error){
        console.log(error)
    })
}

function getAPI(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then((json) => {
        let output = ''
        json.forEach(post => {
            output += `</br>ID: ${post.id}</br>User ID: ${post.userId}</br>
            Title: ${post.title}</br>Body: ${post.body}`
        })
        displayArea.innerHTML = output
    })
    .catch((error) => {
        console.log(error)
    })
}
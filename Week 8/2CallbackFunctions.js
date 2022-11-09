//The callback function we have been using since the
//beginning has been with the foreach

//A callback function is a way of passing a function 
//as a parameter to another function

getSomeData(function(data){
    console.log(data)
})

//Using arrow function
getSomeData(data => {
    console.log(`Display from arrow function ${data}`)
})

getSomeData(displaytoUL)


function displayToConsole(data){
    console.log(`Display from displayToFunction method ${data}`)
}


function displaytoUL(data){
    let ul = document.querySelector('ul')
    data.forEach(x => {
        let li = document.createElement('li')
        li.textContent = x
        ul.appendChild(li)
    });
}


function getSomeData(callBack){
    let array = []
    for(let i = 0; i < 5; i++){
        array[i] = Math.floor(Math.random() * 11)
    }
    //When our processing is done
    callBack(array)
}
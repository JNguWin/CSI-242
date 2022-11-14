//A promise in JavaScript is an alternative to using a callback function
//A promise will have results, it is either successful(resolve) or
//unsuccessful(reject)

//The promise constructor takes a function which serves as a callback
//for the promise. The function has two parameters, resolve and reject.
//Resolve or reject is called once the promise has completed

//=======================Promise======================================
//Create a new promise
let promise1 = new Promise(function(resolve, reject){
    //Some processing happens
    //if check for success
    resolve('Success')

    //check for failure
    reject('Failed')
});
//The prmoise is called using the then() method
//console.log(promise1.then())
//Call this the correct way passing finctions to the callbacks

promise1.then(
    function(value){
        document.write(value)
    },
    function(error){
        console.log(error)
    }
);




//Promise that could either pass or fail 
let promise2 = new Promise(function(resolve, reject){
    //We're doing some processing, maybe making aj AJAX request
    //Generate a random number between 0 and 10
    let x = Math.floor(Math.random() * 11)
    //We can ask questions about the processing 
    if(x % 2 === 1){
        resolve(`Great, we like odd numbers ${x}`)
    }
    else{
        reject(`Error, no even numbers allowed ${x}`)
    }
});

//Both ways at the bottom work the same

//1)
//Calling promise2 using a display method for success
// promise2.then((success) => {
//     display(success)
// },
// (error) => {
//     console.log(error)
// }
// );

//2)
//Another way to call the reject method, using the catch
promise2.then((success) =>{
    display(success)
}).catch((error) => {
    console.log(error)
})

//async and await - This is another way to create a promise
async function getData(){
    //simulate a delay
    //Create a promise
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Data retrieved'), 2000)
    })
    //Calling a promise with a keyword await
    let response = await promise;
    return response 
}
//Calling getData(), getData() returns a promise
getData().then((success) => {
    console.log(success)
})

function display(input){
    document.querySelector('p').textContent = input
}
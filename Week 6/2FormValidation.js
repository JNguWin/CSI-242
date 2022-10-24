//Create the fields 
let form;
let userName;
let email;
let password;
let password2;

//Use the load event kind of like a constructor
window.addEventListener('load', function(){
    form = document.getElementById("signup-form")
    userName = document.getElementById("username")
    email = document.getElementById("email")
    password = document.getElementById("password")
    password2 = document.getElementById("password2")

    //Add an event listener to the form 
    form.addEventListener('submit', validateForm);


});


function validateForm(event){
    //We can prevent the default behaviour of an event
    event.preventDefault();

    //Call the checkRequired function
    //Checks if any if the inputs are blanked
    checkRequired([userName, email, password, password2])

    //Call checkLength
    checkLength(userName, 8, 20)
    //Password has to be between 10 and 20
    checkLength(password, 10, 20)
}

function checkRequired(inputArray){
    //Go through the array and see if any of the inputs are empty
    inputArray.forEach(function(input){
        if(input.value === ' '){
            //Display an error message
            //Instead of hardcoding the error message
            //Make a function that sets the error message
            showError(input, `${input.id} is required, cannot be blank`)

        }
        else{
            //Success
        }
    });
}

//Error message function
function showError(input, message){
    //Get the container that has the input, label, and error message
    let formControl = input.parentElement;
    formControl.className = 'form-control error';
    //Get small 
    let small = formControl.querySelector('small');
    small.innerHTML = message;

}


//Success
function showSuccess(input){
    //Get the container
    let formControl = input.parentElement;
    //Change the class
    formControl.className = 'form-control success';
}

//Check length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${input.id} must be more than ${min} characters long`)
    }
    if(input.value.length > max){
        showError(input, `${input.id} must be less than ${max} characters long`)
    }
    else{
        showSuccess(input)
    }
}
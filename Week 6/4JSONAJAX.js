let btnRequest;
let displayArea;
let btnJSONRequest;
let displayAreaJSON;

window.addEventListener('load', function(){
    btnRequest = document.getElementById("btn-Request")
    displayArea = document.getElementById("display-Area")
    btnJSONRequest = document.getElementById("btn-json-request")
    displayAreaJSON = document.getElementById("display-area-json")

    btnRequest.addEventListener('click', getDataFromFile());
    btnJSONRequest.addEventListener('click', getJSONFromFile());
});


function getDataFromFile(){
    //First create a new XLMHTTPRequest
    let xhttp = new XMLHttpRequest();

    //Next step, call an open method
    //First is the type of request
    //Get or post, retrieving data is usually a get request

    //The second parameter is the location of the data

    //The third is a bool to indicate if the request is async.
    //In this class it will always be true
    xhttp.open('GET', 'text.txt', true);
    //The onload method will fire whenever the request is complete
    xhttp.onload = function(){
        if(this.status === 200){
            displayArea.innerHTML = this.responseText;
        }
    }

    //Send the request
    xhttp.send();
}


function getJSONFromFile(){
    let xttp = new XMLHttpRequest();
    xttp.open('GET', 'students.json', true);
    //We can look at the readystate property
    console.log(xttp.readyState)
    //0 - no request has been made
    //1 - connection established
    //2 - request has been recieved
    //3 - processing
    //4 - finished
    //How can we check to see if we got a response with readystate?
    xttp.onreadystatechange = function(){
        console.log(`Ready state changed ${xttp.readyState}`)
        if(this.status === 200 && this.readyState === 4){
            //Parse the JSON string into a list of objects
            let students = JSON.parse(this.responseText)
            //Iterate through the list of students
            console.log(students);
            let output = '';
            students.forEach(stu => {
                output += `<li>Name: ${stu.firstName} ${stu.lastName}</li>
                <li>Student ID: ${stu.studentId}</li>`
            });
            displayAreaJSON.innerHTML = output;
        }
    }
    xttp.send();
}
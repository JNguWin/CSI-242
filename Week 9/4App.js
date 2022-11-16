//This app is going to use the AjaxLibrary
let ajax = new AjaxLibrary()
ajax.get('https://jsonplaceholder.typicode.com/posts',
    function(err, posts){
        if(err){
            console.log(`Error: ${err}`)
        }
        else{
            console.log(posts)
        }
    }
);




let post = {
    title: 'This is the title',
    body: 'This is the body'
}

ajax.post('https://jsonplaceholder.typicode.com/posts', post, 
function(err, post){
    if(err){
        console.log(error)
    }
    else{
        console.log(post)
    }
})

//For the lab
//If not complete we will work on it in class on monday
//Completed ajax library and first method of the library using fetch/get

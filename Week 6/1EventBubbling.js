//Create your fields
let groceryList;
//We use a load event to assign the fields
window.addEventListener('load', function(){
    //Assign the fields
    groceryList = document.getElementById("grocery-list");
    
    //Add some events
    groceryList.addEventListener('click', groceryClick);
    document.body.addEventListener('click', bodyClick);
});


//This will fire whenever the grocery list is clicked
function groceryClick(event){
    console.log('=====Grocery Click=====')

    //Log the target - This gives you the element that got clicked
    console.log(event.target)

    //We can also find out which listener fired
    //Event.currentTarget
    console.log(event.currentTarget)

    //We have a method called stopPropagation()
    //What this does is prevents the event from bubbling up
    //event.stopPropagation();

}

//This will fire whenever the body is clicked
function bodyClick(event){
    console.log('=====Body Click=====')

    //Log the target - This gives you the element that got clicked
    console.log(event.target)

    //We can also find out which listener fired
    //Event.currentTarget
    console.log(event.currentTarget)
}
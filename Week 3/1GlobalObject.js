//In javaScript we have access to something called the global object
//THis is also referred to as the window

//There is an easier way to write strings ' ' using the backticks
console.log('Logging the global object');
console.log(window);
console.log(this);

//The window contains a lot of use properties and functions
// alert('Alert is a part of the window');
// window.alert('This is the same function');

//Any method or property you have been using so far is probably part of
//the window

//Var or a variable without let or var will be added to the window
var x =3;
y = 4;
let z = 5;

//You can accidentally overwrite properties in the global object if you use var
//innerHeight = 'John';
//innerHeight and innerWidth give you screen size info
console.log(window.innerHeight);
console.log(window.innerWidth);

//Navigator
console.log(navigator.platform);
//Location contains info about the url
console.log(location);
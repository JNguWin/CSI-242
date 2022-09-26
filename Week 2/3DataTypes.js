//Primitive data types
//String
let firstName = "John";
console.log(typeof(firstName));

//Number
let number = 45;
console.log(typeof(number));

//Boolean
let isPrime = false;
console.log(typeof(isPrime));

//Undefined
let x;
console.log(typeof(x));

//Symbol
let symbol = Symbol();
console.log(typeof(symbol));

//Reference - Types

//Array
let numbers = [1, 2, 3];
console.log(typeof(numbers));
console.log(numbers);

//Object literal
let student = {
    firstName: "Gianni",
    lastName: "Marquez",
    age: 24
};
console.log(typeof(student));
console.log(student);

//Maps
let student2 = new Map();
//add values to a map using set
student2.set('firstName', 'Will');
student2.set('lastName', 'Cram');
student2.set('age', 35);
console.log(typeof(student2));
console.log(student2);


//null - null has to be set
//The value null has the data type of object
let y = null;
console.log(typeof(y));

//Date
let today = new Date();
console.log(typeof(today));
console.log(today);
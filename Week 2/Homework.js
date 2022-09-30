//Reference vs Value ===============================================
let text = "Hello"
let text2 = text
console.log(text);
console.log(text2);

text = "Bye"
console.log(text);
console.log(text2);



let array = [10, 5, 2]
let array2 = array
console.log(array);
console.log(array2);
array[0] = 100;
console.log(array);
console.log(array2);



let person = {
    firstName: "William",
    lastName: "Cram"
}
let person2 = person;
console.log(person);
console.log(person2);

person2.firstName = "Mohamed";
console.log(person);
console.log(person2);




//Loops============================================================
let newArray = ["foo", "fooBar", "bar", "BarFoo"];
//Forloop
for(let i = 0; i < newArray.length; i++){
    console.log("Index: " + i + " Element: " + newArray[i]);
}

//While
let counter = 0;
while(counter < newArray.length){
    console.log("Index: " + counter + " Element: " + newArray[counter]);
    counter++
}

//ForEach
newArray.forEach((element, index) =>
console.log("Index: " + index + " Element: " + element));



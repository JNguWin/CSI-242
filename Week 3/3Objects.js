//Object literal
let student1 = {
    firstName: 'John',
    lastName: 'Nguyen',
    studentID: 23324,
    grades: [89, 81, 92],
    calculateAvgGrade: function(){
        console.log(this);
        let total = 0;
        this.grades.forEach(grade => {
            total += grade;
        });
        return total / this.grades.length;
    }
};
console.log('FirstName ' +  student1.firstName +  ' LastName: ' + student1.lastName);
//Call the calculateAvgGrade function
console.log(student1.firstName + ' Average Grade: ' + student1.calculateAvgGrade());

//The second way to create objects
//Objects created from a constructor
//Constructor function
function Student(firstName, lastName, studentID, grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentID = studentID;
    this.grades = grades;
    this.calculateAvgGrade = function(){
        let total = 0;
        this.grades.forEach(grade => {
            total += grade;

        });
        return total / this.grades.length;
    };
};
//End of our constructor function
let student2 = new Student("Natsu", "Dragneel", 23423423, [90, 83, 84]);
console.log(student2);
console.log('Student 2: ' + student2.firstName + ' Last Name: ' + student2.lastName)
//Adding properties that are not in the constructor function
student2.enroll = true;
console.log(student2.enroll)
//We can loop through
//With a for in loop
for(const key in student2){
    console.log('The key is ' + key + ' the value is ' + student2[key])
}

//Using a map 
//Maps are another type of object in Javascript. 
//They are similar to object literals
//You may hear the terms used interchangeably.
//Maps have a size property, maps can have an object as the key.
let student3 = new Map();
//Add key values to the map we use the set property
student3.set("firstName", "Kyle");
student3.set("lastName", "Smith");
student3.set("studentID", 23434534);
student3.set("grades", [88, 98, 87]);
//An object can be a key
student3.set(student1, "This is the value associated with student1");
console.log("Calling student 3 avg grade");
console.log(student3.get(student1));

//Looping through a map
//Use the for of loop
for(const [key, value] of student3){
    console.log('This is the key ' + key + + 'This is the value ' + [key])
}



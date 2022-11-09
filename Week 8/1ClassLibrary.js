//As of ES6 JavaScript objects can be created with similar syntax to C#
//This does not actually change how JavaScript works
class Student{
    //Fields
    enrolled = false;
    grades = []
    //Constructor
    constructor(firstName, lastName, studentId){
        this.firstName = firstName
        this.lastName = lastName
        this.studentId = studentId
    }

    //Methods
    //Method that enrolls student
    enrollStudent(){
        this.enrolled = true
    }

    //Add a grade to the array
    addGrade(grade){
        if(isNaN(grade)){
            let error = new TypeError('Must be a number')
            return error;
        }
        this.grades.push(grade)
    }

    //function that goes through the grades and returns the average
    calculateAverage(){
        if(this.grades.length === 0){
            return 0
        }
        //if we get down here we know there were grades
        let total = 0
        this.grades.forEach(grades => {
            total += grades
        });
        return total / this.grades.length
    }
    //Static methods are methods that can be called without creating an instance
    //Static methids do not have access to the fields
    static getCreditCost(){
        return 100.00
    }
    static getEnrollDeadLine(){
        return '8-20-2023'
    }
}

class ITStudent extends Student{
    constructor(firstName, lastName, studentId, department){
        super(firstName, lastName, studentId)
        this.department = department
    }
    static getCreditCost(){
        return 125.00
    }
}
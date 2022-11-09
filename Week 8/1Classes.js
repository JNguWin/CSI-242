let stu = new Student('John', 'Nguyen', '100')
console.log(stu)

//Adding some grades
stu.addGrade(75)
stu.addGrade(90)
stu.addGrade(85)
stu.addGrade(96)

//calculateAverage()
console.log(stu.calculateAverage())

//Calling a static method
console.log(Student.getCreditCost())
console.log(Student.getEnrollDeadLine())


let stu2 = new ITStudent('Natsu', 'Dragneel', '444', 'CSI')
console.log(stu2)
stu2.addGrade(88)
stu2.addGrade(67)
stu2.addGrade(99)
console.log(stu2.calculateAverage())
console.log(ITStudent.getCreditCost())


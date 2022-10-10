//Date constructor
let today = new Date();
console.log(today)
console.log(typeof(today))
//New Date(year, month, day, hours, minutes, seconds, milliseconds)
//This constructor treats the month like an array
//January is 0 and Decemebter is 11
let christmas = new Date(2022, 11, 25)
console.log(christmas)
//new Date("Date String")
//"2023-02-14" International format for date
//This converts from your time to GMT
let valentinesDay = new Date("2023-02-15")
//Short date format
//"03/25/1950"
//Short date format does not consider GMT TIME or 0 based indexing for the months
valentinesDay = new Date("02/14/2022")
//Long date format
//"Mon day year"
valentinesDay = new Date("Feb 14 2022")
console.log(valentinesDay)



//Date Methods
//getMonth()
//get the month as a number 0 based indexing
let month = valentinesDay.getMonth()
console.log(month)

//getDate()
let day = valentinesDay.getDate()
console.log(day)
console.log(typeof(day))

//getFullYear()
let year = valentinesDay.getFullYear()
console.log(year)

//getFullTime() this gives you time in milliseconds
let time = valentinesDay.getTime()
console.log(time)
// h = 1;
// function f_6(){
//     var h = 137
// }
// console.log(h)
//h returns 1 in console


// h = 1;
// function f_7(){
//     windows.h = 137
// }
// f_7()
// console.log(h)
//h returns 137 after calling the function


// {
//     let g = 4.3009
//     console.log(g)
// }
// console.log(g)
//g is a block scope so if you console.log inside the block it will return
//However calling g outside the block it returns an error


// {
//     window.e = 2.71828
//     var u = 4.3
//     const p = 5
//     let pi = 3.14

// }
// console.log(e)
// console.log(u)
// console.log(p)
// console.log(pi)
//No variable and var can be defined outside the block and be return
//If it is let or const then it cannot be defined outside and cant be returned


function fy_10(){
    window.x = 10;
    var y = 30;
    {
        x = 11;
        {
            let x = 12
            if(x === 12){
                y = 13
            }
        }
    }
    return x + y;
}


console.log(fy_10())
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


// function fy_10(){
//     window.x = 10;
//     var y = 30;
//     {
//         x = 11;
//         {
//             let x = 12
//             if(x === 12){
//                 y = 13
//             }
//         }
//     }
//     return x + y;
// }


// console.log(fy_10())


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 4);
// console.log(fruits)
// console.log(citrus)



// loop through array x and push each element to y if even
// {
//     let x = [2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let y = [];

//     for(let i = 0; i < x.length; i++){
//         if(x[i] % 2 ==0){
//             y.push(x[i])
//         }
//     }
//     console.log(x)
//     console.log(y)
// } 



// reverse the order of x using the array push/pop, shift/unshift methods
// {
//     let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//     for(let i = 1; i < 11; i++){
//         x.unshift(i)
//     }
//     for(let i = 0; i < 10; i++){
//         x.pop()
//     }
    
//     console.log(x)

// }




//splice the array above into two seperate arrays 
//["f", "o", "o"] and ["b", "a", "r"]
{
    let names = ["f", "o", "o", "b", "a", "r"];
    console.log(names)
    let foo = names.splice(0, 3)
    console.log(foo)
    let bar = names.splice(0, 3)
    console.log(bar)

}
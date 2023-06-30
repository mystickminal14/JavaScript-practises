console.log("Write a function that takes two numbers as parameters and returns their sum.")


const func=(a,b)=>{
    return a+b;
}
let x= window.prompt("give a number for x :")
let y= window.prompt("give a number for y :")
x=Number.parseInt(x);
y=Number.parseInt(y);
console.log("the sum og given numbers : ",func(x,y))
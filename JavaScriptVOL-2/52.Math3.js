console.log("Number Rounding: Implement a function that rounds a decimal number to a specified number of decimal places using the Math function.")
const round=(a)=>{
    return Math.floor(a);
    
}
let x=prompt("give ome a decimal number which you intend to round off")
x= Number(x)

console.log(round(x))
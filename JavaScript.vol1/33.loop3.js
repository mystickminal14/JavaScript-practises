console.log("Write a for loop that calculates the factorial of a given number n. The factorial of n is the product of all positive integers from 1 to n.")
let n=window.prompt("enter a number")
let fact=1
for(let i=1;i<=n;i++){
fact *=i
}
console.log(fact)
console.log("Create a conditional statement to determine the largest among three numbers.")
let a = window.prompt("ENTER A FIRST NUMBER")
let b = window.prompt("ENTER SECOND NUMBER")
let c = window.prompt("ENTER YOUR THIRD NUMBER")
if(a>b && a>c){
    console.log("a is greater than b & c")
}else if(b>a && b>c){
    console.log("b is greate than a and c")
}else{
    console.log("c is greatest")
}
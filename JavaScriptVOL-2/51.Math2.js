//distance
const dist=(x,y)=>{
    return Math.sqrt((Math.pow(x,2)+Math.pow(y,2))-(Math.pow(x,2)-Math.pow(y,2)))
}

let x=window.prompt("give me a number")
let y= window.prompt("give me  a second number")
a= Number.parseInt(x)
b=Number.parseInt(y)

console.log("the distance :", dist(a,b))
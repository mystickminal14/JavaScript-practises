console.log(": Write an if-else statement to check if a number is positive or negative.")
console.log("IF-ELSE")
num=window.prompt("Give me a number")
num=Number(num)
if(num>0){
    console.log("this is a positive number")
}else{
    console.log("this is a negative number")
}
console.log("SWITCH CASE")
switch(true){
    case (num>0):
        console.log("positive number")
        break;
        case (num<0):
            console.log("negative number")
            break;
            default:
                console.log("zero")
}
console.log("TERNARY")
console.log((num>0) ? 'positive':'negative')
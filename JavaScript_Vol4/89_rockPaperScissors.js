document.write("<b>ROCK, PAPER AND SCISSORS <br><b>")
let arr=['rock','paper','scissors']
let comp=arr[Math.ceil(Math.random()*arr.length)]

let user=prompt(" Rock paper or scissors")

let selection=(comp,user)=>{
if(user===comp){
    return "Tie"
}else if(user==='scissors' &&comp==="paper"  ||user==='paper' &&comp==="rock" || user==='rock' &&comp==="scissors"){
    return "User"
}else if(user==='paper' &&comp==="scissors"  ||user==='rock' &&comp==="paper" || user==='scissors' &&comp==="rock"){
return 'Computer'
}else{
    return 'error'
}
}
let result= selection(comp,user)
document.write(`<b> User : ${user}<br> Computer :${comp} <BR>The winner of this game is : ${result}</b>`)

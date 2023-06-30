let name=prompt("enter your name")
document.write(name)
let aage=prompt("enter your age")
document.write(aage)
Number.parseInt(aage)
if(aage>=18){
    window.alert("you can change the background color")
    let background=prompt("\nwhich color do you want to change")
    confirm("do u wish to change the bg color?")
    document.body.style.background=background

}else{
    alert("error")
}

let id= document.getElementById("btn");
let fun=function(e){
   document.body.style.background="black";
alert("get yourself name");
console.log(e)
console.log(e.target)
console.log(e.currentTarget)
console.log(e.clientX,e.clientY)

}
id.addEventListener('click',fun)

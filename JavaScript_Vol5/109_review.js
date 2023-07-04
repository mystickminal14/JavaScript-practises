console.log("INNER HTML AND OUTER HTML\n","INNERHTML iis bascically your html document")
console.log("you can check innerhtml as well as write on inner html")
 
let inn=document.getElementsByClassName("card")
console.log(inn[0].innerHTML)

let bb=inn[0].innerHTML="<B></H1>YO IT MYSTICK</B></H1>"
console.log(bb)

console.log("outerHtml return inner html as well as the everything outtside of inner html")
console.log(inn[0].outerHTML)
console.log("we can clearly see that it returns inner html as weel as outsdie of innerhtml")

console.log(inn[0].outerHTML="<H1>HELLO</H2>")

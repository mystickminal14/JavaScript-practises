let c= document.getElementById("text")
c.style.color="gray"

let d=document.querySelectorAll(".card")
console.log(d)
d[0].style.background="darkgray"
d[1].style.background="gray"
d[2].style.background="skyblue"
d[0].style.color="white"
d[1].style.color="white"
d[2].style.color="red"

let e=document.querySelector(".card")
e.style.color="yellow"

let f=document.querySelector(".two")
f.style.color="yellow"
let tags = document.querySelector(".two").getElementsByTagName("a");
console.log(tags); // Assuming you want to select the first <a> element

tags[0].style.color="orange"

let dd=document.getElementsByClassName("card")
console.log(dd)
dd[2].style.background="yellow"
let cccc=document.getElementById("sp")
console.log(cccc.closest(".card"))
console.log(document.body.firstElementChild.tagName)
console.log(document.body.firstElementChild.nodeName)
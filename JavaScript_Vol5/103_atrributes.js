let iyd=document.getElementById("first")
console.log(iyd)
let cls=document.getElementsByClassName("maj")[0]
console.log(cls)
let getAttr=iyd.getAttribute("class")
console.log(getAttr)
let getA=cls.getAttribute("id")
console.log(getA)

console.log(iyd.hasAttribute("hidden"))

console.log(iyd.hasAttribute("src"))

console.log(iyd.hasAttribute("class"))

console.log(iyd.hasAttribute("id"))

console.log(iyd.hasAttribute("style"))

//console.log(iyd.setAttribute("hidden","true"))
console.log(iyd.setAttribute("class","true kai"))
//console.log(iyd.removeAttribute("class"))

console.log(iyd.dataset)
console.log(iyd.dataset.play)
console.log(iyd.dataset.minal)
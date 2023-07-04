console.log("we can change edit and remove the HTML attribute");

let id = document.getElementById("idCard");
let vb = document.getElementsByClassName("card")[0];
console.log(vb);

let getID = vb.getAttribute("id");
console.log(getID);
let classId = id.getAttribute("class");
console.log(classId);

console.log(id.hasAttribute("class"))
console.log(id.hasAttribute("id"))
console.log(id.hasAttribute("style"))
console.log(id.hasAttribute("src"))

console.log(id.setAttribute("class","true nvm"))

console.log(id.dataset)
console.log(id.dataset.kai)
console.log(id.dataset.kaikai)

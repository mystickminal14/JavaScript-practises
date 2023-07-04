let a = document.body.getElementsByTagName("div")[0];

// new element
let create = document.createElement("div");
create.innerHTML = "LOL";
a.appendChild(create)

let b=document.getElementsByClassName("name")[0]
let vvvm=document.createElement("div")
vvvm.innerHTML="<h1>I LOVE MINAL<h1>"
b.prepend(vvvm)


console.log("HTML INSERTION")
console.log("there are various ways in which we can insert html elements")

let cls=document.getElementsByClassName("card")[0]

cls.innerHTML="<H1>HEY<H1>"


//let create= document.createElement("div")
//create.innerHTML="<H1>HELLLO WORTLD</H1>"
//cls.appendChild(create)
//cls.prepend(create)
//cls.append(create)
//cls.before(create)
//cls.after(create)
 
cls.insertAdjacentHTML("beforeend","<h1>beforeend</h1>")
cls.insertAdjacentHTML("afterend","<h1>afterenf</h1>")
cls.insertAdjacentHTML("beforebegin","<h1>beforebegun</h1>")
cls.insertAdjacentHTML("afterbegin","<h1>afterbegin</h1>")
console.log(document.class)
document.getElementById("kk").className="money"
console.log(kk.classList)
kk.classList.add("blue")
kk.classList.remove("blue")
kk.classList.toggle("blue")
kk.classList.toggle("blue")
kk.classList.toggle("blue")
console.log(kk.classList.contains("blue"))

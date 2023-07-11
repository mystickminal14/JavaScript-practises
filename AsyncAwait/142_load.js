let apple= (src)=>{
    return new Promise((resolve,reject)=>{
        let a = document.createElement('img')
        a.src=src
        document.body.appendChild(a)
        a.onload=()=>{
            console.log("your program is runned")
            resolve(55)
        }
        a.onerror=()=>{
            reject(new Error('you hav a error boy'))
        }
    })
}
let sr=apple("fru.png")
sr.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})
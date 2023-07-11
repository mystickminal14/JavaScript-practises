console.log("promises helps to prevent call back hee or pyramid of doom")
let a = 4;
console.log(a ** 2)
let promise = new Promise((resolve,reject) => {
    console.log(`your promise is loading`)
    setTimeout(function () {
        console.log("great")
        resolve(true)
    }, 3000)
})
console.log(promise)
let d= 4;
console.log(d ** 2)
let promise2 = new Promise((resolve,reject) => {
    console.log(`your promise is loading`)
    setTimeout(function () {
        console.log("great")
        reject(new Error("Minal! There is an error in this code"))
    }, 3000)
})
console.log(promise2)
promise.then(value=>{
    console.log(value)
    console.log("minal you are a great person")
})
promise2.then((value)=>{
    console.log("minal try to understand there is an error in this code",value)
},(error)=>{
    console.log(error)
})
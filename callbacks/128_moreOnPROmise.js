console.log("promises ar reused to make call back easier")
console.log("promoses has two callback resolve and reject")
console.log("promose has state and result")
let resol = new Promise(function (resolve, reject) {
    console.log("Wait ! What? You are learning resolve ,")
    setTimeout(() => {
        console.log("wait a minute ypur proimsie is fulfillefd")
        resolve(true,5)
    }, 5000)
})
let rejec = new Promise(function (resolve, reject) {
    console.log("Wait ! What? You are learning reject ,")
    setTimeout(() => {
        console.log("wait a minute ypur proimsie is fulfillefdbut is again rejected")
        reject(new Error("oh boy! you are so troublesome"))
    }, 5000)

})
resol.then((gg,b)=>{
    console.log(gg,b)
})
rejec.catch((error)=>{
    console.log("you are very unlucky person, the error has occured",error)
})
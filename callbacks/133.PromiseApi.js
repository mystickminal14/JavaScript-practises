console.log("PROMISE API")

let promise1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(55)
    },5000)
})
let promise2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(55)
    },2000)
})
let promise3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject(new Error('bad guy'))
//resolve(44)
    },3000)
})

/*let all_promise=Promise.all([promise1,promise2,promise3])
all_promise.then((value)=>{
    console.log(value)
})
console.log('promise.all is a sttatic method that returns all the promises at the same time unless error is found')
let all_promise=Promise.allSettled([promise1,promise2,promise3])
all_promise.then((value)=>{
    console.log(value)
})
console.log("allsetttled , give all the value even if the error is found")

let all_promise=Promise.race([promise1,promise2,promise3])
all_promise.then((value)=>{
    console.log(value)
})
console.log("promise.ace gives first value that will be shown but when error occured it stopsa adn throws error")

let all_promise=Promise.any([promise1,promise2,promise3])
all_promise.then((value)=>{
    console.log(value)
})
console.log('it gives the fist value that shows up but even though error is occured'*/
/*
let all_promise=Promise.resolve(0)
all_promise.then((value)=>{
    console.log(value)
})
let all_promise=Promise.reject(new Error("get yourself up"))
all_promise.then((value)=>{
    console.log(value)
})
console.log("reolve and reject return the new value for all three value and shows error for three value respectively")*/
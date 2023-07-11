
let promoise=new Promise((resolve,reject)=>{
    console.log('minal is a great guy')
    setTimeout(() => {
      console.log('minal')
      resolve(4)
    },3000)
})
promoise.then((value)=>{
    let c= console.log(` you are learning minal and i am really proud of you`)
return value
}).then((value)=>{
    console.log('you are learning crazily')
    return 20
}).then((value)=>{
    console.log("minal is stupid")
    let prom=new Promise((resolve,reject)=>{
        
        console.log(`minal`)
        resolve(56)
    })
  
return prom
}).then((value)=>{
    console.log(`finally overs`)
}).catch((error) => {
    console.error(error);
  });
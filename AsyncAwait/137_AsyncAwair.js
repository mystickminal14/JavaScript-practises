 let vv= async()=>{
    let p1= new Promise((resolve,reject)=>{
        resolve('greatest day')
    })
    let p2= new Promise((resolve,reject)=>{
        resolve('greatest bb')
    })
    let p3= new Promise((resolve,reject)=>{
        resolve('greatest jb ')
    })
    let vv= await p1
    let cv=await p2
    let bub=await p3
    return[vv,cv,bub]
 }
 vv().then((value)=>{
    console.log(value)
 })
 try{
    console.log(mnia)
 }
 catch(error){
    console.log('there is an error in this code',error)
 }
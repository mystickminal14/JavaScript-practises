const one =async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error('get yourself together'))   
        },3000)
    })

}
const two=async()=>{
    try{
        let v= await one()
        console.log(v)
    }
    catch(err){
        console.log(err.name,err.message,err.stack)
    }
}
two()
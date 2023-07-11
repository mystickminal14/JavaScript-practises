try{
    
   throw new Error("minal is stupid")
}
catch(err){
   console.log(err.message)
   console.log(err.stack)
   console.log(err.name)
}
try{
    let a= prompt("enter your age")
    Number.parseInt(a)
    if(a>100){
        throw new Error("this is invalid")
    }
}
catch(err){
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
}
console.log("minalhjvhfhu")
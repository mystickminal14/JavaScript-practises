console.log("higher order array method")
let arr=[1,2,3,4,5,6]
let a=arr.map((element,index,array)=>{
    console.log(element,index ,array)
    return element+1

})
console.log(a)
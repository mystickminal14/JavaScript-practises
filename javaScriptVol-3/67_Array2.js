
console.log("array")
let arr=[`minal`,'kai',2,4]
const cv=(name,index)=>{
    return name[index]

}
for (let i=0; i<arr.length;i++){
    console.log('the given arrys include :',cv(arr,i))
}
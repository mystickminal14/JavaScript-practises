console.log('splice and slice')
let arr=[1,2,3,4,5,6]

let b=arr.splice(1,1,23,24)
console.log(arr)
console.log(b)
console.log("splice is used to remove and add new element to arrays")
console.log("it returns the deleted array")
console.log(arr.slice(1))
console.log("it creates a new array, however it nevwe moodifies new array")
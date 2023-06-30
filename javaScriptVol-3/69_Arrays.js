console.log("Array method")
let arr=[1,2,3]
let arr2=[2,5,55]
console.log(arr.join("-"))
let c= arr2.toString()
console.log(c, typeof c)

let v=arr.pop()
console.log(arr)
console.log(arr.length)
console.log(v)

console.log('pop changes the last element and alson suprsingly returns it')

let arr3=[44,55,66,77,88]
let cvv= arr3.push(5,)
console.log(arr3)
console.log("push method is another way  that affects original array")
console.log("push method helps you to add more than one element at the last of any array")
console.log("and by prinnting push method, it actually returns the new length of the array")


let arr4=[88,900,0,'minal']
let sh=arr4.shift(4)
console.log(arr4)
console.log(sh)

console.log("shift method also modifies the original array, it is useful to remove the first element of array and it also returns the  value")


let arr5=['a','b']
console.log(arr5.length)
let un= arr5.unshift(2)
console.log(un)
console.log(arr5)
console.log("unshift method is another way to modify and change the original array, it is useful ti add new elemet to the original array and by calling unshift it prints the new length of the array")


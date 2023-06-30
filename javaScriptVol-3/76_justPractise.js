let a = ['minal', 1, 3];
console.log(a.join("_"), typeof a);
let aa = a.toString();
console.log(aa, typeof aa);
console.log("As we can see, both the join and toString array methods did not change the original array; rather, they created a new string representation.");
console.log(aa.length, a.length);

let arr=[1,2,3,4,5]
let pop=arr.pop()
console.log(arr,pop)

let arr2=[2,3,4,5,6]
let r=arr2.push(16)
console.log(arr2,r)
console.log("here pop is used to remove last element of array and also return the new value. PuSH ON THE OTHER HAND ADD A NEW VALUE AT THE END OF EXISTING ARRAY . BOTH PUSH AND POP AFFECTS THE ORIGINAL ARRAY")


let arr3=['MINAL',4,5]
let s=arr3.shift()
console.log(arr3,s)
let v= arr3.unshift("kai")
console.log(arr3,v)
console.log('unshift and shift add and removes first value of an array')


let arr4=[1,2,3,4,5]
delete arr4[0]
console.log(arr4,arr4.length)
console.log(arr.concat(arr4,arr3,arr2))
console.log("delete is an operator , it removes he value from the aray but not the entire index,; concat method is used to join multpile array and they dont affect the original array, but deleye affect the originla array")

let arr5=[1,2,3,14,55,46]
function c(a,b){
    return b-a

}
console.log(arr5.sort(c))


let arr6=[4,5,6,7,7,7]
let bb=arr6.splice(2,1,2,'minal','asmi')
console.log(arr6,bb)
let arr9=[1,2,3,4]
let nn=arr9.slice(2)
console.log(nn.reverse())


console.log("delete")
let vcv=[1,2,3,4,5,6]
delete vcv[3]
console.log(vcv)
console.log(vcv.length)
console.log("array length wont be affected")
console.log("while showing output, it delets the third element index but not the entire index where empt is shown as output")

let vcv2=[3,3,2,2323,2]
let mm=vcv2.splice(2,4)
console.log(mm)
console.log(mm.length)
console.log("splice method actually channges the length of ARRAY AND IT CAN ALSO BE USED TO DELETE ARRAY INDEX")
let b='monoknfanjnf'
console.log(b.slice(2,4))

let arr=['minal','kai','bulk',4,5,6,true]
let arr2=['mystick',BigInt(200),5,6,7,8,false]
let arr3=['safn',3,3,3,3]
let con= arr.concat(arr2,arr3)
console.log(con)
console.log("concat is used to join multiple arrays and make it a new array however original array will not be changed")

let arr4=[0,4,7,1,2,0]
console.log(arr4.sort())
console.log(arr4)
let arr5=['minal','asmi',4,1]
console.log(arr5.sort())
console.log("As u can see cleary sort method is used to put proper order, alphabetically, it  changes and modifies original array.More importantly sort method doesnot give from ascending order, however we can makeit ascending order by putting compare function  ")
let com=(a,b)=>{
    return b-a
}

console.log(arr4.sort(com))
console.log(arr4.reverse())



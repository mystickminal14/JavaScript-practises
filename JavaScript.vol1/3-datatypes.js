console.log('DATATYPES')
console.log("Datatypes are simply referred as the type of value your variable is going to store")
console.log("There are two types of datatypes")
console.log("1 : Primitive")
console.log("2 : Non-Primitive")
console.log("/*---------------------------------------------*/")
/*-------------------------------------------------------------------------------*/

console.log("Primititve datatypes\n"+
"There are 7 in-built datatypes\n"
+"--Number--\n"
+"--Null--\n"
+"--Boolean--\n"
+"--BigInt--\n"
+"--Symbol--\n"
+"--String--\n"
+"--Undefined\n--")


let a=null
let b=2
let c= false
let d=BigInt(77)
let e=Symbol("This is Symbol")
let f="minal"
let g=undefined
let h
console.log(a,b,c,d,e,f,g,h)
console.log(typeof c)
console.log("/*---------------------------------------------*/")
/*-------------------------------------------------------------------------*/

console.log("Objects")
console.log("objects are non primitive datatype ")
const item={
    "a":true,
    "b":"name",
    "c":8
}
console.log(item["a"],item["b   "])
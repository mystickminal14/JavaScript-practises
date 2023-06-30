let arr=[1,2,3,4,5,6]
let b=arr.map((vv)=>{
    console.log(vv)
    return vv*2
})
console.log(b)
console.log(arr)

let arr2=['minal','asmi']
let upper=arr2.map((up)=>{
       return up.toUpperCase()
})
console.log(arr2)
console.log(upper)
let arr4 = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 35 }
  ];
  
  let extractedNames = arr4.map(function(obj) {
    return obj.name;
  });
  
  console.log(extractedNames);

  let v=[3,4,5]
  console.log("Question: How can you convert an array of Fahrenheit temperatures to Celsius using the formula (F - 32) * 5/9 using map?")
  let cv=v.map((vi)=>{
return (vi-32)* 5/9
  })
  console.log(cv)
  
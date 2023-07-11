let dog= new Promise((resolve,reject)=>{
    console.log("your promise isnot resolved yet")
    setTimeout(()=>{
        console.log("Minal is great guy")
        resolve(54)

    },2000)

})
dog.then((value)=>{
    return new Promise((resolve,reject)=>{
        console.log("minal is greates of all time")
        resolve(55)
    })
}).then((value)=>{
    console.log(value)
})

dog.then((value)=>{
    console.log(value)
})
dog.then((value)=>{
    console.log("minal is greater")
})
dog.then((kk)=>{
    console.log("minal is minal ")
})
let v= document.getElementById('kai')
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(55);
    }, );
  }).then((value) => {
    setTimeout(()=>{
        document.getElementById('kai').style.color = "gray";
        console.log(value);
    })

  });
  
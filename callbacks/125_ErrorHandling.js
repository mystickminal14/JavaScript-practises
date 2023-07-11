/*let load=(src,callback)=>{
    let image= document.createElement("img")
    image.src=src
    document.body.appendChild(image)
    image.onload=function(){
    callback(null)
    }
    image.onerror=function(){
        console.log("there is an error reloding this image")
        callback(new Error('error'))
    }
}

const err=(error)=>{
    if(error){
        console.log('error')
        return
    }else{
    console.log("minal is a great guy")
}}
load("img.png",err)*/
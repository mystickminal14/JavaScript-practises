let c= async(src)=>{
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let pg= document.createElement("img")
        pg.src=src
        document.body.appendChild(pg)
pg.onload=()=>{
    console.log('your program is runned')
}
pg.onerror=()=>{
    reject(new Error('get yourself together'))
}
    },2000)
})
}
let bb=async()=>{
    bbb=c('fru.png')
    console.log(bbb)
}
bb()
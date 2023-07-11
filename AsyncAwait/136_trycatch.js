try {
    console.log(miasnidnasindai)
} catch (nn) {
    console.log('minal', nn)
}
console.log("try and catch works on synchronous program but not in a synchronous  ")

try {
    console.log(mkosn)
    setTimeout(() => {
        try {
            console.log(minal)
        }
        catch (bb) {
            console.log('great')
        }
    })
}
catch (val) {
    console.log("mor")
}
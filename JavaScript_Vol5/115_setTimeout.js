let a = prompt("Do u want to write MinAL")
if (a == 'n') {

    let b = setTimeout(function () {
        document.write("minal")
    },2000)
} else {
    clearTimeout(b)
}
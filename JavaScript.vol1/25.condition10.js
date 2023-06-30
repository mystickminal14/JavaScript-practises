console.log("Implement a nested if statement to determine if a person is eligible for a specific discount based on their age and membership status.")
let age = prompt("provide an appropiate age")
let membership = prompt("Doyou have membership?")
Number(age)
console.log(age, typeof age)
console.log(membership, typeof membership)
if (age >= 18) {
    if (membership === "yes") {
        console.log("you arenot elligible")
    } else {
        console.log("not ellogible")
        window.alert("not elligible")
    }
} else if(age ==17) {
    let qna = window.prompt("will you get a member ship?")
    if (qna = "yes") {
        console.log("you will be elligible")
    } else {17
        console.log("not elloigible")
        window.alert("not elligible")
    }
}else{
    console.log("sorry bud")
    window.alert("not elligible")
}
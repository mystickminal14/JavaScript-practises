console.log("Random Number Generator");
let inputNum;
let count = 0;
let num = Math.floor(Math.random() * 100) + 1;

while (inputNum != num) {
    inputNum = window.prompt("Enter a number:");
    inputNum = Number.parseInt(inputNum);
    count = count + 1;

    if (inputNum === num) {
        console.log("You have successfully completed the game!");
        console.log("Your final score is:", 100 - count);
    } else if (num > inputNum && num <= 100) {
        window.alert("The number is greater.");
    } else if (num < inputNum && num > 0) {
       window.alert("The required number is smaller than the number you have provided.");
    } else {
        window.alert("Please enter a valid number.");
    }
}

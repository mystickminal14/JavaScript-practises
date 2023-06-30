console.log("Snake water gun")

let words = ["snake", "water", "gun"];
let randomWord = words[Math.floor(Math.random() * words.length)];
let user=prompt("select between snake, water and gun")
console.log(randomWord);
let match=(user,randomWord)=>{
    if(user===randomWord){
        return "draw"
    }else if(user=='snake' && randomWord=='water'|| user=='water' && randomWord=='gun'||  user=='gun' && randomWord=='sanke'){
       return "user"
    }else if(randomWord=='snake' && user=='water'|| randomWord=='water' && user=='gun'||  randomWord=='gun' && user=='sanke'){
        return "cpu"
    }
}
let result=match(user,randomWord);
document.write(`USER : ${user} <br>  CPU : ${randomWord} <br> The winner is : ${result.toUpperCase()}`)

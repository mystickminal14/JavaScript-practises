console.log("Question: How can you determine if a given year is a leap year using conditional expressions?")

console.log("nested loop")

let year=window.prompt("give a year")
if(year%4===0){
    if(year%100===0){
        if (year % 400 === 0) {
            console.log("This is a leap year");
          } else {
            console.log("This is not a leap year");
          }
        } else {
          console.log("This is a leap year");
        }
      } else {
        console.log("This is not a leap year");
      }
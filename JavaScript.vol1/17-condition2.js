console.log("Question: How can you determine if a given year is a leap year using conditional expressions?")

let year=window.prompt("Give any year?:")
year=Number(year)
console.log(year)

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log("Leap year");
  } else {
    console.log("Not a leap year");
  }

  switch(true){
    case ((year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))):
        console.log("leap year")

  }
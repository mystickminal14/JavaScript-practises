//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  
let a=5,b=6,c=7
let s=(a+b+c)/2 //semi-perimeter
area=Math.sqrt(s*((s-a)*(s-b)*(s-c)));
console.log(area)
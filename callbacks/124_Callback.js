console.log('Synchronous action initiate and run one ata time while as sychronous means a function is runned at it runs in duration')
console.log("Callback is a function which is initiated inside a function as an argument,however invoked insidde of another function")

function great(a,main){
   console.log("good afternoon"+a) 
   main(4,4);
}
const display=(apple,ball)=>{
alert("great minal you are learning")
console.log(apple+ball)
}
great(2,display)

function load(src, callback) {
    let img = document.createElement("img");
    img.src = src;
    document.body.appendChild(img);
    img.onload = callback;
    img.onerror = function() {
      console.log("error");
    };
  }
  
  function ga() {
    alert("loaded");
  }
  
  load("abjsibfb", ga);
  
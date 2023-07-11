const load = (src) => {
    console.log("You are about to run promises");
    
    return new Promise((resolve, reject) => {
      let a = document.createElement("img");
      a.src = src;
      document.body.appendChild(a);
      
      a.onload = () => {
        resolve('Your script has been loaded');
      };
      
      a.onerror = () => {
        reject('There is an error in your code');
      };
    });
  };
  
  let m1 = load('fru.png');
  
  m1.then((value) => {
    console.log(value);
    return load('fru.png')
  }).then((value)=>{
    console.log('second script loaded')
  }).catch((error) => {
    console.log(error);
  });
  
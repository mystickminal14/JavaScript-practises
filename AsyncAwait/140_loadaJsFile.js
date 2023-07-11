let script = (src) => {
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
  
  script("naskn.img")
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.log(error);
    });
  
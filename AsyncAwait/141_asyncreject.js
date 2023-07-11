let c = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Error'));
      },3000);
    });
  };
  
  let v = async () => {
    try {
      let wait = await c();
      console.log(wait);
    } catch (err) {
      console.log('error');
    }
  };
  
  v();
  
const one = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(55);
      }, 1000);
    });
  };
  
  const t = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(55);
      }, 1000);
    });
  };
  
  const v = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('kai');
      }, 1000);
    });
  };
  
  const two = async () => {
    console.time('run');
    let bb = one();
    let cc = t();
    let dd = v();
    let wait = await Promise.all([bb, cc, dd]);
    console.log(wait);
    console.timeEnd('run');
  };
  
  two();
  
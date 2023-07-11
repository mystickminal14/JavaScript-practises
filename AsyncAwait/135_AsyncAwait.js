console.log("Async and await");
console.log("async returns a promise");

async function one() {
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`first this`);
    }, 1000);
  });

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`second this`);
    }, 2000);
  });

  let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`third this`);
    }, 3000);
  });

  let kk = await p1;
  console.log("fetched " + kk);
  let vc = await p2;
  console.log("fetched " + vc);
  let bb = await p3;
  console.log("fetched " + bb);

  return [kk, vc, bb];
}

one().then((hun) => {
  console.log(hun);
});

async function two() {
  let jj = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`ll this`);
    }, 1000);
  });

  let ii = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`ll this`);
    }, 2000);
  });

  let mul = await jj;
  console.log("fetched c" + mul);
  let vpc = await ii;
  console.log("fetched c" + vpc);

  return [mul, vpc];
}

async function prime() {
  let result1 = await one();
  console.log(result1);

  let result2 = await two();
  console.log(result2);

  return [result1, result2];
}

prime();

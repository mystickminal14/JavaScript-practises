let a = document.getElementById("kai");
a.onclick = () => {
  let num1 = window.prompt("Give me the first number");
  let num2 = window.prompt("Give me the second number");
  let result = Number.parseInt(num1) * Number.parseInt(num2);
  document.write(`The first number = ${num1}<br>The second number = ${num2}<br>The product of these numbers = ${result}`);
};

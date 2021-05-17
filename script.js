// normal function
function sum(a, b) {
  return a + b;
}
// Arrow function
let sumArrow = (a, b) => a + b;

// normal function
function isPositive(number) {
  return number >= 0;
}

// Arrow function
let isPositiveArrow = (number) => number >= 0;

// normal function
function randomNumber() {
  return Math.random;
}
// Arrow function
let randomNumberArrow = () => Math.random;

//normal anonimous function
document.addEventListener("click", function () {
  console.log("click");
});

// arrow anonimous function

document.addEventListener("click", () => console.log("click"));

// Deel A: normal naar Arrow

const ikRockArrowFunctions = function () {
  console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions();

// wordt:

const ikRockArrowFunctionsArrow = () =>
  console.log("Joe, ik rock de arrow functions!");

ikRockArrowFunctionsArrow();

// Deel B: noral naar Arrow

const fivePlusSeven = function () {
  return 5 + 7;
};

console.log(fivePlusSeven());

// wordt:

const fivePlusSevenArrow = () => 5 + 7;

console.log(fivePlusSeven());

// Deel C:

const myFunction = (a, b) => a + b;

console.log(myFunction(10, 5));

// Deel D:

const addFive = (a) => a + 5;

console.log(addFive(20));

// Deel E:

const createObject = () => ({ greeting: "hoi" });

console.log(createObject());

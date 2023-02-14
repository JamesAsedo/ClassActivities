// refactor the functions below into arrow syntax
function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}
// Arrow Function
const myNumberFunction = () => ((2 ** 2 + 3) % 4) * 14;
console.log(myNumberFunction());

function greet(name) {
  return `Hello, ${name}`;
}
// Arrow
const greet = (name) => `Hello`

const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};

// function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}
// Arrow
const tripleAndHalf = (num) => {
  let triple = num * 3;
  return triple / 2;
};
console.log(tripleAndHalf(2));

// function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}
// Arrow
const sumTwoNumbers = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}

console.log(sumTwoNumbers(2, 2));

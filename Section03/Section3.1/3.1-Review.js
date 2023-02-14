// Parameters are assigned when the function is declared
function findSum(num1, num2) {
  let sum = num1 + num2;

  console.log(`This is the sum: ${sum}`);
  return sum;
}

//This is a function invocation
findSum();

// a function with 4 parameters, param4 has a default value
function myFunction(param1, param2, param3, param4 = "a") {
  // logging each param
  console.log(param1, param2);
  console.log(param3, param4);
}

// passing in only 1 argument to our function
myFunction(2, "two");
// prints:
// 2 undefined
//undefined a

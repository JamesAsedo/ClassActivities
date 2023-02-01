// wrap the code below in a function called "addNumbersFrom1To100" and return the total
// ! do not use console.log inside your function

function addNumbersFrom1To100() {
  let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}
  return total;
}
// invoke the function and console.log its value
console.log(addNumbersFrom1To100());
// try to print the variable "total" outside the function
// ? what do you expect ? you can't because it's a child scope of addNumbersFrom1To100

// examine the code below,
// ? which console.log statement will not print when you invoke the parentAndChildScope function ?
function childScope(param) {
  const childVariable = "I am in the child's scope";
  console.log("Child Scope, Parent Variable:", param);    // yes will print
  console.log("Child Scope, Child Variable:", childVariable);   // yes will print
}

function parentAndChildScope() {
  const parentVariable = "I am in the parent's scope";
  childScope(parentVariable);
  console.log("Parent Scope, Parent Variable:", parentVariable);   // yes will print
  console.log("Parent Scope, Child Variable:", childVariable);   // no, will not print bc it is outside of parent scope
}

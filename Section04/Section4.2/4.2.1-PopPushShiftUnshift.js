const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
const removeNumberOne = nums.pop();
const removeNumberTwo = nums.pop();

// remove each of the first two items with shift(), saving each item to a variable
const removeFrontItem1 = nums.shift();
const removeFrontItem2 = nums.shift();
// use push and unshift to add the variables back to the array in numerical order, 0-6


console.log(removeNumberOne); //prints 0
console.log(removeNumberTwo);  //prints 1

console.log(removeFrontItem1); //prints 6
console.log(removeFrontItem2); //prints 5
console.log(nums); //prints 4

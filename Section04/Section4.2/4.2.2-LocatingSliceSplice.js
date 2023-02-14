const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
arr.indexOf("a");
arr.indexOf("b");
arr.indexOf("c");
// find the last index of "a", "b", and "c"
arr.lastIndexOf("a");
arr.lastIndexOf("b");
arr.lastIndexOf("c");
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicates(array, duplicatedValues){
  let firstInstance = array.indexOf(duplicatedValues);
  let lastInstance = array.lastIndexOf(duplicatedValues);

  while (firstInstance !== lastInstance) {
    array.splice(lastInstance, 1);
    lastInstance = array.lastIndexOf(duplicatedValues);
  };

  return array;
}

let singleAList = removeDuplicates(arr, "a");
console.log(singleAList);
let singleB = removeDuplicates(arr, "b");
console.log(singleB);
let singleC = removeDuplicates(arr, "c");
console.log(singleC);

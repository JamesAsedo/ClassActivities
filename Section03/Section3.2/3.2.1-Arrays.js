// create an Array using an Array literal
let arr = ["mom", "dad", "brother", "sister"];
// access the 1st item in the Array
console.log(arr[0]);
// access the last item in the Array
console.log(arr[3]);
// print the length of the Array
console.log(arr.length);
// use the length property to access the last item in the Array
console.log(arr[arr.length - 1]);
// with for...of, loop over the Array, modify the value and add to a different Array
for (let arrs of arr) {
  arr.push("baby");
  console.log(arrs);
}

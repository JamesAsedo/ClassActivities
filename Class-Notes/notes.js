// Create the unordered list element
// var ul = document.createElement("ul");

// Create an array of list items
// var listItems = ["Item 1", "Item 2"];

// Loop through the list items array
// for (var i = 0; i < listItems.length; i++) {
//   Create a list item
//   var li = document.createElement("li");

//   Set the text content of the list item
//   li.textContent = listItems[i];

//   Append the list item to the unordered list
//   ul.appendChild(li);
// }

// Feb 6
let someArray = [1, "b", "3", 4];

someArray.forEach((curr, i, arr) => {
  console.log("current value in array", curr);
  console.log("index of value in array", i);
  console.log("array that value is in", arr);
});
// current value in array 1
// index of value in array 0
// array that value is in (4) [1, 'b', '3', 4]
// current value in array b
// index of value in array 1
// array that value is in (4) [1, 'b', '3', 4]
// current value in array 3
// index of value in array 2
// array that value is in (4) [1, 'b', '3', 4]
// current value in array 4
// index of value in array 3
// array that value is in (4) [1, 'b', '3', 4]
// undefined


let arr = [1, 2, 3, 4];

let newArr = arr.map((val))


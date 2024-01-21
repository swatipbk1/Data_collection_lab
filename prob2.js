/*Store your results in a two-dimensional array.
Each row should be its own array, with individual entries for each column.
Each row should be stored in a parent array, with the heading row located at index 0.
Cache this two-dimensional array in a variable for later use.
pls enter the values as ["ID", "Name", "Occupation", "Age"] ["42", "Bruce", "Knight", "41"],["57", "Bob", "Fry Cook","19"],["63", "Blaine", "Quiz Master", "58"],["98", "Bill", "Doctor’s Assistant", "26"]] as user input on prompt.*/

let arr = [];
let rows = 5;
 let columns = 4;

let value = 0;
for (let i = 0; i < rows; i++) {
  arr[i] = [];
  for (let j = 0; j < columns; j++) {
    arr[i][j] = prompt("enter the values");
  } }
 console.log(arr);

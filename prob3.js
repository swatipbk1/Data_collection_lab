/*For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.*/

const myArray=[["42", "Bruce", "Knight", "41"],["57", "Bob", "Fry Cook","19"],["63", "Blaine", "Quiz Master", "58"],["98", "Bill", "Doctor’s Assistant", "26"]]

const output = myArray.map(([ID, name,occupation, age,]) => ({ ID, name,occupation, age}));
console.log(output);
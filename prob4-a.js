/*Remove the last element from the sorted array.
Insert the following object at index 1:
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }*/

  let employee =[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }];

    employee.splice(1,0,[ "id: 48", "name: Barry", "occupation: Runner", "age: 25"]);// add 1 element at 0,1
    console.log(employee);
    employee.splice(4,0,["id: 7", "name: Bilbo", "occupation: None", "age: 111"]);
employee.pop();


let arr = [{ id: "42", name: "Bruce", occupation: "Knight", age: 41 },
 { id: "48", name: "Barry", occupation: "Runner", age: 25 }, 
 { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 }, 
  { id: "7", name: "Bilbo", occupation: "None", age: 111 }];

let sum = 0;
let res = arr.map((el)=>{
    sum +=el.age
})
 
let ans = sum/arr.length;
console.log(ans);
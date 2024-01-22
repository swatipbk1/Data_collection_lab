/*Coverting 2D arrays back to CSV */
let arr=[
["ID", "Name", "Occupation", "Age"],
["42", "Bruce", "Knight", "41"],
["57", "Bob", "Fry Cook","19"],
["63", "Blaine", "Quiz Master", "58"],
["98", "Bill", "Doctor’s Assistant", "26"]
];

let arp=arr.flat();

let finalstr = arp.join(",");
console.log(finalstr);
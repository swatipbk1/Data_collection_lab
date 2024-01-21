/*Redo Fizz-Buzz program with arrays*/

let arr = [];   
for (let i = 1; i <= 100; i++) {
   arr[i] = i;
}
console.log(arr);
let i=1;
for(let val of arr){
   let checkForThree = val % 3;
   let checkForFive = val % 5
    // if the number is divisible by both 3 and 5, then print FizzBuzz
 if ( (checkForThree == 0) && (checkForFive == 0) ) 
  console.log( `${val} FizzBuzz`);
 
//   // if the number is divisible by 3, then print Fizz
  else if (checkForThree == 0)
  console.log( `${val} Fizz`);
 
//   // if the number is divisible by 5, then print Buzz
 else if (checkForFive == 0)
    console.log( `${val} Buzz`);
 
//   // otherwise just print the number
 else
  console.log( val );
}
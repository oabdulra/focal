

//sliced off the first 2 elements in the array
const args = process.argv.slice(2);

//delcared a variable to hold the sum of numbers
let total = 0;

//for loop goes through the arugments presented and adds the numbers together
for (const element in args) {
  total += Number(args[element]);
}

//outputs for both the array and the total sum
console.log(args);

console.log(total);
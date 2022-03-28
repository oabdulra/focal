//declaring a variable to get user input
const userInput = process.argv;
//slicing off the first 2 elements of the array to get the proper value we need
const numOfDice = userInput.slice(2); 
//declaring an empty array to hold all of the rolls q 
const diceRolls = [];

//loops and adds dice to the array that was declared earlier
for (let i = 0 ; i < numOfDice ; i ++ ) {

  diceRolls[i] = Math.floor(Math.random() * 6 + 1);

}

console.log(`Rolled ${numOfDice} dice: ${diceRolls.join(", ")}`);
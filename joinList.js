/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take 
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

const joinList = function(arr) { 

  let arrToString = "";

  for (let i =  0 ; i < arr.length ; i++) {

    if(i === arr.length - 1) {
      arrToString += arr[i].toString() + "";
    }
    else {
      arrToString += arr[i].toString() + ", ";
    }
  }

  return arrToString;
}

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);

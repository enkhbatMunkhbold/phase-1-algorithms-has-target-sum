// function hasTargetSum(array, target) {
//   for(let i = 0; i < array.length; i++) {
//     let difference = Math.abs(target - array[i]) 
//     for(let j = i + 1; j < array.length; j++) {
//       if(array[j] === difference) {
//         return true
//       }
//     }
//   }
//   return false
// }

const hasTargetSum = (array, target) => {
  let seenNumbers = {}
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i]
    if(seenNumbers[complement]) return true
    seenNumbers[array[i]] = true
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  isTherePairAddend = fales // O(1)
  for loop //O(n)
  let difference = Math.abs(target - array[i])  // O(1)
  for loop  //O(n)
  if condition //O(1)
  O(1) + O(n) + O(1) + O(n) + O(1) = O(2n + 3) => O(n)
*/

/* 
  Add your pseudocode here
  thereIsPairAddend flag is false
  loop through array, subtract first element from target
  search rest of array for difference
  if there is difference then thereIsPairAddend is true
  else subtract second number from target and search rest array.
*/

/*
  Add written explanation of your solution here
  loop through array, by starting first number and subtract from the target.
  search for second addend through rest array.
  when find it, return true, else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;

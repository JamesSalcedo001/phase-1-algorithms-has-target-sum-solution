function hasTargetSum(array, target) {
  const seenNumbers = new Set();
  for (const num of array) {
    const complement = target - num;
    if (seenNumbers.has(complement)) return true;
    seenNumbers.add(num);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  0(n)
*/

/* 
  Add your pseudocode here
  I can create an object to track all the numbers seen
  loop through all the numbers
  for every number, check for a complement
  check the keys in the created obj and see if any are that complement
  if yes, return true
  save the number to check for other numbers that work
  if loop through all without returning true, return false
 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;

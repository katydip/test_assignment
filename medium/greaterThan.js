// 03 | greaterThan
//
// Write a function called greaterThan that takes two parameters and returns true if the second parameter is greater than the first. Otherwise the function should return false.
//
// greaterThan(5, 6); // returns true
// greaterThan(4, 1); // returns false

function greaterThan(a, b){
  if (a < b){
    return(true);
  }
  return false;
}

module.exports = greaterThan;

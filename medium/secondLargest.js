
function secondLargest(potato){

  var biggest = Math.max.apply(null, potato);
  potato.splice(potato.indexOf(biggest));
  return Math.max.apply(null, potato);

}

module.exports = secondLargest;

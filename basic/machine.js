

function machine(amount){
  var howmany20s = parseInt(amount / 20);
  var remainder20s = amount%20;
  var howmany10s = parseInt(remainder20s / 10);
  var remainder10s = remainder20s%10;
  var howmany5s = parseInt(remainder10s / 5);
  var remainder5s = remainder10s%5;
  var howmany1s = parseInt(remainder5s / 1);

  return [ howmany20s, howmany10s, howmany5s, howmany1s ];

}

module.exports = machine;

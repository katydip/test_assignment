var palindrome = require('../palindrome');
var chai = require('chai');
var expect = chai.expect;

describe('palindrome()', function() {
    context('when word is katy', function() {
      it('should return ytak', function() {
          var word = "katy";
      expect(palindrome(word)).to.equal(false);
      });
    });
    context('when word is racecar', function() {
      it('should return racecar', function() {
          var word = "racecar";
      expect(palindrome(word)).to.equal(true);
      });
    });
  });

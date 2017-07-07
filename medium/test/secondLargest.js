  var secondLargest = require('../secondLargest');
  var chai = require('chai');
  var expect = chai.expect;

  describe('secondLargest()', function() {
      context('when the array is [40, 130, 105, 215, 44, 75]', function() {
        it('the second largest number is 130', function() {
          var array = [40, 130, 105, 215, 44, 75];
          expect(secondLargest(array)).to.equal(130);
        });
      });
  });

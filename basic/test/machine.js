// http://chaijs.com/plugins/chai-arrays/
var machine = require('../machine');
var chai = require('chai');
var expect = chai.expect;
var assertArrays = require('chai-arrays');
chai.use(assertArrays);

describe('machine()', function() {
    context('when amount of money is 67', function() {
      it('should return [3 ,0, 1, 2]', function() {
          var amount = 67;

      expect(machine(amount)).to.be.equalTo([ 3, 0, 1, 2 ]);
      });
    });
  });

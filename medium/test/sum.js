var sum = require('../sum');
var chai = require('chai');
var expect = chai.expect;

describe('sum()', function() {
    context('the sum of 5 and 9', function() {
      it('equals 14', function() {

      expect(sum(5,9)).to.equal(14);
      });
    });
    context('the sum of 5 and 4', function() {
      it('equals 9', function() {

      expect(sum(5,4)).to.equal(9);
      });
    });

  });

var greaterThan = require('../greaterThan');
var chai = require('chai');
var expect = chai.expect;

describe('greaterThan()', function() {
    context('if second number is greater than first number', function() {
      it('returns true', function() {
      expect(greaterThan(5,9)).to.equal(true);
      });
    });
    context('if second number is greater than first number', function() {
      it('returns true', function() {
      expect(greaterThan(5,2)).to.equal(false);
      });
    });


  });

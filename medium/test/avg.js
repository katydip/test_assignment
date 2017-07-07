var average = require('../avg');
var chai = require('chai');
var expect = chai.expect;

describe('average()', function() {
    context('the average of 1, 5, and 9', function() {
      it('equals 5', function() {

      expect(average(1,5,9)).to.equal(5);
      });
    });
    context('the average of 4, 4, and 4', function() {
      it('equals 4', function() {

      expect(average(4, 4 ,4)).to.equal(4);
      });
    });
    context('the average of 10, 4, and 1', function() {
      it('equals 5', function() {

      expect(average(10, 4, 1)).to.equal(5);
      });
    });

  });

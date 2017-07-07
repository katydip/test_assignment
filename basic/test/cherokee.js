var population = require('../cherokee');
var chai = require('chai');
var expect = chai.expect;

describe('population()', function() {
    context('when starting pop is 300, birthRate is 1 and weeks is 5', function() {
      it('should return 1650', function() {
          var startingPopulation = 300;
          var birthRate = 0.1;
          var numberOfWeeks = 5;
      expect(population(startingPopulation, birthRate, numberOfWeeks)).to.equal(1650);
      });
    });
  });

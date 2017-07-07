//erics

var tallestMountain = require('../mountain');
var chai = require('chai');
var expect = chai.expect;

describe('tallestMountain()', function() {
    context('when mount heights are [1,2,3]', function() {
      it('returns 3 as highest mountain', function() {

        var mountain = tallestMountain([1,2,3]);
        expect(mountain).to.equal(3);
      });
    });
  });

  describe('tallestMountain()', function() {
      context('when mount heights are [4,5,6]', function() {
        it('returns 6 as highest mountain', function() {

          var mountain = tallestMountain([4,5,6]);
          expect(mountain).to.equal(6);
        });
      });
    });

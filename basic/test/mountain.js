var tallestMountain = require('../mountain');
var chai = require('chai');
var expect = chai.expect;

describe('tallestMountain()', function() {
    context('when mount heights are [1979, 20310, 6288, 14417, 13922, 3560]', function() {
      it('returns 20310 as highest mountain', function() {

        var mountain = tallestMountain([1979, 20310, 6288, 14417, 13922, 3560]);
        expect(mountain).to.equal(20310);
      });
    });
  });

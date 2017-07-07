// http://chaijs.com/plugins/chai-arrays/
var containsVowel = require('../containsVowel');
var chai = require('chai');
var expect = chai.expect;
var assertArrays = require('chai-arrays');
chai.use(assertArrays);

describe('containsVowel()', function() {
      context('the word potato contains a vowel a, e, i, o, or u', function() {
        it('is true', function() {
            var word = "potato";
            expect(containsVowel(word)).to.be.containingAnyOf(['a', 'e', 'i', 'o', 'u']);
        });
      });
      context('the word rhythms contains a vowel a, e, i, o, or u', function() {
        it('should return false', function() {
            var word = "rhythmsi";
            expect(containsVowel(word)).to.be.containingAnyOf(['a', 'e', 'i', 'o', 'u']);
        });
      });
    });

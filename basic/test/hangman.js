var wordletters = require('../hangman');
var chai = require('chai');
var expect = chai.expect;

describe('wordletters()', function() {
    context('hangman word is javascript and letter is a', function() {
      it('it should return 2 as', function() {
          var word = "javascript";
          var letter = "a";

      expect(wordletters(word, letter)).to.equal(2);
      });
    });
  });

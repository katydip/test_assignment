function palindrome(word){
  if ((word.split("").reverse().join("")) == word){
    return true;
  }
  return false;
};

module.exports = palindrome;

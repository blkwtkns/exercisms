'use strict';
//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
//
// YOUR CODE GOES HERE
//

  let umlauts = {
    'Ä': 'A',
    'ä': 'a',
    'Ü': 'U',
    'ü': 'u'
  }; 

  let newStr = input;

  Object.keys(umlauts).forEach(function(ele){
    newStr = newStr.replace(ele, umlauts[ele]);
  })

  let alphas = newStr.replace(/[^a-z]/gi, '');

  if(alphas.length > 0 && alphas.split('').every(function(ele){
      return ele === ele.toUpperCase();
  })){
    return 'Whoa, chill out!';
  }

  if(input === '' || input.split('').every(function(ele){
    return ele === ' ';
  })){
    return 'Fine. Be that way!';
  }

  if(input[input.length - 1] === '?'){
    return 'Sure.'
  } else {
    return 'Whatever.'
  }
  
};

module.exports = Bob;

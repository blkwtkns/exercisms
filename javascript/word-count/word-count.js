'use strict';

let Words = function() {};

Words.prototype.count = function(words){
  let string = words.replace(/(\t|\n)/gm," ").replace(/\s\s+/g, ' ').trim();
  let wordObj = {};
  wordObj.constructor = 0;

  string.split(' ').forEach(function(ele){
    if(wordObj[ele.toLowerCase()]){
      wordObj[ele.toLowerCase()]++;
    }else{
      wordObj[ele.toLowerCase()] = 1;
    }
  });

  return wordObj;
}

module.exports = Words;
